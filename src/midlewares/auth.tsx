import styles from './index.module.scss'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@contexts/AuthContextData'
import { LOCAL_STORAGE_USER } from '../constants/globals'
import Router, { useRouter } from 'next/router'
import { getUserByUid } from '../services/users'
import Icon from '@components/atoms/Icon'
import { Props } from '../types/globals'

export default function AuthMiddleware({ children }: Props) {
  const { user, setUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    /*if (user?.id) {
      setLoading(false)
      return
    }

    const storedUser = localStorage.getItem(LOCAL_STORAGE_USER)
    if (!storedUser) {
      setLoading(false)
      goToHome()
      return
    }

    if (storedUser) {
      getUserByUid(JSON.parse(storedUser)?.uid)
        .then((user) => {
          setUser(user)
          Router.push('/menu')
        })
        .catch((e) => {
          console.log(e)
          goToHome()
        })
        .finally(() => setLoading(false))
    }*/
  }, [])

  const goToHome = () => {
    if (router.route !== '/') {
      Router.push('/')
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {loading ? <Icon icon={'circle-notch'} spin /> : children}
    </div>
  )
}
