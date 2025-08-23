import {BoardPlace, BoardPlaces} from "@/utils/types";
import {getPlaceColor} from "@/utils/colors";
import React, {useRef} from "react";
import {updateCoordinates} from "@/utils/fetchers";


export default function SquareLayer({
                                      placesIn,
                                      focusedPlace,
                                      setFocusedPlace,
                                      photo,
                                      functional=false
}: {
  placesIn: BoardPlaces,
  focusedPlace: BoardPlace,
  setFocusedPlace: React.Dispatch<React.SetStateAction<BoardPlace>>,
  photo: boolean,
  functional?: boolean,
}) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [places, setPlaces] = React.useState<BoardPlaces>(placesIn);
  const keyDownHandler = (e: React.KeyboardEvent, place: BoardPlace) => {
    const l = 0.05;
    if (!functional) return;
    if (e.key === 'ArrowUp') moveFocused(0, -l);
    else if (e.key === 'ArrowDown') moveFocused(0, l);
    else if (e.key === 'ArrowLeft') moveFocused(-l, 0);
    else if (e.key === 'ArrowRight') moveFocused(l, 0);
    else if (e.key === 'w') moveFocused(0, -l);
    else if (e.key === 's') moveFocused(0, l);
    else if (e.key === 'a') moveFocused(-l, 0);
    else if (e.key === 'd') moveFocused(l, 0);
    else if (e.key === 'Enter') {
      // Handle Enter key if needed
      updateCoordinates(place.board_id, place).then()
    }
  }

  const moveFocused = (dx: number, dy: number) => {
    if (focusedPlace === null || !places || !functional) return;

    const updated = { ...places };
    updated.places = updated.places.map((p, idx) => {
      if (idx !== focusedPlace.place_number) return p;

      return {
        ...p,
        x: Math.min(100, Math.max(0, p.x + dx)),
        y: Math.min(100, Math.max(0, p.y + dy)),
      };
    });

    setPlaces(updated);
  };

  return (
    <div  ref={boxRef}>
      {places.places.map((place) => (
        <div style={
          {
            "--color-square": getPlaceColor(place.place.place_type, false),
            "--color-square-hover": getPlaceColor(place.place.place_type, true),
          } as React.CSSProperties
        }
             tabIndex={0}
             key={place.place_number}
             onFocus={() => setFocusedPlace(place)}
             onKeyDown={(e) => {
               keyDownHandler(e, place);
             }}
             className="outline-none"
        >
          <div
            className={photo && !(focusedPlace.place_number == place.place_number) ? `absolute rounded-full
                hover:border-[5px]
                hover:border-[var(--color-square)] 
                ${place.end ? 'end-ring' : ''}  `
              : `
                absolute rounded-full border-[5px]
                border-[var(--color-square)] 
                hover:border-[var(--color-square-hover)] 
                ${place.end ? 'end-ring' : ''}
                `}
            style={{
              height: '6.20%',
              width: `3.48%`,
              top: `${place.y}%`,
              left: `${place.x}%`,
              transform: 'translate(-50%, -50%)'        ,
            }}>
            <div className="w-full h-full items-center justify-center flex"
            >
              {place.place_number === focusedPlace.place_number && <div
                  className="w-[65%] h-[65%] bg-[var(--color-square)] border-[var(--color-square)] border-4 rounded-full transition-colors duration-200"/>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
