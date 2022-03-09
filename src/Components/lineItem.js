import { useState, useEffect, useRef } from "react";
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
  const textReference = useRef();

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
            return list.id === selectedListId;
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
            return list.id === selectedListId;
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
  function autoGrow(reference) {
    reference.current.style.height = "41px";
    reference.current.style.height = reference.current.scrollHeight + "px";
    console.log(reference.current.scrollHeight);
  }
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
            return list.id === selectedListId;
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
            return list.id === selectedListId;
          })
        ) + 1
      ),
    ]);
  }

  return (
    <>
      <div className="createListItem">
        <div className="createListItemCheckBox">
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
                      return list.id === selectedListId;
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
                      return list.id === selectedListId;
                    })
                  ) + 1
                ),
              ]);
            }}
          />
        </div>
        {editing ? (
          <textarea
            ref={textReference}
            onInput={() => {
              autoGrow(textReference);
            }}
            rows="1"
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
          <div className="viewLineTextContainer">
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
          </div>
        )}
      </div>
    </>
  );
}
export default LineItem;
