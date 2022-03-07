import ListItem from "./listItem";
import { useEffect } from "react";

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
    </div>
  );
}
export default ListsContainer;
