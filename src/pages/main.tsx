import HeroCard from "@/components/herocard/herocard";
import SearchBox from "@/components/search-box/search-box";
import Spinner from "@/components/spinner/spinner";
import { useLoadInitHeroes } from "@/hooks/useLoadInitHeroes";
import { Hero } from "@/modules/hero/hero.interface";

const MainPage = () => {
  const { loading, heroes } = useLoadInitHeroes();

  return (
    <div className="marvel-body">
      <SearchBox total={heroes.length} />
      {loading && <Spinner />}
      <div className="hero-list">
        {!loading &&
          heroes.length > 0 &&
          heroes.map((hero: Hero) => {
            const picture = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
            return (
              <div key={hero.id} className="hero-column">
                <HeroCard
                  id={hero.id}
                  name={hero.name}
                  picture={picture}
                  description={hero.description}
                  comics={hero.comics}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MainPage;
