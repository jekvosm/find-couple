import styles from './finish-screen.module.css'

type FinishScreenProps = {
  isFinished: boolean
  restartGame: () => void
}

const FinishScreen = ({ isFinished, restartGame }: FinishScreenProps) => {
  return (
    <div
      data-testid='finish-screen'
      className={`${styles.finish__screen} ${isFinished ? '' : styles.hidden}`}
    >
      <h2 className={styles.start__screen_title}>Играть ещё раз!</h2>
      <button onClick={restartGame} className={styles.start__screen_button}>
        Рестарт!
      </button>
    </div>
  )
}

export default FinishScreen
