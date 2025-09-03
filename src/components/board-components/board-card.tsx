"use client";
import { Board } from "@/utils/types";
import { usePathname, useRouter } from "next/navigation";

export default function BoardCard({ board, active=true }: { board: Board, active?: boolean }): JSX.Element {
  const router = useRouter();
  const path = usePathname();
  return (
    <div
      className={`${active ? "button" : "box"} list-none center w-full`}
      onClick={() => active && router.push(`${path}/${board.id}`)}
    >
      {board.name}
    </div>
  );
}
