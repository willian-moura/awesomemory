import styles from './index.module.scss'
import IconButton from '@components/molecules/IconButton'
import { useContext } from 'react'
import { GameContext } from '@contexts/GameContextData'
import Router from 'next/router'

export default function PausedGame() {
  const gameContext = useContext(GameContext)
  const { toggleIsMenuOpen } = gameContext

  const actions = [
    {
      key: 'resume',
      label: 'Resume',
      icon: 'play',
      important: true,
      onClick: toggleIsMenuOpen
    },
    {
      key: 'dark-mode',
      label: 'Dark mode: Off',
      icon: 'moon',
      onClick: () => {}
    },
    {
      key: 'quit',
      label: 'Quit',
      icon: 'door-open',
      onClick: () => Router.push('/')
    }
  ]

  return (
    <div className={styles.container}>
      <div className={'actions'}>
        {actions.map((action) => (
          <IconButton
            key={action.key}
            icon={action.icon}
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