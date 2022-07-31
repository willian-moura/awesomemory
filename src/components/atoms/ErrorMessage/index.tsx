import styles from './index.module.scss'
import { Props } from '../../../types/globals'
import { useMemo } from 'react'

interface ErrorMessageProps extends Props {
  error?: Error | any
  align?: 'left' | 'center' | 'right'
}

export default function ErrorMessage({
  children,
  error,
  align = 'center'
}: ErrorMessageProps) {
  const errorConfig = useMemo(() => {
    if (error?.graphQLErrors) {
      if (
        error?.message.includes(
          'duplicate key value violates unique constraint "users_userName_key"'
        )
      ) {
        return {
          message: 'This user name is already in use. Please, try another.'
        }
      }
    }

    switch (error?.code) {
      case 'auth/user-not-found':
        return {
          message: 'The email/password is wrong! Please, try again.'
        }
      case 'auth/wrong-password':
        return {
          message: 'The email/password is wrong! Please, try again.'
        }
      case 'auth/invalid-email':
        return {
          message: 'Please, insert a valid email.'
        }
      case 'auth/email-already-in-use':
        return {
          message: 'This email is already registered.'
        }
    }
  }, [error])

  if (children) {
    return (
      <div className={styles.container} style={{ textAlign: align }}>
        {children}
      </div>
    )
  }

  return error ? (
    <div className={styles.container} style={{ textAlign: align }}>
      <span className={'message'}>{errorConfig?.message}</span>
    </div>
  ) : (
    <></>
  )
}
