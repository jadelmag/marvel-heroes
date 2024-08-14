import CutIcon from "@/assets/svg/icon-cut.svg";
import HeartDisabledIcon from "@/assets/svg/icon-heart--disabled.svg";
import HeartIcon from "@/assets/svg/icon-heart.svg";
import "./mobile-card.scss";

export interface MobileCardProps {
  id: number;
  name: string;
  description: string;
  picture: string;
  active: boolean;
  onUpdate: (id: number) => void;
}

const MobileCard: React.FC<MobileCardProps> = ({
  id,
  name,
  description,
  picture,
  active,
  onUpdate,
}): JSX.Element => {
  const onHandleFav = () => {
    onUpdate(id);
  };

  return (
    <div id={`${id}`} className="ui-mobile-card">
      <img className="ui-mobile-card__img" src={picture} alt={name} />

      <div className="ui-mobile-card__container">
        <div className="ui-mobile-card__container__heart">
          <span className="ui-mobile-card__container__heart__name">{name}</span>
          <button
            data-testid="favorite"
            className="ui-mobile-card__container__heart__icon"
            onClick={onHandleFav}
          >
            {active ? <HeartIcon /> : <HeartDisabledIcon />}
          </button>
        </div>

        <span className="ui-mobile-card__container__description">
          {description}
        </span>
      </div>
      <div className="ui-mobile-card__cuticon">
        <CutIcon />
      </div>
    </div>
  );
};

export default MobileCard;
