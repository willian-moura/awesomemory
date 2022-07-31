import styles from './index.module.scss'
import classNames from 'classnames/bind'
import { ReactNode } from 'react'

const cx = classNames.bind(styles)

type DrawerProps = {
  children?: ReactNode
  open: boolean
  direction: 'left-right' | 'right-left' | 'bottom-top' | 'top-bottom'
  width?: string
  height?: string
  delay?: string
  style?: any
}

export default function Drawer({
  children,
  open = false,
  direction,
  width = '100%',
  height = '100%',
  delay = '.3s',
  style = {}
}: DrawerProps) {
  const classes = cx({
    container: true,
    open,
    [direction]: true
  })

  const styleObj = {
    width,
    height,
    transition: delay,
    ...style
  }

  return (
    <div className={classes} style={styleObj}>
      {children}
    </div>
  )
}
