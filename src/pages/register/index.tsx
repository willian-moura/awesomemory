import type { NextPage } from 'next'
import styles from './index.module.scss'
import Logo from '@components/atoms/Logo'
import Text from '@components/atoms/Text'
import IconButton from '@components/molecules/IconButton'
import Panel from '@components/atoms/Panel'
import { useForm } from 'react-hook-form'
import Input from '@components/molecules/Input'
import Link from '@components/atoms/Link'
import { useContext } from 'react'
import { AuthContext, SignUpData } from '@contexts/AuthContextData'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '@graphql/mutations'
import Router from 'next/router'
import ErrorMessage from '@components/atoms/ErrorMessage'
import PageTitle from '@components/molecules/PageTitle'

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm<SignUpData>()
  const { signUp, error } = useContext(AuthContext)
  const [createUser] = useMutation(CREATE_USER)

  const onRegister = handleSubmit(async (data) => {
    await signUp(data)
      .then((user) => {
        createUser({ variables: { userId: user.uid, userEmail: user.email } })
      })
      .then(() => Router.push('/menu'))
      .catch((e) => console.error(e))
  })

  return (
    <div className={styles.container}>
      <Panel>
        <form onSubmit={onRegister}>
          <div className={'panel'}>
            <PageTitle>Create Your Account</PageTitle>
            <div className={'form'}>
              <Input
                label={'User Name'}
                name={'userName'}
                icon={'user'}
                placeholder={'e.g. FrenchieAndKimikoS2'}
                register={register}
              />
              <Input
                label={'Email Address'}
                type={'email'}
                name={'email'}
                icon={'envelope'}
                placeholder={'e.g. frenc@theboys.com'}
                register={register}
              />
              <Input
                label={'Password'}
                type={'password'}
                name={'password'}
                autoComplete={'new-password'}
                icon={'lock'}
                register={register}
              />
              <Input
                label={'Confirm Password'}
                type={'password'}
                name={'confirmPassword'}
                autoComplete={'new-password'}
                icon={'lock'}
                register={register}
              />
            </div>
            <div className={'actions'}>
              <IconButton type={'submit'} icon={'sign-in-alt'} long important>
                Sign up
              </IconButton>
            </div>
            <ErrorMessage error={error} />
          </div>
        </form>
      </Panel>
    </div>
  )
}

export default Register
