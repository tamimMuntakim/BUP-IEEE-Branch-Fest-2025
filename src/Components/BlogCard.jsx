import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const BlogCard = ({ blog }) => {
    return (
        <div className="relative bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all duration-300">
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                    {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{blog.excerpt}</p>
                <button
                    className="btn btn-outline btn-accent hover:text-white"
                    onClick={() =>
                        document.getElementById(`modal_${blog.id}`).showModal()
                    }
                >
                    <IoIosArrowDropdownCircle />
                    Show More
                </button>
            </div>

            {/* DaisyUI Modal with Backdrop Close */}
            <dialog id={`modal_${blog.id}`} className="modal sm:modal-middle">
                <div className="modal-box bg-gray-900 text-gray-200 border border-gray-700 w-[95%] sm:w-[85%] lg:w-[70%] max-w-none max-h-[60vh]">
                    <h3 className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                        {blog.title}
                    </h3>
                    <p className="py-4 text-gray-300">{blog.content}</p>
                    <div className="modal-action">
                        {/* The close button is now inside a <form method="dialog"> which is correct */}
                        <form method="dialog">
                            <button className="btn btn-soft btn-accent hover:text-white btn-sm md:btn-md">
                                Close
                            </button>
                        </form>
                    </div>
                </div>

                {/* 👈 THIS IS THE CRITICAL ADDITION for closing when clicking outside */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                    {/* The content of this button is hidden by the backdrop but necessary for closing */}
                </form>
            </dialog>
        </div>
    );
};

export default BlogCard;
