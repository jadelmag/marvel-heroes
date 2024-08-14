import { Comics, ComicsItem } from "@/modules/hero/hero.dto";

export const getComicIds = (comics: Comics): string[] => {
  const idRegex = /\/comics\/(\d+)/;
  const ids = comics.items
    .map((comic: ComicsItem) => {
      const match = RegExp(idRegex).exec(comic.resourceURI);
      return match ? match[1] : undefined;
    })
    .filter((id): id is string => id !== undefined);
  return ids;
};

export const getComicTitles = (comics: Comics): string[] => {
  const titles: string[] = comics.items.map((comic: ComicsItem) => comic.name);
  return titles;
};
