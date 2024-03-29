import styles from './index.module.scss'
import { icon, Props } from '../../../types/globals'
import Card from '@components/molecules/Card'
import Text from '@components/atoms/Text'
import Tag from '@components/atoms/Tag'
import { MOBILE_BREAKPOINT } from '../../../constants/globals'

type FoundCardProps = Props & {
  id: number
  icon: icon
}

export default function FoundCard({ id, icon }: FoundCardProps) {
  const card = {
    id,
    icon,
    turned: true,
    focused: false
  }

  return (
    <div className={styles.container}>
      <div>
        <Card
          card={card}
          size={window.innerWidth <= MOBILE_BREAKPOINT ? '25vw' : '10vh'}
        />
      </div>
      <div className={'details'}>
        <Text bold>{icon.name}</Text>
        <Tag>
          {icon.family}-{icon.name}
        </Tag>
      </div>
    </div>
  )
}
