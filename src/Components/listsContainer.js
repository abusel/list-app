import ListItem from "./listItem";
import { useEffect } from "react";

function ListsContainer({ lists, setSelectedListId, setSelectedPage }) {
  return (
    <div>
      {lists.map((list) => {
        return (
          <ListItem
            list={list}
            setSelectedListId={setSelectedListId}
            setSelectedPage={setSelectedPage}
          />
        );
      })}
    </div>
  );
}
export default ListsContainer;
