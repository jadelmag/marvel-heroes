import CutIcon from "@/assets/svg/icon-cut.svg";
import Heart from "@/components/heart/heart";
import { useLocation } from "react-router-dom";
import "./detail.css";

const DetailPage = () => {
  const { state } = useLocation();

  return (
    <div className="detail-page">
      <div className="detail-page-container">
        <img src={state.picture} alt={`${state.name} hero`} />
        <div className="detail-page-title">
          <Heart
            id={state.id}
            name={state.name}
            picture={state.picture}
            description={state.description}
          />
          <div className="detail-page-description">{state.description}</div>
        </div>
      </div>
      <div className="detail-icon">
        <CutIcon />
      </div>
    </div>
  );
};

export default DetailPage;
