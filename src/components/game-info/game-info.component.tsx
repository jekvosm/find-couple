import CurrentGame from '../current-game/current-game.component'
import Results from '../results/results.component'
import styles from './game-info.module.css'

const GameInfo = () => {
  return (
    <div className={styles.game_info}>
      <CurrentGame />
      <Results />
    </div>
  )
}
export default GameInfo
