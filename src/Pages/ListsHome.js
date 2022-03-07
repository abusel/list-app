import ListsHomeHeader from "../Components/listsHomeHeader";
import ListsContainer from "../Components/listsContainer";

function ListsHome({ lists, setSelectedListId, setSelectedPage, setLists }) {
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
