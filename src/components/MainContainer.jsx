import styled from "styled-components";
import Notes from "./Notes/Notes";
import SearchBar from "./SearchBar/SearchBar";

const MainContainerStyled = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 1rem;
`;

export default function MainContainer({ children }) {
  return (
    <MainContainerStyled>
      <SearchBar />
      <Notes />
    </MainContainerStyled>
  );
}
