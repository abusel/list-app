import ListsHomeHeader from "../Components/listsHomeHeader";
import ListsContainer from "../Components/listsContainer";

function ListsHome({ lists, setSelectedListId, setSelectedPage }) {
  return (
    <div>
      <ListsHomeHeader setSelectedPage={setSelectedPage} />
      <ListsContainer
        lists={lists}
        setSelectedListId={setSelectedListId}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}
export default ListsHome;
