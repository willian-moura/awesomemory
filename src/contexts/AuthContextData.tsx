import { createContext, ReactNode, useState } from 'react'
import { getApps, initializeApp } from '@firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from '@firebase/auth'

if (!getApps().length) {
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SANDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  })
}

const auth = getAuth()

type AuthContextData = {
  user: any
  loading: boolean
  error: Error
  setError: (e: Error) => void
  setUser: (user: any) => void
  signUp: (data: SignUpData) => Promise<any>
  signIn: (data: SignInData) => Promise<any>
  signOut: () => void
}

export type SignUpData = {
  userName: string
  email: string
  password: string
  confirmPassword: string
}

export type SignInData = {
  email: string
  password: string
}

export const AuthContext = createContext({} as AuthContextData)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const signUp = async (data: SignUpData) => {
    clearError()
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
      return signIn({ email: data.email, password: data.password })
    } catch (e) {
      setError(e)
      throw e
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (data: SignInData) => {
    clearError()
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      const user = userCredential.user

      if (typeof window !== 'undefined') {
        const { uid, email } = user
        localStorage.setItem(
          '@awesomemory:user',
          JSON.stringify({ uid, email })
        )
      }
      return user
    } catch (e) {
      setError(e)
      throw e
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      const response = await auth.signOut()

      setUser(null)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('@awesomemory:user')
      }
      return response
    } catch (e) {
      return e
    }
  }

  const clearError = () => {
    setError(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        error,
        setError,
        signUp,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
