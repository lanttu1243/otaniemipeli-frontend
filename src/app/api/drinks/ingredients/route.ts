import { NextResponse, NextRequest } from "next/server";
import {DrinksIngredients} from "@/utils/types";

export async function POST(req: NextRequest) {
  const body = await req.json();          // { name, abv, carbonated }
  console.log(`POST ${process.env.API_URL}/drinks/ingredients`)
  const upstream = await fetch(
    `${process.env.API_URL}/drinks/ingredients`, // stays server-side
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

  // Optionally forward what the upstream returned
  return NextResponse.json(await upstream.json());
}
