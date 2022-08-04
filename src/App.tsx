import React from "react";
import { Base } from "./template/base/index";
import { Header } from "../src/components/Header/index";
import { SearchBar } from "./components/SearchBar";
import { Body } from "./template/Body";
import { Footer } from "./template/Footer";
import { Column } from "./template/Column";
import { AlbumList } from "./components/AlbumList";

function App() {
  return (
    <Base>
      <Body>
        <Header />
        <Column>
          <SearchBar />
          <AlbumList />
        </Column>
      </Body>
      <Footer>teste</Footer>
    </Base>
  );
}

export default App;
