"use client";
import React, {useEffect, useState} from "react";
import {DrinkIngredients, Drinks, DrinksIngredients} from "@/utils/types";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {getDrinks} from "@/utils/fetchers";
import {DrinkCardNoIngredients} from "@/components/drink-components/drink-card";

export default function AddDrinkToPlace(
  {
    placeNumber,
  }: {
    placeNumber: number,
  }
) {

  const [drinks, setDrinks] = useState<DrinksIngredients>( {drink_ingredients: []} );
  const [selectedDrinks, setSelectedDrinks] = useState<DrinksIngredients>( {drink_ingredients: []} );
  const deleteDrink = (id: number) => {
    const list = [...selectedDrinks.drink_ingredients];

    const idx = list.findIndex(drink => drink.drink.id === id); // first match
    if (idx !== -1) {
      list.splice(idx, 1);          // remove exactly 1 element at that place
    }
    setSelectedDrinks({
      drink_ingredients: list
    });
  }
  useEffect(() => {
    getDrinks().then(drinks => {
      setDrinks(drinks);
    })
  }, []);
  const addDrink = (drink: DrinkIngredients) => {
    setSelectedDrinks({drink_ingredients: [...selectedDrinks.drink_ingredients, drink]});
  }

  return (
    <div className="flex flex-col gap-2 w-full h-full max-h-[28vh] mx-auto box">
      <h3 className="text-2xl font-bold">Lisää juomia valittuun ruutuun</h3>
      <div className="flex gap-2 h-full overflow-y-scroll">
      {drinks.drink_ingredients.length > 0 &&
          <Menu>
              <MenuButton
                  className="rounded text-base bg-amber-800 p-1 text-white h-10 mx-1 items-center justify-center w-2/5 hover:bg-amber-600">
                  Juomat
              </MenuButton>
              <MenuItems anchor="right" className="text-sm text-gray-900 font-bold rounded-2xl z-50 h-3/4">
                {drinks.drink_ingredients
                  .sort((a, b) => a.drink.name.localeCompare(b.drink.name))
                  .map((drink) => (
                    <MenuItem key={drink.drink.id}>
                      <div className="w-full bg-amber-800 data-focus:bg-amber-700 hover:bg-amber-600 p-3"
                           onClick={() => addDrink(drink)}>
                        <p>
                          {drink.drink.name}
                        </p>
                      </div>
                    </MenuItem>
                  ))
                }
              </MenuItems>
          </Menu>}
        <div className="flex flex-col gap-1 w-full h-full overflow-hidden overflow-y-scroll box list-none">
          {selectedDrinks.drink_ingredients.length > 0 &&
            selectedDrinks.drink_ingredients.map((drink, index) => (
              <DrinkSelectionCard key={index} drink={drink} onDelete={deleteDrink} />
            ))}
        </div>
      </div>
    </div>
  );
}
function DrinkSelectionCard({
  drink,
  onDelete,
}: {
  drink: DrinkIngredients,
  onDelete: (id: number) => void,
}): JSX.Element {
  const [refill, setRefill] = useState<boolean>(false);
  const [optional, setOptional] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col gap-2 w-full box p-2 cursor-pointer"
    >
      <div className="flex h-1/3">
        <p className="mr-auto text-lg font-bold">{drink.drink.name}</p>
        <div className="flex box bg-amber-600 hover:bg-amber-800 ml-auto justify-center items-center" onClick={() => onDelete(drink.drink.id)}>
          <p>Poista</p>
        </div>
      </div>
      <div className="flex gap-1">
        <div className={`flex gap-2 w-1/2 box items-center justify-center`} onClick={() => setRefill(!refill)}>
          <p className="text-sm w-2/3">Refill</p>
          <p className={`w-min-1/3 box ${refill ? "bg-emerald-800 border-emerald-800" : ""}`}></p>
        </div>
        <div className={`flex gap-2 w-1/2 box items-center justify-center`} onClick={() => setOptional(!optional)}>
          <p className="text-sm w-2/3">Optional</p>
          <p className={`w-min-1/3 box ${optional ? "bg-emerald-800 border-emerald-800" : ""}`}></p>
        </div>
    </div>
    </div>
  );
}
