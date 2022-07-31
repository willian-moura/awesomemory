import styles from './index.module.scss'
import { useContext } from 'react'
import { GameContext } from '@contexts/GameContextData'
import FoundCard from '@components/organisms/FoundCard'
import FoundIconsButton from '@components/molecules/FoundIconsButton'
import FoundIcons from '@components/organisms/FoundIcons'
import useOutsideClick from '../../../hooks/useOutsideClick'

export default function FoundIconsMenu() {
  const gameContext = useContext(GameContext)

  const { foundIcons, setIsFoundDrawerOpen } = gameContext

  const ref = useOutsideClick(() => {
    setIsFoundDrawerOpen(false)
  })

  return (
    <div className={styles.container} ref={ref}>
      <FoundIconsButton />
      <FoundIcons icons={foundIcons} />
    </div>
  )
}
