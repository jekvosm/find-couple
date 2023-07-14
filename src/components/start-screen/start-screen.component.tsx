import styles from './start-screen.module.css'

const StartScreen = () => {
  return (
    <div className={`${styles.start__screen} `}>
      <h2 className={styles.start__screen_title}>Нажми на старт!</h2>
      <button className={styles.start__screen_button}>Старт!</button>
    </div>
  )
}
export default StartScreen
