"use client";

import React, { use, useEffect, useState } from "react";
import GameCard from "@/components/game-components/game-card";
import { getGames } from "@/utils/fetchers";
import { useSocket } from "@/app/(pages)/referee/template";
import TeamList from "@/components/team-components/team-list";
import GameStartDialogue from "@/components/game-components/game-start-dialogue";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [game, setGame] = useState<Game | undefined>(undefined);
  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      socket.emit("get-games");
      socket.on("reply-games", (data: { games: Game[] }) => {
        setGame(data.games.find((game) => game.id === parseInt(id)));
      });
    } else {
      getGames().then((data) => {
        setGame(data.games.find((game) => game.id === parseInt(id)));
      });
    }
  }, [setGame, id, socket]);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return (
    <div className="h-[90dvh]">
      <h1>{game.name}</h1>
      <GameCard game={game} className="w-1/2 my-2" />
      <TeamList gameId={game.id} className="w-1/2 max-h-1/2" />
      <GameStartDialogue game={game} />
    </div>
  );
}
