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

export async function GET() {
  const reviews = (await redis.get<Review[]>(KEY)) ?? []
  return NextResponse.json(reviews)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, text } = body

  if (!name?.trim() || !text?.trim()) {
    return NextResponse.json({ error: 'Name and text are required' }, { status: 400 })
  }

  const reviews = (await redis.get<Review[]>(KEY)) ?? []
  const newReview: Review = {
    id: Date.now(),
    name: name.trim().slice(0, 60),
    text: text.trim().slice(0, 500),
    rating: 5,
    createdAt: new Date().toISOString(),
  }
  reviews.unshift(newReview)
  await redis.set(KEY, reviews)

  return NextResponse.json(newReview, { status: 201 })
}
