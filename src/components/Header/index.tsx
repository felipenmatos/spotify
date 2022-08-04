import React from "react";
import { Container, Image } from "./styles";
import Logo from "../../assets/image/logo.png";
import { Button } from "../Button";

export function Header() {
  return (
    <Container>
      <Image src={Logo} alt="logo" />
      <Button name="Home" />
      <Button name="Search" />
    </Container>
  );
}
