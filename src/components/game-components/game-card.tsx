import {GameInfo} from "@/utils/types";

export default function GameCard({ game }: { game: GameInfo }) {
  return (
    <li key={game.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
      <p className="text-gray-600">Lauta: {game.board}</p>
      <p className="text-gray-600">Aloitusaika: {new Date(game.start_time).toLocaleString()}</p>
      <p className={`font-medium ${game.finished ? 'text-green-600' : 'text-red-600'}`}>
        {game.finished ? 'Peli on loppunut' : 'Peli on käynnissä'}
      </p>
    </li>
  );
}
