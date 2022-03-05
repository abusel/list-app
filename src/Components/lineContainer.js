import LineItem from "./lineItem";
import { useEffect } from "react";

function LineContainer({ lines, setList, list }) {
  useEffect(() => {
    if (lines[lines.length - 1].text !== "") {
      setList({
        ...list,
        lines: [...list.lines, { text: "", checked: false, crossed: false }],
      });
    } else if (lines[lines.length - 2] && lines[lines.length - 2].text === "") {
      let linesCopy = [...lines];
      linesCopy.pop();
      setList({
        ...list,
        lines: [...linesCopy],
      });
    }
  }, [lines]);

  useEffect(() => {
    if (lines[lines.length - 1].text !== "") {
      console.log("filled");
    }
  }, [lines]);

  return (
    <div>
      {lines.map((line) => {
        return <LineItem line={line} setList={setList} list={list} />;
      })}
      {
        // <div>
        //   <input type="checkbox" />
        //   <input
        //     placeholder="New Item"
        //     onChange={(e) => {
        //       setList({
        //         ...list,
        //         lines: [
        //           ...list.lines,
        //           { text: e.target.value, checked: false, crossed: false },
        //         ],
        //       });
        //     }}
        //     value=""
        //   />
        // </div>
      }
    </div>
  );
}
export default LineContainer;
