import BoardCard from "@/components/board-components/board-card";
import { getBoard } from "@/utils/fetchers";
import { Board } from "@/utils/types";
import BoardPlacesList from "@/components/board-components/board-places-list";
import AddPlaceForm from "@/components/board-components/add-place-form";
import PlacesList from "@/components/board-components/places-list";
import AddPlaceToBoard from "@/components/board-components/add-place-to-board";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const board: Board = await getBoard(id as unknown as number);
  return (
    <div className="flex flex-col items-end w-full">
      <div className="justify-center items-center w-full">
        <BoardCard board={board} />
      </div>
      <div className="flex gap-4 sm:px-10 sm:py-4">
        <div className="flex min-h-full">
          <AddPlaceToBoard boardId={board.id} />
          <BoardPlacesList boardId={board.id} />
        </div>
        <div className="flex flex-col box h-full w-120">
          <AddPlaceForm />
          <PlacesList />
        </div>
      </div>
    </div>
  );
}
