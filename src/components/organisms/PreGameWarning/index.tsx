import styles from './index.module.scss'
import { icon, Props } from '../../../types/globals'
import Panel from '@components/atoms/Panel'
import Text from '@components/atoms/Text'
import IconButton from '@components/molecules/IconButton'
import { useContext, useEffect, useState } from 'react'
import { GameContext } from '@contexts/GameContextData'
import { sleep, waitTimer } from '@utils/promisse-helpers'
import { getRandomIcons } from '../../../services/games'
import Spin from '@components/molecules/Spin'
import Router from 'next/router'
import Button from '@components/atoms/Button'

const ICONS = [
  {
    name: 'cat',
    family: 'fas'
  },
  {
    name: 'dog',
    family: 'fas'
  } /*
  {
    name: 'user',
    family: 'fas'
  },
  {
    name: 'print',
    family: 'fas'
  },
  {
    name: 'search',
    family: 'fas'
  },
  {
    name: 'dragon',
    family: 'fas'
  },
  {
    name: 'arrow-left',
    family: 'fas'
  },
  {
    name: 'cow',
    family: 'fas'
  },
  {
    name: 'check',
    family: 'fas'
  },
  {
    name: 'info-circle',
    family: 'fas'
  },
  {
    name: 'otter',
    family: 'fas'
  },
  {
    name: 'user-astronaut',
    family: 'fas'
  },
  {
    name: 'rocket',
    family: 'fas'
  },
  {
    name: 'satellite',
    family: 'fas'
  },
  {
    name: 'campground',
    family: 'fas'
  },
  {
    name: 'user-secret',
    family: 'fas'
  }*/
]

const TIME_WAITING = 5

export default function PreGameWarning() {
  const gameContext = useContext(GameContext)
  const { startGame } = gameContext
  const [timer, setTimer] = useState(0)
  const [icons, setIcons] = useState<Array<icon>>([])
  const [loadingIcons, setLoadingIcons] = useState(true)

  const buttonLabel = `Start${timer > 0 ? ` ${timer}` : ''}`

  const onStart = async () => {
    setTimer(TIME_WAITING)
    await waitTimer(TIME_WAITING, (time) => setTimer(time))
    startGame(icons)
  }

  const fetchIcons = async () => {
    try {
      const data = await getRandomIcons()
      setIcons(data)
      setLoadingIcons(false)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchIcons()
  }, [])

  if (loadingIcons) {
    return <Spin />
  }

  return (
    <div className={styles.container}>
      <Panel>
        <div className={'content'}>
          <Text>
            When you press the start button, the timer will{' '}
            <b>start to running</b>
          </Text>
          <Text>Are you ready to play?</Text>
          <div className={'actions'}>
            <IconButton
              icon={'play'}
              disabled={timer > 0}
              long
              important
              onClick={onStart}
            >
              {buttonLabel}
            </IconButton>
            <Button long onClick={() => Router.back()}>
              Back to menu
            </Button>
          </div>
        </div>
      </Panel>
    </div>
  )
}
