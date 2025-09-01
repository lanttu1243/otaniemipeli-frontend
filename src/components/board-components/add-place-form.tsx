"use client";

import { useState } from "react";
import { postPlace } from "@/utils/fetchers";
import { Place, PlaceType } from "@/utils/types";
import { getPlaceColor } from "@/utils/colors";
import { useRouter } from "next/navigation";

export default function AddPlaceForm() {
  const defaultPlace: Place = {
    place_id: -1,
    place_name: "Paikan nimi",
    rule: "Sääntö",
    place_type: "normal",
  };
  const router = useRouter();

  const [place, updatePlace] = useState<Place>(defaultPlace);
  const [selected, setSelected] = useState<PlaceType>("normal");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postPlace(place, localStorage.getItem("auth_token") ?? "").then();
    updatePlace(defaultPlace);
    setSelected("normal");
    e.currentTarget.reset(); // Reset the form fields

    router.refresh();
  };

  return (
    <form className="justify-center gap-4 p-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Lisää paikka</h2>
      <input
        type="text"
        placeholder={place.place_name}
        className="border border-gray-300 rounded-lg p-2 w-full"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          updatePlace({
            ...place,
            place_name: e.target.value,
          });
        }}
      />
      <div
        style={
          {
            "--place-color": getPlaceColor(place.place_type, false),
            "--place-color-selected": getPlaceColor(place.place_type, true),
          } as React.CSSProperties
        }
      >
        <label htmlFor="placeType">Paikan tyyppi:</label>
        <select
          id="placeType"
          value={selected}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const newType = e.target.value as PlaceType;
            setSelected(newType);
            updatePlace({
              ...place,
              place_type: newType,
            });
          }}
          className={`
    rounded-2xl
    border-4
    px-5 py-4
    w-full
    border-[var(--place-color)]
    focus:outline-none
    focus:border-[var(--place-color-selected)]
  `}
        >
          {(["normal", "food", "sauna", "special", "guild"] as PlaceType[]).map(
            (type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ),
          )}
        </select>
      </div>
      <textarea
        placeholder={place.rule}
        className="border border-gray-300 rounded-lg p-2 w-full"
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          updatePlace({
            ...place,
            rule: e.target.value,
          });
        }}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-colors"
      >
        Lisää paikka
      </button>
    </form>
  );
}
