/* components/AddPlaceForm.tsx */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {Drink} from "@/utils/types";

export default function AddDrinkForm( {refresh}: {refresh: () => void}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const drink: Drink = {
      id: -1,
      name: data.get("name") as string,
    }

    await fetch("/api/drinks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(drink),
    });
    refresh();
    setOpen(false);
    router.refresh();
  }

  return (
    <>
      <button
        className="rounded text-lg bg-amber-800 px-2 py-1 text-white items-center justify-center ml-auto"
        onClick={() => setOpen(true)}
      >
        Lisää juoma
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-lg bg-white p-6 shadow"
          >
            <h2 className="mb-4 text-xl font-semibold">Uusi juoma</h2>
            <input
              name="name"
              required
              placeholder="Name"
              className="mb-3 w-full rounded border px-3 py-2"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded bg-gray-400 hover:bg-gray-300 px-3 py-1"
              >
                Eiku
              </button>
              <button
                type="submit"
                className="rounded bg-amber-800 hover:bg-amber-700 px-3 py-1 text-white"
              >
                Tallenna
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
