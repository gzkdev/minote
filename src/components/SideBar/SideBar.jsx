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

export default function SideBar() {
  const { isActive, toggleisActive } = useContext(NotesContext);
  return (
    <SideBarStyled data-toggle={isActive && isActive} onClick={toggleisActive}>
      <div className="sideBar__box">
        <h3 className="sideBar__title">minotes</h3>
        <button className="sideBar__btn">
          <FaLightbulb />
          &nbsp;&nbsp;Notes
        </button>
        <button className="sideBar__btn">
          <FaLayerGroup />
          &nbsp;&nbsp;Categories
        </button>
        <button className="sideBar__btn">
          <FaTrash />
          &nbsp;&nbsp;Trash
        </button>
        <button className="sideBar__btn">
          <FaCog />
          &nbsp;&nbsp;Settings
        </button>
        <a
          className="sideBar__btn"
          href="https://github.com/gzkdev/minotes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkSquareAlt />
          &nbsp;&nbsp;View Source code
        </a>
      </div>
    </SideBarStyled>
  );
}
