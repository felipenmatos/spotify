import React, { ReactNode } from "react";
import { Container } from "./styles";

type IButton = {
  name: string;
};

export function Button({ name }: IButton) {
  return <Container>{name}</Container>;
}
