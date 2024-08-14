import CutIcon from "@/assets/svg/icon-cut.svg";
import HeartDisabledIcon from "@/assets/svg/icon-heart--disabled.svg";
import HeartIcon from "@/assets/svg/icon-heart.svg";
import "./screen-card.scss";

export interface ScreenCardProps {
  id: number;
  name: string;
  description: string;
  picture: string;
  active: boolean;
  onUpdate: (id: number) => void;
}

const ScreenCard: React.FC<ScreenCardProps> = ({
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
    <div id={`${id}`} className="ui-screen-card">
      <div className="ui-screen-card__body">
        <img className="ui-screen-card__body__img" src={picture} alt={name} />
        <div className="ui-screen-card__body__container">
          <div className="ui-screen-card__body__container__heart">
            <span className="ui-screen-card__body__container__heart__title">
              {name}
            </span>
            <button
              type="button"
              onClick={onHandleFav}
              className="ui-screen-card__body__container__heart__icon"
            >
              {active ? <HeartIcon /> : <HeartDisabledIcon />}
            </button>
          </div>
          <span className="ui-screen-card__body__container__description">
            {description}
          </span>
        </div>
        <div className="ui-screen-card__body__cut-icon">
          <CutIcon />
        </div>
      </div>
    </div>
  );
};

export default ScreenCard;
