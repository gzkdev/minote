import { useContext } from "react";
import NotesContext from "../../NotesContext";
import SearchInput from "./SearchInput";
import LineIcon from "react-lineicons";
import SearchBarStyled from "./SearchBar.styled";

function SearchBar() {
  const { searchText, setSearchText, toggleTheme } = useContext(NotesContext);

  return (
    <SearchBarStyled>
      <SearchInput
        placeholder="Search notes"
        type="search"
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
