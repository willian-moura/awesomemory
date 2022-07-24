import styles from './index.module.scss'
import { icon, Props } from '../../../types/globals'
import Card from '@components/molecules/Card'
import Text from '@components/atoms/Text'
import Tag from '@components/atoms/Tag'

type FoundCardProps = Props & {
  icon: icon
}

export default function FoundCard({ icon }: FoundCardProps) {
  const card = {
    id: parseInt(icon.uuid),
    icon,
    turned: true,
    focused: false
  }

  return (
    <div className={styles.container}>
      <Card card={card} size={'25vw'} />
      <div className={'details'}>
        <Text bold>{icon.name}</Text>
        <Tag>
          {icon.family}-{icon.name}
        </Tag>
      </div>
    </div>
  )
}