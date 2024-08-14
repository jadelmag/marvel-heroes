import { HeroCard, UILoader } from "@/components";
import UIMenu from "@/components/menu/menu";
import { ROUTE } from "@/constants/routes.constants";
import { FavHero, useFavs } from "@/context/favcontext";
import { useHeroes } from "@/context/herocontext";
import { createURL } from "@/functions/createurlhero";
import { updateFavHero } from "@/functions/updatefavhero.functions";
import { useFindHero } from "@/hooks/useFindHero";
import { Hero } from "@/modules/hero/hero.dto";
import { useEffect, useRef } from "react";
import { NavigateFunction } from "react-router-dom";
import "./home.scss";

export interface HomePageProps {
  navigate: NavigateFunction;
}

export const HomePage: React.FC<HomePageProps> = ({
  navigate,
}): JSX.Element => {
  const { loading, fetchFindHero } = useFindHero();
  const { favs, setFavs } = useFavs();
  const { heroes } = useHeroes();

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onHandleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.key === "Enter") {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      callAPI();
    }
  };

  const onHandleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    const refValue: string | undefined = inputRef.current?.value;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (refValue) {
        callAPI();
      }
    }, 1000);
  };

  const callAPI = () => {
    const url = !inputRef.current?.value
      ? createURL(null)
      : createURL(inputRef.current.value);
    fetchFindHero(url);
  };

  const onHandleFavHero = (heroId: number) => {
    const currentFavs: FavHero[] = updateFavHero(heroes, favs, heroId);
    setFavs(currentFavs);
  };

  const onHandleRedirect = (heroId: number) => {
    navigate(ROUTE.DESCRIPTION, {
      state: { id: heroId },
    });
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="ui-home-page">
      <UIMenu
        id="standard-basic"
        inputRef={inputRef}
        variant="filled"
        fullWidth={true}
        placeholder="Search character..."
        results={heroes.length}
        onChange={onHandleChange}
        onKeyUp={onHandleKeyUp}
      />
      {loading ? (
        <UILoader />
      ) : (
        <div className="ui-home-page__container">
          {heroes.map((hero: Hero) => {
            const { thumbnail, name, id } = hero;
            const { extension, path } = thumbnail;
            const picture = `${path}.${extension}`;
            const found: FavHero | undefined = favs.find(
              (f: FavHero) => f.id === hero.id
            );
            const active: boolean = !!found;
            return (
              <HeroCard
                key={name}
                heroId={id}
                name={name}
                picture={picture}
                active={active}
                onUpdate={onHandleFavHero}
                onRedirect={onHandleRedirect}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
