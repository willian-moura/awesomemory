import styles from './index.module.scss'
import IconButton from '@components/molecules/IconButton'
import { useContext } from 'react'
import { GameContext } from '@contexts/GameContextData'
import Router from 'next/router'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import useOutsideClick from '../../../hooks/useOutsideClick'

export default function PausedGame() {
  const { setIsMenuOpen, resetData } = useContext(GameContext)

  const ref = useOutsideClick(() => {
    setIsMenuOpen(false)
  })

  const onQuit = () => {
    resetData()
    Router.push('/menu')
  }

  const actions = [
    {
      key: 'resume',
      label: 'Resume',
      icon: 'play',
      important: true,
      onClick: () => setIsMenuOpen(false)
    },
    /*{
      key: 'dark-mode',
      label: 'Dark mode: Off',
      icon: 'moon',
      onClick: () => {}
    },*/
    {
      key: 'quit',
      label: 'Quit',
      icon: 'door-open',
      onClick: onQuit
    }
  ]

  return (
    <div className={styles.container} ref={ref}>
      <div className={'actions'}>
        {actions.map((action) => (
          <IconButton
            key={action.key}
            icon={action.icon as IconProp}
            important={action.important === true}
            long
            onClick={action.onClick}
          >
            {action.label}
          </IconButton>
        ))}
      </div>
    </div>
  )
}
