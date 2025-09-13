"use client";

import React from "react";
import GameCard from "@/components/game-components/game-card";
import { getGames } from "@/utils/fetchers";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [game, setGame] = React.useState<Game | undefined>(undefined);

  React.useEffect(() => {
    getGames().then((data) => {
      setGame(data.games.find((game) => game.id === parseInt(id)));
    });
  }, [setGame, id]);

  return <>{game && <GameCard game={game} className="m-4 p-4 w-1/2" />}</>;
}
