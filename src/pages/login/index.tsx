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
import { client } from '@graphql/apollo'
import { GET_USERS_BY_UID } from '@graphql/queries'

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<SignInData>()
  const { signIn, error: authError, setUser } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const onLogin = handleSubmit(async (data) => {
    setLoading(true)
    try {
      const user = await signIn(data)
      const res = await client.query({
        query: GET_USERS_BY_UID,
        variables: {
          uid: user.uid
        }
      })
      setUser(res?.data?.users[0])
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
        <Text>Don't have a account?</Text>
        <Link href={'/register'}>Sign up and have fun</Link>
      </div>
    </div>
  )
}

export default Login
