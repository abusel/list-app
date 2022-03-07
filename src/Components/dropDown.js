import EditDefault from "../Assets/EditDefault.svg";
import DeleteDefault from "../Assets/DeleteDefault.svg";

function DropDown({
  list,
  setSelectedListId,
  setSelectedPage,
  lists,
  setLists,
}) {
  function handleDelete(e) {
    e.stopPropagation();
    setLists((lists) => {
      return lists.filter((listOne) => listOne.title !== list.title);
    });
    setSelectedPage("home");
  }
  return (
    <div className="dropDown">
      <img
        src={EditDefault}
        className="toolButton"
        onClick={() => {
          setSelectedListId(list.title);
          setSelectedPage("create");
        }}
      />
      <img src={DeleteDefault} onClick={handleDelete} className="toolButton" />
    </div>
  );
}
export default DropDown;
