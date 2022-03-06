import { useState, useEffect } from "react";

function LineItem({
  line,
  setList,
  list,
  editing,
  lists,
  setLists,
  selectedListId,
}) {
  let lines = [{ ...list.lines }];
  const [checked, setChecked] = useState(line.checked);
  function handleCheck(e) {}

  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          checked={line.checked}
          onChange={(e) => {
            setList({
              ...list,
              lines: [
                ...list.lines.slice(0, list.lines.indexOf(line)),
                { text: line.text, checked: e.target.checked, crossed: false },
                ...list.lines.slice(list.lines.indexOf(line) + 1),
              ],
            });
            setLists([
              ...lists.slice(
                0,
                lists.indexOf(
                  lists.find((list) => {
                    return list.title === selectedListId;
                  })
                )
              ),
              {
                ...list,
                lines: [
                  ...list.lines.slice(0, list.lines.indexOf(line)),
                  {
                    text: line.text,
                    checked: e.target.checked,
                    crossed: false,
                  },
                  ...list.lines.slice(list.lines.indexOf(line) + 1),
                ],
              },
              ...lists.slice(
                lists.indexOf(
                  lists.find((list) => {
                    return list.title === selectedListId;
                  })
                ) + 1
              ),
            ]);
          }}
        />
        {editing ? (
          <input
            placeholder="New Item"
            value={line.text}
            onChange={(e) => {
              setList({
                ...list,
                lines: [
                  ...list.lines.slice(0, list.lines.indexOf(line)),
                  {
                    text: e.target.value,
                    checked: line.checked,
                    crossed: false,
                  },
                  ...list.lines.slice(list.lines.indexOf(line) + 1),
                ],
              });
            }}
          />
        ) : (
          <p> {line.text}</p>
        )}
      </div>
    </div>
  );
}
export default LineItem;
