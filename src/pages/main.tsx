import HeroCard from "@/components/herocard/herocard";
import SearchBox from "@/components/search-box/search-box";
import Spinner from "@/components/spinner/spinner";
import { useHeroes } from "@/contexts/heroContext";
import { useLoader } from "@/contexts/loaderContext";
import { Hero } from "@/modules/hero/hero.interface";
import { heroService } from "@/modules/hero/hero.service";
import { createURL } from "@/utils/url.functions";
import { useEffect } from "react";

const MainPage = () => {
  const { loading, setLoading } = useLoader();
  const { heroes, setHeroes } = useHeroes();

  useEffect(() => {
    const load50Heroes = async () => {
      setHeroes([]);
      setLoading(true);
      const url = createURL(null);
      const heroes = await heroService.getHeroes(url);
      setHeroes(heroes);
      setLoading(false);
    };
    if (!loading) {
      load50Heroes();
    }
  }, []);

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
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MainPage;
