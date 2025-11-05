import React from "react";
import { Link } from "react-router";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const ErrorPage = () => {
    return (
        <div className="bg-white text-red-500 flex flex-col gap-2 justify-center items-center h-screen text-3xl">
            Errrrorrrr
            <Link className="btn btn-outline btn-error hover:text-white flex gap-2 items-center justify-center" to="/"><IoArrowBackCircleOutline size={20}/> Go Back</Link>
        </div>
    );
};

export default ErrorPage;
