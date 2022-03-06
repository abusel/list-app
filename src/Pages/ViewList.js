import { useState, useEffect } from "react";
import LineContainer from "../Components/lineContainer";

function ViewList({ lists, setLists, selectedListId, setSelectedPage }) {
  const [list, setList] = useState("");
  useEffect(() => {
    setList(lists.find((list) => list.title === selectedListId));
  }, [selectedListId]);

  return (
    <div>
      <h2
        onClick={() => {
          setSelectedPage("home");
        }}
      >
        {list.title}
      </h2>
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
