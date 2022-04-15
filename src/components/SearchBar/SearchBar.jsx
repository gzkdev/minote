import styled from "styled-components";
import SearchInput from "./SearchInput";

const SearchBarStyled = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  padding: 1rem 2rem;
  background-color: #fff;
  z-index: 900;
  border: 1px solid #999;
  border-radius: 100vh;

  & input {
    flex-grow: 1;
  }

  & button {
    margin-left: 1rem;
    padding: 0 1.2rem;
    background-color: #999;
    border-radius: 4px;
  }
`;

function SearchBar() {
  return (
    <SearchBarStyled>
      <SearchInput placeholder="Search notes" type="text" />
      <button></button>
      <button></button>
    </SearchBarStyled>
  );
}

export default SearchBar;
