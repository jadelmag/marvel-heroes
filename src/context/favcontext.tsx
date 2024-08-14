import { Comics } from "@/modules/hero/hero.dto";
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
  comics: Comics;
}

export interface FavState {
  favs: FavHero[];
  setFavs(favs: FavHero[]): void;
}

const defaultFavState: FavState = {
  favs: [],
  setFavs: (favs: FavHero[]) => favs,
};

const FavsContext = createContext(defaultFavState);

// eslint-disable-next-line react-refresh/only-export-components
export const useFavs = () => useContext(FavsContext);

export const FavsProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}): JSX.Element => {
  const [favs, setFavs] = useState<FavHero[]>([]);
  const value = useMemo(() => ({ favs, setFavs }), [favs, setFavs]);

  return <FavsContext.Provider value={value}>{children}</FavsContext.Provider>;
};
