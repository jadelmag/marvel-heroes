import HeartDisabledIcon from "@/assets/svg/icon-heart--disabled.svg";
import HeartIcon from "@/assets/svg/icon-heart.svg";
import { ROUTE } from "@/constants/routes.constants";
import { FavHero } from "@/context/favcontext";
import { NavigateFunction } from "react-router-dom";
import "./heart.scss";

export interface UIHeartProps {
  favs: FavHero[];
  navigate: NavigateFunction;
}

const UIHeart: React.FC<UIHeartProps> = ({ favs, navigate }): JSX.Element => {
  const onHandleRedirect = () => {
    navigate(ROUTE.FAVS);
  };

  return (
    <div
      className="ui-heart"
      role="menu"
      tabIndex={0}
      onKeyUp={onHandleRedirect}
      onClick={onHandleRedirect}
    >
      {favs.length === 0 ? (
        <HeartDisabledIcon />
      ) : (
        <>
          <HeartIcon />
          <span className="ui-heart__value">{favs.length}</span>
        </>
      )}
    </div>
  );
};

export default UIHeart;
