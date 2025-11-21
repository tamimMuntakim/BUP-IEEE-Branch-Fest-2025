import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const BlogCard = ({ blog }) => {
    // Split content into lines
    const lines = blog.content.split("\n").filter((line) => line.trim() !== "");

    return (
        <div className="relative bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all duration-300">
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition bg-white"
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

            {/* DaisyUI Modal */}
            <dialog id={`modal_${blog.id}`} className="modal sm:modal-middle">
                <div className="modal-box bg-gray-900 text-gray-200 border border-gray-700 w-[95%] sm:w-[85%] lg:w-[70%] max-w-none max-h-[60vh] overflow-y-auto">
                    <h3 className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-3">
                        {blog.title}
                    </h3>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        {lines.map((line, idx) => {
                            // Bullet point detection
                            if (
                                line.trim().startsWith("-") ||
                                line.trim().startsWith("*") ||
                                line.trim().startsWith("•")
                            ) {
                                return (
                                    <ul key={idx} className="list-disc ml-6">
                                        <li>{line.replace(/^[-*•]\s*/, "")}</li>
                                    </ul>
                                );
                            }

                            // Regular paragraph
                            return <p key={idx}>{line}</p>;
                        })}
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-soft btn-accent hover:text-white btn-sm md:btn-md">
                                Close
                            </button>
                        </form>
                    </div>
                </div>

                {/* Backdrop */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default BlogCard;
