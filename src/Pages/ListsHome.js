import ListsHomeHeader from "../Components/listsHomeHeader";
import ListsContainer from "../Components/listsContainer";
import { useEffect, useState } from "react";

function ListsHome({
  lists,
  setSelectedListId,
  setSelectedPage,
  setLists,
  clicked,
}) {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    setSelectedListId("");
  }, []);
  useEffect(() => {
    setHover(false);
  }, [lists]);
  useEffect(() => {
    setHover(false);
  }, [clicked]);

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
        hover={hover}
        setHover={setHover}
        clicked={clicked}
      />
    </div>
  );
}
export default ListsHome;
