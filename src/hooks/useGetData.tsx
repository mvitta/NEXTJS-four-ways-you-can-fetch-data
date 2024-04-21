import RickAndMortyAPIServices from '@/services/RickAndMortyAPI.services'
import { Data, Result, RickAndMortyAPI } from '@/types/types'
import { useState, useEffect } from 'react'

export default function useGetData(
  query?: number
): [RickAndMortyAPI | undefined] {
  const [character, setCharacter] = useState<RickAndMortyAPI>()
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await RickAndMortyAPIServices.getCharacter(query)
        setCharacter(result)
      } catch (error) {
        if (error instanceof Error) {
          console.error(error)
        }
      }
    }

    fetchData()
  }, [query])

  return [character]
}
