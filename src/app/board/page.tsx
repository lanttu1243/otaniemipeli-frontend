"use client";
import React, {useState} from "react";
import BoardWithSelectedCard from "@/components/board-display-components/board-with-selected-card";
import DrinkList from "@/components/drink-components/drinks-list";
import AddDrinkToPlace from "@/components/board-display-components/add-drink-to-place";
import {BoardPlace, BoardPlaces} from "@/utils/types";

export default function BoardOverlay(): JSX.Element {
  const [focusedPlace, setFocusedPlace] = useState<BoardPlace>({
    place_number: 0,
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

  return (
    <div className="flex gap-2 w-full h-[88vh] h-max-[88vh] justify-center">
      <div className="flex flex-col gap-2 w-1/3 h-full box">
        <div className="h-1/3 box">
          <DrinkList />
        </div>
        <div className="mb-auto h-full">
          <AddDrinkToPlace place={focusedPlace} />
        </div>
      </div>
      <div className="w-2/3 mr-auto">
        <BoardWithSelectedCard focusedPlace={focusedPlace} setFocusedPlace={setFocusedPlace} />
      </div>
    </div>
  );
}
