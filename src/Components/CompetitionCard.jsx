import React from "react";
// Removed: import { motion } from "framer-motion";

const CompetitionCard = ({ image, title, description, link }) => {
    return (
        <div
            // Added Tailwind classes for the hover effect
            className="relative bg-gray-900/70 border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 transform hover:scale-[1.03]" // Added 'transform' and 'hover:scale-[1.03]'
        >
            {/* Competition Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    // IMPORTANT: Keep lazy loading for performance
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Text Section */}
            <div className="p-5 flex flex-col justify-between h-48">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    {title}
                </h3>
                <p className="text-gray-300 text-sm flex-grow">{description}</p>

                {/* Anchor Tag is already non-Framer Motion, just ensure shadow is pure CSS */}
                <a
                    href={link || "#"}
                    className="mt-4 inline-block text-center px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.7)]"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default CompetitionCard;
