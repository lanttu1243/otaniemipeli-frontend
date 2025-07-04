import IngredientList from "@/components/drink-components/ingredient-list";
import DrinkList from "@/components/drink-components/drinks-list";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-3.5 max-h-[90dvh] sm:px-10 sm:py-4 font-[family-name:var(--font-geist-sans)]">
      <IngredientList />
    </div>
  );
}
