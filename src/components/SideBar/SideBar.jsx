import { useContext } from "react";
import { Link } from "react-router-dom";
import NotesContext from "../../NotesContext";
import { SideBarStyled } from "../styled";
import {
  FaLightbulb,
  FaPlus,
  FaSun,
  FaTrash,
  FaLayerGroup,
} from "react-icons/fa";
import Toggle from "../Toggle";

export default function SideBar() {
  const { isActive, toggleisActive, setNotesArrangement } =
    useContext(NotesContext);
  return (
    <SideBarStyled data-toggle={isActive && isActive} onClick={toggleisActive}>
      <div className="menu__container">
        <nav>
          <ul className="menu__list">
            <li className="menu__item">
              <Link className="menu__link" to="/">
                <FaLightbulb />
                <span>Notes</span>
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/add_note">
                <FaPlus />
                <span>Add new note</span>
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/trash">
                <FaTrash />
                <span>Trash</span>
              </Link>
            </li>
            <li className="tooltip__action">
              <div className="description">
                <FaLayerGroup /> <span>Add new notes to the top</span>
              </div>
              <Toggle toggleFunction={setNotesArrangement} />
            </li>
            <li className="tooltip__action">
              <div className="description">
                <FaSun /> <span>Toggle Dark mode</span>
              </div>
              <small>Disabled</small>
            </li>
          </ul>
        </nav>
      </div>
    </SideBarStyled>
  );
}
