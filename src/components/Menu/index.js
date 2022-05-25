import MenuStyled from "../styled/Menu.styled";
import MenuItem from "./MenuItem";
import { FaCube, FaStar, FaPlus, FaTrash, FaMoon, FaLayerGroup } from "react-icons/fa"
import { UseNotesContext } from "../../NotesContext";

const Menu = () => {
    const { isMenuOpen, toggleIsMenuOpen } = UseNotesContext()

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
                            <span className="number">10</span>
                        </MenuItem>
                        <MenuItem to="/favorites">
                            <span><FaStar className="icon" />Favorites</span>
                            <span className="number">4</span>
                        </MenuItem>
                        <MenuItem to="/trash">
                            <span><FaTrash className="icon" />Trash</span>
                            <span className="number">6</span>
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