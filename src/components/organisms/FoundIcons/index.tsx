import styles from './index.module.scss'
import { useContext } from 'react'
import { GameContext } from '@contexts/GameContextData'
import FoundCard from '@components/organisms/FoundCard'
import FoundIconsButton from '@components/molecules/FoundIconsButton'

export default function FoundIcons() {
  const gameContext = useContext(GameContext)

  const { foundIcons } = gameContext

  return (
    <div className={styles.container}>
      <FoundIconsButton />
      {foundIcons.map((icon) => (
        <FoundCard key={icon.uuid} icon={icon} />
      ))}
    </div>
  )
}
