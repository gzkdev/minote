import { useContext } from "react";
import { Link } from "react-router-dom";
import NotesContext from "../../NotesContext";
import { SideBarStyled } from "../styled";
import {
  FaLightbulb,
  FaExternalLinkSquareAlt,
  FaPlus,
  FaTrash,
} from "react-icons/fa";

export default function SideBar() {
  const { isActive, toggleisActive } = useContext(NotesContext);
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
            <li className="menu__item">
              <a
                className="menu__link"
                href="https://github.com.gzkdev/minote"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
                <span>View Code</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </SideBarStyled>
  );
}
