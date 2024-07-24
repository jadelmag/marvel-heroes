import DisabledHeartIcon from "@/assets/svg/icon-heart--disabled.svg";
import HeartIcon from "@/assets/svg/icon-heart.svg";
import { ROUTE } from "@/constants/paths.constants";
import { FavHero, useFavs } from "@/contexts/favContext";
import { useNavigate } from "react-router-dom";
import "./heart.css";

export interface HeartProps {
  id?: number;
  name?: string;
  picture?: string;
  description?: string;
}

const Heart: React.FC<HeartProps> = ({ id, name, picture, description }) => {
  const { favs, setFavs } = useFavs();
  const navigate = useNavigate();

  const onHandleClick = () => {
    if (id && name && picture && description) {
      const favHero: FavHero = {
        id: id,
        name: name,
        picture: picture,
        description: description,
      };
      if (favs.length === 0) {
        setFavs([favHero]);
      } else {
        const filtered = favs.filter((fav: FavHero) => fav.id !== favHero.id);
        setFavs(filtered);
      }
    } else {
      navigate(ROUTE.FAVS);
    }
  };

  return (
    <div className="heart" role="none" onClick={onHandleClick}>
      {favs.length === 0 ? (
        <DisabledHeartIcon />
      ) : (
        <>
          <HeartIcon />
          {!id && !name && !picture && !description && (
            <span className="total">{favs.length}</span>
          )}
        </>
      )}
    </div>
  );
};

export default Heart;
