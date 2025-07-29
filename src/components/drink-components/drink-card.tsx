"use client";
import {Drink, DrinkIngredients, IngredientQty, PlaceDrink} from "@/utils/types";
import {useState} from "react";
import AddDrinkIngredientForm from "@/components/drink-components/add-drink-ingredient-form";
import IngredientCard from "@/components/drink-components/ingredient-card";
import {deleteDrink, getDrinkIngredients} from "@/utils/fetchers";
import {useRouter} from "next/navigation";

export default function DrinkCard(
  {
    drink,
    functional,
    refreshListAction,
  }: {
    drink: DrinkIngredients,
    functional: boolean,
    refreshListAction: () => void,
  }): JSX.Element {
  const [state, setState] = useState(false);
  const [drink_ingredients, setDrinkIngredients] = useState(drink.ingredients);
  const [drinkIngrLen, setDrinkIngrLen] = useState(drink_ingredients.length);
  let router = useRouter();

  const onClickHandle = async () => {
    await updateIngredients(); // ensure ingredients are fetched
    setState(prev => !prev);   // then toggle form
  };
  const updateIngredients = async () => {
    const drinkIngredients = await getDrinkIngredients(drink.drink.id);
    setDrinkIngredients(drinkIngredients.ingredients);
    setDrinkIngrLen(drinkIngredients.ingredients.length);
    refreshListAction?.()
  };

  const onDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    updateIngredients().then();
  };

  return (
    <li className="shadow-md box hover:border-amber-600 hover:py-3 items-center justify-center w-full"
        onClick={onClickHandle}>
      <div className="flex items-center justify-items-start w-full">
        <p className="text-base font-bold text-right px-2 w-3/7">{drink.drink.id}</p>
        <p className="text-base font-bold text-right px-2 w-3/7">{drink.drink.name}</p>
        {drink.abv > 0 ? <p className="text-base w-2/12 px-1 text-right border-amber-700 border-l">{drink.abv}%</p>
        : <p className="text-base w-2/12 px-1 text-right border-amber-700 border-l">0.0%</p>}
        {drink.quantity > 0 ? <p className="text-base w-2/12 px-1 text-left border-amber-700 border-l">{Math.round(drink.quantity)}cl</p>
        : <p className="text-base w-3/12 px-1 text-center border-amber-700 border-l">0cl</p>}
        <div className="p-0 w-2/5" onClick={(e) => {
          e.stopPropagation()
          updateIngredients().then()
          router.refresh()
        }}>
          {state ? <button
            className="button w-full my-1 text-sm"
            onClick={(e) => {
              e.stopPropagation();
              deleteDrink(drink.drink.id).then();
              refreshListAction?.()
            }}>
            Poista juoma
          </button> : null}
        </div>
      </div>
      {functional && state && drink_ingredients.length >= drinkIngrLen ?
        <AddDrinkIngredientForm
          drink={drink.drink}
          active={state}
          ingredientsStart={drink_ingredients}
          onUpdateAction={updateIngredients}
        /> : null}
      {state ?
        <ul className="grid gap-2 mt-3 w-full">
          {drink_ingredients.map((ingredient) => (
                  <IngredientCard
                    key={ingredient.ingredient.id}
                    ingredient={ingredient.ingredient}
                    quantity={ingredient.quantity}
                    drink_id={drink.drink.id}
                    deleteFromDrink={true}
                    onDelete={onDeleteClick} />
          ))}
        </ul> : null}
    </li>
  );
}
export function DrinkCardNoIngredients({drink, className}: {drink: Drink, className: string}): JSX.Element {
  return (
    <div className={className}>
      <li className="bg-white shadow-md rounded-2xl border-2 border-amber-800 px-6 py-2 items-center">
        <div className="flex items-center justify-items-start w-100">
          <h3 className="text-lg font-bold text-left px-1 w-3/7">{drink.name}</h3>
        </div>
      </li>
    </div>
  );
}
export function PlaceDrinkCard(
  {
    drink,
  }: {
    drink: PlaceDrink,
  }): JSX.Element {
  return (
      <div className="flex items-center justify-items-start w-100">
        <h3 className="text-lg font-bold text-left px-1 w-3/7">{drink.drink.name}</h3>
        <p>{drink.refill ? "t" : "f"}</p>
        <p>{drink.optional ? "t" : "f"}</p>
        <p>{drink.n}</p>
      </div>
  );
}
