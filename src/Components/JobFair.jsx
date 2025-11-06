import React from "react";
// Removed: import { motion } from "framer-motion";
import jobfairpic from "../assets/Photos/job_fair_resized.JPG";

const JobFair = () => {
    const points = [
        {
            emoji: "💼",
            title: "Access Elite Talent",
            desc: "Connect directly with top-performing students and tech enthusiasts from universities across the nation.",
        },
        {
            emoji: "🏢",
            title: "Strategic Employer Branding",
            desc: "Showcase your company's culture, values, and vision to a future workforce of innovators.",
        },
        {
            emoji: "⚙️",
            title: "Efficient Recruitment",
            desc: "Streamline your hiring process through pre-scheduled interviews and skill-based matchmaking.",
        },
    ];

    return (
        <section id="job-fair" className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 overflow-hidden">
            <div className="w-11/12 md:container mx-auto">
                {/* Futuristic grid background - (Note: complex gradients can still be heavy) */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                </div>

                <div className=" flex flex-col md:flex-row items-center gap-12 relative z-10">
                    {/* Left: Image Container - Set this as the GROUP for the hover effect */}
                    <div
                        className="relative w-full md:w-1/2 will-change-transform group" // <-- Added 'group'
                    >
                        <div className="absolute inset-0 rounded-3xl border border-cyan-500/40 blur-md animate-pulse"></div>
                        <img
                            src={jobfairpic}
                            alt="Job Fair"
                            loading="lazy"
                            // 💡 Added hover effect to the image
                            className="rounded-3xl w-full shadow-[0_0_25px_rgba(0,255,255,0.3)] object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                    </div>

                    {/* Right: Text and Points */}
                    <div className="w-full md:w-1/2 space-y-6 will-change-transform">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r/hsl from-teal-400 to-blue-600">
                            IEEE BranchFest 2025 Job Fair
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">
                            The IEEE BranchFest 2025 Job Fair is where talent
                            meets opportunity. Designed to bridge the gap
                            between students and industries, it offers
                            recruiters and organizations a platform to engage,
                            evaluate, and employ the next generation of tech
                            leaders.
                        </p>

                        {/* Key Points */}
                        <ul className="space-y-4 pt-4">
                            {points.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start space-x-3 bg-gray-900/60 border border-cyan-500/30 rounded-2xl p-4 shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                    <span className="text-2xl">
                                        {item.emoji}
                                    </span>
                                    <div>
                                        <h3 className="text-cyan-400 font-semibold text-lg">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobFair;
