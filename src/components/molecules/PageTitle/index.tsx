import styles from './index.module.scss'
import { Props } from '../../../types/globals'
import Text from '@components/atoms/Text'
import Icon from '@components/atoms/Icon'
import { MouseEventHandler } from 'react'
import Router from 'next/router'

interface PageTitleProps extends Props {
  onBack?: () => void
}

export default function PageTitle({ children, onBack }: PageTitleProps) {
  const handleBack = () => {
    onBack && onBack()
    Router.back()
  }

  return (
    <div className={styles.container}>
      <span className={'back-icon'} onClick={handleBack}>
        <Icon icon={'arrow-left'} color={'var(--text-color)'} />
      </span>
      <span className={'title'}>
        <Text title>{children}</Text>
      </span>
    </div>
  )
}
