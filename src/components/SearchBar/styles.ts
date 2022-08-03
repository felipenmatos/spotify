import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px var(--paddingMain);
`;

export const Title = styled.p`
  font-size: var(--fontLarge);
  color: var(--terceary);
`;

export const Input = styled.input`
  font-size: var(--fontXLarge);
  font-weight: bold;
  color: var(--secundary);
  height: 80px;
  padding-bottom: 14px;
  border-bottom: 2px solid var(--secundary);
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  background: transparent;
  outline: 0;
`;
