import ListsHomeHeader from "../Components/listsHomeHeader";
import ListsContainer from "../Components/listsContainer";
import { useEffect } from "react";

function ListsHome({ lists, setSelectedListId, setSelectedPage, setLists }) {
  useEffect(() => {
    setSelectedListId("");
  }, []);
  return (
    <div>
      <ListsHomeHeader
        setSelectedPage={setSelectedPage}
        setSelectedListId={setSelectedListId}
      />
      <ListsContainer
        lists={lists}
        setSelectedListId={setSelectedListId}
        setSelectedPage={setSelectedPage}
        setLists={setLists}
      />
    </div>
  );
}
export default ListsHome;
