import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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
            desc: "Showcase your company’s culture, values, and vision to a future workforce of innovators.",
        },
        {
            emoji: "⚙️",
            title: "Efficient Recruitment",
            desc: "Streamline your hiring process through pre-scheduled interviews and skill-based matchmaking.",
        },
        // {
        //     emoji: "🤝",
        //     title: "Industry Networking",
        //     desc: "Build relationships with academic leaders, startups, and organizations in the IEEE ecosystem.",
        // },
    ];

    return (
        <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 overflow-hidden">
            {/* Futuristic grid background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10">
                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative w-full md:w-1/2"
                >
                    <div className="absolute inset-0 rounded-3xl border border-cyan-500/40 blur-md animate-pulse"></div>
                    <img
                        src={jobfairpic}
                        alt="Job Fair"
                        className="rounded-3xl w-full shadow-[0_0_25px_rgba(0,255,255,0.3)] object-cover"
                    />
                </motion.div>

                {/* Right: Text and Points */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                        IEEE BranchFest 2025 Job Fair
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        The IEEE BranchFest 2025 Job Fair is where talent meets
                        opportunity. Designed to bridge the gap between students
                        and industries, it offers recruiters and organizations a
                        platform to engage, evaluate, and employ the next
                        generation of tech leaders.
                    </p>

                    {/* Key Points */}
                    <ul className="space-y-4 pt-4">
                        {points.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-3 bg-gray-900/60 border border-cyan-500/30 rounded-2xl p-4 shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
                            >
                                <span className="text-2xl">{item.emoji}</span>
                                <div>
                                    <h3 className="text-cyan-400 font-semibold text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Animated sweeping lines */}
            {/* <motion.div
                animate={{ x: [0, 150, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-40"
            ></motion.div>
            <motion.div
                animate={{ x: [0, -150, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"
            ></motion.div> */}
        </section>
    );
};

export default JobFair;
