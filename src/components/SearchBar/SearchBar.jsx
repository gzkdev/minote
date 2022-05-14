import { useContext, useState } from "react";
import NotesContext from "../../NotesContext";
import SearchBarStyled from "./SearchBar.styled";
import { FaBars, FaCog } from "react-icons/fa";
import Modal from "../Modal/Modal";

function SearchBar({ page }) {
  const { searchText, setSearchText, toggleisActive } =
    useContext(NotesContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <SearchBarStyled>
      <button onClick={toggleisActive}>
        <FaBars />
      </button>
      <input
        name="search"
        placeholder="Search notes"
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
        <FaCog />
      </button>
      <Modal state={isSettingsOpen} stateFunction={setIsSettingsOpen} />
    </SearchBarStyled>
  );
}

export default SearchBar;
