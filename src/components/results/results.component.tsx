import { useContext } from 'react'
import styles from './results.module.css'
import { GameContext, GameContextState } from '../../context/game-context'

const Results = () => {
  const { results } = useContext(GameContext) as GameContextState
  return (
    <div className={styles.results}>
      <span>Результыты:</span>
      {!results.length ? (
        <span>Нажмите на старт!</span>
      ) : (
        <>
          {results.map(({ id, seconds, minutes, totalOfMoves }) => {
            return (
              <div key={id}>
                <p>
                  Время:{' '}
                  <span>{`${
                    minutes < 10 ? '0' + minutes.toString() : minutes
                  }:${
                    seconds < 10 ? '0' + seconds.toString() : seconds
                  }`}</span>
                </p>
                <p>
                  Число ходов: <span>{totalOfMoves}</span>
                </p>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
export default Results
