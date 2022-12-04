import { derived, readable } from "svelte/store";
import { fetchData, xml2json } from "../xml-to-json";
import type { Game } from "../xml-to-json";
import {
  ExpansionFilter,
  expansions,
  maxPlayers,
  minPlayers,
  onlyNew,
  searchText,
} from "./filters";

const initStore = async () => {
  return xml2json(await fetchData());
};

export const allGames = readable<Game[]>(null, (set) => {
  initStore().then((json) => set(json));
});

export const games = derived(
  [allGames, expansions, maxPlayers, minPlayers, onlyNew, searchText],
  ([$games, $expansions, $maxPlayers, $minPlayers, $onlyNew, $searchText]) => {
    // const [games, maxPlayers, minPlayers, onlyNew, searchText] = $filters;
    // console.log($games, $maxPlayers, $minPlayers, $onlyNew, $searchText);

    return (
      $games
        ?.filter((game) => !game.isHidden)
        ?.filter((game) => game.max <= $maxPlayers)
        ?.filter((game) => game.min >= $minPlayers)
        ?.filter((game) => ($onlyNew ? game.isNew : true))
        ?.filter((game) => {
          switch ($expansions) {
            case ExpansionFilter.ALLOW:
              return true;
            case ExpansionFilter.ONLY:
              return game.isExpansion;
            case ExpansionFilter.NONE:
              return !game.isExpansion;
          }
        })
        ?.filter((game) =>
          `${game.name} ${game.comment}`.toLowerCase().includes($searchText.toLowerCase())
        ) ?? []
    );
  }
);
