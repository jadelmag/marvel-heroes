import DisabledHeartIcon from "@/assets/svg/icon-heart--disabled.svg";
import HeartIcon from "@/assets/svg/icon-heart.svg";
import { ROUTE } from "@/constants/paths.constants";
import { FavHero, useFavs } from "@/contexts/favContext";
import { Comics } from "@/modules/hero/hero.interface";
import { useNavigate } from "react-router-dom";
import "./heart.css";
export interface HeartProps {
  id?: number;
  name?: string;
  picture?: string;
  description?: string;
  comics: Comics;
}

const Heart: React.FC<HeartProps> = ({
  id,
  name,
  picture,
  description,
  comics,
}) => {
  const { favs, setFavs } = useFavs();
  const navigate = useNavigate();

  const onHandleClick = () => {
    if (id && name && picture) {
      const favHero: FavHero = {
        id: id,
        name: name,
        picture: picture,
        description: description ?? "",
        comics: comics,
      };
      const index = favs.findIndex((f: FavHero) => f.id === id);
      if (index === -1) {
        const allFavs = favs.concat(favHero);
        setFavs(allFavs);
      } else {
        const filtered = favs.filter((fav: FavHero) => fav.id !== favHero.id);
        setFavs(filtered);
      }
    } else {
      navigate(ROUTE.FAVS);
    }
  };

  const ids = favs.map((f: FavHero) => f.id);

  return (
    <button
      id={`fav-button-${name?.trim()}`}
      className="heart"
      onClick={onHandleClick}
    >
      {name ? <span>{name}</span> : null}
      {favs.length === 0 && <DisabledHeartIcon />}
      {favs.length > 0 && (
        <>
          {id !== undefined && !ids.includes(id) ? (
            <DisabledHeartIcon />
          ) : (
            <HeartIcon />
          )}

          {!id && !name && !picture && !description && (
            <span className="total">{favs.length}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Heart;
