import "./main.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/ui/sidebar/sidebar";
import Header from "../../components/ui/header/header";

const Main = () => {
    return (
            <div className="main__layout">
                <Sidebar />
                <div className="main__left">
                    <Header />
                    <main className="main__content">
                        <h1 className="text-center text-bold m-5">Cars tables</h1>
                        <Outlet />
                    </main>
                </div>
            </div>
    );
};

export default Main;
