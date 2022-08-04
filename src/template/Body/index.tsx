import React, { ReactNode } from "react";
import { Container } from "./styles";

type ReactProps = {
  children: ReactNode;
};

export function Body({ children }: ReactProps) {
  return <Container>{children}</Container>;
}
