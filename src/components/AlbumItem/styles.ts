import styled from "styled-components";

export const Container = styled.div`
  width: 156px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background-color: var(--footer);
  border-radius: 8px;
  align-items: center;
  padding: 20px;
`;

export const Photo = styled.div`
  width: 121px;
  height: 123px;
  background-color: var(--white);
`;

export const TitleAlbum = styled.h2`
  margin-top: 5px;
  font-family: "Arial";
  font-size: var(--fontBasics);
  color: var(--text);
  font-weight: bold;
`;

export const ArtistName = styled.h3`
  font-family: "Arial";
  font-size: var(--fontBasics);
  color: var(--terceary);
  font-weight: bold;
`;
