'use client';

import Image from 'next/image';
import mapImage from '@/public/board.png';
import {BoardPlaces} from "@/utils/types";
import {getBoardPlaces, updateCoordinates} from "@/utils/fetchers";
import {useEffect, useState} from "react";
import {getPlaceColor} from "@/utils/colors";
import PlaceCard from "@/components/board-components/place-card";


export default function BoardOverlay(): JSX.Element {
  const [places, setPlaces] = useState<BoardPlaces | undefined>();
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

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

  const moveFocused = (dx: number, dy: number) => {
    if (focusedIndex === null || !places) return;

    const updated = { ...places };
    updated.places = updated.places.map((p, idx) => {
      if (idx !== focusedIndex) return p;

      return {
        ...p,
        x: Math.min(100, Math.max(0, p.x + dx)),
        y: Math.min(100, Math.max(0, p.y + dy)),
      };
    });

    setPlaces(updated);
  };

  return (
    <>
    <div>
      <div className="flex relative w-full max-w-4xl mx-auto">
        <Image
          src={mapImage}
          alt="Game Board"
          className="w-full h-auto"
          priority
        />

        <div className="absolute top-0 left-0 w-full h-full">
          {places && places.places.map((place, idx) => (
            <div style={
              {
                "--color-square": getPlaceColor(place.place.place_type, false),
                "--color-square-hover": getPlaceColor(place.place.place_type, true),
              } as React.CSSProperties
            }
              tabIndex={0}
              key={place.place_number}
              onFocus={() => setFocusedIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowUp') moveFocused(0, -0.2);
                else if (e.key === 'ArrowDown') moveFocused(0, 0.2);
                else if (e.key === 'ArrowLeft') moveFocused(-0.2, 0);
                else if (e.key === 'ArrowRight') moveFocused(0.2, 0);
                else if (e.key === 'w') moveFocused(0, -2);
                else if (e.key === 's') moveFocused(0, 2);
                else if (e.key === 'a') moveFocused(-2, 0);
                else if (e.key === 'd') moveFocused(2, 0);
                else if (e.key === 'Enter') {
                  // Handle Enter key if needed
                  updateCoordinates(place.board_id, place).then(
                    () => console.log(`Updated coordinates for place ${place.place_number}`),
                    (error) => console.error('Error updating coordinates:', error)
                  )
                }
              }}
              className="outline-none"
            >
              <div
                className={`absolute rounded-full border-[3px] border-[var(--color-square)] focus:border-[var(--color-square-hover)]`}
                style={{
                  width: '30px',
                  height: '30px',
                  top: `${place.y}%`,
                  left: `${place.x}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        {
          places ?
            <PlaceCard place={places.places.find((p) => p.place_number === focusedIndex)?.place} placeNumber={focusedIndex}/>
            : <p>No place selected</p>
        }
      </div>
    </div>
  </>
  );
}
