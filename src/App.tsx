import styles from './App.module.css'
import FieldCards from './components/field-cards/field-cards.component'
import GameInfo from './components/game-info/game-info.component'

const App = () => {
  return (
    <div className={styles.app}>
      <header className='app__header'>
        <h1 className={styles.header_title}>Найди пару</h1>
      </header>
      <main className={styles.app__main}>
        <FieldCards />
        <GameInfo />
      </main>
    </div>
  )
}

export default App
