import LineContainer from "../Components/lineContainer";
import EditListHeader from "../Components/editListHeader";
import { useState, useEffect, useRef } from "react";
import uuid from "react-uuid";

function CreateList({
  lists,
  setLists,
  setSelectedPage,
  selectedListId,
  setSelectedListId,
}) {
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
  const titleReference = useRef();
  // reference.current && reference.current.focus();
  function autoGrow(reference) {
    reference.current.style.height = "56px";
    reference.current.style.height = reference.current.scrollHeight + "px";
  }

  return (
    <div className="createListContainer">
      <div className="createListInnerContainer">
        <EditListHeader
          lists={lists}
          setLists={setLists}
          list={list}
          setSelectedPage={setSelectedPage}
          selectedListId={selectedListId}
          setSelectedListId={setSelectedListId}
        />
        <textarea
          className="listTitleInput"
          placeholder="List title"
          autoFocus={true}
          value={list.title}
          onChange={handleChangeTitle}
          ref={titleReference}
          onInput={() => {
            autoGrow(titleReference);
          }}
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
