import { Hero } from "@/modules/hero/hero.interface";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export interface HeroesState {
  heroes: Hero[];
  setHeroes(favs: Hero[]): void;
}

export const defaultHeroesState: HeroesState = {
  heroes: [],
  setHeroes: (heroes: Hero[]) => heroes,
};

const HeroesContext = createContext(defaultHeroesState);

export const useHeroes = () => useContext(HeroesContext);

export const HeroesProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const value = useMemo(() => ({ heroes, setHeroes }), [heroes, setHeroes]);

  return (
    <HeroesContext.Provider value={value}>{children}</HeroesContext.Provider>
  );
};
