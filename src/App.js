import { useState } from "react";
import "./App.css";
import { list, list2 } from "./assets/cards-list";
import Cards from "./Components/Cards/Cards";
import Filter from "./Components/Filter/Filter";
import Header from "./Components/Header/Header";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <section className="flex-container">
  <div className="info-box">
    <div className="info-box-content">
      <p>Display total price</p>
      <p>Includes all fees, before taxes</p>
    </div>
    <label className="toggle">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  </div>
</section>
    

      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default App;