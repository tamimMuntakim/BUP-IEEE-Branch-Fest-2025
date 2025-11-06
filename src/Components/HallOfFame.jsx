import React from "react";
// Removed: import { motion } from "framer-motion";

import hf1 from "../assets/Photos/hf1_resized.jpg";
import hf2 from "../assets/Photos/hf2_resized.JPG";
import hf3 from "../assets/Photos/hf3_resized.jpg";
import hf4 from "../assets/Photos/hf4_resized.jpg";
import hf5 from "../assets/Photos/hf5_resized.jpg";
import hf6 from "../assets/Photos/hf6_resized.jpg";
import hf7 from "../assets/Photos/hf7_resized.jpg";
import hf8 from "../assets/Photos/hf8_resized.jpg";
import hf9 from "../assets/Photos/hf9_resized.JPG";
import hf10 from "../assets/Photos/hf10_resized.JPG";

const images = [hf1, hf2, hf3, hf4, hf5, hf6, hf7, hf8, hf9, hf10];
const HallOfFame = () => {
    return (
        <section
            id="hall-of-fame"
            className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
        >
            <div className="w-11/12 md:container mx-auto">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#00ffff_0%,_transparent_70%)]"></div>

                <div className="text-center">
                    {/* Replaced motion.h2 with standard h2 */}
                    <h2
                        // Removed: initial, animate, transition, and viewport props
                        className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-linear-to-r/hsl from-blue-700 to-green-400 text-transparent bg-clip-text"
                    >
                        Hall of Fame
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm sm:text-lg">
                        Relive the energy, excitement, and innovation of our
                        previous BranchFest events — where great minds met and
                        memories were made.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {images.map((src, i) => (
                            <div
                                key={i}
                                className={`relative overflow-hidden rounded-xl group ${
                                    i % 5 === 0
                                        ? "col-span-2 row-span-2"
                                        : "col-span-1 row-span-1"
                                }`}
                            >
                                <img
                                    src={src}
                                    alt="BranchFest Memory"
                                    // Image is already optimized with lazy loading and GPU-accelerated CSS hover
                                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 group-hover:shadow-md group-hover:shadow-accent"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40 group-hover:opacity-20 group-hover:shadow-md group-hover:shadow-accent transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HallOfFame;
