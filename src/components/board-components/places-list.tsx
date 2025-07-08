import {Place, Places} from "@/utils/types";
import {getPlaceColor} from "@/utils/colors";
import React from "react";
import PlaceCard from "@/components/board-components/place-card";

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
          <li key={place.place_id}>
            < PlaceCard place={place}/>
          </li>
        )) : <p>No places!</p>}
      </ul>
    </div>
  )
}
