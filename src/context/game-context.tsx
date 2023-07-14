import { createContext, useEffect, useState } from 'react'

import { CARDS } from '../db'

import { ICard } from '../interfaces/card'
import { changeFoundStatus, createRandomCards } from '../utils/utils'

export type GameContextState = {
  randomCards: ICard[]
  setRandomCards: (cards: ICard[]) => void
  selectedCards: ICard[]
  setSelectedCards: (cards: ICard[]) => void
  changeFoundStatusCards: (cards: ICard[], cardsForChange: ICard[]) => void
  rotateCardsBack: (cards: ICard[]) => void
}

export const GameContext = createContext<GameContextState | null>(null)

export const GameProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [randomCards, setRandomCards] = useState<ICard[]>([])
  const [selectedCards, setSelectedCards] = useState<ICard[]>([])

  useEffect(() => {
    const cards = createRandomCards(CARDS)
    setRandomCards(cards)
  }, [])

  const changeFoundStatusCards = (cards: ICard[], cardsForChange: ICard[]) => {
    const newCards = changeFoundStatus(cards, cardsForChange)
    setRandomCards(newCards)
  }

  const rotateCardsBack = (cards: ICard[]) => {
    const newCards = cards.map(card => ({ ...card, isRotated: false }))
    setRandomCards(newCards)
  }

  const value = {
    randomCards,
    setRandomCards,
    selectedCards,
    setSelectedCards,
    changeFoundStatusCards,
    rotateCardsBack,
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
