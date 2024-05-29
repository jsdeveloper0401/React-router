import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="sidebar">
            <h1>Dashboard</h1>
            <NavLink
                to="/main/cars"
                className={
                    "navLink " +
                    (location.pathname === "/main/cars" ? "active" : "")
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
            <NavLink
                to="/"
                onClick={logOut}
                className={
                    "navLink " +
                    (location.pathname === "/logout" ? "active" : "")
                }>
                <span className="span">
                    Logout
                    <i className="fa-solid fa-right-from-bracket"></i>
                </span>
            </NavLink>
        </div>
    );
};

export default Sidebar;
