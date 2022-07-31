import styles from './index.module.scss'
import Text from '@components/atoms/Text'
import { useContext } from 'react'
import { GameContext } from '@contexts/GameContextData'
import { getTimeDifferenceFormated } from '@utils/date-helpers'
import IconButton from '@components/molecules/IconButton'
import Router from 'next/router'
import Panel from '@components/atoms/Panel'

export default function FinishGameScreen() {
  const gameContext = useContext(GameContext)
  const { startedAt, finishedAt, resetData } = gameContext

  const gameDuration = getTimeDifferenceFormated(startedAt, finishedAt)

  const onTryAgain = () => {
    resetData()
  }

  const onBackToMenu = () => {
    resetData()
    Router.push('/menu')
  }

  return (
    <div className={styles.container}>
      <Panel>
        <div className={'content'}>
          <div className={'title'}>
            <Text title>You win!</Text>
            <Text title>🎊 🎉 👏</Text>
            <Text subtitle>Your time: {gameDuration}</Text>
          </div>
          <Text>Congratulations! You win the game.</Text>
          <Text>What you want to do now?</Text>
          <div className={'actions'}>
            <IconButton icon={'play'} onClick={onTryAgain} long important>
              Try again
            </IconButton>
            <IconButton icon={'house'} onClick={onBackToMenu} long>
              Back to menu
            </IconButton>
          </div>
        </div>
      </Panel>
    </div>
  )
}
