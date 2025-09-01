"use client";
import { Ingredient } from "@/utils/types";
import { deleteIngredient } from "@/utils/fetchers";
import { useRouter } from "next/navigation";

export default function IngredientCard({
  ingredient,
  quantity,
  drink_id,
  deleteFromDrink,
  onDelete,
}: {
  ingredient: Ingredient;
  quantity?: number;
  drink_id?: number;
  deleteFromDrink?: boolean;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}): JSX.Element {
  const router = useRouter();
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (drink_id) {
      const deleted = await deleteIngredient(
        drink_id,
        ingredient.id,
        localStorage.getItem("auth_token") || "",
      );
      if (!deleted) {
        console.error("Failed to delete ingredient");
      }
    }
    onDelete?.(e);
    router.refresh();
  };

  const className = quantity
    ? "text-base px-1 text-right border-juvu-sini-800 border-"
    : "text-base px-1 text-left";

  return (
    <li className="shadow-md box items-center justify-center w-full">
      <div className="flex border-juvu-sini-800 items-center">
        <p className={className + "r w-[35%] font-bold text-right"}>
          {ingredient.name}
        </p>
        <p className={className + "r text-right w-3/12"}>{ingredient.abv}%</p>
        {quantity ? (
          <p className="text-left px-2 border-juvu-sini-800 border-r text-base w-[12%]">
            {Math.round(quantity)}cl
          </p>
        ) : null}
        <p className="text-base text-center pl-1 w-3/12">
          {ingredient.carbonated ? "🫧🫧" : ""}
        </p>
        {deleteFromDrink && drink_id ? (
          <button
            className="rounded text-sm ml-auto bg-juvu-sini-800 hover:bg-juvu-sini-600 px-4 py-1 text-white items-center justify-center"
            onClick={handleDelete}
          >
            Poista
          </button>
        ) : null}
      </div>
    </li>
  );
}
