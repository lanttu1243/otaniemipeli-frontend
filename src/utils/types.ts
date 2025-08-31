export type PlaceType = 'normal' | 'food' | 'sauna' | 'special' | 'guild';
export type UserType = 'admin' | 'ie' | 'referee' | 'secretary' | 'team';


export const UserTypes: UserType[] = ['admin', 'ie', 'referee', 'secretary', 'team']
export const UserTypeEnum = {
  'admin': 'Admin',
  'ie': 'IE',
  'referee': 'Tuomari',
  'secretary': 'Sihteeri',
  'team': 'Joukkue',
}

export interface HeaderItem {
  text: string,
  href: string,
}
export interface LoginInfo {
  username: string,
  password: string,
}
export interface UserInfo {
  uid: number,
  username: string,
  email: string,
  user_types: UserType[]
}
export interface UserCreateInfo {
  username: string,
  email: string,
  password: string,
  user_type: UserType
}
export interface SessionInfo {
  uid: number,
  session_hash: string,
  user_types: UserTypes,
}

export interface UserSessionInfo {
  user: UserInfo,
  session: SessionInfo,
}

export interface UserTypes {
  user_types: UserType[],
}

export interface GameInfo {
  id: number,
  name: string,
  board: string,
  finished: boolean,
  start_time: string,
}

export interface PostGame {
  name: string,
  board: number,
}


export interface Games {
  games: GameInfo[],
}

export interface Board {
  id: number,
  name: string,
}
export interface Boards {
  boards: Board[],
}

export interface Boards {
  boards: Board[],
}

export interface BoardPlaces {
  board: Board,
  places: BoardPlace[]
}

export interface Place {
  place_id: number,
  place_name: string,
  rule: string,
  place_type: PlaceType,
}
export interface Places {
  places: Place[],
}

export interface BoardPlace {
  board_id: number,
  place: Place,
  place_number: number
  start: boolean,
  end: boolean,
  x: number,
  y: number,
  connections: Connection[],
  drinks: PlaceDrinks,
}
export interface PlaceDrinks {
  drinks: PlaceDrink[]
}
export interface PlaceDrink {
  place_number: number,
  board_id: number,
  drink: Drink,
  refill: boolean,
  optional: boolean,
  n: number,
  n_update: string
}
export interface Connection {
  board_id: number,
  origin: number,
  target: number,
  on_land: boolean,
  backwards: boolean,
  dashed: boolean,
}

export interface Boards {
  boards: Board[],
}

export interface Ingredient {
  id: number,
  name: string,
  abv: number,
  carbonated: boolean,
}

export interface Ingredients {
  ingredients: Ingredient[],
}

export interface Drink {
  id: number,
  name: string,
}

export interface IngredientQty {
  ingredient: Ingredient,
  quantity: number,
}

export interface DrinkIngredients {
  drink: Drink,
  quantity: number,
  abv: number,
  ingredients: IngredientQty[],
}

export interface DrinkIngredientsPost {
  drink: Drink,
  ingredients: IngredientQty[],
}

export interface DrinksIngredients {
  drink_ingredients: DrinkIngredients[],
}

export interface Drinks {
  drinks: Drink[],
}
