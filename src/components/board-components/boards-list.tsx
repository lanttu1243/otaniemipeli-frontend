"use client";
import { getBoards } from "@/utils/fetchers";
import BoardCard from "@/components/board-components/board-card";
import { Board } from "@/utils/types";
import ItemList from "@/components/item-list";
import { useCallback, useEffect, useState } from "react";
import AddBoardForm from "@/components/board-components/add-board-form";

export default function BoardList({
  className,
}: {
  className?: string;
}): JSX.Element {
  const [boards, setBoards] = useState<Board[]>([]);
  const fetchBoards = useCallback(async () => {
    const data = await getBoards();
    setBoards(data.boards);
  }, [setBoards]);

  useEffect(() => {
    void fetchBoards();
  }, [fetchBoards]);

  return (
    <ItemList
      title="Laudat"
      addDialog={<AddBoardForm refresh={fetchBoards} />}
      className={className}
    >
      {boards.length > 0 ? (
        boards.map((board) => (
          <li key={board.id}>
            <BoardCard key={board.id} board={board} className="w-full" />
          </li>
        ))
      ) : (
        <p className="text-center text-juvu-tumma">Ei lautoja</p>
      )}
    </ItemList>
  );
}
