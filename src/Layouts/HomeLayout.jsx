import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";

const HomeLayout = () => {
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default HomeLayout;
