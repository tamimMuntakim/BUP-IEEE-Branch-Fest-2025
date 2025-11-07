import React from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Link, NavLink } from "react-router"; // IMPORTANT: Ensure Link is used
import "./NavBar.css";
import { FaMoneyBill, FaFacebookSquare } from "react-icons/fa";

const NavBar = () => {
    return (
        <div>
            <div className="navbar gap-1 p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle btn-sm text-base lg:text-lg xl:text-2xl px-0"
                        >
                            <MdOutlineMenuOpen className="font-extrabold text-teal-400"></MdOutlineMenuOpen>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-md lg:menu-lg dropdown-content bg-[#edfdfd] rounded-box z-1 mt-3 w-36 md:w-56 p-2 shadow "
                        >
                            <li>
                                <NavLink to="/" className="nav-links">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" className="nav-links">
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <Link to="/#about" className="">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/#competitions" className="">
                                    Competitions
                                </Link>
                            </li>
                            <li>
                                <Link to="/#job-fair" className="">
                                    Job Fair
                                </Link>
                            </li>
                            <li>
                                <Link to="/#partner-with-us" className="">
                                    Sponsor
                                </Link>
                            </li>
                            <li>
                                <Link to="/#partners" className="">
                                    Estimated Partners
                                </Link>
                            </li>
                            <li>
                                <Link to="/#hall-of-fame" className="">
                                    Hall of Fame
                                </Link>
                            </li>
                            <li>
                                <Link to="/#contact" className="">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link
                        to="/"
                        className="btn btn-ghost sm:text-lg lg:text-xl xl:text-2xl bg-gradient-to-r from-teal-400 to-sky-600 text-transparent bg-clip-text hover:bg-[#edfdfd] hover:shadow-sm hover:border-accent px-0"
                    >
                        IEEE BranchFest 2025
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="sm:gap-2 md:gap-3 flex">
                        <Link
                            to="https://www.facebook.com/share/1779mJzeGn/"
                            target="_blank"
                            className="btn btn-sm md:btn-md bg-blue-600 text-white border-[#005fd8] hover:bg-blue-700 hidden sm:flex"
                        >
                            <FaFacebookSquare /> Event
                        </Link>
                        <Link
                            to="https://www.facebook.com/share/1779mJzeGn/"
                            target="_blank"
                            className="btn btn-xs bg-blue-600 text-white border-[#005fd8] hover:bg-blue-700 sm:hidden"
                        >
                            <FaFacebookSquare />
                        </Link>
                        <Link
                            to="/#partner-with-us"
                            className="btn btn-accent btn-sm md:btn-md text-white hover:text-white hidden sm:flex"
                        >
                            <FaMoneyBill /> Sponsor
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
