import styles from './index.module.scss'
import { icon, Props } from '../../../types/globals'
import Panel from '@components/atoms/Panel'
import Text from '@components/atoms/Text'
import IconButton from '@components/molecules/IconButton'
import { useContext, useState } from 'react'
import { GameContext } from '@contexts/GameContextData'
import { sleep, waitTimer } from '@utils/promisse-helpers'

const ICONS = [
  {
    uuid: '1',
    name: 'cat',
    family: 'fas'
  },
  {
    uuid: '2',
    name: 'dog',
    family: 'fas'
  },
  {
    uuid: '3',
    name: 'user',
    family: 'fas'
  },
  {
    uuid: '4',
    name: 'print',
    family: 'fas'
  },
  {
    uuid: '5',
    name: 'search',
    family: 'fas'
  },
  {
    uuid: '6',
    name: 'dragon',
    family: 'fas'
  },
  {
    uuid: '7',
    name: 'arrow-left',
    family: 'fas'
  },
  {
    uuid: '8',
    name: 'cow',
    family: 'fas'
  },
  {
    uuid: '9',
    name: 'check',
    family: 'fas'
  },
  {
    uuid: '10',
    name: 'info-circle',
    family: 'fas'
  },
  {
    uuid: '11',
    name: 'otter',
    family: 'fas'
  },
  {
    uuid: '12',
    name: 'user-astronaut',
    family: 'fas'
  },
  {
    uuid: '13',
    name: 'rocket',
    family: 'fas'
  },
  {
    uuid: '14',
    name: 'satellite',
    family: 'fas'
  },
  {
    uuid: '15',
    name: 'campground',
    family: 'fas'
  },
  {
    uuid: '16',
    name: 'user-secret',
    family: 'fas'
  }
]

export default function PreGameWarning() {
  const gameContext = useContext(GameContext)
  const { startGame } = gameContext
  const [timer, setTimer] = useState(0)

  const buttonLabel = `Start${timer > 0 ? ` ${timer}` : ''}`

  const onStart = async () => {
    setTimer(5)
    // await waitTimer(5, (time) => setTimer(time))
    startGame(ICONS)
  }

  return (
    <Panel>
      <div className={styles.container}>
        <Text>
          When you press the start button, the timer will{' '}
          <b>start to running</b>
        </Text>
        <Text>Are you ready to play?</Text>
        <IconButton
          icon={'play'}
          disabled={timer > 0}
          long
          important
          onClick={onStart}
        >
          {buttonLabel}
        </IconButton>
      </div>
    </Panel>
  )
}
