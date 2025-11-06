import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const HomeLayout = () => {
    return (
        <>
            <header className="bg-[#edfdfd] shadow-sm md:shadow-md shadow-secondary sticky top-0 z-50">
                <nav className="w-11/12 md:container mx-auto">
                    <NavBar></NavBar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;
