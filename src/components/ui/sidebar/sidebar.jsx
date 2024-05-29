import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            <NavLink
                to="/main"
                className={({ isActive }) =>
                    isActive ? "navLink active" : "navLink"
                }>
                Avtomobillar
            </NavLink>
            <NavLink
                to="/main/brand"
                className={({ isActive }) =>
                    isActive ? "navLink active" : "navLink"
                }>
                Brandlar
            </NavLink>
        </div>
    );
};

export default Sidebar;
