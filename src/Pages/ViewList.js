import { useState, useEffect } from "react";
import LineContainer from "../Components/lineContainer";
import ViewListHeader from "../Components/viewListHeader";

function ViewList({
  lists,
  setLists,
  selectedListId,
  setSelectedPage,
  clicked,
}) {
  const [list, setList] = useState("");
  useEffect(() => {
    setList(lists.find((list) => list.id === selectedListId));
  }, [selectedListId]);
  function handleDelete() {
    setLists((lists) => {
      return lists.filter((list) => list.id !== selectedListId);
    });
    setSelectedPage("home");
  }

  return (
    <div className="viewListContainer">
      <div className="viewListInnerContainer">
        <ViewListHeader
          setSelectedPage={setSelectedPage}
          selectedListId={selectedListId}
          lists={lists}
          setLists={setLists}
          clicked={clicked}
        />
        <div className="viewListMiddleContainer">
          <p className="listTitleView">{list.title}</p>
        </div>
        {list && (
          <LineContainer
            lines={list.lines}
            setList={setList}
            list={list}
            editing={false}
            lists={lists}
            setLists={setLists}
            selectedListId={selectedListId}
          />
        )}
      </div>
    </div>
  );
}

export default ViewList;
