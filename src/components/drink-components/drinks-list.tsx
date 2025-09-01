"use client";
import { DrinkIngredients } from "@/utils/types";
import DrinkCard from "@/components/drink-components/drink-card";
import AddDrinkForm from "@/components/drink-components/add-drink-form";
import { useCallback, useEffect, useState } from "react";
import { getDrinks } from "@/utils/fetchers";

export default function DrinkList({
  className,
}: {
  className?: string;
}): JSX.Element {
  const [drinks, setDrinks] = useState<DrinkIngredients[] | null>([]);

  const fetchDrinks = useCallback(async () => {
    const data = await getDrinks();
    setDrinks(data.drink_ingredients);
  }, [setDrinks]);
  useEffect(() => {
    void fetchDrinks();
  }, [fetchDrinks]);

  return (
    <div
      className={`items-center justify-center py-6 box mb-auto ${className}`}
    >
      <div className="mb-4 flex items-center justify-center px-4 gap-x-2 w-full">
        <h1 className="text-3xl font-bold pl-2 text-left">Juomat</h1>
        <AddDrinkForm refresh={fetchDrinks} />
      </div>
      <div className="w-full overflow-y-scroll max-h-[75dvh]">
        <ul className="grid gap-2 w-full px-4 py-2">
          {drinks ? (
            drinks
              .sort((a, b) => a.drink.name.localeCompare(b.drink.name))
              .map((drink: DrinkIngredients) => (
                <DrinkCard
                  key={drink.drink.id}
                  drink={drink}
                  functional={true}
                  refreshListAction={fetchDrinks}
                />
              ))
          ) : (
            <p>No drinks!</p>
          )}
        </ul>
      </div>
    </div>
  );
}
