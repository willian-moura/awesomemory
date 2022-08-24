import React, { MouseEventHandler } from 'react'
import { IconName, IconPrefix } from '@fortawesome/free-brands-svg-icons'

export type Props = {
  children?: React.ReactNode | null
  onClick?: MouseEventHandler
}

export type icon = {
  name: IconName
  family: IconPrefix
}

export type card = {
  id: number
  turned: boolean
  focused: boolean
  icon: icon
}

export type rankingItem = {
  id: number
  userName: string
  duration: number
  createdAt: string
}
