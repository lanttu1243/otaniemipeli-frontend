"use client";
import {DrinkIngredients, PlaceDrink} from "@/utils/types";
import DrinkCard from "@/components/drink-components/drink-card";
import AddDrinkForm from "@/components/drink-components/add-drink-form";
import { useCallback, useEffect, useState } from "react";
import {getDrinkIngredients, getDrinks} from "@/utils/fetchers";

export default function DrinkList({
  className,
  drinksList,
}: {
  className?: string;
  drinksList?: PlaceDrink[];
}): JSX.Element {
  const [drinks, setDrinks] = useState<DrinkIngredients[] | null>([]);

  const fetchDrinks = useCallback(async () => {
    if (!drinksList) {
      const data = await getDrinks();
      setDrinks(data.drink_ingredients);
    }
  }, [setDrinks]);

  useEffect(() => {
    void fetchDrinks();
  }, [fetchDrinks, drinksList]);

  useEffect(() => {
    setDrinks([]);
    const fetchPlaceDrinks = async () => {
      if (drinksList) {
        function onlyUnique(value: number, index: number, array: number[]) {
          return array.indexOf(value) === index;
        }
        for (const drink of drinksList.map((a) => a.drink.id).filter(onlyUnique)) {
          try {
            const data = await getDrinkIngredients(drink);
            setDrinks((prevDrinks) => (prevDrinks ? [...prevDrinks, data] : [data]));
          } catch (error) {
            console.error("Error fetching drink ingredients:", error);
          }
        }
      }
    };
    void fetchPlaceDrinks();
  }, [drinksList]);

  return (
    <div
      className={`items-center justify-center py-4 box mb-auto max-h-[37.25dvh] ${className}`}
    >
      <div className="shrink-0 flex flex-col items-center justify-center px-4 w-full">
        <h1 className="font-redaction-b-70 pl-2 text-left">Juomat</h1>
        {!drinksList && <AddDrinkForm refresh={fetchDrinks}/>}
        {drinks && drinksList &&
            <p className="font-mono text-xl w-full text-center">Ruudussa puhdasta etanolia {drinks.reduce((prev:  number, next) => {
              return prev + next.abv / 100 * next.quantity
            }, 0).toFixed(1)
            }cl</p>}
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
            <p className="w-full text-center font-redaction-i-50 text-2xl">😱 Tässä ruudussa ei ole juomia 😱</p>
          )}
        </ul>
      </div>
    </div>
  );
}
