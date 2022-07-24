import { createContext, ReactNode, useState } from 'react'
import { card, icon } from '../types/globals'

type GameContextData = {
  startedAt: Date | null
  finishedAt: Date | null
  isFoundDrawerOpen: boolean
  isMenuOpen: boolean
  cards: Array<card>
  foundIcons: Array<icon>
  turnedCards: Array<card>
  toggleIsFoundDrawerOpen: () => void
  toggleIsMenuOpen: () => void
  setCards: (cards: Array<card>) => void
  setFoundIcons: (icons: Array<icon>) => void
  startGame: (icons: Array<icon>) => void
  finishGame: () => void
  turnCard: (cardId: number) => void
  turnAllCardsDown: () => void
  focusCard: (cardId: number) => void
  resetFocus: () => void
  verifyIfFound: () => boolean
  resetData: () => void
}

export const GameContext = createContext({} as GameContextData)

type GameContextProviderProps = {
  children: ReactNode
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [startedAt, setStartedAt] = useState<Date | null>(null)
  const [finishedAt, setFinishedAt] = useState<Date | null>(null)
  const [isFoundDrawerOpen, setIsFoundDrawerOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [cards, setCards] = useState<Array<card>>([])
  const [turnedCards, setTurnedCards] = useState<Array<card>>([])
  const [foundIcons, setFoundIcons] = useState<Array<icon>>([])

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
  }

  const finishGame = () => {
    setFinishedAt(new Date())
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

  const resetFocus = () => {
    const newCards = cards.map((card) => ({
      ...card,
      focused: false
    }))
    setCards([...newCards])
  }

  const verifyIfFound = () => {
    if (turnedCards.length !== 2) {
      return false
    }

    const iconUuid = turnedCards[0].icon.uuid
    if (turnedCards[1].icon.uuid === iconUuid) {
      const newCards = cards.filter((card) => card.icon.uuid !== iconUuid)
      const newFoundIcons = [...foundIcons, turnedCards[0].icon]
      setCards([...newCards])
      setFoundIcons([...newFoundIcons])
      setTurnedCards([])

      if (!newCards.length) {
        finishGame()
      }
      return true
    }

    return false
  }

  const turnAllCardsDown = () => {
    const newCards = cards.map((card) => ({ ...card, turned: false }))
    setCards([...newCards])
    setTurnedCards([])
  }

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const toggleIsFoundDrawerOpen = () => {
    setIsFoundDrawerOpen(!isFoundDrawerOpen)
  }

  const resetData = () => {
    setStartedAt(null)
    setFinishedAt(null)
    setIsFoundDrawerOpen(false)
    setIsMenuOpen(false)
    setCards([])
    setTurnedCards([])
    setFoundIcons([])
  }

  return (
    <GameContext.Provider
      value={{
        startedAt,
        finishedAt,
        isFoundDrawerOpen,
        isMenuOpen,
        cards,
        turnedCards,
        foundIcons,
        startGame,
        finishGame,
        turnCard,
        turnAllCardsDown,
        focusCard,
        resetFocus,
        verifyIfFound,
        setCards,
        setFoundIcons,
        toggleIsFoundDrawerOpen,
        toggleIsMenuOpen,
        resetData
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
