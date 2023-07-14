import { useContext, useEffect } from 'react'

import Card from '../card/card.component'

import styles from './field-cards.module.css'

import { GameContext, GameContextState } from '../../context/game-context'
import StartScreen from '../start-screen/start-screen.component'
import FinishScreen from '../finish-screen/finish-screen.component'

const FieldCards = () => {
  const {
    randomCards,
    selectedCards,
    setSelectedCards,
    changeFoundStatusCards,
    rotateCardsBack,
    increaseTotalOfMoves,
    totalFoundCoupleCard,
    stopGame,
  } = useContext(GameContext) as GameContextState

  useEffect(() => {
    if (selectedCards.length === 2) {
      increaseTotalOfMoves()

      setTimeout(() => {
        if (selectedCards[0].name === selectedCards[1].name) {
          changeFoundStatusCards(randomCards, selectedCards)
        } else {
          rotateCardsBack(randomCards)
        }
        setSelectedCards([])
      }, 1500)
    }
  }, [selectedCards])

  useEffect(() => {
    if (totalFoundCoupleCard === 1) {
      setTimeout(() => stopGame(), 1500)
    }
  }, [totalFoundCoupleCard])

  return (
    <div className={styles.content__fieldCards}>
      {randomCards.map(card => {
        return <Card key={card.id} cardInfo={card} />
      })}
      <StartScreen />
      <FinishScreen />
    </div>
  )
}

export default FieldCards
