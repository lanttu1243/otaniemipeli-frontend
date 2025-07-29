import {BoardPlace, Ingredient, Place} from "@/utils/types";
import {deleteIngredient} from "@/utils/fetchers";
import {useRouter} from "next/navigation";
import React, {MouseEventHandler} from "react";
import {getPlaceColor} from "@/utils/colors";
import {PlaceDrinkCard} from "@/components/drink-components/drink-card";

export default function PlaceCard({place, placeNumber}: {place: BoardPlace | undefined, placeNumber?: number}): JSX.Element {
  if (!place) {
    return <div className="text-red-500">Place not found</div>;
  }
  return (
    <div
      className="flex flex-col items-start justify-start w-min-full"
      style={
              {
                '--place-color': getPlaceColor(place.place.place_type, false),
                '--place-color-hover': getPlaceColor(place.place.place_type, true),
              } as React.CSSProperties
            }>
      <div className="flex flex-col gap-1 border-[var(--place-color)] hover:border-[var(--place-color-hover)] border-4 rounded-lg p-2 w-full h-full">
        <div className="flex gap-1 items-center justify-center w-full">
          <p className="text-left ml-auto">
            {place.place.place_id}
          </p>
          <p className="font-bold text-center w-full">
            {place.place.place_name}
          </p>
          {placeNumber &&
          <p className="text-right mr-auto">
          {placeNumber}
          </p>
          }
        </div>
        <div className="w-full items-center justify-center p-1 overflow-hidden overflow-y-scroll">
          <p className="text-justify w-full">
            {place.place.rule}
          </p>
        </div>
        <div>
          {place.drinks.drinks.length > 0 &&
          place.drinks.drinks.map((drink, i) => (
            <PlaceDrinkCard drink={drink} key={drink.drink.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}
