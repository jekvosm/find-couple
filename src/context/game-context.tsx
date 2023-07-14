import { createContext, useEffect, useState } from 'react'

import { CARDS } from '../db'

import { ICard, IResult } from '../interfaces/card'
import { changeFoundStatus, createRandomCards } from '../utils/utils'

export type GameContextState = {
  randomCards: ICard[]
  selectedCards: ICard[]
  totalOfMoves: number
  isPlaying: boolean
  totalFoundCoupleCard: number
  isFinished: boolean
  isTimeReset: boolean
  results: IResult[]
  setRandomCards: (cards: ICard[]) => void
  setSelectedCards: (cards: ICard[]) => void
  changeFoundStatusCards: (cards: ICard[], cardsForChange: ICard[]) => void
  rotateCardsBack: (cards: ICard[]) => void
  increaseTotalOfMoves: () => void
  startGame: () => void
  stopGame: () => void
  restartGame: () => void
  changeResetTime: () => void
  addToResults: (result: IResult) => void
  rotateCard: (cards: ICard[], cardId: number) => void
}

export const GameContext = createContext<GameContextState | null>(null)

export const GameProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [randomCards, setRandomCards] = useState<ICard[]>([])
  const [selectedCards, setSelectedCards] = useState<ICard[]>([])
  const [totalOfMoves, setCount] = useState(0)
  const [isPlaying, setIsPlayng] = useState(false)
  const [totalFoundCoupleCard, setTotalFoundCoupleCard] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [isTimeReset, setIsTimeReset] = useState(false)
  const [results, setResults] = useState<IResult[]>([])

  useEffect(() => {
    const cards = createRandomCards(CARDS)
    setRandomCards(cards)
  }, [])

  const changeFoundStatusCards = (cards: ICard[], cardsForChange: ICard[]) => {
    const newCards = changeFoundStatus(cards, cardsForChange)
    setRandomCards(newCards)
    setTotalFoundCoupleCard(total => total + 1)
  }

  const rotateCardsBack = (cards: ICard[]) => {
    const newCards = cards.map(card => ({ ...card, isRotated: false }))
    setRandomCards(newCards)
  }

  const rotateCard = (cards: ICard[], cardId: number) => {
    const newCards = cards.map(card =>
      card.id === cardId ? { ...card, isRotated: true } : card
    )

    setRandomCards(newCards)
  }

  const increaseTotalOfMoves = () => {
    setCount(prev => prev + 1)
  }

  const startGame = () => {
    setIsPlayng(true)
    setIsFinished(false)
  }

  const stopGame = () => {
    setIsFinished(true)
    setIsPlayng(false)
  }

  const restartGame = () => {
    setIsFinished(false)
    setIsPlayng(true)
    const cards = createRandomCards(CARDS)
    setRandomCards(cards)
    setTotalFoundCoupleCard(0)
    setSelectedCards([])
    setCount(0)
    setIsTimeReset(true)
  }

  const changeResetTime = () => {
    setIsTimeReset(false)
  }

  const addToResults = (result: IResult) => {
    const newResults = [...results, result]
    if (newResults.length > 5) newResults.shift()
    setResults(newResults)
  }

  const value = {
    randomCards,
    setRandomCards,
    selectedCards,
    setSelectedCards,
    changeFoundStatusCards,
    rotateCardsBack,
    totalOfMoves,
    increaseTotalOfMoves,
    isPlaying,
    startGame,
    stopGame,
    totalFoundCoupleCard,
    isFinished,
    restartGame,
    isTimeReset,
    changeResetTime,
    results,
    addToResults,
    rotateCard,
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
