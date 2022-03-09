import ListItem from "./listItem";
import { useEffect } from "react";
import Plus from "../Assets/Plus.svg";

function ListsContainer({
  lists,
  setSelectedListId,
  setSelectedPage,
  setLists,
}) {
  return (
    <div className="listContainer">
      {lists.map((list) => {
        return (
          <ListItem
            list={list}
            setSelectedListId={setSelectedListId}
            setSelectedPage={setSelectedPage}
            lists={lists}
            setLists={setLists}
          />
        );
      })}
      {lists.length === 0 && (
        <div
          className="listItem"
          onClick={() => {
            setSelectedPage("create");
          }}
        >
          <div className="listItemWrapper">
            <p className="listText">Create a list</p>
            <img src={Plus} className="plus" />
          </div>
        </div>
      )}
    </div>
  );
}
export default ListsContainer;
