import React from 'react'
import { IconName, IconPrefix } from '@fortawesome/free-brands-svg-icons'

export type Props = {
  children: React.ReactNode | null
}

export type icon = {
  uuid: string
  name: IconName
  family: IconPrefix
}

export type card = {
  id: number
  turned: boolean
  focused: boolean
  icon: icon
}