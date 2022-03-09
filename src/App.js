import "./App.css";
import ListsHome from "./Pages/ListsHome";
import CreateList from "./Pages/CreateList";
import ViewList from "./Pages/ViewList";
import { useState, useEffect } from "react";

function App() {
  const [lists, setLists] = useState([]);
  const [selectedListId, setSelectedListId] = useState("");
  const [selectedPage, setSelectedPage] = useState("home");
  const [homeClicked, setHomeClicked] = useState(false);
  return (
    <div
      className="App"
      onClick={() => {
        setHomeClicked((homeClicked) => !homeClicked);
      }}
    >
      {selectedPage === "home" && (
        <ListsHome
          lists={lists}
          setLists={setLists}
          setSelectedListId={setSelectedListId}
          setSelectedPage={setSelectedPage}
          clicked={homeClicked}
        />
      )}
      {selectedPage === "view" && (
        <ViewList
          lists={lists}
          setLists={setLists}
          selectedListId={selectedListId}
          setSelectedPage={setSelectedPage}
          setSelectedPage={setSelectedPage}
          clicked={homeClicked}
        />
      )}
      {selectedPage === "create" && (
        <CreateList
          lists={lists}
          setLists={setLists}
          setSelectedPage={setSelectedPage}
          selectedListId={selectedListId}
          setSelectedListId={setSelectedListId}
        />
      )}
    </div>
  );
}

export default App;
