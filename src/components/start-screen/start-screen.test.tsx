import { fireEvent, render, screen } from '@testing-library/react'
import StartScreen from './start-screen.component'
import { GameProvider } from '../../context/game-context'

describe('StartScreen test', () => {
  test('start game button works', () => {
    render(
      <GameProvider>
        <StartScreen />
      </GameProvider>
    )
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    
    expect(screen.getByText('Нажми на старт!')).toBeInTheDocument()
  })
})
