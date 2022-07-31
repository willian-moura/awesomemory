import styles from './index.module.scss'
import { card } from '../../../types/globals'
import Icon from '@components/atoms/Icon'
import classNames from 'classnames/bind'

type CardProps = {
  size?: string
  card: card
  onClick?: (card: card) => void
}

const cx = classNames.bind(styles)

export default function Card({ onClick, card, size }: CardProps) {
  const { focused, icon, turned } = card

  const classes = cx({
    container: true,
    focused,
    turned
  })

  const style = {
    minWidth: size,
    minHeight: size
  }

  const onClickCard = () => {
    onClick && onClick(card)
  }

  return (
    <div className={classes} style={style} onClick={onClickCard}>
      <div className={'inner'}>
        <div className={'flip-front'}>
          <Icon
            icon={[icon.family, icon.name]}
            size={'2x'}
            color={'var(--md-navy)'}
          />
        </div>
        <div className={'flip-back'}>
          <Icon
            icon={['fab', 'font-awesome-flag']}
            size={'2x'}
            color={'var(--md-navy)'}
          />
        </div>
      </div>
    </div>
  )
}
