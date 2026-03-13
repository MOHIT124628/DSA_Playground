import { useState } from "react";
import SortComponent from "./components/SortComponent";
import SearchComponent from "./components/SearchComponent";
import StackComponent from "./components/StackComponent";
import QuickSortComponent from "./components/QuickSortComponent";
import LinearSearchComponent from "./components/LinearSearchComponent";
import QueueComponent from "./components/QueueComponent";
import "./App.css";

function App() {

  const [page, setPage] = useState("sort");

  const renderPage = () => {

  if(page === "sort") return <SortComponent />
  if(page === "quick") return <QuickSortComponent />
  if(page === "search") return <SearchComponent />
  if(page === "linear") return <LinearSearchComponent />
  if(page === "stack") return <StackComponent />
  if(page === "queue") return <QueueComponent />

}

  return (
    <div>

      <nav className="navbar">
        <h1>DSA Playground</h1>

        <div className="nav-links">
          <button onClick={() => setPage("sort")}>Bubble Sort</button>
          <button onClick={()=>setPage("quick")}>Quick Sort</button>
          <button onClick={() => setPage("search")}>Binary Search</button>
          <button onClick={()=>setPage("linear")}>Linear Search</button>
          <button onClick={() => setPage("stack")}>Stack</button>
          <button onClick={() => setPage("queue")}>Queue</button>
        </div>
      </nav>

      <div className="container">
        {renderPage()}
      </div>

    </div>
  );
}

export default App;