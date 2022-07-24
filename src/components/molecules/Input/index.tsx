import styles from './index.module.scss'
import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import Text from '@components/atoms/Text'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '@components/atoms/Icon'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  icon?: IconProp
  register: UseFormRegister<FieldValues>
}

export default function Input({
  name,
  label,
  icon,
  register,
  ...props
}: InputProps) {
  return (
    <div className={styles.container}>
      <Text bold textAlign={'left'}>
        {label}
      </Text>
      <div className={'input-wrapper'}>
        {icon && <Icon icon={icon} color={'var(--input-placeholder)'} />}
        <input {...{ ...register(name), ...props }} />
      </div>
    </div>
  )
}
