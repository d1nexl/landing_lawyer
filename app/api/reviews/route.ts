import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'reviews.json')

function readReviews() {
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw)
}

function writeReviews(reviews: unknown[]) {
  fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2), 'utf-8')
}

export async function GET() {
  const reviews = readReviews()
  return NextResponse.json(reviews)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, text } = body

  if (!name?.trim() || !text?.trim()) {
    return NextResponse.json({ error: 'Name and text are required' }, { status: 400 })
  }

  const reviews = readReviews()
  const newReview = {
    id: Date.now(),
    name: name.trim().slice(0, 60),
    text: text.trim().slice(0, 500),
    rating: 5,
    createdAt: new Date().toISOString(),
  }
  reviews.unshift(newReview)
  writeReviews(reviews)

  return NextResponse.json(newReview, { status: 201 })
}
