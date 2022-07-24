import styles from './index.module.scss'
import { useContext } from 'react'
import { GameContext } from '@contexts/GameContextData'
import Card from '@components/molecules/Card'
import { card } from '../../../types/globals'
import Header from '@components/molecules/Header'
import useOutsideClick from '../../../hooks/useOutsideClick'

export default function InGame() {
  const gameContext = useContext(GameContext)
  const {
    cards,
    focusCard,
    turnCard,
    turnedCards,
    verifyIfFound,
    turnAllCardsDown,
    resetFocus
  } = gameContext

  const ref = useOutsideClick(() => {
    const found = verifyIfFound()
    if (found) {
      return
    }

    if (turnedCards?.length === 2) {
      turnAllCardsDown()
      return
    }

    resetFocus()
  })

  const onClickCard = (card: card) => {
    const found = verifyIfFound()
    if (found) {
      return
    }

    if (turnedCards?.length === 2) {
      turnAllCardsDown()
      return
    }

    if (card.turned) {
      return
    }

    if (card.focused) {
      return turnCard(card.id)
    }

    focusCard(card.id)
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={'cards-wrapper'}>
        <div className={'cards'} ref={ref}>
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={onClickCard} />
          ))}
        </div>
      </div>
    </div>
  )
}
