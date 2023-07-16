import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'

import StartScreen from './start-screen.component'
import { GameProvider } from '../../context/game-context'

describe('StartScreen test', () => {
  beforeEach(() => {
    render(
      <GameProvider>
        <StartScreen />
      </GameProvider>
    )
  })

  test('Start screen is visible', () => {
    const startScreen = screen.getByTestId('start-screen')

    expect(startScreen.getAttribute('class')).not.toContain('hidden')
  })

  test('Start screen is hidden', () => {
    const startScreen = screen.getByTestId('start-screen')
    const btn = screen.getByRole('button')

    fireEvent.click(btn)

    expect(startScreen.getAttribute('class')).not.toBeNull()
    expect(startScreen.getAttribute('class')).toContain('hidden')
  })
})
