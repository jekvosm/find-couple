import { createContext, useEffect, useState } from 'react'

import { CARDS } from '../db'

import { ICard, ITime } from '../interfaces/card'
import { changeFoundStatus, createRandomCards } from '../utils/utils'

export type GameContextState = {
  randomCards: ICard[]
  selectedCards: ICard[]
  totalOfmoves: number
  isPlaying: boolean
  totalFoundCoupleCard: number
  isFinished: boolean
  time: ITime
  setRandomCards: (cards: ICard[]) => void
  setSelectedCards: (cards: ICard[]) => void
  changeFoundStatusCards: (cards: ICard[], cardsForChange: ICard[]) => void
  rotateCardsBack: (cards: ICard[]) => void
  increaseTotalOfMoves: () => void
  startGame: () => void
  stopGame: () => void
  restartGame: () => void
  changeResetTime: () => void
}

export const GameContext = createContext<GameContextState | null>(null)

export const GameProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [randomCards, setRandomCards] = useState<ICard[]>([])
  const [selectedCards, setSelectedCards] = useState<ICard[]>([])
  const [totalOfmoves, setCount] = useState(0)
  const [isPlaying, setIsPlayng] = useState(false)
  const [totalFoundCoupleCard, setTotalFoundCoupleCard] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [time, setTime] = useState<ITime>({
    seconds: 0,
    minutes: 0,
    reset: false,
  })

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
    setTime({ seconds: 0, minutes: 0, reset: true })
  }

  const changeResetTime = () => {
    setTime({ ...time, reset: false })
  }

  const value = {
    randomCards,
    setRandomCards,
    selectedCards,
    setSelectedCards,
    changeFoundStatusCards,
    rotateCardsBack,
    totalOfmoves,
    increaseTotalOfMoves,
    isPlaying,
    startGame,
    stopGame,
    totalFoundCoupleCard,
    isFinished,
    restartGame,
    time,
    changeResetTime,
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
