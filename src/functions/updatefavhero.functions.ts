import { FavHero } from "@/context/favcontext";
import { Hero } from "@/modules/hero/hero.dto";

export const updateFavHero = (
  heroes: Hero[],
  favs: FavHero[],
  heroId: number
): FavHero[] => {
  const hero: Hero | undefined = heroes.find((h: Hero) => h.id === heroId);
  if (!hero) return favs;
  const { id, name, description, comics, thumbnail } = hero;
  const { path, extension } = thumbnail;
  const picture = `${path}.${extension}`;
  const favHero: FavHero = {
    id: id,
    name: name,
    picture: picture,
    description: description,
    comics: comics,
  };
  const foundFavHero: FavHero | undefined = favs.find(
    (f: FavHero) => f.id === heroId
  );
  let currentFavs: FavHero[] = [];
  if (!foundFavHero) {
    currentFavs = [...favs].concat(favHero);
  } else {
    currentFavs = favs.filter((f: FavHero) => f.id !== heroId);
  }
  return currentFavs;
};
