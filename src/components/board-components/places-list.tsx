import {Ingredient, Ingredients} from "@/utils/types";
import IngredientCard from "@/components/drink-components/ingredient-card";
import AddIngredientDialog from "@/components/drink-components/add-ingredient-form";

export default async function PlacesList() {
  const res = await fetch(process.env.API_URL + "/ingredients", {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    return (
      <div className="items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-red-500">Error fetching ingredients!</h1>
        <p className="text-sm text-gray-900">{res.status}</p>
      </div>
    )
  }

  const ingredients: Ingredients = await res.json();
  return (
    <div className="items-center justify-center w-120 h-80 overflow-y-scroll rounded-2xl py-6 border-amber-800 border-2">
      <div className="mb-4 flex items-center justify-center px-4 gap-x-2 w-full">
        <h1 className="text-4xl font-bold pl-2 text-left">Ainesosalista</h1>
        <AddIngredientDialog />
      </div>
      <ul className="grid gap-2 overflow-y-scroll px-4 py-2">
        {ingredients ?
          ingredients.ingredients.sort((i, b) => {
            return i.name.toLowerCase().localeCompare(b.name.toLowerCase());
          }).map((ingredient: Ingredient) => (
          <IngredientCard key={ingredient.id} ingredient={ingredient} />
        )) : <p>No ingredients!</p>}
      </ul>
    </div>
  );
}
