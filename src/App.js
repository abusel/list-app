import "./App.css";
import ListsHome from "./Pages/ListsHome";
import CreateList from "./Pages/CreateList";
import { useState } from "react";

function App() {
  const [lists, setLists] = useState([
    { title: "Favorite songs", lines: [] },
    { title: "Movies", lines: [] },
  ]);
  return (
    <div className="App">
      {/* <ListsHome lists={lists} /> */}
      <CreateList />
    </div>
  );
}

export default App;
