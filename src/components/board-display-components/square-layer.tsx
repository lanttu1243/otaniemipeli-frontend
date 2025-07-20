import {BoardPlace, BoardPlaces} from "@/utils/types";
import {getPlaceColor} from "@/utils/colors";
import React from "react";
import {updateCoordinates} from "@/utils/fetchers";


export default function SquareLayer({
                                      placesIn,
                                      focusedIndex,
                                      setFocusedIndex
}: {
  placesIn: BoardPlaces,
  focusedIndex: number,
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>
}) {
  const [places, setPlaces] = React.useState<BoardPlaces>(placesIn);
  const keyDownHandler = (e: React.KeyboardEvent, place: BoardPlace) => {
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
  }

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
    <div>
      {places.places.map((place, idx) => (
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
               keyDownHandler(e, place);
             }}
             className="outline-none"
        >
          <div
            className={`
                absolute rounded-full border-[3px]
                border-[var(--color-square)] 
                hover:border-[var(--color-square-hover)] 
                ${place.end ? 'end-ring' : ''}
                `}
            style={{
              width: `30px`,
              height: '30px',
              top: `${place.y}%`,
              left: `${place.x}%`,
              transform: 'translate(-50%, -50%)',
            }}>
            <div className="w-full h-full items-center justify-center flex"
            >
              {place.place_number === focusedIndex && <div
                  className="w-[15px] h-[15px] bg-[var(--color-square-hover)] border-[var(--color-square)] border-4 rounded-full transition-colors duration-200"/>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
