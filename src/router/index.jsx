 import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import App from "../App";
import Login from "../pages/login/login";
import Cars from "../pages/cars/cars";
import SingleCar from "../components/single-car/single-car";
import Main from "../pages/main/main";
import Brand from "../pages/brand/brand";
import Users from "../pages/users/users";
import Posts from "../pages/posts/posts";

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Login />} />
                <Route path="main/*" element={<Main />}>
                    <Route index element={<Cars />} />
                    <Route path="single-car/" element={<SingleCar />} />
                    <Route path="brand" element={<Brand />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default Index;
