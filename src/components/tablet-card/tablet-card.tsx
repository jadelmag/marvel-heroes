import CutIcon from "@/assets/svg/icon-cut.svg";
import HeartDisabledIcon from "@/assets/svg/icon-heart--disabled.svg";
import HeartIcon from "@/assets/svg/icon-heart.svg";
import "./tablet-card.scss";

export interface TabletCardProps {
  id: number;
  name: string;
  description: string;
  picture: string;
  active: boolean;
  onUpdate: (id: number) => void;
}

const TabletCard: React.FC<TabletCardProps> = ({
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
    <div id={`${id}`} className="ui-tablet-card">
      <img className="ui-tablet-card__img" src={picture} alt={name} />
      <div className="ui-tablet-card__container">
        <div className="ui-tablet-card__container__heart">
          <span className="ui-tablet-card__container__heart__title">
            {name}
          </span>
          <button
            type="button"
            className="ui-tablet-card__container__heart__icon"
            onClick={onHandleFav}
          >
            {active ? <HeartIcon /> : <HeartDisabledIcon />}
          </button>
        </div>
        <span className="ui-tablet-card__container__heart__description">
          {description}
        </span>
      </div>
      <div className="ui-tablet-card__cut-icon">
        <CutIcon />
      </div>
    </div>
  );
};

export default TabletCard;
