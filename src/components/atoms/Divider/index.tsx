import styles from './index.module.scss'
import classNames from 'classnames/bind'

type Props = {
  vertical?: boolean
}

const cx = classNames.bind(styles)

export default function Divider({ vertical = false }: Props) {
  const classes = cx({
    container: true,
    vertical
  })

  return (
    <div className={classes}>
      <div className={'divider'} />
    </div>
  )
}
