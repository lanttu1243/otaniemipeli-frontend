// app/ingredients/actions.ts
"use server";

import {
  Board, BoardPlace,
  BoardPlaces,
  Boards,
  DrinkIngredients,
  DrinksIngredients,
  Ingredient,
  Ingredients,
  Place, Places
} from "@/utils/types";

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
export async function postPlace(place: Place): Promise<number> {
  const res = await fetch(`${process.env.API_URL}/boards/places`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(place),
  });
  if (!res.ok) console.error(`HTTP ${res.status}`);

  return res.status;
}
export async function postBoardPlace(boardPlace: BoardPlace): Promise<number> {
  const res = await fetch(`${process.env.API_URL}/boards/places/${boardPlace.board_id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(boardPlace),
  });
  if (!res.ok) console.error(`HTTP ${res.status}`);

  return res.status;
}
export async function getPlacesNotInBoard(boardId: number): Promise<{p: Places, bp: BoardPlaces}> {
  console.log(`${process.env.API_URL}/boards/places/${boardId}`)
  const res = await fetch(`${process.env.API_URL}/boards/places/${boardId}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) console.error(`HTTP ${res.status}`);

  const data: BoardPlaces = await res.json();
  console.log(`${process.env.API_URL}/boards/places`)
  const resp = await fetch(`${process.env.API_URL}/boards/places`, {
    headers: { "Content-Type": "application/json" },
  })
  if (!resp.ok) console.error(`HTTP ${resp.status}`);

  const allPlaces: Places = await resp.json();

  return {p: {
    places: allPlaces.places.filter((place: Place) =>
      !data.places.some(boardPlace => boardPlace.place.place_id === place.place_id) || place.place_type === "normal")
  }, bp: data}
}

export async function getBoardPlaces(boardId: number): Promise<BoardPlaces> {
  const res = await fetch(`${process.env.API_URL}/boards/places/${boardId}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) console.error(`HTTP ${res.status}`);

  return await res.json();
}
export async function updateCoordinates(boardId: number, place: BoardPlace): Promise<number> {
  console.log("Updating coordinates for boardId:", boardId, "place:", place);
  const res = await fetch(`${process.env.API_URL}/boards/places/${boardId}/coordinate`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(place),
  });

  if (!res.ok) console.error(`HTTP ${res.status}`);

  return await res.json();
}
