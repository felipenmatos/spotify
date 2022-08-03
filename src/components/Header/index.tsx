import React from "react";
import { Container, Image } from "./styles";
import Logo from "../../assets/image/logo.png";

export function Header() {
  return (
    <Container>
      <Image src={Logo} alt="logo" />
    </Container>
  );
}
