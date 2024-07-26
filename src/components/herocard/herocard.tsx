import CutIcon from "@/assets/svg/icon-cut.svg";
import Heart from "@/components/heart/heart";
import { ROUTE } from "@/constants/paths.constants";
import { Comics } from "@/modules/hero/hero.interface";
import { useNavigate } from "react-router-dom";
import "./herocard.css";

export interface HeroCardProps {
  id: number;
  name: string;
  picture: string;
  description: string;
  comics: Comics | null;
}

const HeroCard: React.FC<HeroCardProps> = ({
  id,
  name,
  picture,
  description,
  comics,
}) => {
  const navigate = useNavigate();

  const onHandleRedirect = () => {
    navigate(ROUTE.DETAIL, {
      state: { id, name, picture, description, comics },
    });
  };

  return (
    <div className="hero-card">
      <img
        role="none"
        className="hero-picture"
        src={picture}
        alt={`${name} hero`}
        onClick={onHandleRedirect}
      />
      <div className="hero-card-bottom">
        <div className="hero-card-content">
          <Heart
            id={id}
            name={name}
            picture={picture}
            description={description}
            comics={comics}
          />
        </div>
        <CutIcon />
      </div>
    </div>
  );
};

export default HeroCard;
