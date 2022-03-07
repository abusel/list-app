import avatar from "../Assets/avatar.svg";
import createButton from "../Assets/createButton.svg";

function ListsHomeHeader({ setSelectedPage, setSelectedListId }) {
  return (
    <div className="homeHeaderDesktop">
      <img className="avatar" src={avatar} />
      <h1 className="listHeaderText">Lists</h1>
      <div className="imageDiv">
        <img
          src={createButton}
          className="createImage"
          onClick={() => {
            setSelectedPage("create");
            setSelectedListId("");
          }}
        />
      </div>
    </div>
  );
}
export default ListsHomeHeader;
