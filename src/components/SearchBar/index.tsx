import React from "react";
import { Container, Title, Input } from "./styles";

export function SearchBar() {
  return (
    <Container>
      <Title>Busque por artistas, álbuns ou músicas</Title>
      <Input placeholder="Comece a escrever..." type="text" />
    </Container>
  );
}
