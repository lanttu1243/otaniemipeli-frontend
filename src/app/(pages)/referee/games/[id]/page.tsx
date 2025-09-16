"use client";

import React, { use, useEffect, useState } from "react";
import GameCard from "@/components/game-components/game-card";
import { useSocket } from "@/app/(pages)/referee/template";
import TeamList from "@/components/team-components/team-list";
import GameStartDialogue from "@/components/game-components/game-start-dialogue";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [gameData, setGameData] = useState<GameData | undefined>(undefined);
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;
    socket.emit("game-data", parseInt(id));
    socket.on("reply-game-data", (data: GameData) => {
      setGameData(data);
    });
  }, [setGameData, id, socket]);

  const doGameUpdate = (updatedGame: Game) => {
    setGameData((prev) => (prev ? { ...prev, game: updatedGame } : prev));
  };

  if (!gameData) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return (
    <div className="flex h-[85dvh] box">
      <div className="flex flex-col gap-2 flex-1">
        <h1>{gameData.game.name}</h1>
        <GameCard game={gameData.game} className="w-full" />
        <TeamList game={gameData.game} className="w-full max-h-1/2" />
        {!gameData.game.started && (
          <GameStartDialogue
            game={gameData.game}
            setGameAction={doGameUpdate}
            className="w-full"
          />
        )}
      </div>
      <div className="flex-3">
        <p>Hello</p>
      </div>
    </div>
  );
}
