import styles from './index.module.scss'
import { useContext } from 'react'
import { GameContext } from '@contexts/GameContextData'
import FoundCard from '@components/organisms/FoundCard'
import FoundIconsButton from '@components/molecules/FoundIconsButton'
import FoundIcons from '@components/organisms/FoundIcons'

export default function FoundIconsMenu() {
  const gameContext = useContext(GameContext)

  const { foundIcons } = gameContext

  return (
    <div className={styles.container}>
      <FoundIconsButton />
      <FoundIcons icons={foundIcons} />
    </div>
  )
}
