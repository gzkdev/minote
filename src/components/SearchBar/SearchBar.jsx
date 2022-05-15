import { useContext, useState } from "react";
import NotesContext from "../../NotesContext";
import { SearchBarStyled } from "../styled";
import { FaBars, FaCog } from "react-icons/fa";
// import Modal from "../Modal/Modal";
import SettingsToolTip from "../Tooltips/SettingToolTip";

function SearchBar() {
  const { searchText, setSearchText, toggleisActive } =
    useContext(NotesContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <SearchBarStyled>
      <input
        className="search-bar__input"
        name="search"
        placeholder="Search notes"
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="search-bar__btn search-bar__btn--menu"
        onClick={toggleisActive}
      >
        <FaBars />
      </button>
      {/* <button
        className="search-bar__btn search-bar__btn--settings"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
      >
        <FaCog />
      </button>
      <SettingsToolTip
        state={isSettingsOpen}
        stateFunction={setIsSettingsOpen}
      /> */}
    </SearchBarStyled>
  );
}

export default SearchBar;
