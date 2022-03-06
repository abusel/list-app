import "./App.css";
import ListsHome from "./Pages/ListsHome";
import CreateList from "./Pages/CreateList";
import ViewList from "./Pages/ViewList";
import { useState, useEffect } from "react";

function App() {
  const [lists, setLists] = useState([]);
  const [selectedListId, setSelectedListId] = useState("");
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="App">
      {selectedPage === "home" && (
        <ListsHome
          lists={lists}
          setLists={setLists}
          setSelectedListId={setSelectedListId}
          setSelectedPage={setSelectedPage}
        />
      )}
      {selectedPage === "view" && (
        <ViewList
          lists={lists}
          setLists={setLists}
          selectedListId={selectedListId}
          setSelectedPage={setSelectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      {selectedPage === "create" && (
        <CreateList
          lists={lists}
          setLists={setLists}
          setSelectedPage={setSelectedPage}
          selectedListId={selectedListId}
        />
      )}
    </div>
  );
}

export default App;
