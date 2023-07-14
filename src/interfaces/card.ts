export interface ICard {
  id: number
  name: string
  isRotated: boolean
  isFound: boolean
}

export interface ITime {
  seconds: number
  minutes: number
  reset: boolean
}
