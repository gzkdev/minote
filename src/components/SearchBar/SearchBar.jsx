import { UseNotesContext } from "../../NotesContext";
import { SearchBarStyled } from "../styled";
import { FaBars } from "react-icons/fa";

function SearchBar() {
  const { toggleIsMenuOpen } = UseNotesContext();

  return (
    <SearchBarStyled>
      <input
        className="search__input"
        name="search"
        placeholder="Search notes"
        type="search"
      />
      <button className="search__button" onClick={toggleIsMenuOpen}>
        <FaBars />
      </button>
    </SearchBarStyled>
  );
}

export default SearchBar;
