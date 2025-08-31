"use client"
import {GameInfo, Games} from "@/utils/types";
import {useEffect, useState} from "react";
import {useSocket} from "@/app/(pages)/referee/template";
import {getGames} from "@/utils/fetchers";
import GameCard from "@/components/game-components/game-card";

export default function GameList() {
  const [games, setGames] = useState<Games>({games: []});
  const socket = useSocket();

  if (socket) {
    socket.on('reply-games', (data: Games) => {
      setGames(data);
    })
  }
  useEffect(() => {
    if (!socket) return;

    console.log("Setting up game data interval");
    socket.on('reply-games', (data: Games) => {
      setGames(data);
    });
    const interval = setInterval(() => {
      console.log("getGameData");
      socket.emit('get-games');
    }, 1000);

    return () => {
      clearInterval(interval);
      socket.off('reply-games');
    };
  },[socket]);

  useEffect(() => {
    if (socket) {
      socket.on('reply-games', (data: Games) => {
        setGames(data);
      })
    } else {
      getGames().then(data => {
        setGames(data);
      });
    }
  }, []);

  return (
    <div className="w-full max-h-[50vh] overflow-hidden center box">
      <div className="mb-4 flex items-center justify-center px-4 gap-x-2 w-full">
        <h1 className="text-3xl font-bold pl-2 text-left">Pelit</h1>
      </div>
      <div className="w-full max-h-4/5 overflow-y-scroll">
        <ul className="grid gap-2 w-full px-4 py-2">
          {games ?
            games.games.sort((a, b) => b.start_time.localeCompare(a.start_time)).map((game: GameInfo) =>
              (<GameCard game={game} key={game.id}/>
            )) : <p>Ei pelejä!</p>}
        </ul>
      </div>
    </div>
  );
}
