import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

export default router;
