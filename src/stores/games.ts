import type { Game } from "../xml-to-json";

import { readable } from "svelte/store";
import { fetchData, xml2json } from "../xml-to-json";

const initStore = async () => {
  return xml2json(await fetchData());
};

export const games = readable(null, (set) => {
  initStore().then((json) => set(json));
});
