import type { NextPage } from 'next'
import styles from './index.module.scss'
import Panel from '@components/atoms/Panel'
import Text from '@components/atoms/Text'
import IconButton from '@components/molecules/IconButton'
import Divider from '@components/atoms/Divider'
import Logo from '@components/atoms/Logo'
import Router from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '@contexts/AuthContextData'

const Home: NextPage = () => {
  const { user, signOut } = useContext(AuthContext)
  const userName = user?.userName

  const onPlay = () => {
    Router.push('/game')
  }

  const onLogout = async () => {
    await signOut()
    Router.push('/')
  }

  return (
    <div className={styles.container}>
      <div className={'logo'}>
        <Logo large />
      </div>
      <Panel>
        <div className={'panel'}>
          <div className={'wellcome'}>
            <Text>
              Welcome <b>{userName}</b>!
            </Text>
            <Text> Let’s play?</Text>
          </div>
          <div className={'actions'}>
            <IconButton icon={'gamepad'} long onClick={onPlay}>
              Play
            </IconButton>
            <IconButton icon={'list-ol'} long>
              Ranking
            </IconButton>
            <Divider />
            <IconButton
              icon={'arrow-right-from-bracket'}
              long
              important
              onClick={onLogout}
            >
              Logout
            </IconButton>
          </div>
        </div>
      </Panel>
    </div>
  )
}

export default Home
