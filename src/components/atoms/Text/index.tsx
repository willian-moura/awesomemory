import styles from './index.module.scss'
import { ReactNode } from 'react'
import classNames from 'classnames/bind'
import { Props } from '../../../types/globals'

type TextProps = Props & {
  textAlign?: Align
  bold?: boolean
  title?: boolean
  subtitle?: boolean
  size?: '12px' | '14px' | '16px' | '18px'
}

type Align = 'left' | 'center' | 'right'

const cx = classNames.bind(styles)

export default function Text({
  children,
  textAlign = 'center',
  bold = false,
  title = false,
  subtitle = false,
  size
}: TextProps) {
  const classes = cx({
    container: true,
    title,
    subtitle,
    ['align-left']: textAlign === 'left',
    ['align-center']: textAlign === 'center',
    ['align-right']: textAlign === 'right',
    ['dk-text']: bold
  })
  return (
    <div className={classes} style={{ fontSize: size }}>
      {children}
    </div>
  )
}
