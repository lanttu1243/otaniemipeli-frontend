"use client";
import React, { useEffect, useState, use } from "react";
import { BoardPlace, BoardPlaces } from "@/utils/types";
import PlaceCard from "@/components/board-components/place-card";
import BoardWithSquares from "@/components/board-display-components/board-with-squares";
import { getBoardPlaces } from "@/utils/fetchers";
import DrinkList from "@/components/drink-components/drinks-list";
import { usePathname, useRouter } from "next/navigation";

export default function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}): JSX.Element {
  const { id } = use(params);
  const router = useRouter();
  const [focusedPlace, setFocusedPlace] = useState<BoardPlace>({
    place_number: -1,
    x: 0,
    y: 0,
    start: false,
    end: false,
    board_id: 1,
    place: {
      place_id: 0,
      place_name: "No selected place",
      rule: "",
      place_type: "normal",
    },
    connections: [],
    drinks: {
      drinks: [],
    },
  });
  const [places, setPlaces] = useState<BoardPlaces | undefined>();

  useEffect(() => {
    getBoardPlaces(id.toString())
      .then((data: BoardPlaces) => {
        setPlaces(data);
        if (data.places.length > 0) {
          setFocusedPlace(data.places[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching board places:", error);
      });
  }, []);

  return (
    <div className="flex gap-1 w-full h-[86vh] h-max-[86vh] justify-center">
      {places && (
        <div className="w-2/3">
          <BoardWithSquares
            places={places}
            focusedPlace={focusedPlace}
            setFocusedPlace={setFocusedPlace}
          />
        </div>
      )}
      <div className="flex flex-col w-1/3 max-h-[74.5dvh]">
        <DrinkList
          className="w-full max-h-1/2"
          drinksList={focusedPlace.drinks.drinks}
        />
        <PlaceCard className="w-full max-h-1/2" place={focusedPlace} />
      </div>
    </div>
  );
}
