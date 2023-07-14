import { useContext, useEffect } from 'react'

import Card from '../card/card.component'

import styles from './field-cards.module.css'

import { GameContext, GameContextState } from '../../context/game-context'
import StartScreen from '../start-screen/start-screen.component'

const FieldCards = () => {
  const {
    randomCards,
    selectedCards,
    setSelectedCards,
    changeFoundStatusCards,
    rotateCardsBack,
    increaseTotalOfMoves,
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
      }, 500)
    }
  }, [selectedCards])

  return (
    <div className={styles.content__fieldCards}>
      {randomCards.map(card => {
        return <Card key={card.id} cardInfo={card} />
      })}
      <StartScreen />
    </div>
  )
}

export default FieldCards
