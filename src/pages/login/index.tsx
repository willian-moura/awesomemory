import type { NextPage } from 'next'
import styles from './index.module.scss'
import Logo from '@components/atoms/Logo'
import Text from '@components/atoms/Text'
import IconButton from '@components/molecules/IconButton'
import Panel from '@components/atoms/Panel'
import { useForm } from 'react-hook-form'
import Input from '@components/molecules/Input'
import Link from '@components/atoms/Link'

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm()

  const onLogin = handleSubmit((data) => {
    console.log(JSON.stringify(data))
  })

  return (
    <div className={styles.container}>
      <div className={'logo'}>
        <Logo large />
      </div>
      <Panel>
        <form onSubmit={onLogin}>
          <div className={'panel'}>
            <Text title>Sign in to your account</Text>
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
