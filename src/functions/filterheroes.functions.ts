import { FavHero } from "@/context/favcontext";

export const filterHeroes = (favs: FavHero[], text: string | undefined) => {
  if (!text) return favs;
  const term: string = text?.toLowerCase();
  const filtered = favs.filter((f: FavHero) =>
    f.name.toLowerCase().startsWith(term)
  );
  return filtered;
};
