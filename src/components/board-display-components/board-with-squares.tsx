import Image from "next/image";
import mapImage from "@/public/board.png";
import LineLayer from "@/components/board-display-components/line-layer";
import SquareLayer from "@/components/board-display-components/square-layer";
import React from "react";
import {BoardPlace, BoardPlaces} from "@/utils/types";

export default function BoardWithSquares( {
  places,
  focusedPlace,
  setFocusedPlace
  }: {
  places: BoardPlaces,
  focusedPlace: BoardPlace,
  setFocusedPlace: React.Dispatch<React.SetStateAction<BoardPlace>>
} ): JSX.Element {
  return (
    <div className="flex flex-col relative w-full mx-auto">
      <Image
        src={mapImage}
        alt="Game Board"
        className="w-full h-auto"
        priority
      />

      <div className="absolute top-0 left-0 w-full h-full">
        {places && <LineLayer places={places} />}
        {places && <SquareLayer placesIn={places} focusedPlace={focusedPlace} setFocusedPlace={setFocusedPlace} />}
      </div>
    </div>
  );
}
