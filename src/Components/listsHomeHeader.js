function ListsHomeHeader({ setSelectedPage }) {
  return (
    <div>
      <h1
        onClick={() => {
          setSelectedPage("create");
        }}
      >
        Lists
      </h1>
    </div>
  );
}
export default ListsHomeHeader;
