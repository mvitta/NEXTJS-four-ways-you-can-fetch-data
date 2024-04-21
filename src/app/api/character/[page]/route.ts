import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { page: string } }
) {
  const { page } = params

  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
    {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await res.json()
  return Response.json({ data })
}
