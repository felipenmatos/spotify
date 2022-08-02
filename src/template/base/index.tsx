import React, { ReactNode } from "react";
import { Container } from "./styles";

type ReactProps = {
  children: ReactNode;
};

export function Base({ children }: ReactProps) {
  return <Container>{children}</Container>;
}
