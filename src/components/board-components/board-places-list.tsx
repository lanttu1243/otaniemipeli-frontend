import {BoardPlace, BoardPlaces, Ingredient, Ingredients, PlaceType} from "@/utils/types";
import IngredientCard from "@/components/drink-components/ingredient-card";
import AddIngredientDialog from "@/components/drink-components/add-ingredient-form";
import React from "react";
import {getPlaceColor} from "@/utils/colors";
import PlaceCard from "@/components/board-components/place-card";

export default async function BoardPlacesList({boardId}: {boardId?: number}) {
  const res = await fetch(process.env.API_URL + `/boards/places/${boardId}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    return (
      <div className="items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-red-500">Error fetching ingredients!</h1>
        <p className="text-sm text-gray-900">{res.status}</p>
      </div>
    )
  }

  const boardPlaces: BoardPlaces = await res.json();
  return (
    <div className="items-center justify-center w-120 h-80 overflow-y-scroll rounded-2xl py-6 border-amber-800 border-2">
      <ul className="grid gap-2 overflow-y-scroll px-4 py-2">
        {boardPlaces ?
          boardPlaces.places.sort((i, b) => {
            return b.place_number - i.place_number
          }).map((boardPlace: BoardPlace) => (

          <li key={boardPlace.place_number}>
            <PlaceCard place={boardPlace.place} placeNumber={boardPlace.place_number} />
          </li>
        )) : <p>No ingredients!</p>}
      </ul>
    </div>
  );
}
