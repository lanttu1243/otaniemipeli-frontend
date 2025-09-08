"use client";

import { useState } from "react";
import { Board, Drink } from "@/utils/types";
import { addBoard } from "@/utils/fetchers";

export default function AddBoardForm({ refresh }: { refresh: () => void }) {
  const [open, setOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const board: Board = {
      id: -1,
      name: data.get("name") as string,
    };

    addBoard(board, localStorage.getItem("auth_token")).then();
    refresh();
    setOpen(false);
  }

  return (
    <>
      <button className="button ml-auto" onClick={() => setOpen(true)}>
        Lisää Lauta
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-lg bg-white p-6 shadow"
          >
            <h2 className="mb-4 text-xl font-semibold">Uusi lauta</h2>
            <input
              name="name"
              required
              placeholder="Nimi"
              className="mb-3 w-full rounded border px-3 py-2"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="button"
              >
                Eiku
              </button>
              <button type="submit" className="button">
                Tallenna
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
