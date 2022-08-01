import styles from './index.module.scss'
import { Props, rankingItem } from '../../../types/globals'
import Text from '@components/atoms/Text'
import { useMemo } from 'react'
import moment from 'moment'
import { msToDuration } from '@grpc/grpc-js/src/duration'
import Tag from '@components/atoms/Tag'
import { getMillisecondsFormated } from '@utils/date-helpers'

interface RankingItemProps extends Props {
  position: number
  item: rankingItem
}

export default function RankingItem({
  position,
  item,
  onClick
}: RankingItemProps) {
  const { createdAt, user, duration } = item

  const cptCreatedAt = useMemo(() => {
    return moment(createdAt).format('YYYY/MM/DD [at] HH:mm')
  }, [createdAt])

  const cptDuration = useMemo(() => {
    return getMillisecondsFormated(duration)
  }, [duration])

  return (
    <div className={styles.container}>
      <div className={'position'}>
        <span>{position}º</span>
      </div>
      <div className={'details'}>
        <span className={'username'}>
          <Text bold>{user?.userName}</Text>
        </span>
        <div className={'bottom-info'}>
          <Text size={'14px'}>{cptCreatedAt}</Text>
          <Tag>{cptDuration}</Tag>
        </div>
      </div>
    </div>
  )
}
