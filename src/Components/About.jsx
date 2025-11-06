import React from "react";
// We keep motion imported since it's used for the Stats boxes
import { motion } from "framer-motion";
// FIX: Removed local image import (Banner_img from "../assets/Photos/banner_resized.jpg")
// and replaced it with a web-based placeholder URL to fix the compilation error.
import Banner_img from "../assets/Photos/banner_resized.jpg";

const About = () => {
    const stats = [
        { label: "Participants", value: "1200+" },
        { label: "Universities", value: "30+" },
        { label: "Companies", value: "25+" },
        { label: "Budget", value: "$50K+" },
    ];

    return (
        <section id="about" className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 overflow-hidden">
            {/* Background tech grid */}
            <div className="w-11/12 md:container mx-auto">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                </div>

                <div className="flex flex-col xl:flex-row items-center gap-8 relative z-10 justify-center">
                    {/* Left Side — Image: CONVERTED to standard DIV for instant load */}
                    <div
                        // Removed Framer Motion entrance animation for faster loading
                        className="relative"
                    >
                        {/* Static CSS blur effect remains */}
                        <div className="absolute inset-0 rounded-3xl border border-cyan-500/40 blur-md animate-pulse"></div>
                        <img
                            // FIX: Using the placeholder URL
                            src={Banner_img}
                            alt="IEEE BranchFest 2025"
                            className="rounded-3xl w-full shadow-[0_0_25px_rgba(0,255,255,0.3)] object-cover"
                            loading="lazy"
                            width="800"
                            height="500"
                        />
                    </div>

                    {/* Right Side — Content: CONVERTED to standard DIV for instant load */}
                    <div
                        // Removed Framer Motion entrance animation for faster loading
                        className="space-y-6"
                    >
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r/hsl from-emerald-400 to-sky-600">
                            About IEEE BranchFest 2025
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-lg md:text-justify">
                            IEEE BranchFest 2025 is the ultimate fusion of
                            innovation, technology, and collaboration — where
                            bright young minds from across the country gather to
                            showcase ideas, connect with industry leaders, and
                            shape the future of tech. Expect a full spectrum of
                            activities, from hackathons and robotics challenges
                            to networking and startup showcases.
                        </p>

                        {/* Stats Boxes: FRAMER MOTION RETAINED (for stagger-in-view effect) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-6">
                            {stats.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        // Staggered delay remains
                                        delay: index * 0.1,
                                        duration: 0.8,
                                    }}
                                    viewport={{ once: true }}
                                    className="relative bg-gray-900/70 backdrop-blur-md border border-cyan-500/50 rounded-2xl py-4 px-2 text-center shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300"
                                >
                                    <div className="sm:text-lg md:text-xl xl:text-2xl font-bold text-cyan-400 mb-1">
                                        {item.value}
                                    </div>
                                    <div className="text-gray-400 text-xs sm:text-sm md:text-base uppercase tracking-wider">
                                        {item.label}
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative moving lines (removed for performance) */}
            </div>
        </section>
    );
};

export default About;
