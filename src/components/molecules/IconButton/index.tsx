import styles from './index.module.scss'
import Button, { ButtonProps } from '@components/atoms/Button'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '@components/atoms/Icon'

type Props = ButtonProps & {
  icon: IconProp
  iconColor?: string
  iconSize?: SizeProp
}

export default function IconButton(props: Props) {
  return (
    <Button {...props}>
      <div className={styles.container}>
        <span>{props?.children}</span>
        <Icon icon={props.icon} color={props.iconColor} size={props.iconSize} />
      </div>
    </Button>
  )
}
