import React, { ReactNode } from "react";
import { Container } from "./styles";

type ReactProps = {
  children: ReactNode;
};

export function Footer({ children }: ReactProps) {
  return <Container>{children}</Container>;
}
