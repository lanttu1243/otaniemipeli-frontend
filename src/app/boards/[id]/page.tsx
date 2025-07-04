import BoardCard from "@/components/board-components/board-card";
import {getBoard} from "@/utils/fetchers";
import {Board} from "@/utils/types";

export default async function Page({params}: { params: { id: string } }) {
    let board: Board = await getBoard(params.id as unknown as number);
  return (
    <div className="grid min-h-full gap-4 sm:px-10 sm:py-4">
      <div className="text-center items-center w-full">
        <h1 className="text-gray-900 text-2xl font-bold">
          {board.name}
        </h1>
      </div>
    </div>
  );
}
