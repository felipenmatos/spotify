import React from "react";
import { Container, Title, Input } from "./styles";

type SearchBarProps = {
  handleSetTerm: (prop: string) => void;
  searchTerm: string | undefined;
};

export function SearchBar({ handleSetTerm, searchTerm }: SearchBarProps) {
  return (
    <Container>
      <Title>Busque por artistas, álbuns ou músicas</Title>
      <Input
        value={searchTerm}
        onChange={(e) => handleSetTerm(e.target.value)}
        placeholder="Comece a escrever..."
        type="text"
      />
    </Container>
  );
}
