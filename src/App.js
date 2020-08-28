import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import SearchChar from "./Components/SearchChar";
import BBImg from "./Images/breaking-bad-bg-img.jpg";
import DataCall from "./Components/DataCall";

function App() {
  return (
    <div className="App">
      <img className="background-img" src={BBImg} />
      <Header />
      <SearchChar />
      <DataCall />
    </div>
  );
}

export default App;
