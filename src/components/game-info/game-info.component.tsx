import { useCallback, useContext } from 'react'
import CurrentGame from '../current-game/current-game.component'
import Results from '../results/results.component'
import styles from './game-info.module.css'
import { GameContext, GameContextState } from '../../context/game-context'

const GameInfo = () => {
  const { stopGame } = useContext(GameContext) as GameContextState

  const clickStopHandler = useCallback(() => {
    stopGame()
  }, [])

  return (
    <div className={styles.game_info}>
      <CurrentGame />
      <button onClick={clickStopHandler} className={styles.stop_button}>
        Стоп
      </button>
      <Results />
    </div>
  )
}
export default GameInfo
