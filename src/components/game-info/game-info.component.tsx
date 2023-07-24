import CurrentGame from '../current-game/current-game.component'
import Results from '../results/results.component'
import styles from './game-info.module.css'
import { IResult } from '../../interfaces/card'
import { useState } from 'react'

type GameInfoProps = {
  stopGame: () => void
  totalOfMoves: number
  isPlaying: boolean
  isFinished: boolean
  totalFoundCoupleCard: number
}

const GameInfo = ({
  stopGame,
  totalOfMoves,
  isFinished,
  isPlaying,
  totalFoundCoupleCard,
}: GameInfoProps) => {
  const [results, setResults] = useState<IResult[]>([])

  const addToResults = (result: IResult) => {
    const newResults = [...results, result]
    if (newResults.length > 5) newResults.shift()
    setResults(newResults)
  }

  return (
    <div className={styles.game_info}>
      <CurrentGame
        {...{
          totalOfMoves,
          addToResults,
          isPlaying,
          isFinished,
          totalFoundCoupleCard,
        }}
      />
      <button onClick={stopGame} className={styles.stop_button}>
        Стоп
      </button>
      <Results results={results} />
    </div>
  )
}
export default GameInfo
