import { Data, RickAndMortyAPI } from '@/types/types'

export default class RickAndMortyAPIServices {
  constructor() {}

  static async getCharacter(page?: number) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/character/${page}`
    )
    const chs: RickAndMortyAPI = await response.json()
    return chs
  }
}
