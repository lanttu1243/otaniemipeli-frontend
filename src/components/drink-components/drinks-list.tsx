"use client"
import {DrinkIngredients, Drinks, DrinksIngredients} from "@/utils/types";
import DrinkCard from "@/components/drink-components/drink-card";
import AddDrinkForm from "@/components/drink-components/add-drink-form";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {getDrinks} from "@/utils/fetchers";

export default function DrinkList() {
  const [drinks, setDrinks] = useState<DrinkIngredients[] | null>([]);

  const router = useRouter();
  const fetchDrinks = async () => {
    let data = await getDrinks();
    setDrinks(data.drink_ingredients);
    router.refresh()
  }
  useEffect(() => {
    fetchDrinks().then();
  }, []);

  return (
    <div className="items-center justify-center w-1/2 max-h-2/5 py-6 overflow-y-scroll box mb-auto">
      <div className="mb-4 flex items-center justify-center px-4 gap-x-2 w-full">
        <h1 className="text-3xl font-bold pl-2 text-left">Juomat</h1>
        <AddDrinkForm refresh={fetchDrinks} />
      </div>
      <div className="w-full">
        <ul className="grid gap-2 w-full px-4 py-2">
          {drinks ?
            drinks.sort((a, b) =>  b.quantity*b.abv - a.quantity*a.abv).map((drink: DrinkIngredients) => (
              <DrinkCard key={drink.drink.id} drink={drink} functional={true} refreshListAction={fetchDrinks}/>
            )) : <p>No drinks!</p>}
        </ul>
      </div>
    </div>
  );
}
