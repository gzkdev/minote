import { useContext } from "react";
import NotesContext from "../../NotesContext";
// import SearchInput from "./SearchInput";
import SearchBarStyled from "./SearchBar.styled";
import { FaBars, FaCog } from "react-icons/fa";

function SearchBar() {
  const { searchText, setSearchText, toggleisActive } =
    useContext(NotesContext);

  return (
    <SearchBarStyled>
      <input
        placeholder="Search notes"
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>
        <FaCog />
      </button>
      <button onClick={toggleisActive}>
        <FaBars />
      </button>
    </SearchBarStyled>
  );
}

export default SearchBar;
