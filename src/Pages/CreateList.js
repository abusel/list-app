import LineContainer from "../Components/lineContainer";
import EditListHeader from "../Components/editListHeader";
import { useState, useEffect, useRef } from "react";
import uuid from "react-uuid";

function CreateList({ lists, setLists, setSelectedPage, selectedListId }) {
  useEffect(() => {
    // console.log(selectedListId);
    console.log(lists);
  }, [selectedListId]);
  const [list, setList] = useState(
    lists.find((list) => {
      return list.id === selectedListId;
    }) || {
      title: "",
      lines: [{ text: "", checked: false, crossed: false }],
      id: uuid(),
    }
  );
  function handleChangeTitle(e) {
    setList({ ...list, title: e.target.value });
  }
  const reference = useRef();
  // reference.current && reference.current.focus();

  return (
    <div className="createListContainer">
      <div className="createListInnerContainer">
        <EditListHeader
          lists={lists}
          setLists={setLists}
          list={list}
          setSelectedPage={setSelectedPage}
          selectedListId={selectedListId}
        />
        <textarea
          className="listTitleInput"
          placeholder="List title"
          autoFocus={true}
          value={list.title}
          onChange={handleChangeTitle}
        ></textarea>
        <LineContainer
          lines={list.lines}
          setList={setList}
          list={list}
          editing="true"
          reference={reference}
        />
      </div>
    </div>
  );
}
export default CreateList;
