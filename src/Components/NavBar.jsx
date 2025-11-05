import React from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { NavLink } from "react-router";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-[#edfdfd] shadow-sm md:shadow-md shadow-secondary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle md:text-base lg:text-lg xl:text-2xl"
                        >
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />{" "}
                            </svg> */}
                            <MdOutlineMenuOpen className="font-extrabold text-secondary"></MdOutlineMenuOpen>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm md:menu-md lg:menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 md:w-52 p-2 shadow"
                        >
                            <li>
                                <NavLink to="/" className="nav-links">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="#about" className="">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="#segments" className="">Segments</NavLink>
                            </li>
                            <li>
                                <NavLink to="/job-fair" className="nav-links">Job Fair</NavLink>
                            </li>
                            <li>
                                <NavLink to="#sponsors" className="">Sponsors</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" className="nav-links">Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to="#contact" className="">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost md:text-lg lg:text-xl xl:text-2xl text-primary">
                        IEEE BranchFest 2025
                    </a>
                </div>
                <div className="navbar-end">
                    {/* <button className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />{" "}
                        </svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />{" "}
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button> */}
                    <div className="hidden sm:gap-2 md:gap-4 sm:flex">
                        <button className="btn btn-secondary btn-sm md:btn-md text-white hover:text-white">Register</button>
                    <button className="btn btn-accent btn-sm md:btn-md text-white hover:text-white">Sponsor</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
