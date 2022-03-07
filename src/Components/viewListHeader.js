import backButton from "../Assets/backButton.svg";
import EllipsesDefault from "../Assets/EllipsesDefault.svg";
import { useState } from "react";

function ViewListHeader({ setSelectedPage, selectedListId }) {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div className="viewListHeader">
      Head
      <img
        src={backButton}
        className="backButton"
        onClick={() => {
          setSelectedPage("home");
        }}
      />
      <img
        src={EllipsesDefault}
        className="ellipses"
        style={{ width: "20px" }}
        onClick={(e) => {
          e.stopPropagation();
          setShowDrop((showDrop) => !showDrop);
        }}
      />
    </div>
  );
}
export default ViewListHeader;
