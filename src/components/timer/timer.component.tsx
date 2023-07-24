import { useEffect, useState } from 'react'
import { IResult } from '../../interfaces/card'

type TimerProps = {
  isPlaying: boolean
  isFinished: boolean
  addToResults: (result: IResult) => void
  totalFoundCoupleCard: number
  totalOfMoves: number
}

const Timer = ({
  isPlaying,
  isFinished,
  addToResults,
  totalFoundCoupleCard,
  totalOfMoves,
}: TimerProps) => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          return seconds < 59 ? seconds + 1 : 0
        })
      }, 1000)
    } else {
      if (isFinished && totalFoundCoupleCard === 18) {
        addToResults({
          id: new Date().toString(),
          seconds,
          minutes,
          totalOfMoves,
        })
      }
    }
    return () => clearInterval(interval)
  }, [isPlaying, seconds, isFinished])

  useEffect(() => {
    if (seconds === 59) {
      setTimeout(() => setMinutes(minutes => minutes + 1), 1000)
    }
  }, [seconds])

  useEffect(() => {
    if (isPlaying && !isFinished) {
      setSeconds(0)
      setMinutes(0)
    }
  }, [isPlaying, isFinished])

  return (
    <p>
      Таймер:{' '}
      <span>{`${minutes < 10 ? '0' + minutes.toString() : minutes}:${
        seconds < 10 ? '0' + seconds.toString() : seconds
      }`}</span>
    </p>
  )
}
export default Timer
