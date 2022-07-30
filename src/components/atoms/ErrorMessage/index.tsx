import styles from './index.module.scss'
import { Props } from '../../../types/globals'
import { useMemo } from 'react'

interface ErrorMessageProps extends Props {
  error?: Error
}

export default function ErrorMessage({ children, error }: ErrorMessageProps) {
  const errorConfig = useMemo(() => {
    switch (error?.code) {
      case 'auth/wrong-password':
        return {
          message: 'The email/password is wrong! Please, try again.'
        }
      case 'auth/invalid-email':
        return {
          message: 'Please, insert a valid email.'
        }
    }
  }, [error])

  return error ? (
    <div className={styles.container}>
      <span className={'message'}>{errorConfig?.message}</span>
    </div>
  ) : (
    <></>
  )
}
