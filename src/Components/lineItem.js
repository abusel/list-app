import { useState, useEffect } from "react";
import useLongPress from "./useLongPress";

function LineItem({
  line,
  setList,
  list,
  editing,
  lists,
  setLists,
  selectedListId,
  reference,
}) {
  let lines = [{ ...list.lines }];

  const onLongPress = (e) => {
    handleCross();
  };

  const onClick = () => {
    setChecked((checked) => !checked);
    setList({
      ...list,
      lines: [
        ...list.lines.slice(0, list.lines.indexOf(line)),
        {
          text: line.text,
          checked: !checked,
          crossed: crossed,
        },
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
            checked: !checked,
            crossed: crossed,
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
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 1100,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  const [checked, setChecked] = useState(line.checked);
  const [crossed, setCrossed] = useState(line.crossed);
  function handleCheck(e) {}
  function handleCross(e) {
    setCrossed((crossed) => !crossed);
    setList({
      ...list,
      lines: [
        ...list.lines.slice(0, list.lines.indexOf(line)),
        {
          text: line.text,
          checked: line.checked,
          crossed: !crossed,
        },
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
            checked: line.checked,
            crossed: !crossed,
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
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <input
            className={
              crossed ? "checkcross checkbox noselect" : "checkbox noselect"
            }
            type="checkbox"
            checked={line.checked}
            tabindex="-1"
            onChange={(e) => {
              setList({
                ...list,
                lines: [
                  ...list.lines.slice(0, list.lines.indexOf(line)),
                  {
                    text: line.text,
                    checked: e.target.checked,
                    crossed: crossed,
                  },
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
                      crossed: crossed,
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
        </div>
        {editing ? (
          <textarea
            ref={reference}
            rows="2"
            className={line.crossed ? "lineItemText crossed" : "lineItemText"}
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
                    crossed: crossed,
                  },
                  ...list.lines.slice(list.lines.indexOf(line) + 1),
                ],
              });
            }}
          />
        ) : (
          <p
            className={
              line.crossed
                ? "viewLineText crossed noselect"
                : "viewLineText noselect"
            }
            {...longPressEvent}
          >
            {" "}
            {line.text}
          </p>
        )}
      </div>
    </div>
  );
}
export default LineItem;
