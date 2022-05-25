import { Link, useMatch, useResolvedPath } from "react-router-dom";

const MenuItem = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : null}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
