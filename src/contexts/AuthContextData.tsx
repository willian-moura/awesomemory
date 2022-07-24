import { createContext, ReactNode, useState } from 'react'
import { getApps, initializeApp } from '@firebase/app'
import { getAuth } from '@firebase/auth'

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
  signUp: (data: SignUpData) => void
  signIn: (data: SignInData) => void
  signOut: () => void
}

type SignUpData = {
  name: string
  phone: string
  email: string
  password: string
}

type SignInData = {
  email: string
  password: string
}

export const AuthContext = createContext({} as AuthContextData)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
