import { Comics, ComicsItem } from "@/modules/hero/hero.interface";

export const getComicIds = (comics: Comics): string[] => {
  const ids = comics.items.map((comic: ComicsItem) => {
    const resourceURI: string = comic.resourceURI;
    const newString: string | undefined = resourceURI
      .split("http://gateway.marvel.com/v1/public/comics/")
      .pop();
    if (!newString) return;
    return newString;
  }) as string[];
  return ids;
};

export const getComicTitles = (comics: Comics): string[] => {
  const titles: string[] = comics.items.map((comic: ComicsItem) => comic.name);
  return titles;
};
