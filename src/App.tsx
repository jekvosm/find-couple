import styles from './App.module.css'
import Game from './components/game/game.component'

const App = () => {
  return (
    <div className={styles.app}>
      <header className='app__header'>
        <h1 className={styles.header_title}>Найди пару</h1>
      </header>
      <main className={styles.app__main}>
        <Game />
      </main>
    </div>
  )
}

export default App
