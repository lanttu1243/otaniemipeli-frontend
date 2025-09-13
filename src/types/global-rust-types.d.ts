declare global {
  type PlaceType = "normal" | "food" | "sauna" | "special" | "guild";
  type UserType = "admin" | "ie" | "referee" | "secretary" | "team";

  const UserTypes: UserType[] = ["admin", "ie", "referee", "secretary", "team"];
  type WithNameAndId = { id: string | number; name: string };
  const UserTypeEnum = {
    admin: "Admin",
    ie: "IE",
    referee: "Tuomari",
    secretary: "Sihteeri",
    team: "Joukkue",
  };

  interface HeaderItem {
    text: string;
    href: string;
  }

  interface LoginInfo {
    username: string;
    password: string;
  }

  interface UserInfo {
    uid: number;
    username: string;
    email: string;
    user_types: UsersTypes;
  }

  interface UserCreateInfo {
    username: string;
    email: string;
    user_type: UserType;
    password: string;
  }

  interface SessionInfo {
    uid: number;
    session_hash: string;
    user_types: UsersTypes;
  }

  interface UserSessionInfo {
    user: UserInfo;
    session: SessionInfo;
  }

  interface UsersTypes {
    user_types: UserType[];
  }

  interface Team {
    team_id: number;
    name: string;
    game_id: number;
    team_name: string;
    team_hash: string;
  }

  interface Teams {
    teams: Team[];
  }

  interface Game {
    id: number;
    name: string;
    board: string;
    finished: boolean;
    start_time: string;
  }

  interface PostGame {
    name: string;
    board: number;
  }

  interface Games {
    games: Game[];
  }

  interface Board {
    id: number;
    name: string;
  }

  interface Boards {
    boards: Board[];
  }

  interface BoardPlaces {
    board: Board;
    places: BoardPlace[];
  }

  interface Place {
    place_id: number;
    place_name: string;
    rule: string;
    place_type: PlaceType;
  }

  interface Places {
    places: Place[];
  }

  interface BoardPlace {
    board_id: number;
    place: Place;
    place_number: number;
    start: boolean;
    end: boolean;
    x: number;
    y: number;
    connections: Connection[];
    drinks: PlaceDrinks;
  }

  interface PlaceDrinks {
    drinks: PlaceDrink[];
  }

  interface PlaceDrink {
    place_number: number;
    board_id: number;
    drink: Drink;
    refill: boolean;
    optional: boolean;
    n: number;
    n_update: string;
  }

  interface Connection {
    board_id: number;
    origin: number;
    target: number;
    on_land: boolean;
    backwards: boolean;
    dashed: boolean;
  }

  interface Ingredient {
    id: number;
    name: string;
    abv: number;
    carbonated: boolean;
  }

  interface Ingredients {
    ingredients: Ingredient[];
  }

  interface Drink {
    id: number;
    name: string;
  }

  interface IngredientQty {
    ingredient: Ingredient;
    quantity: number;
  }

  interface DrinkIngredients {
    drink: Drink;
    quantity: number;
    abv: number;
    ingredients: IngredientQty[];
  }

  interface DrinkIngredientsPost {
    drink: Drink;
    ingredients: IngredientQty[];
  }

  interface DrinksIngredients {
    drink_ingredients: DrinkIngredients[];
  }
}
export {};
