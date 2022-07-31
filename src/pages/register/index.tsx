import type { NextPage } from 'next'
import styles from './index.module.scss'
import IconButton from '@components/molecules/IconButton'
import Panel from '@components/atoms/Panel'
import { useForm } from 'react-hook-form'
import Input from '@components/molecules/Input'
import { useContext, useRef, useState } from 'react'
import { AuthContext, SignUpData } from '@contexts/AuthContextData'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '@graphql/mutations'
import Router from 'next/router'
import ErrorMessage from '@components/atoms/ErrorMessage'
import PageTitle from '@components/molecules/PageTitle'

const Register: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm<SignUpData>()
  const { signUp, error, setUser, setError } = useContext(AuthContext)
  const [createUser] = useMutation(CREATE_USER)
  const [loading, setLoading] = useState(false)

  const password = useRef({})
  password.current = watch('password', '')

  const onRegister = handleSubmit(async (data) => {
    setLoading(true)
    try {
      const user = await signUp(data)
      const res = await createUser({
        variables: {
          userId: user.uid,
          userEmail: user.email,
          userName: data.userName
        }
      })
      setUser(res?.data?.insert_users?.returning[0])
      Router.push('/menu')
    } catch (e) {
      console.error(e)
      setError(e as Error)
    } finally {
      setLoading(false)
    }
  })

  return (
    <div className={styles.container}>
      <Panel>
        <form onSubmit={onRegister} autoComplete='off'>
          <input type='hidden' value='prayer' />
          <div className={'panel'}>
            <PageTitle>Create Your Account</PageTitle>
            <div className={'form'}>
              <Input
                label={'User Name'}
                name={'userName'}
                icon={'user'}
                placeholder={'e.g. FrenchieAndKimikoS2'}
                register={register}
                validation={{ required: 'Required field!' }}
              />
              {errors.userName?.type === 'required' && (
                <ErrorMessage align={'left'}>
                  {errors.userName?.message}
                </ErrorMessage>
              )}
              <Input
                label={'Email Address'}
                type={'email'}
                name={'email'}
                icon={'envelope'}
                placeholder={'e.g. frenc@theboys.com'}
                register={register}
                validation={{ required: 'Required field!' }}
              />
              {errors.email?.type === 'required' && (
                <ErrorMessage align={'left'}>
                  {errors.email.message}
                </ErrorMessage>
              )}
              <Input
                label={'Password'}
                type={'password'}
                name={'password'}
                icon={'lock'}
                register={register}
                validation={{
                  required: 'Required field!',
                  minLength: {
                    value: 8,
                    message: 'The password must have at least 8 characters'
                  }
                }}
              />
              {errors.password && (
                <ErrorMessage align={'left'}>
                  {errors.password.message}
                </ErrorMessage>
              )}
              <Input
                label={'Confirm Password'}
                type={'password'}
                name={'confirmPassword'}
                icon={'lock'}
                register={register}
                validation={{
                  validate: (v) =>
                    v === password.current || 'The passwords do not match'
                }}
              />
              {errors.confirmPassword && (
                <ErrorMessage align={'left'}>
                  {errors.confirmPassword.message}
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
