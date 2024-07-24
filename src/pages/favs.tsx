import HeroCard from "@/components/herocard/herocard";
import SearchBox from "@/components/search-box/search-box";
import { FavHero, useFavs } from "@/contexts/favContext";

const FavsPage = () => {
  const { favs } = useFavs();

  return (
    <div className="marvel-body">
      <h3>Favorites</h3>
      <SearchBox total={favs.length} />
      <div className="hero-list">
        {favs.length > 0 &&
          favs.map((fav: FavHero) => {
            return (
              <div key={fav.id} className="hero-column">
                <HeroCard
                  id={fav.id}
                  name={fav.name}
                  picture={fav.picture}
                  description={fav.description}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FavsPage;
