import styles from './index.module.scss'
import Button, { ButtonProps } from '@components/atoms/Button'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '@components/atoms/Icon'

type Props = ButtonProps & {
  icon: IconProp
  iconColor?: string
  iconSize?: SizeProp
  loading?: boolean
}

export default function IconButton({ loading = false, ...props }: Props) {
  return (
    <Button {...props}>
      <div className={styles.container}>
        <span>{props?.children}</span>
        {loading ? (
          <Icon icon={'circle-notch'} spin />
        ) : (
          <Icon
            icon={props.icon}
            color={props.iconColor}
            size={props.iconSize}
          />
        )}
      </div>
    </Button>
  )
}
