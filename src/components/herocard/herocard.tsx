import CutIcon from "@/assets/svg/icon-cut.svg";
import HeartDisabledIcon from "@/assets/svg/icon-heart--disabled.svg";
import HeartIcon from "@/assets/svg/icon-heart.svg";
import "./herocard.scss";

export interface HeroCardProps {
  heroId: number;
  name: string;
  picture: string;
  active: boolean;
  onUpdate: (heroId: number) => void;
  onRedirect: (heroId: number) => void;
}

const HeroCard: React.FC<HeroCardProps> = ({
  heroId,
  name,
  picture,
  active,
  onUpdate,
  onRedirect,
}): JSX.Element => {
  const onHandleRedirect = () => {
    onRedirect(heroId);
  };

  return (
    <div className="hero-card">
      <button
        type="button"
        data-testid="description"
        className="hero-card__button"
        onClick={onHandleRedirect}
        onKeyDown={onHandleRedirect}
      >
        <img className="hero-card__button__img" src={picture} alt={name} />
      </button>
      <div className="hero-card__container">
        <span className="hero-card__container__name">{name}</span>
        <button
          className="hero-card__container__icon"
          data-testid="favorite"
          onClick={() => onUpdate(heroId)}
        >
          {active ? <HeartIcon /> : <HeartDisabledIcon />}
        </button>
      </div>
      <div className="hero-card__cut-icon">
        <CutIcon />
      </div>
    </div>
  );
};

export default HeroCard;
