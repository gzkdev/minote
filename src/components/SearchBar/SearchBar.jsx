import { useContext } from "react";
import NotesContext from "../../NotesContext";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import LineIcon from "react-lineicons";

const SearchBarStyled = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  min-height: 64px;
  padding: 0 1rem;
  background-color: var(--color0);
  z-index: 900;
  border-radius: 8px;

  & input {
    flex-grow: 1;
  }

  & button {
    width: 40px;
    color: var(--color1);
    background-color: var(--color6);
    margin-left: 1rem;
    border-radius: 4px;
    transition: transform 200ms;
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }
  }
`;

function SearchBar() {
  const { searchText, setSearchText, toggleTheme } = useContext(NotesContext);

  return (
    <SearchBarStyled>
      <SearchInput
        placeholder="Search notes"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>
        <LineIcon name="grid-alt" />
      </button>
      <button onClick={toggleTheme}>
        <LineIcon name="sun" />
      </button>
    </SearchBarStyled>
  );
}

export default SearchBar;
