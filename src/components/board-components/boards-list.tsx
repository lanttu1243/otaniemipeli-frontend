import {getBoards} from "@/utils/fetchers";
import {Boards} from "@/utils/types";
import BoardCard from "@/components/board-components/board-card";

export default async function BoardList() {
  const boards: Boards = await getBoards()

  return (
    <div className="items-center justify-center w-2/3 max-h-2/5 py-6 overflow-y-scroll box mb-auto">
      <div className="mb-4 flex items-center justify-center px-4 gap-x-2 w-full">
        <h1 className="text-4xl font-bold pl-2 text-left">Laudat</h1>
      </div>
      <div className="w-full">
        <ul className="grid gap-2 w-full px-4 py-2">
          {boards.boards.length > 0 ?
            boards.boards.map((board) => (
              <li key={board.id}>
                <BoardCard key={board.id} board={board} />
              </li>
            )) : <p className="text-center text-gray-900">Ei lautoja</p>}
        </ul>
      </div>
    </div>
  );
}
