import HeaderIcon from "@/assets/svg/marvel-logo.svg";
import Heart from "@/components/heart/heart";
import { ROUTE } from "@/constants/paths.constants";
import { useNavigate } from "react-router-dom";
import "./header.css";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const onHandleInit = () => {
    navigate(ROUTE.MAIN);
  };

  return (
    <header>
      <div className="header-icon" role="none" onClick={onHandleInit}>
        <HeaderIcon />
      </div>
      <Heart />
    </header>
  );
};

export default Header;
