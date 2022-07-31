import styles from './index.module.scss'
import { Props } from '../../../types/globals'

interface PanelProps extends Props {
  hFull?: boolean
}

export default function Panel({ children, hFull }: PanelProps) {
  return (
    <div
      className={styles.container}
      style={{ height: hFull ? '100%' : 'auto' }}
    >
      {children}
    </div>
  )
}
