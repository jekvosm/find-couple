import { useContext, useEffect, useState } from 'react'

import Card from '../card/card.component'

import styles from './field-cards.module.css'

import { changeFoundStatus, rotateCardsBack } from '../../utils/utils'

import { GameContext, GameContextState } from '../../context/game-context'

const FieldCards = () => {
  const { randomCards, setRandomCards, selectedCards, setSelectedCards } =
    useContext(GameContext) as GameContextState

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => {
        if (selectedCards[0].name === selectedCards[1].name) {
          setRandomCards(changeFoundStatus(randomCards, selectedCards))
        } else {
          setRandomCards(rotateCardsBack(randomCards))
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
    </div>
  )
}

export default FieldCards
