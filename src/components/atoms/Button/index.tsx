import styles from './index.module.scss'
import { MouseEventHandler, ReactNode } from 'react'
import classNames from 'classnames/bind'

export type ButtonProps = {
  important?: boolean
  small?: boolean
  disabled?: boolean
  long?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

const cx = classNames.bind(styles)

export default function Button({
  children,
  small = false,
  important = false,
  disabled = false,
  long = false,
  onClick
}: ButtonProps) {
  const classes = cx({
    container: true,
    small,
    important,
    disabled,
    long
  })
  return (
    <div className={classes}>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  )
}
