import CutIcon from "@/assets/svg/icon-cut.svg";
import Heart from "@/components/heart/heart";
import { useLocation } from "react-router-dom";
import "./detail.css";

const DetailPage = () => {
  const { state } = useLocation();
  console.log("state: ", state);

  return (
    <div className="detail-page">
      <img src={state.picture} alt={`${state.name} hero`} />
      <div className="detail-page-title">
        <span>{state.name}</span>
        <Heart
          id={state.id}
          name={state.name}
          picture={state.picture}
          description={state.description}
        />
      </div>
      <div className="detail-page-description">{state.description}</div>
      <CutIcon />
    </div>
  );
};

export default DetailPage;
