import { ICard } from '../../interfaces/card'
import styles from './card.module.css'

type CardProps = {
  cardInfo: ICard
  clickHandler: (card: ICard) => void
}

const Card = ({ cardInfo, clickHandler }: CardProps) => {
  const { name, isRotated, isFound } = cardInfo

  return (
    <div
      onClick={() => {
        clickHandler(cardInfo)
      }}
      className={`${styles.card} ${isFound ? styles.isFound : ''}`}
    >
      <div
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
