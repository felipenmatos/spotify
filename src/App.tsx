import React from "react";
import { Base } from "./template/base/index";
import { Header } from "../src/components/Header/index";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <Base>
      <Header />
      <SearchBar />
    </Base>
  );
}

export default App;
