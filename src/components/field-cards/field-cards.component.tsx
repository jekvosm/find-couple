import Card from '../card/card.component'

import styles from './field-cards.module.css'

import StartScreen from '../start-screen/start-screen.component'
import FinishScreen from '../finish-screen/finish-screen.component'

import { ICard } from '../../interfaces/card'

type FieldCardsProps = {
  startGame: () => void
  isPlaying: boolean
  isFinished: boolean
  restartGame: () => void
  randomCards: ICard[]
  rotateCard: (cards: ICard) => void
}

const FieldCards = ({
  startGame,
  isPlaying,
  isFinished,
  restartGame,
  randomCards,
  rotateCard,
}: FieldCardsProps) => {
  return (
    <div className={styles.content__fieldCards}>
      {randomCards.map(card => {
        return <Card key={card.id} cardInfo={card} rotateCard={rotateCard} />
      })}
      <StartScreen {...{ startGame, isPlaying, isFinished }} />
      <FinishScreen isFinished={isFinished} restartGame={restartGame} />
    </div>
  )
}

export default FieldCards
