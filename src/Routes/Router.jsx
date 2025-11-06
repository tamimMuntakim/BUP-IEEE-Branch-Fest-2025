import {
    createBrowserRouter
} from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import BlogPage from "../Pages/BlogPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/blogs",
                element: <BlogPage></BlogPage>
            }
        ]
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;
