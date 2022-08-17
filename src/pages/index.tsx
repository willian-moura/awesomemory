import type { NextPage } from 'next'
import styles from './index.module.scss'
import Logo from '@components/atoms/Logo'
import Text from '@components/atoms/Text'
import IconButton from '@components/molecules/IconButton'
import Panel from '@components/atoms/Panel'
import Link from '@components/atoms/Link'
import Router from 'next/router'
import AuthMiddleware from '../midlewares/auth'

const Home: NextPage = () => {
  const onLogin = () => {
    Router.push('/login')
  }

  return (
    <AuthMiddleware>
      <div className={styles.container}>
        <Panel>
          <div className={'panel'}>
            <div className={'logo'}>
              <Logo large />
            </div>
            <Text>The Font Awesome Icons memory game</Text>
            <IconButton icon={'sign-in-alt'} important onClick={onLogin}>
              Sign in
            </IconButton>
          </div>
        </Panel>
        <div className={'register'}>
          <Text>Don&apos;t have a account?</Text>
          <Link href={'/register'}>Sign up and have fun</Link>
        </div>
      </div>
    </AuthMiddleware>
  )
}

export default Home
