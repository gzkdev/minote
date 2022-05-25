import { UseNotesContext } from "../../NotesContext";
import { SearchBarStyled } from "../styled";
import { FaBars } from "react-icons/fa";

function SearchBar() {
  const { toggleIsMenuOpen } = UseNotesContext();

  return (
    <SearchBarStyled>
      <input
        className="search-bar__input"
        name="search"
        placeholder="Search notes"
        type="search"
        value=""
        // onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="search-bar__btn search-bar__btn--menu"
        onClick={toggleIsMenuOpen}
      >
        <FaBars />
      </button>
    </SearchBarStyled>
  );
}

export default SearchBar;
