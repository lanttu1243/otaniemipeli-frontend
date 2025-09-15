"use client";
import { useSocket } from "@/app/(pages)/referee/template";
import { useEffect, useRef, useState } from "react";
import { DrinkCardNoIngredients } from "@/components/drink-components/drink-card";
import DropdownMenu from "@/components/dropdown-menu";

export default function GameStartDialogue({ game, className }: { game: Game, className?: string }) {
  const socket = useSocket();
  const [open, setOpen] = useState(false);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [selectedDrinks, setSelectedDrinks] = useState<Drink[]>([]);
  const [picked, setPicked] = useState<Drink | undefined>(undefined);

  const justOpened = useRef(true);

  const openModal = () => {
    setOpen(true);
    justOpened.current = true;
    requestAnimationFrame(() => {
      justOpened.current = false;
    });
  };

  useEffect(() => {
    if (!socket) return;
    socket.emit("get-drinks");
    socket.on("reply-drinks", (drinks: DrinksIngredients) => {
      setDrinks(drinks.drink_ingredients.map((d) => d.drink));
    });
  });
  useEffect(() => {
    if (!picked) return;
    setSelectedDrinks(prev => {
      const next = prev.some(d => d.id === picked.id) ? prev : [...prev, picked];
      setDrinks(dr => {
        const ids = new Set(next.map(d => d.id));
        return dr.filter(d => !ids.has(d.id));
      });
      return next;
    });
    setPicked(undefined);
  }, [picked, setPicked]);

  const handleSubmit = (e: React.FormEvent) => {
  }

  return (
    <>
      <div
        className={`${className} button`}
        onClick={(e) => {
          e.stopPropagation(); // extra safety if inside another clickable
          openModal();
        }}
      >
        Aloita peli
      </div>

      {open && drinks && (
        <div
          className="fixed inset-0 z-50 flex center width-1/2 bg-juvu-sini-800/50"
          onClick={(e) => {
            if (justOpened.current) return;
            if (e.target !== e.currentTarget) return;
            setOpen(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <form
            onSubmit={handleSubmit}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-lg bg-white p-6 shadow"
          >
            <div className="flex flex-col w-full mb-4 border-2 border-juvu-sini-800 rounded-3xl p-2 h-60">
              <DropdownMenu
                buttonText="Lisää juoma"
                options={drinks}
                selectedOption={picked}
                setSelectedOption={setPicked}
              />
              <div className="flex flex-col flex-1 gap-1 overflow-y-auto p-2">
                {selectedDrinks.length === 0 && (
                  <p className="text-gray-500">Ei valittuja juomia</p>
                )}
                {selectedDrinks.map((drink) => (
                  <DrinkCardNoIngredients key={drink.id} drink={drink} />
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="button-secondary"
                onClick={() => setOpen(false)}
              >
                Peruuta
              </button>
              <button
                type="submit"
                className="button-primary"
                disabled={selectedDrinks.length === 0}
              >
                Aloita peli
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
