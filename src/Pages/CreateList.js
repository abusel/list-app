import LineContainer from "../Components/lineContainer";
import { useState } from "react";
function CreateList() {
  const [list, setList] = useState({
    title: "",
    lines: [{ text: "", checked: false, crossed: false }],
  });
  return (
    <div>
      <input placeholder="List title"></input>
      <LineContainer lines={list.lines} setList={setList} list={list} />
    </div>
  );
}
export default CreateList;
