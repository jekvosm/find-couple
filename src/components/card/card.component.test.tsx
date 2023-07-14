import { fireEvent, render, screen } from '@testing-library/react'
import { ICard } from '../../interfaces/card'
import Card from './card.component'
import { GameProvider } from '../../context/game-context'

describe('card component test', () => {
  let cardInfo: ICard
  beforeEach(() => {
    cardInfo = {
      id: 1,
      name: '1',
      isRotated: false,
      isFound: false,
    }
  })
  test('card  renders', () => {
    render(
      <GameProvider>
        <Card cardInfo={cardInfo} />
      </GameProvider>
    )
    const cardTextElement = screen.getByText('1')
    expect(cardTextElement).toBeInTheDocument()
  })
  test('card rotating', () => {
    render(
      <GameProvider>
        <Card cardInfo={cardInfo} />
      </GameProvider>
    )
    const card = screen.getByTestId('card-front')
    expect(card).toBeInTheDocument()
    fireEvent.click(card)
    const afterClickText = screen.getByText('?')

    expect(afterClickText).toBeInTheDocument()
  })
})
