import React from "react";
import { Base } from "./template/base/index";
import { Header } from "../src/components/Header/index";

function App() {
  return (
    <Base>
      <Header />
      <h1>Hello World</h1>
    </Base>
  );
}

export default App;
