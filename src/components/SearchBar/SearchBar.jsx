import { UseNotesContext } from "../../NotesContext";
import { SearchBarStyled } from "../styled";
import { FaBars } from "react-icons/fa";

function SearchBar({ searchFunction }) {
  const { toggleIsMenuOpen } = UseNotesContext();

  const handleOnChangeText = (e) => {
    searchFunction && searchFunction(e.target.value);
  };

  return (
    <SearchBarStyled>
      <input
        className="search__input body__text"
        name="search"
        placeholder="Search notes"
        type="search"
        onChange={handleOnChangeText}
      />
      <button className="search__button body__text" onClick={toggleIsMenuOpen}>
        <FaBars />
      </button>
    </SearchBarStyled>
  );
}

export default SearchBar;
