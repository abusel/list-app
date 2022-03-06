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
      <h4
        onClick={() => {
          setSelectedPage("home");
        }}
      >
        Cancel
      </h4>
      <h4 onClick={handleSave}>Done</h4>
    </div>
  );
}
export default EditListHeader;
