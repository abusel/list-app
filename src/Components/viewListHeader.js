import backButton from "../Assets/backButton.svg";
import EllipsesDefault from "../Assets/EllipsesDefault.svg";
import { useState } from "react";
import DropDown from "./dropDown.js";

function ViewListHeader({ setSelectedPage, selectedListId, lists, setLists }) {
  const [showDrop, setShowDrop] = useState(false);
  let list = lists.find((list) => list.title === selectedListId);
  return (
    <div className="viewListHeader">
      <img
        src={backButton}
        className="backButton"
        onClick={() => {
          setSelectedPage("home");
        }}
      />
      <img
        src={EllipsesDefault}
        className="ellipses-view"
        style={{ width: "35px" }}
        onClick={(e) => {
          e.stopPropagation();
          setShowDrop((showDrop) => !showDrop);
        }}
      />
      {showDrop && (
        <DropDown
          setSelectedPage={setSelectedPage}
          list={list}
          lists={lists}
          setLists={setLists}
        />
      )}
    </div>
  );
}
export default ViewListHeader;
