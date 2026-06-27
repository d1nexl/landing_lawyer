import { NextRequest, NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const KEY = 'reviews'

interface Review {
  id: number
  name: string
  text: string
  rating: number
  createdAt: string
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const adminPassword = req.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = Number(params.id)
  const reviews = (await redis.get<Review[]>(KEY)) ?? []
  const filtered = reviews.filter(r => r.id !== id)
  await redis.set(KEY, filtered)

  return NextResponse.json({ ok: true })
}
