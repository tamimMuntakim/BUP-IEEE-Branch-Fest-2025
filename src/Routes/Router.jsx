import {
    createBrowserRouter
} from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ]
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;
