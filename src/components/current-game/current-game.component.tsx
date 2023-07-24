import styles from './current-game.module.css'
import Timer from '../timer/timer.component'
import { IResult } from '../../interfaces/card'

type CurrentGameProps = {
  isPlaying: boolean
  isFinished: boolean
  totalOfMoves: number
  totalFoundCoupleCard: number
  addToResults: (result: IResult) => void
}

const CurrentGame = (currentGameProps: CurrentGameProps) => {
  const { totalOfMoves } = currentGameProps

  return (
    <div className={styles.current_game}>
      <Timer {...currentGameProps} />
      <p>
        Число ходов: <span>{totalOfMoves}</span>
      </p>
    </div>
  )
}
export default CurrentGame
