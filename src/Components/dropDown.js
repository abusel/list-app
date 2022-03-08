import EditDefault from "../Assets/EditDefault.svg";
import DeleteDefault from "../Assets/DeleteDefault.svg";

function DropDown({
  list,
  setSelectedListId,
  setSelectedPage,
  lists,
  setLists,
  setShowDrop,
}) {
  function handleDelete(e) {
    e.stopPropagation();
    setLists((lists) => {
      return lists.filter((listOne) => listOne.title !== list.title);
    });
    setSelectedPage("home");
    setShowDrop && setShowDrop(false);
  }
  return (
    <div className="dropDown">
      <img
        src={EditDefault}
        className="toolButton"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedListId && setSelectedListId(list.title);
          setSelectedPage("create");
          console.log("hi");
        }}
      />
      <img src={DeleteDefault} onClick={handleDelete} className="toolButton" />
    </div>
  );
}
export default DropDown;
