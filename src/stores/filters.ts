import { Writable, writable } from "svelte/store";
import type { Game } from "../xml-to-json";

export const minPlayers = writable(0);

export const maxPlayers = writable(99);

export const onlyNew = writable(false);

export enum FilterVisibility {
  ALLOW,
  NONE,
  ONLY,
}
export const expansions = writable(FilterVisibility.ALLOW);

export const portability = writable(FilterVisibility.ALLOW);

export const searchText = writable("");

type Keys = keyof Game;
type Values<T extends Keys = Keys> = Game[T] extends boolean ? T : never;

type Other = {
  [K in keyof Game]: Game[K] extends boolean ? boolean : never;
};

type GameBooleans<T = keyof Game> = T extends keyof Game
  ? Game[T] extends boolean
    ? T
    : never
  : never;

export const filterByVisibility = (
  game: Game,
  store: FilterVisibility,
  key: GameBooleans
): boolean => {
  switch (store) {
    case FilterVisibility.ALLOW:
      return true;
    case FilterVisibility.ONLY:
      return game[key];
    case FilterVisibility.NONE:
      return !game[key];
  }
};

filterByVisibility({} as any, FilterVisibility.ALLOW, "isPortable");
