import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const upstream = await fetch(
    `${process.env.API_URL}/drinks/ingredients`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  if (!upstream.ok) {
    return NextResponse.json(
      { error: upstream.statusText },
      { status: upstream.status }
    );
  }
  return NextResponse.json(await upstream.json());
}
