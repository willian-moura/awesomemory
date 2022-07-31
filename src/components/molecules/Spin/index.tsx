import styles from './index.module.scss'
import Icon from '@components/atoms/Icon'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

interface SpinProps {
  size?: SizeProp
}

export default function Spin({ size }: SpinProps) {
  return <Icon icon={'circle-notch'} spin size={size} />
}
