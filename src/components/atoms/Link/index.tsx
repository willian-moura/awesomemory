import styles from './index.module.scss'
import { Props } from '../../../types/globals'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode | null
}

export default function Link({ children, ...props }: LinkProps) {
  return (
    <span className={styles.container}>
      <NextLink {...props}>{children}</NextLink>
    </span>
  )
}
