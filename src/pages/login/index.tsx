import type { NextPage } from 'next'
import styles from './index.module.scss'
import Logo from '@components/atoms/Logo'
import Text from '@components/atoms/Text'
import IconButton from '@components/molecules/IconButton'
import Panel from '@components/atoms/Panel'
import { useForm } from 'react-hook-form'
import Input from '@components/molecules/Input'
import Link from '@components/atoms/Link'
import Router from 'next/router'
import { useContext, useState } from 'react'
import { AuthContext, SignInData } from '@contexts/AuthContextData'
import ErrorMessage from '@components/atoms/ErrorMessage'
import PageTitle from '@components/molecules/PageTitle'
import { getUserByUid } from '../../services/users'

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInData>()
  const { signIn, error: authError, setUser } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const onLogin = handleSubmit(async (data) => {
    setLoading(true)
    try {
      const { uid } = await signIn(data)
      const user = await getUserByUid(uid)

      setUser(user)
      Router.push('/menu')
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  })

  return (
    <div className={styles.container}>
      <div className={'logo'}>
        <Logo large />
      </div>
      <Panel>
        <form onSubmit={onLogin}>
          <div className={'panel'}>
            <PageTitle>Sign in to your account</PageTitle>
            <div className={'form'}>
              <Input
                label={'Email Address'}
                type={'email'}
                name={'email'}
                icon={'envelope'}
                register={register}
                validation={{ required: 'The email is required!' }}
              />
              {errors.email && (
                <ErrorMessage align={'left'}>
                  {errors.email?.message}
                </ErrorMessage>
              )}
              <Input
                label={'Password'}
                type={'password'}
                name={'password'}
                icon={'lock'}
                register={register}
                validation={{ required: 'The password is required!' }}
              />
              {errors.password && (
                <ErrorMessage align={'left'}>
                  {errors.password?.message}
                </ErrorMessage>
              )}
            </div>
            <div className={'actions'}>
              <IconButton
                loading={loading}
                type={'submit'}
                icon={'sign-in-alt'}
                long
                important
              >
                Sign in
              </IconButton>
            </div>
            <ErrorMessage error={authError} />
          </div>
        </form>
      </Panel>
      <div className={'register'}>
        <Text>Don&apos;t have a account?</Text>
        <Link href={'/register'}>Sign up and have fun</Link>
      </div>
    </div>
  )
}

export default Login
