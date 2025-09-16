"use client";
import ItemList from "@/components/item-list";
import { useSocket } from "@/app/(pages)/referee/template";
import { useEffect, useState } from "react";
import AddTeamForm from "@/components/team-components/create-team-form";
import TeamCard from "@/components/team-components/team-card";

export default function TeamList({
  game,
  className,
}: {
  game: Game;
  className?: string;
}) {
  const [teams, setTeams] = useState<Teams>({ teams: [] });
  const socket = useSocket();
  useEffect(() => {
    if (socket) {
      socket.emit("get-teams", game.id);
      socket.on("reply-teams", (data: Teams) => {
        setTeams(data);
      });
    }
  }, [socket, game.id]);
  return (
    <ItemList
      title="Joukkueet"
      addDialog={!game.started && <AddTeamForm gameId={game.id} />}
      className={className}
    >
      {teams.teams.map((team) => (
        <TeamCard team={team} key={team.team_id} className="w-full" />
      ))}
    </ItemList>
  );
}
