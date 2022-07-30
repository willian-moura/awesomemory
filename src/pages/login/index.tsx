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
import { useContext } from 'react'
import { AuthContext, SignInData } from '@contexts/AuthContextData'
import ErrorMessage from '@components/atoms/ErrorMessage'
import PageTitle from '@components/molecules/PageTitle'

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<SignInData>()
  const { signIn, error } = useContext(AuthContext)

  const onLogin = handleSubmit(async (data) => {
    await signIn(data)
      .then(() => {
        Router.push('/menu')
      })
      .catch((e) => console.error(e))
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
              />
              <Input
                label={'Password'}
                type={'password'}
                name={'password'}
                icon={'lock'}
                register={register}
              />
            </div>
            <div className={'actions'}>
              <IconButton type={'submit'} icon={'sign-in-alt'} long important>
                Sign in
              </IconButton>
            </div>
            <ErrorMessage error={error} />
          </div>
        </form>
      </Panel>
      <div className={'register'}>
        <Text>Don't have a account?</Text>
        <Link href={'/register'}>Sign up and have fun</Link>
      </div>
    </div>
  )
}

export default Login
