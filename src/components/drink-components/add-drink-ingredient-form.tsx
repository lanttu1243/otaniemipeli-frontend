"use client";

import {useCallback, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Drink, DrinkIngredientsPost, Ingredient, IngredientQty} from "@/utils/types";
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {getIngredients} from "@/utils/fetchers";
import {DrinkCardNoIngredients} from "@/components/drink-components/drink-card";
import DropdownMenu from "@/components/dropdown-menu";

export default function AddDrinkIngredientForm(
  {
    drink,
    ingredientsStart,
    onUpdateAction,
  }: {
    drink: Drink,
    ingredientsStart: IngredientQty[],
    onUpdateAction: () => void
  }) {
  const ingredientsIn: Ingredient[] = ingredientsStart.map((ing: IngredientQty) => ing.ingredient);
  const router = useRouter();
  const [pendingRefresh, setPendingRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [, setIngr] = useState<Ingredient | null>(null);
  const [ingredient, setIngredient] = useState<Ingredient | undefined>(undefined);

  const [ingredientsTo, setIngredientsTo] = useState<Ingredient[]>(ingredientsIn);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const fetchAllIngredients = async () => {
    const data = await getIngredients();
    const filtered = data.ingredients.filter(
      ing => !ingredientsTo.some(i => i.id === ing.id)
    );
    setIngredients(filtered);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Check that none of the ingredients are in ingredientsIn
    const ingredientData: DrinkIngredientsPost = {
      drink: drink,
      ingredients: ingredientsTo.filter(
        (ing) => !ingredientsIn.some((ingr) => ingr.id === ing.id)
      ).map((ing) => ({
        ingredient: ing,
        quantity: Number(data.get(`quantity-${ing.id}`)) || 0,
      }))
    };

    await fetch("api/drinks/ingredients", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(ingredientData),
    });
    onUpdateAction()
    setOpen(false);
    setPendingRefresh(true);
  }

  const ingredientFetch = useCallback(() => {
    getIngredients().then((data) =>
      setIngredients(data.ingredients
        .filter((ing) =>
          !ingredientsTo.some((ingr) =>
            ingr.id === ing.id
          )
        )
      )
    )
  }, [ingredientsTo]);
  const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    await fetchAllIngredients();
    setOpen(true);
  }
  useEffect(() => {
    if (ingredient){
      updateIngredient(ingredient, 'insert');
    }
  }, [ingredient]);
  useEffect(() => {
    ingredientFetch();
  }, [ingredientFetch]);

  useEffect(() => {
    setIngredientsTo(ingredientsStart.map(iq => iq.ingredient));
  }, [ingredientsStart]);

  useEffect(() => {
    if (pendingRefresh) {
      router.refresh();
      setPendingRefresh(false);
    }
  }, [pendingRefresh, router]);

  const updateIngredient = (ingredient: Ingredient, mode: 'insert' | 'delete') => {
    applyIngredientChange()

    function applyIngredientChange() {
      if (!ingredient) {
        setIngr(null);
        return;
      }

      // 1. build quick-lookup sets
      const inToIds = new Set(ingredientsTo.map(i => i.id));
      const inInIds = new Set(ingredientsIn.map(i => i.id));
      const currentIds = new Set(ingredients.map(i => i.id));

      // 2. start new sets as clones of the old
      const newToIds = new Set(inToIds);
      const newIngIds = new Set(currentIds);

      // 3. apply your three rules in one switch
      switch (mode) {
        case 'insert':
          // only insert if it’s not already in “to”
          if (!inToIds.has(ingredient.id)) {
            newToIds.add(ingredient.id);
            newIngIds.delete(ingredient.id);
          }
          break;

        case 'delete':
          // only delete if it’s in “to” but not in “in”
          if (inToIds.has(ingredient.id) && !inInIds.has(ingredient.id)) {
            newToIds.delete(ingredient.id);
            newIngIds.add(ingredient.id);
          }
          break;

        default:
          // fallback: treat like insert + prune out any “to” items from the main list
          if (!inToIds.has(ingredient.id)) {
            newToIds.add(ingredient.id);
            // remove any items that just moved “to” from the main list
            for (const id of [...newToIds]) {
              newIngIds.delete(id);
            }
          }
      }

      const pool = [...ingredientsIn, ...ingredientsTo, ...(ingredient ? [ingredient] : [])];
      const newIngredientsTo = Array.from(newToIds)
        .map(id => pool.find(i => i.id === id)!)
        .filter(Boolean);

      const backPool = [...ingredients, ingredient!];
      const newIngredients = Array.from(newIngIds)
        .map(id => backPool.find(i => i.id === id)!)
        .filter(Boolean);

      setIngredientsTo(newIngredientsTo);
      setIngredients(newIngredients);
      setIngr(null);
    }

  }
  return (
    <>
      <button
        className="rounded-2xl text-base ml-auto bg-amber-800 hover:bg-amber-600 px-4 py-1 text-white items-center justify-center w-full"
        onClick={clickHandler}
      >
        Lisää ainesosa
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
            <h2 className="mb-1 text-xl font-semibold">Lisää ainesosa juomaan</h2>
            <DrinkCardNoIngredients drink={drink} className="mb-2"/>
            <div className="flex w-full mb-4 border-2 border-amber-800 rounded-3xl p-2 h-60">

              <DropdownMenu
                buttonText="Ainesosat"
                options={ingredients}
                selectedOption={ingredient}
                setSelectedOption={setIngredient} />

              <div className="flex flex-col items-center w-full h-full overflow-scroll mb-4">
                {ingredientsTo.length > 0 ?
                  ingredientsTo.map((ingredient_) => (
                    <div
                      className="flex border-amber-800 border-2 w-full rounded-2xl items-center mx-2 py-1 my-1 hover:border-amber-600"
                      key={ingredient_.id}
                      onClick={() => updateIngredient(ingredient_, 'delete')}>
                      <p
                        className={"text-base px-2 text-right border-amber-700 border-r font-bold w-full"}>{ingredient_.name}</p>
                      <p className={"text-base px-2 text-left border-amber-700 w-3/12"}>{ingredient_.abv}%</p>
                    </div>
                  ))
                  : <p className="text-base pl-2 my-2 text-gray-900">Select an ingredient</p>}
              </div>
            </div>
            <div className="flex w-full mb-4 border-2 border-amber-800 rounded-3xl p-2 h-80">
              <div className="flex flex-col items-center w-full h-full overflow-scroll mb-4">
                {ingredientsTo.length > 0 ?
                  ingredientsTo.map((ingredient_) => (
                    <div
                      className="flex border-amber-800 border-2 w-full rounded-2xl items-center px-3 py-1 my-1 hover:border-amber-600"
                      key={ingredient_.id}>
                      <p className={"text-base p-2 text-left font-bold w-11/12"}>{ingredient_.name}</p>
                      <input
                        name={`quantity-${ingredient_.id}`}
                        type="number"
                        key={ingredient_.id}
                        min="0"
                        step="0.1"
                        required
                        placeholder="Quantity in cl"
                        defaultValue={ingredientsStart
                            .find(ing => ing.ingredient.name === ingredient_.name)
                            ?.quantity
                          ?? undefined}
                        className="w-full text-left text-sm rounded border px-3 py-2"
                      />
                    </div>
                  ))
                  : <p className="text-base pl-2 my-2 text-gray-900">Select an ingredient</p>}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded bg-gray-100 px-3 py-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded bg-amber-800 px-3 py-1 text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
