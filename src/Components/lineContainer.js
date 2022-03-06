import LineItem from "./lineItem";
import { useEffect } from "react";

function LineContainer({
  lines,
  setList,
  list,
  editing,
  lists,
  setLists,
  selectedListId,
}) {
  useEffect(() => {
    if (
      (!lines[lines.length - 1] && editing) ||
      (lines[lines.length - 1].text !== "" && editing)
    ) {
      setList({
        ...list,
        lines: [...list.lines, { text: "", checked: false, crossed: false }],
      });
    } else if (
      lines[lines.length - 2] &&
      lines[lines.length - 2].text === "" &&
      editing
    ) {
      let linesCopy = [...lines];
      linesCopy.pop();
      setList({
        ...list,
        lines: [...linesCopy],
      });
    }
  }, [lines]);

  return (
    <div>
      {lines.map((line) => {
        return (
          <LineItem
            line={line}
            setList={setList}
            list={list}
            editing={editing}
            lists={lists}
            setLists={setLists}
            selectedListId={selectedListId}
          />
        );
      })}
    </div>
  );
}
export default LineContainer;
