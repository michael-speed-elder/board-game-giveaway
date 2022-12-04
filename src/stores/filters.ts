import { writable } from "svelte/store";

export const minPlayers = writable(0);

export const maxPlayers = writable(99);

export const onlyNew = writable(false);

export enum ExpansionFilter {
  ALLOW,
  NONE,
  ONLY,
}
export const expansions = writable(ExpansionFilter.ALLOW);

export const searchText = writable("");
