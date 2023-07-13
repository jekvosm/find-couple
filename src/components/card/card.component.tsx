import { ICard } from '../../interfaces/card'
import styles from './card.module.css'

type CardProps = {
  cardInfo: ICard
}

const Card = ({ cardInfo }: CardProps) => {
  return (
    <div className={styles.card}>
      <p>{cardInfo.name}</p>
    </div>
  )
}
export default Card
