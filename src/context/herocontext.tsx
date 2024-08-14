import { Hero } from "@/modules/hero/hero.dto";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export interface HeroesState {
  heroes: Hero[];
  setHeroes(heroes: Hero[]): void;
}

const defaultHeroesState: HeroesState = {
  heroes: [],
  setHeroes: (heroes: Hero[]) => heroes,
};

const HeroesContext = createContext(defaultHeroesState);

// eslint-disable-next-line react-refresh/only-export-components
export const useHeroes = () => useContext(HeroesContext);

export const HeroesProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}): JSX.Element => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const value = useMemo(() => ({ heroes, setHeroes }), [heroes, setHeroes]);

  return (
    <HeroesContext.Provider value={value}>{children}</HeroesContext.Provider>
  );
};
