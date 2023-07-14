import { useContext } from 'react'
import { ICard } from '../../interfaces/card'
import styles from './card.module.css'
import { GameContext, GameContextState } from '../../context/game-context'
import { rotateCard } from '../../utils/utils'

type CardProps = {
  cardInfo: ICard
}

const Card = ({ cardInfo }: CardProps) => {
  const { name, isRotated, isFound } = cardInfo
  const { randomCards, setRandomCards, selectedCards, setSelectedCards } =
    useContext(GameContext) as GameContextState

  const cardClickHandler = (card: ICard): void => {
    const existCard = selectedCards.find(selCard => selCard.id === card.id)
    if (selectedCards.length < 2 && !existCard) {
      setSelectedCards([...selectedCards, card])
      setRandomCards(rotateCard(randomCards, card.id))
    }
  }

  return (
    <div className={`${styles.card} ${isFound ? styles.isFound : ''}`}>
      <div
        onClick={() => cardClickHandler(cardInfo)}
        className={`${styles.card__front} ${isRotated ? styles.isRotated : ''}`}
      >
        <p>{name}</p>
      </div>
      <div
        className={`${styles.card__back} ${isRotated ? styles.notRotated : ''}`}
      >
        <p>?</p>
      </div>
    </div>
  )
}
export default Card
