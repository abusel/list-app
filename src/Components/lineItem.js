function LineItem({ line, setList, list }) {
  let lines = [{ ...list.lines }];
  //   lines[list.lines.indexOf(line)];
  return (
    <div>
      {" "}
      <div>
        <input type="checkbox" />
        <input
          placeholder="New Item"
          value={line.text}
          onChange={(e) => {
            setList({
              ...list,
              lines: [
                ...list.lines.slice(0, list.lines.indexOf(line)),
                { text: e.target.value },
                ...list.lines.slice(list.lines.indexOf(line) + 1),
              ],
            });
          }}
        />
      </div>
    </div>
  );
}
export default LineItem;
