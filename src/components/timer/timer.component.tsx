import { useContext, useEffect, useState } from 'react'
import { GameContext, GameContextState } from '../../context/game-context'

const Timer = () => {
  const { isPlaying } = useContext(GameContext) as GameContextState

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    let interval: number | undefined
    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds < 59) {
            return seconds + 1
          } else {
            return 0
          }
        })
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isPlaying, seconds])

  useEffect(() => {
    if (seconds === 59) {
      setTimeout(() => setMinutes(minutes => minutes + 1), 1000)
    }
  }, [seconds])

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
