import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
    return (
        <div>
            hello
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;
