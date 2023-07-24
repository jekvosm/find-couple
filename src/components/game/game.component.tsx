import { useEffect, useState } from 'react'

import FieldCards from '../field-cards/field-cards.component'
import GameInfo from '../game-info/game-info.component'

import { ICard } from '../../interfaces/card'

import { createRandomCards } from '../../utils/utils'

import { CARDS } from '../../db'

const Game = () => {
  const [isPlaying, setIsPlayng] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [totalOfMoves, setTotalOfMoves] = useState(0)
  const [totalFoundCoupleCard, setTotalFoundCoupleCard] = useState(0)
  const [randomCards, setRandomCards] = useState<ICard[]>([])
  const [selectedCards, setSelectedCards] = useState<ICard[]>([])

  const stopGame = () => {
    setIsPlayng(false)
    setIsFinished(true)
  }

  const startGame = () => {
    setIsPlayng(true)
    setIsFinished(false)
  }

  const restartGame = () => {
    setIsPlayng(true)
    setIsFinished(false)
    const cards = createRandomCards(CARDS)
    setRandomCards(cards)
    setTotalFoundCoupleCard(0)
    setSelectedCards([])
    setTotalOfMoves(0)
  }

  const changeFoundStatusCards = (cards: ICard[], cardsForChange: ICard[]) => {
    const newCards = cards.map(card =>
      card.id === cardsForChange[0].id || card.id === cardsForChange[1].id
        ? { ...card, isFound: true }
        : card
    )

    setRandomCards(newCards)
    setTotalFoundCoupleCard(total => total + 1)
  }

  const rotateCardsBack = (cards: ICard[]) => {
    const newCards = cards.map(card => ({ ...card, isRotated: false }))
    setRandomCards(newCards)
  }

  const rotateCard = (card: ICard): void => {
    const existCard = selectedCards.find(selCard => selCard.id === card.id)
    if (selectedCards.length < 2 && !existCard) {
      setSelectedCards([...selectedCards, card])

      const newCards = randomCards.map(randomCard =>
        randomCard.id === card.id
          ? { ...randomCard, isRotated: true }
          : randomCard
      )

      setRandomCards(newCards)
    }
  }

  useEffect(() => {
    const cards = createRandomCards(CARDS)
    setRandomCards(cards)
  }, [])

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTotalOfMoves(moves => moves + 1)

      setTimeout(() => {
        if (selectedCards[0].name === selectedCards[1].name) {
          changeFoundStatusCards(randomCards, selectedCards)
        } else {
          rotateCardsBack(randomCards)
        }
        setSelectedCards([])
      }, 500)
    }
  }, [selectedCards])

  useEffect(() => {
    if (totalFoundCoupleCard === 18) {
      setTimeout(() => stopGame(), 500)
    }
  }, [totalFoundCoupleCard])

  return (
    <>
      <FieldCards
        {...{
          isPlaying,
          isFinished,
          startGame,
          restartGame,
          randomCards,
          rotateCard,
        }}
      />
      <GameInfo
        {...{
          isPlaying,
          isFinished,
          stopGame,
          totalOfMoves,
          totalFoundCoupleCard,
        }}
      />
    </>
  )
}
export default Game
