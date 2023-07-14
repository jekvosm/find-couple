import { ICard } from '../interfaces/card'

export const createRandomCards = (cards: ICard[]): ICard[] => {
  const randomCards = [] as ICard[]
  let cardsArr = cards

  for (let i = cardsArr.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i)

    randomCards.push(cardsArr[randomIndex])

    cardsArr = cardsArr.filter(card => card.id !== cardsArr[randomIndex].id)
  }

  return randomCards
}

export const rotateCard = (cards: ICard[], cardId: number): ICard[] => {
  return cards.map(card =>
    card.id === cardId ? { ...card, isRotated: true } : card
  )
}

export const changeFoundStatus = (
  cards: ICard[],
  cardsForChange: ICard[]
): ICard[] => {
  return cards.map(card =>
    card.id === cardsForChange[0].id || card.id === cardsForChange[1].id
      ? { ...card, isFound: true }
      : card
  )
}
