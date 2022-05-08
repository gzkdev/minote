import { useContext, useState } from "react";
import NotesContext from "../../NotesContext";
import SearchBarStyled from "./SearchBar.styled";
import { FaBars, FaCog } from "react-icons/fa";
import Modal from "../Modal/Modal";

function SearchBar() {
  const { searchText, setSearchText, toggleisActive } =
    useContext(NotesContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <SearchBarStyled>
      <input
        placeholder="Search notes"
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
        <FaCog />
      </button>
      <button onClick={toggleisActive}>
        <FaBars />
      </button>
      <Modal state={isSettingsOpen} stateFunction={setIsSettingsOpen} />
      {/* {isSettingsOpen && (
        <div onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
          <h4>Settings</h4>
          <div>
            Add new notes to top<div className="toggle"></div>
          </div>
          <div>
            Switch to dark mode<div className="toggle"></div>
          </div>
        </div>
      )} */}
    </SearchBarStyled>
  );
}

export default SearchBar;
