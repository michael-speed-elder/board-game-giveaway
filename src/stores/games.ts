import { derived, readable } from "svelte/store";
import { fetchData, xml2json } from "../xml-to-json";
import type { Game } from "../xml-to-json";
import {
  expansions,
  maxPlayers,
  minPlayers,
  onlyNew,
  searchText,
  filterByVisibility,
  portability,
} from "./filters";

const initStore = async () => {
  return xml2json(await fetchData());
};

export const allGames = readable<Game[]>(null, (set) => {
  initStore().then((json) => set(json));
});

export const games = derived(
  [allGames, expansions, maxPlayers, minPlayers, onlyNew, portability, searchText],
  ([$games, $expansions, $maxPlayers, $minPlayers, $onlyNew, $portability, $searchText]) => {
    // const [games, maxPlayers, minPlayers, onlyNew, searchText] = $filters;
    // console.log($games, $maxPlayers, $minPlayers, $onlyNew, $searchText);

    if ($games === null) return $games;

    return $games
      .filter((game) => !game.isHidden)
      .filter((game) => game.max <= $maxPlayers)
      .filter((game) => game.min >= $minPlayers)
      .filter((game) => ($onlyNew ? game.isNew : true))
      .filter((game) => filterByVisibility(game, $expansions, "isExpansion"))
      .filter((game) => filterByVisibility(game, $portability, "isPortable"))
      .filter((game) =>
        `${game.name} ${game.comment}`.toLowerCase().includes($searchText.toLowerCase())
      );
  }
);
