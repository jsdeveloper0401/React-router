import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className="sidebar">
            <h1>Dashboard</h1>
            <NavLink
                to="/main"
                className={
                    "navLink " +
                    (location.pathname === "/main" ? "active" : "")
                }>
                Cars
            </NavLink>
            <NavLink
                to="/main/brand"
                className={
                    "navLink " +
                    (location.pathname === "/main/brand" ? "active" : "")
                }>
                Brands
            </NavLink>
            <NavLink
                to="/main/posts"
                className={
                    "navLink " +
                    (location.pathname === "/main/posts" ? "active" : "")
                }>
                Posts
            </NavLink>
            <NavLink
                to="/main/users"
                className={
                    "navLink " +
                    (location.pathname === "/main/users" ? "active" : "")
                }>
                Users
            </NavLink>
        </div>
    );
};

export default Sidebar;
