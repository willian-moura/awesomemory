import styles from './index.module.scss'
import { MouseEventHandler, useContext } from 'react'
import Icon from '@components/atoms/Icon'
import { GameContext } from '@contexts/GameContextData'

export default function FoundIconsButton() {
  const gameContext = useContext(GameContext)
  const { toggleIsFoundDrawerOpen, isFoundDrawerOpen } = gameContext

  return (
    <div className={styles.container} onClick={toggleIsFoundDrawerOpen}>
      <Icon icon={isFoundDrawerOpen ? 'chevron-down' : 'chevron-up'} />
    </div>
  )
}
