import HeaderIcon from "@/assets/svg/marvel-logo.svg";
import { UIHeart } from "@/components/index";
import { ROUTE } from "@/constants/routes.constants";
import { FavHero } from "@/context/favcontext";
import { NavigateFunction } from "react-router-dom";
import "./header.scss";

export interface UIHeaderProps {
  navigate: NavigateFunction;
  favs: FavHero[];
}

const UIHeader: React.FC<UIHeaderProps> = ({ navigate, favs }): JSX.Element => {
  const onHandleHome = () => {
    navigate(ROUTE.HOME);
  };

  return (
    <header className="header">
      <button className="header__button" onClick={onHandleHome}>
        <div className="header__button__icon">
          <HeaderIcon />
        </div>
      </button>
      <UIHeart navigate={navigate} favs={favs} />
    </header>
  );
};

export default UIHeader;
