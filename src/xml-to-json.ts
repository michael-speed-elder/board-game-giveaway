export interface Game {
  id: string;
  name: string;
  thumbnail: string;
  image: string;
  comment: string;
  isNew: boolean;
  isExpansion: boolean;
  min: number;
  max: number;
}

export const NEW_UNOPENED = "New/Unopened";

export const fetchData = async (): Promise<Element> => {
  const res = await fetch("https://api.geekdo.com/xmlapi2/collection?username=Impirator&stats=1", {
    mode: "cors",
  });

  if (res.status === 200) {
    return new DOMParser().parseFromString(await res.text(), "application/xml").documentElement;
  } else if (res.status === 202) {
    // BGG servers warming up, try again in 4s
    return new Promise((res) => {
      setTimeout(() => res(fetchData()), 4000);
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
});

const parseTags = (game: Game): Game => {
  const isNew = game.comment?.includes("[new]");
  const isExpansion = game.comment?.includes("[expansion]");

  game.comment = game.comment?.replaceAll(/\[\w+\]/g, "") ?? "";
  game.isNew = !!isNew;
  game.isExpansion = !!isExpansion;

  return game;
};
