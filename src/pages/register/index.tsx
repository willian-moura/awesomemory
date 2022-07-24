import type { NextPage } from 'next'
import styles from './index.module.scss'
import Logo from '@components/atoms/Logo'
import Text from '@components/atoms/Text'
import IconButton from '@components/molecules/IconButton'
import Panel from '@components/atoms/Panel'
import { useForm } from 'react-hook-form'
import Input from '@components/molecules/Input'
import Link from '@components/atoms/Link'

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm()

  const onRegister = handleSubmit((data) => {
    console.log(JSON.stringify(data))
  })

  return (
    <div className={styles.container}>
      <div className={'logo'}>
        <Logo large />
      </div>
      <Panel>
        <form onSubmit={onRegister}>
          <div className={'panel'}>
            <Text title>Create Your Account</Text>
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
          </div>
        </form>
      </Panel>
    </div>
  )
}

export default Register
