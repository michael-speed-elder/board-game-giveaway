export interface Game {
  id: string;
  name: string;
  thumbnail: string;
  image: string;
  comment: string;
  isNew: boolean;
  isExpansion: boolean;
  isHidden: boolean;
  min: number;
  max: number;
  owned: boolean;
}

export const NEW_UNOPENED = "New/Unopened";

export const fetchData = async (): Promise<Element> => {
  const res = await fetch("https://api.geekdo.com/xmlapi2/collection?username=Impirator&stats=1", {
    mode: "cors",
  });

  if (res.status === 200) {
    return new DOMParser().parseFromString(await res.text(), "application/xml").documentElement;
  } else if (res.status === 202) {
    // BGG servers warming up, try again in 3s
    return new Promise((res) => {
      setTimeout(() => res(fetchData()), 3000);
    });
  } else {
    return document.createElement("div");
  }
};

export const xml2json = (collection: Element): Game[] =>
  [...(collection?.children ?? [])].map(normalize).map(parseTags);

const normalize = (item: Element) => ({
  id: item.getAttribute("objectid"),
  name: item.querySelector("name").textContent,
  thumbnail: item.querySelector("thumbnail").textContent,
  image: item.querySelector("image").textContent,
  comment: item.querySelector("comment")?.textContent,
  max: parseInt(item.querySelector("stats").getAttribute("maxplayers"), 10),
  min: parseInt(item.querySelector("stats").getAttribute("minplayers"), 10),
  owned: parseInt(item.querySelector("status").getAttribute("own"), 10) === 1,
});

const parseTags = (game: Game): Game => {
  const isNew = game.comment?.includes("[new]");
  const isExpansion = game.comment?.includes("[expansion]");
  const isHidden = game.comment?.includes("[hide]");

  game.comment = game.comment?.replaceAll(/\[\w+\]/g, "") ?? "";
  game.isNew = !!isNew;
  game.isExpansion = !!isExpansion;
  game.isHidden = !game.owned || !!isHidden;

  return game;
};
