import styles from './index.module.scss'
import { NextPage } from 'next'
import { useContext } from 'react'
import { GameContext } from '@contexts/GameContextData'
import PreGameWarning from '@components/organisms/PreGameWarning'
import InGame from '@components/organisms/InGame'
import PausedGame from '@components/organisms/PausedGame'

const Game: NextPage = () => {
  const gameContext = useContext(GameContext)
  const { startedAt, isMenuOpen } = gameContext

  return (
    <div className={styles.container}>
      {isMenuOpen && <PausedGame />}
      {startedAt ? <InGame /> : <PreGameWarning />}
    </div>
  )
}

export default Game
