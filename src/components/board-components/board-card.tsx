"use client";
import {Board} from "@/utils/types";
import {usePathname, useRouter} from "next/navigation";

export default function BoardCard(
  {
    board,
  }: {
    board: Board,
  }): JSX.Element {
  const router = useRouter();
  const path = usePathname()
  return (
    <div className="shadow-md box list-none hover:border-amber-600 hover:border-4 items-center justify-center w-full"
    onClick={() => router.push(`${path}/${board.id}`)}>
      <div className="text-center items-center w-full">
        <p className="text-lg font-semibold text-gray-900">
          {board.name}
        </p>
      </div>
    </div>
  );
}
