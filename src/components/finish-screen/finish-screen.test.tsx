import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'

import { GameProvider } from '../../context/game-context'
import FinishScreen from './finish-screen.component'

describe('FinishScreen test', () => {
  test('finish screen is hidden', () => {
    render(
      <GameProvider>
        <FinishScreen />
      </GameProvider>
    )

    const finishScreen = screen.getByTestId('finish-screen')

    expect(finishScreen.getAttribute('class')).toContain('hidden')
  })
})
