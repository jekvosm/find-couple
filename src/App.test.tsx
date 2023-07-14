import { render, screen } from '@testing-library/react'
import App from './App'
import { GameProvider } from './context/game-context.tsx'

describe('App test', () => {
  test('renders all components', () => {
    render(
      <GameProvider>
        <App />
      </GameProvider>
    )
    const headerElement = screen.getByText(/Найди пару/i)
    const timerElement = screen.getByText(/Таймер/i)
    const movesElement = screen.getByText(/Число ходов/i)
    const startScreen = screen.getByTestId('start-screen')

    const finishScreen = screen.getByTestId('finish-screen')
    expect(startScreen).toBeVisible()

    expect(finishScreen).toBeVisible()
    expect(headerElement).toBeInTheDocument()
    expect(timerElement).toBeInTheDocument()
    expect(movesElement).toBeInTheDocument()
  })
})
