"use client";
import React, { useEffect, useState } from "react";
import {
  BoardPlace,
  DrinksIngredients,
  PlaceDrink,
  PlaceDrinks,
} from "@/utils/types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { addDrinksToPlace, getDrinks } from "@/utils/fetchers";
import { useRouter } from "next/navigation";

export default function AddDrinkToPlace({ place }: { place: BoardPlace }) {
  const [drinks, setDrinks] = useState<DrinksIngredients>({
    drink_ingredients: [],
  });
  const [placeDrinks, setPlaceDrinks] = useState<PlaceDrinks>(place.drinks);
  const router = useRouter();
  const deleteDrink = (id: number) => {
    const list = [...placeDrinks.drinks];

    const idx = list.findIndex((drink) => drink.drink.id === id); // first match
    if (idx !== -1) {
      list.splice(idx, 1);
    }
    setPlaceDrinks({
      drinks: list,
    });
  };
  useEffect(() => {
    getDrinks().then((drinks) => {
      setDrinks(drinks);
    });
  }, []);
  const addDrink = (drink: PlaceDrink) => {
    const alreadyExists = placeDrinks.drinks.find(
      (dr) =>
        dr.place_number === drink.place_number &&
        dr.board_id === drink.board_id &&
        dr.drink.id === drink.drink.id,
    );
    if (alreadyExists) return;
    setPlaceDrinks({ drinks: [...placeDrinks.drinks, drink] });
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full max-h-[54vh] mx-auto box">
      <h3 className="text-2xl font-bold">Lisää juomia valittuun ruutuun</h3>
      <div className="flex gap-2 h-full overflow-y-scroll">
        <div className="flex flex-col gap-1 w-2/5">
          {drinks.drink_ingredients.length > 0 && (
            <Menu>
              <MenuButton className="flex rounded text-base bg-juvu-sini-800 p-1 text-white h-10 mx-1 items-center justify-center w-full hover:bg-juvu-sini-600">
                Juomat
              </MenuButton>
              <MenuItems
                anchor="right"
                className="text-sm text-gray-900 font-bold rounded-2xl z-50 h-3/4"
              >
                {drinks.drink_ingredients
                  .sort((a, b) => a.drink.name.localeCompare(b.drink.name))
                  .map((drink) => (
                    <MenuItem
                      key={`${place.board_id}-${place.place_number}-${drink.drink.id}`}
                    >
                      <div
                        className="w-full bg-juvu-sini-800 data-focus:bg-juvu-sini-600 hover:bg-juvu-sini-600 p-3"
                        onClick={() =>
                          addDrink({
                            board_id: place.board_id,
                            place_number: place.place_number,
                            drink: drink.drink,
                            refill: false,
                            optional: false,
                            n: 0,
                            n_update: "",
                          })
                        }
                      >
                        <p>{drink.drink.name}</p>
                      </div>
                    </MenuItem>
                  ))}
              </MenuItems>
            </Menu>
          )}
          {placeDrinks.drinks.length > 0 &&
            placeDrinks.drinks.map((drink) => (
              <p
                key={`${drink.board_id}-${drink.place_number}-${drink.drink.id}`}
              >
                {drink.drink.name} {drink.place_number} {drink.drink.id}
              </p>
            ))}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1 w-full h-full overflow-hidden overflow-y-scroll box list-none">
            {placeDrinks.drinks.length > 0 &&
              placeDrinks.drinks
                .filter((pd) => pd.place_number == place.place_number)
                .sort((a, b) => a.drink.name.localeCompare(b.drink.name))
                .map((drink) => (
                  <DrinkSelectionCard
                    key={`${drink.board_id}-${drink.place_number}-${drink.drink.id}`}
                    placeDrink={drink}
                    onDelete={deleteDrink}
                    updateDrinks={setPlaceDrinks}
                  />
                ))}
          </div>
          <div
            className="flex button"
            onClick={() => {
              addDrinksToPlace(
                placeDrinks,
                localStorage.getItem("auth_token") ?? "",
              ).then();
              router.refresh();
            }}
          >
            <h1>Lisää juomat ruutuihin</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
function DrinkSelectionCard({
  placeDrink,
  onDelete,
  updateDrinks,
}: {
  placeDrink: PlaceDrink;
  onDelete: (id: number) => void;
  updateDrinks: React.Dispatch<React.SetStateAction<PlaceDrinks>>;
}): JSX.Element {
  const [refill, setRefill] = useState<boolean>(placeDrink.refill || false);
  const [optional, setOptional] = useState<boolean>(
    placeDrink.optional || false,
  );
  const [n, setN] = useState<number>(placeDrink.n || 1);
  const [rule, setRule] = useState<string>(placeDrink.n_update || "1");
  const [showEverything, setShowEverything] = useState<boolean>(false);

  useEffect(() => {
    updateDrinks((dr) => {
      return {
        drinks: [
          ...dr.drinks.filter(
            (dr) =>
              !(
                dr.place_number === placeDrink.place_number &&
                dr.board_id === placeDrink.board_id &&
                dr.drink.id === placeDrink.drink.id
              ),
          ),
          {
            place_number: placeDrink.place_number,
            board_id: placeDrink.board_id,
            drink: placeDrink.drink,
            refill: refill,
            optional: optional,
            n: n,
            n_update: rule,
          },
        ],
      };
    });
  }, [
    refill,
    optional,
    n,
    rule,
    placeDrink.place_number,
    placeDrink.board_id,
    placeDrink.drink.id,
    placeDrink.drink,
    updateDrinks,
  ]);

  return (
    <div
      className="flex flex-col gap-2 w-full box p-2 cursor-pointer"
      onClick={() => {
        setShowEverything(!showEverything);
      }}
    >
      <div className="flex h-1/3">
        <p className="mr-auto text-lg font-bold">{placeDrink.drink.name}</p>
        {showEverything && (
          <div
            className="flex button ml-auto justify-center items-center"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(placeDrink.drink.id);
            }}
          >
            <p>Poista</p>
          </div>
        )}
      </div>
      {showEverything && (
        <>
          <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
            <div
              className={`flex gap-2 w-1/2 box items-center justify-center`}
              onClick={() => setRefill(!refill)}
            >
              <p className="text-sm w-2/3">Täytettävä</p>
              <p
                className={`w-min-1/3 box ${refill ? "bg-emerald-800 border-emerald-800" : ""}`}
              ></p>
            </div>
            <div
              className={`flex gap-2 w-1/2 box items-center justify-center`}
              onClick={() => setOptional(!optional)}
            >
              <p className="text-sm w-2/3">Valinnainen</p>
              <p
                className={`w-min-1/3 box ${optional ? "bg-emerald-800 border-emerald-800" : ""}`}
              ></p>
            </div>
          </div>
          <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
            <div className={`flex gap-2 w-1/2 box items-center justify-center`}>
              <div className="w-1/3 items-center justify-center button p-1">
                <p
                  className="text-center w-full select-none"
                  onClick={() => {
                    setN(n - 1);
                  }}
                >
                  -
                </p>
              </div>
              <div className="w-1/3 items-center justify-center p-1">
                <p className="text-sm text-center w-full">{n}</p>
              </div>
              <div className="w-1/3 items-center justify-center button p-1">
                <p
                  className="text-center w-full select-none"
                  onClick={() => {
                    setN(n + 1);
                  }}
                >
                  +
                </p>
              </div>
            </div>
            <div
              className={`flex flex-col gap-2 w-1/2 box items-center justify-center`}
            >
              <p className="text-sm text-center w-full">Täyttösääntö</p>
              <div className="items-center justify-center w-full p-1">
                <input
                  className="box w-full"
                  type="text"
                  placeholder={rule}
                  onChange={(e) => setRule(e.target.value)}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
