import ListItem from "./listItem";

import Plus from "../Assets/Plus.svg";

function ListsContainer({
  lists,
  setSelectedListId,
  setSelectedPage,
  setLists,
  hover,
  clicked,
  setHover,
}) {
  return (
    <div className="listContainer">
      {lists.map((list) => {
        return (
          <ListItem
            key={list.id}
            list={list}
            setSelectedListId={setSelectedListId}
            setSelectedPage={setSelectedPage}
            lists={lists}
            setLists={setLists}
            hover={hover}
            setHover={setHover}
            clicked={clicked}
          />
        );
      })}
      {lists.length === 0 && (
        <div
          className="listItem"
          onClick={() => {
            setSelectedPage("create");
          }}
        >
          <div className="listItemWrapper">
            <p className="listText">Create a list</p>
            <img src={Plus} className="plus" />
          </div>
        </div>
      )}
    </div>
  );
}
export default ListsContainer;
