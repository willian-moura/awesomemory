import React, { MouseEventHandler } from 'react'
import { IconName, IconPrefix } from '@fortawesome/free-brands-svg-icons'

export type Props = {
  children?: React.ReactNode | null
  onClick?: MouseEventHandler
}

export type icon = {
  name: IconName | string
  family: IconPrefix | string
}

export type card = {
  id: number
  turned: boolean
  focused: boolean
  icon: icon
}
