import styles from './index.module.scss'
import { NextPage } from 'next'
import { useContext } from 'react'
import { GameContext } from '@contexts/GameContextData'
import PreGameWarning from '@components/organisms/PreGameWarning'
import InGame from '@components/organisms/InGame'
import PausedGame from '@components/organisms/PausedGame'
import Drawer from '@components/atoms/Drawer'
import FoundIconsButton from '@components/molecules/FoundIconsButton'
import FoundIcons from '@components/organisms/FoundIcons'
import FinishGameScreen from '@components/organisms/FinishGameScreen'

const Game: NextPage = () => {
  const gameContext = useContext(GameContext)
  const { startedAt, finishedAt, isMenuOpen, isFoundDrawerOpen } = gameContext

  return (
    <div className={styles.container}>
      {startedAt ? (
        <>
          <Drawer open={isMenuOpen} direction={'left-right'}>
            <PausedGame />
          </Drawer>
          <InGame />
          <FoundIconsButton />
          <Drawer open={isFoundDrawerOpen} direction={'bottom-top'}>
            <FoundIcons />
          </Drawer>
        </>
      ) : (
        <PreGameWarning />
      )}
      {finishedAt && <FinishGameScreen />}
    </div>
  )
}

export default Game
