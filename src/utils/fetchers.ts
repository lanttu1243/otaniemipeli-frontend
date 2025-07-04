// app/ingredients/actions.ts
"use server";

import {Board, BoardPlaces, Boards, DrinkIngredients, DrinksIngredients, Ingredient, Ingredients} from "@/utils/types";

export async function addIngredient(formData: FormData) {
  await fetch(`${process.env.API_URL}/ingredients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.get("name"),
      abv: Number(formData.get("abv")),
      carbonated: Boolean(formData.get("carbonated")),
    }),
  });
}
export async function getIngredients():Promise<Ingredients> {
  const res = await fetch(process.env.API_URL + "/ingredients", {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    console.log(res.statusText);
  };

  return await res.json();
}
export async function deleteIngredient(drink_id: number, ingredient_id: number): Promise<Ingredient | null> {
  const res: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/drinks/ingredients/${drink_id}?ingredient_id=${ingredient_id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }
  );
  return await res.json()
}
export async function getDrinkIngredients(drink_id: number): Promise<DrinkIngredients> {
  const res = await fetch(`${process.env.API_URL}/drinks/ingredients/${drink_id}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  return await res.json();
}
export async function deleteDrink(drink_id: number) : Promise<{number: number} | undefined> {
  const res = await fetch(`${process.env.API_URL}/drinks/${drink_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data =  await res.json();
    return await data.number
  }
}
export async function getDrinks(): Promise<DrinksIngredients> {
  const res = await fetch(`${process.env.API_URL}/drinks`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  return await res.json();
}
export async function getBoards(id?: number): Promise<Boards> {
  const res = await fetch(`${process.env.API_URL}/boards`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  return await res.json();
}
export async function getBoard(id: number): Promise<Board> {
  const res = await fetch(`${process.env.API_URL}/boards/${id}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  return await res.json();
}
