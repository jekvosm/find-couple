import { CARDS } from '../../db'
import Card from '../card/card.component'

import styles from './field-cards.module.css'

const FieldCards = () => {
  return (
    <div className={styles.content__fieldCards}>
      {[...CARDS, ...CARDS].map(card => (
        <Card key={card.name} cardInfo={card} />
      ))}
    </div>
  )
}
export default FieldCards
