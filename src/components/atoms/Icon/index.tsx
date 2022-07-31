import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function Icon({
  color = 'var(--dk-text-color)',
  size = 'lg',
  ...props
}: FontAwesomeIconProps) {
  return <FontAwesomeIcon color={color} size={size} {...props} />
}
