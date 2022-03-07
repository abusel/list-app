import Cancel from "../Assets/Cancel.svg";
import Done from "../Assets/Done.svg";

function EditListHeader({
  lists,
  list,
  setLists,
  setSelectedPage,
  selectedListId,
}) {
  function handleSave() {
    setLists([
      ...lists.splice(
        0,
        lists.indexOf(
          lists.find((list) => {
            return list.title === selectedListId;
          })
        )
      ),
      { ...list, lines: list.lines.filter((line) => line.text !== "") },
      ...lists.splice(
        lists.indexOf(
          lists.find((list) => {
            return list.title === selectedListId;
          })
        ) + 1
      ),
    ]);
    setSelectedPage("home");
  }
  return (
    <div className="editList">
      {/* <h4
        onClick={() => {
          setSelectedPage("home");
        }}
      >
        Cancel
      </h4> */}

      <img
        src={Cancel}
        className="filterColor"
        onClick={() => {
          setSelectedPage("home");
        }}
      />
      <img src={Done} onClick={handleSave} className="doneButton" />
    </div>
  );
}
export default EditListHeader;
