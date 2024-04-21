import { Data, RickAndMortyAPI } from '@/types/types'

export default class RickAndMortyAPIServices {
  constructor() {}

  static async getCharacter(page?: number) {
    const response = await fetch(`http://localhost:3000/api/character/${page}`)
    const chs: RickAndMortyAPI = await response.json()
    return chs
  }
}
