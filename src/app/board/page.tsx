'use client';

import Image from 'next/image';
import mapImage from '@/public/board.jpg';

// coordinates.json
const squares = [
  { id: 1, x: 10, y: 80, color: 'yellow' },
  { id: 2, x: 20, y: 50, color: 'red' },
  { id: 3, x: 50, y: 22, color: 'blue' },
  { id: 4, x: 70, y: 40, color: 'green' },
  { id: 5, x: 30, y: 60, color: 'purple' },
  { id: 6, x: 80, y: 20, color: 'orange' },
  { id: 7, x: 90, y: 70, color: 'pink' },
  { id: 8, x: 60, y: 10, color: 'cyan' },
  { id: 9, x: 40, y: 30, color: 'brown' },
  { id: 10, x: 25, y: 75, color: 'gray' },
  { id: 11, x: 15, y: 55, color: 'lime' },
  { id: 12, x: 35, y: 45, color: 'teal' },
  // etc...
];


export default function BoardOverlay() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Image
        src={mapImage}
        alt="Game Board"
        className="w-full h-auto"
        priority
      />

      <div className="absolute top-0 left-0 w-full h-full">
        {squares.map((sq) => (
          <div style={
            {
              color: sq.color,
            }
          }>
            <div
              key={sq.id}
              className={`absolute rounded-full border-4`}
              style={{
                width: '30px',
                height: '30px',
                top: `${sq.y}%`,
                left: `${sq.x}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
