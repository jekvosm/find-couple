import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'

import App from './App'

import { GameProvider } from './context/game-context.tsx'

describe('App test', () => {
  beforeEach(() => {
    render(
      <GameProvider>
        <App />
      </GameProvider>
    )
  })

  test('Renders all components', () => {
    const headerElement = screen.getByText(/Найди пару/i)
    const timerElement = screen.getByText(/Таймер/i)
    const movesElement = screen.getByText(/Число ходов/i)

    expect(headerElement).toBeInTheDocument()
    expect(timerElement).toBeInTheDocument()
    expect(movesElement).toBeInTheDocument()
  })

  test('Test start button', () => {
    const startScreen = screen.getByTestId('start-screen')
    const finishScreen = screen.getByTestId('finish-screen')
    const startButton = screen.getByText('Старт!')

    fireEvent.click(startButton)

    expect(finishScreen.getAttribute('class')).toContain('hidden')
    expect(startScreen.getAttribute('class')).toContain('hidden')
  })

  test('Card rotating', () => {
    const startButton = screen.getByText('Старт!')

    fireEvent.click(startButton)

    const cardFront = screen.getAllByTestId('card-front')[0]
    const cardBack = screen.getAllByTestId('card-back')[0]

    expect(cardFront.getAttribute('class')).toContain('isRotated')
    expect(cardBack.getAttribute('class')).toContain('notRotated')

    fireEvent.click(cardBack)

    expect(cardFront.getAttribute('class')).not.toContain('isRotated')
    expect(cardBack.getAttribute('class')).not.toContain('notRotated')
  })
})
