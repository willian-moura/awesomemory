import styles from './index.module.scss'
import { useContext } from 'react'
import { GameContext } from '@contexts/GameContextData'
import FoundCard from '@components/organisms/FoundCard'
import { icon } from '../../../types/globals'

interface FoundIconsProps {
  icons: Array<icon>
}

export default function FoundIcons({ icons }: FoundIconsProps) {
  return (
    <div className={styles.container}>
      {icons.map((icon, index) => (
        <FoundCard key={`${icon.family}-${icon.name}`} icon={icon} id={index} />
      ))}
    </div>
  )
}
