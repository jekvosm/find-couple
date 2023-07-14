import { useContext } from 'react'
import styles from './finish-screen.module.css'
import { GameContext, GameContextState } from '../../context/game-context'

const FinishScreen = () => {
  const { isFinished, restartGame } = useContext(
    GameContext
  ) as GameContextState

  const startHandler = () => {
    restartGame()
  }

  return (
    <div
      className={`${styles.finish__screen} ${isFinished ? '' : styles.hidden}`}
    >
      <h2 className={styles.start__screen_title}>Играть ещё раз!</h2>
      <button onClick={startHandler} className={styles.start__screen_button}>
        Рестарт!
      </button>
    </div>
  )
}
export default FinishScreen
