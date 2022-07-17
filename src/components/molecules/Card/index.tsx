import styles from './index.module.scss'
import { card, icon } from '../../../types/globals'
import Icon from '@components/atoms/Icon'
import classNames from 'classnames/bind'

type CardProps = {
  card: card
  onClick: (card: card) => void
}

const cx = classNames.bind(styles)

export default function Card({ onClick, card }: CardProps) {
  const { focused, icon, turned } = card

  const classes = cx({
    container: true,
    focused
  })

  const onClickCard = () => {
    onClick(card)
  }

  return (
    <div className={classes} onClick={onClickCard}>
      <div className={'icon'}>
        {turned ? (
          <Icon icon={[icon.family, icon.name]} size={'2x'} />
        ) : (
          <Icon icon={['fab', 'font-awesome-flag']} size={'2x'} />
        )}
      </div>
    </div>
  )
}
