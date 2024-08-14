import {
  ComicList,
  MobileCard,
  ScreenCard,
  TabletCard,
  UILoader,
} from "@/components/index";
import { BREAKPOINT } from "@/constants/brakpoints.constants";
import { FavHero, useFavs } from "@/context/favcontext";
import { useHeroes } from "@/context/herocontext";
import { updateFavHero } from "@/functions/updatefavhero.functions";
import { useFindComics } from "@/hooks/useFindComics";
import useWindowSize from "@/hooks/useWindowSize";
import { Hero } from "@/modules/hero/hero.dto";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import "./description.scss";

export const DescriptionPage = () => {
  const { width } = useWindowSize();
  const { covers, loading, fetchFindComics } = useFindComics();
  const { heroes } = useHeroes();
  const { favs, setFavs } = useFavs();
  const { state } = useLocation();
  const { id } = state;

  const hero: Hero | undefined = heroes.find((hero: Hero) => hero.id === id);

  const onHandleFav = (heroId: number) => {
    const currentFavs: FavHero[] = updateFavHero(heroes, favs, heroId);
    setFavs(currentFavs);
  };

  useLayoutEffect(() => {
    if (!hero) return;
    fetchFindComics(hero.comics);
  }, [hero, fetchFindComics]);

  if (!hero) {
    return (
      <div className="ui-description-page">
        <span className="ui-description-page__not-found">Hero not found!</span>
      </div>
    );
  } else {
    const { id, name, thumbnail, description } = hero;
    const { path, extension } = thumbnail;
    const picture: string = `${path}.${extension}`;
    const found: FavHero | undefined = favs.find((f: FavHero) => f.id === id);
    const active: boolean = !!found;

    if (width <= BREAKPOINT.SM) {
      return (
        <div className="ui-description-page">
          <MobileCard
            id={id}
            name={name}
            description={description}
            picture={picture}
            active={active}
            onUpdate={onHandleFav}
          />
          <div className="ui-description-page">
            <div className="ui-description-page__body">
              <h3 className="ui-description-page__body__title">COMICS</h3>
              {loading ? <UILoader /> : <ComicList comics={covers} />}
            </div>
          </div>
        </div>
      );
    } else if (width <= BREAKPOINT.MD) {
      return (
        <div className="ui-description-page">
          <TabletCard
            id={id}
            name={name}
            description={description}
            picture={picture}
            active={active}
            onUpdate={onHandleFav}
          />
          <div className="ui-description-page">
            <div className="ui-description-page__body">
              <h3 className="ui-description-page__body__title">COMICS</h3>
              {loading ? <UILoader /> : <ComicList comics={covers} />}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui-description-page">
          <ScreenCard
            id={id}
            name={name}
            description={description}
            picture={picture}
            active={active}
            onUpdate={onHandleFav}
          />
          <div className="ui-description-page">
            <div className="ui-description-page__body">
              <h3 className="ui-description-page__body__title">COMICS</h3>
              {loading ? <UILoader /> : <ComicList comics={covers} />}
            </div>
          </div>
        </div>
      );
    }
  }
};
