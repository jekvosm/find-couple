import { useContext } from 'react'
import styles from './start-screen.module.css'
import { GameContext, GameContextState } from '../../context/game-context'

const StartScreen = () => {
  const { startGame, isPlaying } = useContext(GameContext) as GameContextState

  const startHandler = () => {
    startGame()
  }

  return (
    <div
      className={`${styles.start__screen} ${isPlaying ? styles.hidden : ''}`}
    >
      <h2 className={styles.start__screen_title}>Нажми на старт!</h2>
      <button onClick={startHandler} className={styles.start__screen_button}>
        Старт!
      </button>
    </div>
  )
}
export default StartScreen
