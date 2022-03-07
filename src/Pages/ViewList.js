import { useState, useEffect } from "react";
import LineContainer from "../Components/lineContainer";
import ViewListHeader from "../Components/viewListHeader";

function ViewList({ lists, setLists, selectedListId, setSelectedPage }) {
  const [list, setList] = useState("");
  useEffect(() => {
    setList(lists.find((list) => list.title === selectedListId));
  }, [selectedListId]);
  function handleDelete() {
    setLists((lists) => {
      return lists.filter((list) => list.title !== selectedListId);
    });
    setSelectedPage("home");
  }

  return (
    <div>
      <ViewListHeader
        setSelectedPage={setSelectedPage}
        selectedListId={selectedListId}
      />
      <h2
        onClick={() => {
          setSelectedPage("home");
        }}
      >
        {list.title}
      </h2>
      <h2
        onClick={() => {
          setSelectedPage("create");
        }}
      >
        Edit
      </h2>
      <h2 onClick={handleDelete}>Delete</h2>

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
  );
}

export default ViewList;
