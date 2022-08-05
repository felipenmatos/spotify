import React, { useState } from "react";
import { Base } from "./template/base/index";
import { Header } from "../src/components/Header/index";
import { SearchBar } from "./components/SearchBar";
import { Body } from "./template/Body";
import { Footer } from "./template/Footer";
import { Column } from "./template/Column";
import { AlbumList } from "./components/AlbumList";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>();

  const handleSetTerm = (value: string) => {
    console.log(value);
    setSearchTerm(value);
  };

  return (
    <Base>
      <Body>
        <Header />
        <Column>
          <SearchBar searchTerm={searchTerm} handleSetTerm={handleSetTerm} />
          <AlbumList
            title={`${
              searchTerm
                ? `Results found for "${searchTerm}"`
                : "Recently Played"
            }`}
          />
          {!searchTerm && <AlbumList title="Recently Played" />}
        </Column>
      </Body>
      <Footer>teste</Footer>
    </Base>
  );
}

export default App;
