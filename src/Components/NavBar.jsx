import React from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Link, NavLink } from "react-router"; // IMPORTANT: Ensure Link is used
import "./NavBar.css";
import { MdAddCircle } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";

const NavBar = () => {
    return (
        <div>
            <div className="py-1.5 flex justify-between">
                <div className="">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle md:text-base lg:text-lg xl:text-2xl"
                        >
                            <MdOutlineMenuOpen className="font-extrabold text-teal-400"></MdOutlineMenuOpen>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-md lg:menu-xl dropdown-content bg-[#edfdfd] rounded-box z-1 mt-3 w-36 md:w-56 p-2 shadow "
                        >
                            <li>
                                <NavLink to="/" className="nav-links">
                                    Home
                                </NavLink>
                            </li>
                            {/* NOTE: CHANGED <a> to <Link> for correct routing */}
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
                                <NavLink to="/blogs" className="nav-links">
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <Link to="/#contact" className="">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <Link
                        to="/"
                        className="btn btn-ghost text-lg lg:text-xl xl:text-2xl bg-gradient-to-r from-teal-400 to-sky-600 text-transparent bg-clip-text hover:bg-[#edfdfd] hover:shadow-sm hover:border-accent"
                    >
                        IEEE BranchFest 2025
                    </Link>
                </div>
                <div className="">
                    <div className="hidden sm:gap-2 md:gap-3 sm:flex">
                        <button className="btn btn-secondary btn-sm md:btn-md text-white hover:text-white">
                            <MdAddCircle /> Register
                        </button>
                        <button className="btn btn-accent btn-sm md:btn-md text-white hover:text-white">
                            <FaMoneyBill /> Sponsor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
