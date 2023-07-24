import styles from './start-screen.module.css'

type StartScreenProps = {
  isPlaying: boolean
  isFinished: boolean
  startGame: () => void
}

const StartScreen = ({
  startGame,
  isFinished,
  isPlaying,
}: StartScreenProps) => {
  return (
    <div
      data-testid='start-screen'
      className={`${styles.start__screen} ${
        isPlaying || isFinished ? styles.hidden : ''
      }`}
    >
      <h2 className={styles.start__screen_title}>Нажми на старт!</h2>
      <button onClick={startGame} className={styles.start__screen_button}>
        Старт!
      </button>
    </div>
  )
}
export default StartScreen
