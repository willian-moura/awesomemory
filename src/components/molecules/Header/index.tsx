import styles from './index.module.scss'
import Icon from '@components/atoms/Icon'
import { useContext, useEffect, useState } from 'react'
import { GameContext } from '@contexts/GameContextData'
import { getTimeDifferenceFormated } from '@utils/date-helpers'

export default function Header() {
  const gameContext = useContext(GameContext)
  const { startedAt, finishedAt, toggleIsMenuOpen } = gameContext

  const [duration, setDuration] = useState('0')

  useEffect(() => {
    const interval = setInterval(calcDuration, 500)
    return () => clearInterval(interval)
  }, [])

  const calcDuration = () => {
    if (startedAt) {
      const duration = getTimeDifferenceFormated(startedAt, new Date())
      setDuration(duration)
    }
  }

  return (
    <div className={styles.container}>
      <div className={'menu-icon'}>
        <Icon icon={'bars'} size={'2x'} onClick={toggleIsMenuOpen} />
      </div>
      <div className={'duration'}>{finishedAt ? 'Win!' : duration}</div>
      <div className={'logo-icon'}>
        <Icon icon={['fab', 'font-awesome-flag']} size={'2x'} />
      </div>
    </div>
  )
}
