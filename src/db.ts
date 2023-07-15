import { ICard } from './interfaces/card'
export const CARDS: ICard[] = new Array(36).fill(undefined).map((_, idx) => {
  return {
    id: idx + 1,
    name: idx > 17 ? (idx - 17).toString() : (idx + 1).toString(),
    isRotated: false,
    isFound: false,
  }
})
