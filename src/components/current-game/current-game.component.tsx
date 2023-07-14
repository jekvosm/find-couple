import { useContext } from 'react'

import { GameContext, GameContextState } from '../../context/game-context'

import styles from './current-game.module.css'
import Timer from '../timer/timer.component'

const CurrentGame = () => {
  const { totalOfMoves } = useContext(GameContext) as GameContextState

  return (
    <div className={styles.current_game}>
      <Timer />
      <p>
        Число ходов: <span>{totalOfMoves}</span>
      </p>
    </div>
  )
}
export default CurrentGame
