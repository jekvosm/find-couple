import { useContext } from 'react'
import { GameContext, GameContextState } from '../../context/game-context'

const CurrentGame = () => {
  const { totalOfmoves } = useContext(GameContext) as GameContextState
  return (
    <div>
      <p>
        Таймер: <span>00:00</span>
      </p>
      <p>
        Количество ходов: <span>{totalOfmoves}</span>
      </p>
    </div>
  )
}
export default CurrentGame
