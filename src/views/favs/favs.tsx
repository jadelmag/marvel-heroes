import { HeroCard } from "@/components";
import UIMenu from "@/components/menu/menu";
import { ROUTE } from "@/constants/routes.constants";
import { FavHero, useFavs } from "@/context/favcontext";
import { filterHeroes } from "@/functions/filterheroes.functions";
import { useRef, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import "./favs.scss";

export interface FavsPageProps {
  navigate: NavigateFunction;
}

export const FavsPage: React.FC<FavsPageProps> = ({
  navigate,
}): JSX.Element => {
  const { favs, setFavs } = useFavs();
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [filteredFavs, setFilteredFavs] = useState<FavHero[]>(favs);

  const onHandleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    onFilterFavs();
  };

  const onHandleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    onFilterFavs();
  };

  const onFilterFavs = () => {
    const refValue: string | undefined = inputRef.current?.value.toString();
    const filtered = filterHeroes(favs, refValue);
    setFilteredFavs(filtered);
  };

  const onHandleFavHero = (heroId: number) => {
    const filtered: FavHero[] = favs.filter((f: FavHero) => f.id !== heroId);
    setFavs(filtered);
  };

  const onHandleRedirect = (heroId: number) => {
    navigate(ROUTE.DESCRIPTION, {
      state: { id: heroId },
    });
  };

  return (
    <div className="ui-favs-page">
      <span className="ui-favs-page__title">Favorites</span>
      <UIMenu
        id="standard-basic"
        inputRef={inputRef}
        variant="filled"
        fullWidth={true}
        placeholder="Search character..."
        results={filteredFavs.length}
        onChange={onHandleChange}
        onKeyUp={onHandleKeyUp}
      />

      <div className="ui-favs-page__container">
        {filteredFavs.map((fav: FavHero) => {
          const { id, name, picture } = fav;
          return (
            <HeroCard
              key={name}
              heroId={id}
              name={name}
              picture={picture}
              active={true}
              onUpdate={onHandleFavHero}
              onRedirect={onHandleRedirect}
            />
          );
        })}
      </div>
    </div>
  );
};
