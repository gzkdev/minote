import { useContext } from "react";
import NotesContext from "../../NotesContext";
import SideBarStyled from "./SideBar.styled";
import {
  FaLightbulb,
  FaTrash,
  FaCog,
  FaLayerGroup,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function SideBar() {
  const { isActive, toggleisActive } = useContext(NotesContext);
  return (
    <SideBarStyled data-toggle={isActive && isActive} onClick={toggleisActive}>
      <div className="sideBar__container">
        <h3 className="sideBar__title">minotes</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FaLightbulb />
                <span>Notes</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaLayerGroup />
                <span>Categories</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaTrash />
                <span>Trash</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaCog />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <a
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
