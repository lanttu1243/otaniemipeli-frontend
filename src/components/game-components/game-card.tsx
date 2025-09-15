export default function GameCard({
  game,
  link = false,
  className,
}: {
  game: Game;
  link?: boolean;
  className?: string;
}) {
  return (
    <li
      key={game.id}
      className={`${className} box`}
      onClick={() =>
        link ? (window.location.href = `/referee/games/${game.id}`) : null
      }
      style={{ cursor: "pointer" }}
    >
      <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
      <p className="text-gray-600">Lauta: {game.board}</p>
      <p className="text-gray-600">
        Aloitusaika: {new Date(game.start_time).toLocaleString()}
      </p>
      <p
        className={`font-medium ${game.finished ? "text-green-600" : "text-red-600"}`}
      >
        {game.started && !game.finished
          ? "Peli on käynnissä"
          : game.finished
            ? "Peli on päättynyt"
            : "Peli ei ole alkanut"}
      </p>
    </li>
  );
}
