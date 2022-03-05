import ListItem from "./listItem";

function ListsContainer({ lists }) {
  return (
    <div>
      {lists.map((list) => {
        return <ListItem list={list} />;
      })}
    </div>
  );
}
export default ListsContainer;
