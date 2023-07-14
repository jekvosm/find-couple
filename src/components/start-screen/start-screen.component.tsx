import { useContext } from 'react'
import styles from './start-screen.module.css'
import { GameContext, GameContextState } from '../../context/game-context'

const StartScreen = () => {
  const { startGame, isPlaying, isFinished } = useContext(
    GameContext
  ) as GameContextState

  const startHandler = () => {
    startGame()
  }

  return (
    <div
      data-testid='start-screen'
      className={`${styles.start__screen} ${
        isPlaying || isFinished ? styles.hidden : ''
      }`}
    >
      <h2 className={styles.start__screen_title}>Нажми на старт!</h2>
      <button onClick={startHandler} className={styles.start__screen_button}>
        Старт!
      </button>
    </div>
  )
}
export default StartScreen
