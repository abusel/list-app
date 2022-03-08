import EllipsesDefault from "../Assets/EllipsesDefault.svg";
import DropDown from "./dropDown.js";
import { useState } from "react";
function ListItem({
  list,
  setSelectedListId,
  setSelectedPage,
  lists,
  setLists,
}) {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div
      className="listItem"
      onClick={() => {
        setSelectedListId(list.title);
        setSelectedPage("view");
      }}
    >
      <div className="listItemWrapper">
        <p className="listText">{list.title}</p>
        {showDrop && (
          <DropDown
            setSelectedPage={setSelectedPage}
            setSelectedListId={setSelectedListId}
            list={list}
            lists={lists}
            setLists={setLists}
            setShowDrop={setShowDrop}
          />
        )}
        <img
          src={EllipsesDefault}
          className="ellipses"
          onClick={(e) => {
            e.stopPropagation();
            setShowDrop((showDrop) => !showDrop);
          }}
        />
      </div>
    </div>
  );
}
export default ListItem;
