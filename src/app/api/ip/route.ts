import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  // In Vercel or other proxies, real IP might be in x-forwarded-for
  const forwarded = req.headers.get("x-forwarded-for")
  const ip = forwarded || "unknown"

  return NextResponse.json({ ip })
}
