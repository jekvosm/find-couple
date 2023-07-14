export interface ICard {
  id: number
  name: string
  isRotated: boolean
  isFound: boolean
}

export interface IResult {
  id: string
  seconds: number
  minutes: number
  totalOfMoves: number
}
