import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'

import Card from './card.component'
import { GameProvider } from '../../context/game-context'

import { ICard } from '../../interfaces/card'

describe('Card component test', () => {
  let cardInfo: ICard

  beforeEach(() => {
    cardInfo = {
      id: 1,
      name: '1',
      isRotated: false,
      isFound: false,
    }

    render(
      <GameProvider>
        <Card cardInfo={cardInfo} />
      </GameProvider>
    )
  })

  test('Card  renders', () => {
    const cardFront = screen.getByText('?')
    const cardBack = screen.getByText('1')

    expect(cardFront).toBeInTheDocument()
    expect(cardBack).toBeInTheDocument()
  })

  test('Card is not rotating', () => {
    const cardFront = screen.getByTestId('card-front')
    const cardBack = screen.getByTestId('card-back')

    expect(cardFront.getAttribute('class')).toContain('isRotated')
    expect(cardBack.getAttribute('class')).toContain('notRotated')
  })
})
