"use client";
import { DrinkIngredients, PlaceDrink } from "@/utils/types";
import DrinkCard from "@/components/drink-components/drink-card";
import AddDrinkForm from "@/components/drink-components/add-drink-form";
import { useCallback, useEffect, useState } from "react";
import { getDrinkIngredients, getDrinks } from "@/utils/fetchers";
import Petrified from "@/components/petrified";

export default function DrinkList({
  className,
  drinksList,
}: {
  className?: string;
  drinksList?: PlaceDrink[];
}): JSX.Element {
  const [drinks, setDrinks] = useState<DrinkIngredients[] | null>([]);
  const [ethanol, setEthanol] = useState<number>(0);

  const fetchDrinks = useCallback(async () => {
    if (!drinksList) {
      const data = await getDrinks();
      setDrinks(data.drink_ingredients);
    }
  }, [setDrinks, drinksList]);

  useEffect(() => {
    void fetchDrinks();
  }, [fetchDrinks]);

  useEffect(() => {
    const fetchPlaceDrinks = async () => {
      const newDrinks: DrinkIngredients[] = [];
      let eth = 0;
      if (drinksList) {
        for (const drink of drinksList) {
          try {
            const data: DrinkIngredients = await getDrinkIngredients(
              drink.drink.id,
            );
            newDrinks.push(data);
            eth += drink.n * (data.abv / 100) * data.quantity;
          } catch (error) {
            console.error("Error fetching drink ingredients:", error);
          }
        }
        setDrinks(newDrinks);
        setEthanol(eth);
      }
    };
    void fetchPlaceDrinks();
  }, [drinksList]);

  return (
    <div className={`center py-4 box mb-auto max-h-[37.25dvh] ${className}`}>
      <div className="shrink-0 flex flex-col center px-4 w-full">
        <h1 className="font-redaction-b-70 pl-2 text-left">Juomat</h1>
        {!drinksList && <AddDrinkForm refresh={fetchDrinks} />}
        {drinks && drinksList && (
          <p className="font-mono text-xl w-full text-center">
            Ruudussa puhdasta etanolia {ethanol.toFixed(1)}
            cl
          </p>
        )}
      </div>
      <div className={`w-full min-h-0 max-h-3/4 flex-1 overflow-y-auto`}>
        <ul className="flex flex-col gap-2 w-full px-4 py-2">
          {drinks && drinks.length > 0 ? (
            drinks
              .sort((a, b) => a.drink.name.localeCompare(b.drink.name))
              .map((drink: DrinkIngredients) => (
                <DrinkCard
                  key={drink.drink.id}
                  drink={drink}
                  functional={!drinksList}
                  refreshListAction={fetchDrinks}
                />
              ))
          ) : (
            <p className="flex w-full center font-redaction-i-50 text-2xl">
              <Petrified className="h-[1.5rem] w-auto" /> Tässä ruudussa ei ole
              juomia <Petrified className="h-[1.5rem] w-auto" />
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
