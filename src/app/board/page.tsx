"use client";
import React, {useState} from "react";
import BoardWithSelectedCard from "@/components/board-display-components/board-with-selected-card";
import DrinkList from "@/components/drink-components/drinks-list";
import AddDrinkToPlace from "@/components/board-display-components/add-drink-to-place";

export default function BoardOverlay(): JSX.Element {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  return (
    <div className="flex gap-2 w-full h-[88vh] h-max-[88vh] justify-center">
      <div className="flex flex-col gap-2 w-1/3 h-full box">
        <div className="h-2/3 box">
          <DrinkList />
        </div>
        <div className="mb-auto h-full">
          <AddDrinkToPlace placeNumber={focusedIndex} />
        </div>
      </div>
      <div className="w-2/3 mr-auto">
        <BoardWithSelectedCard focusedIndex={focusedIndex} setFocusedIndex={setFocusedIndex} />
      </div>
    </div>
  );
}
