import {Place, Places} from "@/utils/types";
import {getPlaceColor} from "@/utils/colors";
import React from "react";

export default async function PlacesList(): Promise<JSX.Element> {
  const res = await fetch(`${process.env.API_URL}/boards/places`, {
    headers: { "Content-Type": "application/json" },
  })
  if (!res.ok) {
    return (
      <div className="items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-red-500">Error fetching places!</h1>
        <p className="text-sm text-gray-900">{res.status}</p>
      </div>
    )
  }
  const places: Places = await res.json();
  return (
    <div className="h-100 overflow-y-scroll">
      <ul className="flex flex-col gap-2 px-4 py-2">
        {places ? places.places.map((place: Place) => (
          <li key={place.place_id}
              className="flex flex-col items-start justify-start"
          style={
            {
              '--place-color': getPlaceColor(place.place_type, false),
              '--place-color-hover': getPlaceColor(place.place_type, true),
            } as React.CSSProperties
          }>
            <div className="flex flex-col gap-1 border-[var(--place-color)] hover:border-[var(--place-color-hover)] border-4 rounded-lg p-2 w-full h-full">
              <div className="flex gap-1 items-center justify-center">
                <p className="font-bold">
                  {place.place_name}
                </p>
              </div>
              <div className="w-full items-center justify-center p-1">
                <p className="text-justify w-full">
                  {place.rule}
                </p>
              </div>
            </div>
          </li>
        )) : <p>No places!</p>}
      </ul>
    </div>
  )
}
