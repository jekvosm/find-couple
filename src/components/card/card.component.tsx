import { ICard } from '../../interfaces/card'

import styles from './card.module.css'

type CardProps = {
  cardInfo: ICard
  rotateCard: (cards: ICard) => void
}

const Card = ({ cardInfo, rotateCard }: CardProps) => {
  const { name, isRotated, isFound } = cardInfo

  return (
    <div className={`${styles.card} ${isFound ? styles.isFound : ''}`}>
      <div
        data-testid='card-front'
        className={`${styles.card__front} ${isRotated ? '' : styles.isRotated}`}
      >
        <p className={styles.card__name}>{name}</p>
      </div>
      <div
        data-testid='card-back'
        onClick={() => rotateCard(cardInfo)}
        className={`${styles.card__back} ${isRotated ? '' : styles.notRotated}`}
      >
        <p className={styles.card__name}>?</p>
      </div>
    </div>
  )
}
export default Card
