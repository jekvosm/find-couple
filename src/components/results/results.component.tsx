import styles from './results.module.css'
import { IResult } from '../../interfaces/card'

type ResultsProps = {
  results: IResult[]
}

const Results = ({ results }: ResultsProps) => {
  return (
    <div className={styles.results}>
      <span>Результаты:</span>
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
