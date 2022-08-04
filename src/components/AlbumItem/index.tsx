import React from "react";
import { Container, Photo, TitleAlbum, ArtistName } from "./styles";

export function AlbumItem() {
  return (
    <Container>
      <Photo />
      <TitleAlbum>Teste</TitleAlbum>
      <ArtistName>Nome</ArtistName>
    </Container>
  );
}
