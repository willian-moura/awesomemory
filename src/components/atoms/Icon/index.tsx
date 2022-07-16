import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome'

export default function Icon({
  color = 'var(--dk-text-color)',
  size = 'lg',
  ...props
}: FontAwesomeIconProps) {
  return <FontAwesomeIcon color={color} size={size} {...props} />
}
