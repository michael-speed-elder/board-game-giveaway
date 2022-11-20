import { writable } from "svelte/store";

export const minPlayers = writable(0);

export const maxPlayers = writable(99);

export const onlyNew = writable(false);

export const expansions = writable();

export const searchText = writable("");
