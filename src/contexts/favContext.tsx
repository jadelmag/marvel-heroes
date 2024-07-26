import { Comics } from "@/modules/hero/hero.interface";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export interface FavHero {
  id: number;
  name: string;
  picture: string;
  description: string;
  comics: Comics | null;
}

export interface FavState {
  favs: FavHero[];
  setFavs(favs: FavHero[]): void;
}

export const defaultFavState: FavState = {
  favs: [],
  setFavs: (favs: FavHero[]) => favs,
};

const FavsContext = createContext(defaultFavState);

export const useFavs = () => useContext(FavsContext);

export const FavsProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [favs, setFavs] = useState<FavHero[]>([]);
  const value = useMemo(() => ({ favs, setFavs }), [favs, setFavs]);

  return <FavsContext.Provider value={value}>{children}</FavsContext.Provider>;
};
