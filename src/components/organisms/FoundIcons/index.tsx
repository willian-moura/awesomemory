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
      {foundIcons.map((icon, index) => (
        <FoundCard key={`${icon.family}-${icon.name}`} icon={icon} id={index} />
      ))}
    </div>
  )
}
