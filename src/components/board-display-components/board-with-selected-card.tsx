"use client";
import React, {useEffect, useState} from "react";
import {BoardPlaces} from "@/utils/types";
import {getBoardPlaces} from "@/utils/fetchers";
import BoardWithSquares from "@/components/board-display-components/board-with-squares";
import PlaceCard from "@/components/board-components/place-card";
import AddDrinkToPlace from "@/components/board-display-components/add-drink-to-place";

export default function BoardWithSelectedCard({
                                                focusedIndex,
                                                setFocusedIndex
}: {
  focusedIndex: number,
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>
}): JSX.Element {
  const [places, setPlaces] = useState<BoardPlaces | undefined>();


  useEffect(() => {
    getBoardPlaces(1).then(
      (data: BoardPlaces) => {
        setPlaces(data);
        if (data.places.length > 0) {
          setFocusedIndex(data.places[0].place_number);
        }
      }
    ).catch((error) => {
      console.error('Error fetching board places:', error)
    })
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full mx-auto">
      { places &&
        <BoardWithSquares
            places={places}
            focusedIndex={focusedIndex}
            setFocusedIndex={setFocusedIndex}/>
      }
      {
        places &&
          (
            <div className="flex items-start justify-center w-full gap-4">
              <div className="w-2/3">
                <PlaceCard
                  place={places.places.find((p) => p.place_number === focusedIndex)?.place}
                  placeNumber={focusedIndex}/>
              </div>
            </div>
          )
      }

    </div>
  )
}
