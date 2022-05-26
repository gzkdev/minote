import MenuStyled from "../styled/Menu.styled";
import MenuItem from "./MenuItem";
import { FaCube, FaStar, FaPlus, FaTrash, FaMoon, FaLayerGroup } from "react-icons/fa"
import { UseNotesContext } from "../../NotesContext";

const Menu = () => {
    const { isMenuOpen, toggleIsMenuOpen, notes, notesTrash, favoriteNotes } = UseNotesContext()

    const handleOnClick = (e) => {
        e.stopPropagation()
        toggleIsMenuOpen()
    }

    return (
        <MenuStyled onClick={handleOnClick} data-open={isMenuOpen && isMenuOpen}>
            <div className="menu__container">
                <nav>
                    <span className="menu__title">minotes</span>
                    <ul>
                        <MenuItem to="/add-note">
                            <span><FaPlus className="icon" />Add new note</span>
                        </MenuItem>
                        <MenuItem to="/">
                            <span><FaCube className="icon" />All Notes </span>
                            <span className="number">{Object.keys(notes).length}</span>
                        </MenuItem>
                        <MenuItem to="/favorites">
                            <span><FaStar className="icon" />Favorites</span>
                            <span className="number">{Object.keys(favoriteNotes).length}</span>
                        </MenuItem>
                        <MenuItem to="/trash">
                            <span><FaTrash className="icon" />Trash</span>
                            <span className="number">{notesTrash.length}</span>
                        </MenuItem>
                    </ul>
                </nav>
                <div className="menu__footer">
                    <div className="setting">
                        <span><FaLayerGroup className="icon" /> Sort notes</span>
                    </div>
                    <div className="setting">
                        <span><FaMoon className="icon" />Toggle Dark mode</span>
                    </div>
                </div>
            </div>
        </MenuStyled>
    )
}

export default Menu