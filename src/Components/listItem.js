function ListItem({ list, setSelectedListId, setSelectedPage }) {
  return (
    <div
      onClick={() => {
        setSelectedListId(list.title);
        setSelectedPage("view");
      }}
    >
      {list.title}
    </div>
  );
}
export default ListItem;
