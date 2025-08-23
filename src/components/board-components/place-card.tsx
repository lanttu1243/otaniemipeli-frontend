import {BoardPlace} from "@/utils/types";
import React from "react";
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
        <div className="flex gap-1 w-full h-full">
          <div className="w-full items-center justify-center p-2 border-r-1 border-amber-800 overflow-y-scroll">
            <p className="text-justify text-sm pr-1 ">
              {place.place.rule}
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center p-2 justify  -center min-w-2/5 h-full overflow-y-scroll">
            {place.drinks.drinks.length > 0 &&
            place.drinks.drinks.map((drink) => (
              <PlaceDrinkCard drink={drink} key={drink.drink.id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
