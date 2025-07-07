import {BoardPlace, BoardPlaces, Ingredient, Ingredients, PlaceType} from "@/utils/types";
import IngredientCard from "@/components/drink-components/ingredient-card";
import AddIngredientDialog from "@/components/drink-components/add-ingredient-form";
import React from "react";
import {getPlaceColor} from "@/utils/colors";

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
            return i.place_number - b.place_number
          }).map((boardPlace: BoardPlace) => (

          <li key={boardPlace.place_number}
              className="flex flex-col items-start justify-start p-2"
              style={
                {
                  '--place-color': getPlaceColor(boardPlace.place.place_type, false),
                  '--place-color-hover': getPlaceColor(boardPlace.place.place_type, true),
                } as React.CSSProperties
              }
          >
            <div className="flex gap-1 border-[var(--place-color)] hover:border-[var(--place-color-hover)] border-4 rounded-lg p-2 w-full h-full">
              <p>
                <span className="font-bold">ID: {boardPlace.place.place_id}</span>
              </p>
              <p>
                {boardPlace.place.place_name}: {boardPlace.place.place_type}
              </p>
              <p>
                {boardPlace.place.rule}
              </p>
              <p>
                {boardPlace.place_number}
              </p>
              <p>
                {boardPlace.start ? "Aloituspaikka" : ""}
                {boardPlace.end ? "Loppupaikka" : ""}
              </p>
            </div>
          </li>
        )) : <p>No ingredients!</p>}
      </ul>
    </div>
  );
}
