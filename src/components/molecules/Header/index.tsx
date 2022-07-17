import styles from './index.module.scss'
import Icon from '@components/atoms/Icon'
import { useContext, useEffect, useMemo, useState } from 'react'
import { GameContext } from '@contexts/GameContextData'
import moment from 'moment'

type duration = {
  sec: number
  min: number
  hour: number
}

export default function Header() {
  const gameContext = useContext(GameContext)
  const { startedAt, toggleIsMenuOpen } = gameContext

  const [duration, setDuration] = useState<duration>({
    sec: 0,
    min: 0,
    hour: 0
  })

  useEffect(() => {
    const interval = setInterval(calcDuration, 500)
    return () => clearInterval(interval)
  }, [])

  const durationText = useMemo(() => {
    const hour = duration.hour
    const min = duration.min
    const sec = duration.sec

    let str = sec < 60 ? sec : String(sec % 60).padStart(2, '0')

    if (min > 0) {
      str = `${String(min % 60).padStart(2, '0')}:` + str
    }

    if (hour > 0) {
      str = `${String(hour % 60).padStart(2, '0')}:` + str
    }

    return str
  }, [duration])

  const calcDuration = () => {
    const sec = moment().diff(moment(startedAt), 'seconds')
    const min = moment().diff(moment(startedAt), 'minutes')
    const hour = moment().diff(moment(startedAt), 'hours')
    setDuration({
      sec,
      min,
      hour
    })
  }

  return (
    <div className={styles.container}>
      <div className={'menu-icon'}>
        <Icon icon={'bars'} size={'2x'} onClick={toggleIsMenuOpen} />
      </div>
      <div className={'duration'}>{durationText}</div>
      <div className={'logo-icon'}>
        <Icon icon={['fab', 'font-awesome-flag']} size={'2x'} />
      </div>
    </div>
  )
}
