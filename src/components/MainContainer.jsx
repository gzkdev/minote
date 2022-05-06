import styled from "styled-components";
import Notes from "./Notes/Notes";
import SearchBar from "./SearchBar/SearchBar";

const MainContainerStyled = styled.div`
  position: relative;
  border: 1px solid blue;
  width: 100%;
  padding: 2rem 1rem 4rem;
  border: 1px solid blue;
`;

export default function MainContainer({ children }) {
  return (
    <MainContainerStyled>
      <SearchBar />
      <Notes />
    </MainContainerStyled>
  );
}
