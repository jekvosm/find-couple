import { useEffect, useState } from 'react'
import { CARDS } from '../../db'
import Card from '../card/card.component'

import styles from './field-cards.module.css'
import {
  changeFoundStatus,
  createRandomCards,
  rotateCard,
  rotateCardsBack,
} from '../../utils/utils'
import { ICard } from '../../interfaces/card'

const FieldCards = () => {
  const [randomCards, setRandomCards] = useState<ICard[]>([])
  const [selectedCards, setSelectedCards] = useState<ICard[]>([])

  useEffect(() => {
    const cards = createRandomCards(CARDS)
    setRandomCards(cards)
  }, [])

  const cardClickHandler = (card: ICard): void => {
    const existCard = selectedCards.find(selCard => selCard.id === card.id)
    if (selectedCards.length < 2 && !existCard) {
      setSelectedCards([...selectedCards, card])
      setRandomCards(rotateCard(randomCards, card.id))
    }
  }

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].name === selectedCards[1].name) {
        setRandomCards(changeFoundStatus(randomCards, selectedCards))
        setSelectedCards([])
      } else {
        setRandomCards(rotateCardsBack(randomCards))
        setSelectedCards([])
      }
    }
  }, [selectedCards])

  console.log(selectedCards)

  return (
    <div className={styles.content__fieldCards}>
      {randomCards.map(card => {
        return (
          <Card key={card.id} clickHandler={cardClickHandler} cardInfo={card} />
        )
      })}
    </div>
  )
}

export default FieldCards
