import { Link, useMatch, useResolvedPath } from "react-router-dom"
import MenuStyled from "../styled/Menu.styled";

export const MenuItem = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : null}>
            <Link to={to}  {...props}>{children}</Link>
        </li>
    )
}


const Menu = () => {
    return (
        <MenuStyled>
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="/add-note"><span>Add new note</span></Link></li>
                        <MenuItem to="/">All Notes</MenuItem>
                        <MenuItem to="/favorites">Favorites</MenuItem>
                        <MenuItem to="/trash">Trash</MenuItem>
                    </ul>
                </nav>
                <div>
                    <div><span>Toggle Dark mode</span></div>
                    <div><span>Add New Notes to Top</span></div>
                </div>
            </div>
        </MenuStyled>
    )
}

export default Menu