import { Outlet } from "react-router-dom"

const App = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <footer>{/* <p>Footer content</p> */}</footer>
        </>
    );
};

export default App;


