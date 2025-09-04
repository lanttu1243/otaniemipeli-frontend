import React from "react";
import BoardList from "@/components/board-components/boards-list";

export default function BoardOverlay(): JSX.Element {
  return (
    <div className="flex center w-full">
      <BoardList className="w-1/4" />
    </div>
  );
}
