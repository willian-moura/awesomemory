import { createContext, ReactNode, useState } from 'react'
import { card, icon } from '../types/globals'

type GameContextData = {
  startedAt: Date | null
  finishedAt: Date | null
  currentDuration: number
  isFoundedDrawerOpen: boolean
  isMenuOpen: boolean
  cards: Array<card>
  foundedIcons: Array<icon>
  turnedCards: Array<card>
  interval: NodeJS.Timer | null
  setIsFoundedDrawerOpen: (value: boolean) => void
  setIsMenuOpen: (value: boolean) => void
  setCards: (cards: Array<card>) => void
  setFoundedIcons: (icons: Array<icon>) => void
  startGame: (icons: Array<icon>) => void
  finishGame: () => void
  turnCard: (cardId: number) => void
  turnAllCardsDown: () => void
  focusCard: (cardId: number) => void
  verifyIfFound: () => boolean
  verifyFinish: () => boolean
}

export const GameContext = createContext({} as GameContextData)

type GameContextProviderProps = {
  children: ReactNode
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [startedAt, setStartedAt] = useState<Date | null>(null)
  const [finishedAt, setFinishedAt] = useState<Date | null>(null)
  const [currentDuration, setCurrentDuration] = useState(0)
  const [isFoundedDrawerOpen, setIsFoundedDrawerOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [cards, setCards] = useState<Array<card>>([])
  const [turnedCards, setTurnedCards] = useState<Array<card>>([])
  const [foundedIcons, setFoundedIcons] = useState<Array<icon>>([])
  const [durationInterval, setDurationInterval] = useState<NodeJS.Timer | null>(
    null
  )

  const startGame = (icons: Array<icon>) => {
    let newCards = new Array<card>()
    icons.forEach((icon, idx) => {
      const card = {
        id: 0,
        turned: false,
        focused: false,
        icon: icon
      }
      newCards.push(card, card)
    })
    newCards.sort(() => 0.5 - Math.random())
    newCards = newCards.map((card, idx) => ({
      ...card,
      id: idx
    }))

    setCards([...newCards])
    setStartedAt(new Date())
    const interval = setInterval(
      () => setCurrentDuration(currentDuration + 1),
      1000
    )
    setDurationInterval(interval)
  }

  const finishGame = () => {
    if (cards.length > 0) {
      return
    }

    setFinishedAt(new Date())
    if (durationInterval) {
      clearInterval(durationInterval)
    }
  }

  const turnCard = (cardId: number) => {
    const newCards = [...cards]
    const idx = newCards.findIndex((item) => item.id === cardId)
    if (idx !== -1 && turnedCards.length < 2) {
      newCards[idx].turned = true
      newCards[idx].focused = false
      setCards([...newCards])
      setTurnedCards([...turnedCards, newCards[idx]])
    }
  }

  const focusCard = (cardId: number) => {
    if (turnedCards.length < 2) {
      const newCards = cards.map((card) => ({
        ...card,
        focused: card.id === cardId
      }))
      setCards([...newCards])
    }
  }

  const verifyIfFound = () => {
    if (turnedCards.length !== 2) {
      return false
    }

    const iconUuid = turnedCards[0].icon.uuid
    if (turnedCards[1].icon.uuid === iconUuid) {
      const newCards = cards.filter((card) => card.icon.uuid !== iconUuid)
      const newFoundedIcons = [...foundedIcons, turnedCards[0].icon]
      setCards([...newCards])
      setFoundedIcons([...newFoundedIcons])
      setTurnedCards([])

      return true
    }

    return false
  }

  const turnAllCardsDown = () => {
    const newCards = cards.map((card) => ({ ...card, turned: false }))
    setCards([...newCards])
    setTurnedCards([])
  }

  const verifyFinish = () => {
    if (cards.length > 0) {
      return false
    }

    finishGame()
    return true
  }

  return (
    <GameContext.Provider
      value={{
        startedAt,
        finishedAt,
        currentDuration,
        isFoundedDrawerOpen,
        isMenuOpen,
        cards,
        turnedCards,
        foundedIcons,
        interval: durationInterval,
        startGame,
        finishGame,
        turnCard,
        turnAllCardsDown,
        focusCard,
        verifyIfFound,
        verifyFinish,
        setCards,
        setFoundedIcons,
        setIsFoundedDrawerOpen,
        setIsMenuOpen
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
