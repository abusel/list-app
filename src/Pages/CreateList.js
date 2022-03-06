import LineContainer from "../Components/lineContainer";
import EditListHeader from "../Components/editListHeader";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
function CreateList({ lists, setLists, setSelectedPage, selectedListId }) {
  useEffect(() => {
    console.log(selectedListId);
  }, []);
  const [list, setList] = useState(
    lists.find((list) => {
      return list.title === selectedListId;
    }) || {
      title: "",
      lines: [{ text: "", checked: false, crossed: false }],
      id: uuid(),
    }
  );
  function handleChangeTitle(e) {
    setList({ ...list, title: e.target.value });
  }
  return (
    <div>
      <EditListHeader
        lists={lists}
        setLists={setLists}
        list={list}
        setSelectedPage={setSelectedPage}
        selectedListId={selectedListId}
      />
      <input
        placeholder="List title"
        autoFocus={true}
        value={list.title}
        onChange={handleChangeTitle}
      ></input>
      <LineContainer
        lines={list.lines}
        setList={setList}
        list={list}
        editing="true"
      />
    </div>
  );
}
export default CreateList;
