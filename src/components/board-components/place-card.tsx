import { BoardPlace } from "@/utils/types";
import React from "react";
import { getPlaceColor } from "@/utils/colors";
import { PlaceDrinkCard } from "@/components/drink-components/drink-card";

export default function PlaceCard({
  place,
  placeNumber,
  className,
}: {
  place: BoardPlace | undefined;
  placeNumber?: number;
  className?: string;
}): JSX.Element {
  if (!place) {
    return <div className="text-red-500">Place not found</div>;
  }
  return (
    <div
      className={`${className} flex flex-col items-start justify-start`}
      style={
        {
          "--place-color": getPlaceColor(place.place.place_type, false),
          "--place-color-hover": getPlaceColor(place.place.place_type, true),
        } as React.CSSProperties
      }
    >
      <div className="flex flex-col gap-1 border-[var(--place-color)] bg-juvu-sini-400 shadow-lg shadow-juvu-kulta border-4 rounded-lg p-2 w-full h-full">
        <div className="flex gap-1 items-center justify-center w-full">
          <p className="font-mono text-left ml-auto">{place.place.place_id}</p>
          <p className="font-redaction-b-70 text-2xl text-center w-full">
            {place.place.place_name}
          </p>
          <p className="font-mono text-right mr-auto">{place.place_number}</p>
          {placeNumber && <p className="text-right mr-auto">{placeNumber}</p>}
        </div>
        <div className="flex gap-1 w-full h-full">
          <div className="w-full items-center justify-center p-2 border-r-1 border-juvu-sini-800 overflow-y-scroll">
            <p className="text-justify text-xl pr-1 font-mono">
              {place.place.rule}
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center p-2 justify  -center min-w-2/5 h-full overflow-y-scroll">
            {place.drinks.drinks.length > 0 &&
              place.drinks.drinks.map((drink) => (
                <PlaceDrinkCard drink={drink} key={drink.drink.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
