import ListsHomeHeader from "../Components/listsHomeHeader";
import ListsContainer from "../Components/listsContainer";
import { useState } from "react";

function ListsHome() {
  const [lists, setLists] = useState([
    { title: "Favorite songs", lines: [] },
    { title: "Movies", lines: [] },
  ]);
  return (
    <div>
      <ListsHomeHeader />
      <ListsContainer lists={lists} />
    </div>
  );
}
export default ListsHome;
