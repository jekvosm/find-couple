import { useContext } from 'react'

import { GameContext, GameContextState } from '../../context/game-context'

import styles from './current-game.module.css'
import Timer from '../timer/timer.component'

const CurrentGame = () => {
  const { totalOfmoves } = useContext(GameContext) as GameContextState

  return (
    <div className={styles.current_game}>
      <Timer />
      <p>
        Количество ходов: <span>{totalOfmoves}</span>
      </p>
    </div>
  )
}
export default CurrentGame
