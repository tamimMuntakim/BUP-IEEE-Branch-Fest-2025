import React, { useState, useEffect } from "react";

// eslint-disable-next-line no-unused-vars

import { motion } from "framer-motion";

const Hero = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date("November 25, 2025 09:00:00").getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance <= 0) {
            return { days: "00", hours: "00", minutes: "00", seconds: "00" };
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return {
            days: days.toString().padStart(2, "0"),
            hours: hours.toString().padStart(2, "0"),
            minutes: minutes.toString().padStart(2, "0"),
            seconds: seconds.toString().padStart(2, "0"),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden ">
            {/* Techy animated background lines */}
            <div className="w-11/12 md:container mx-auto">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)]"></div>

                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-90"></div>

                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-90"></div>
                </div>

                {/* Animated Title */}

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl sm:text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-linear-to-r/hsl from-sky-600 to-teal-400 text-center"
                >
                    IEEE BranchFest 2025
                </motion.h1>

                <p className="text-gray-200 text-xs md:text-sm text-center mb-6 mt-2">
                    Organized by{" "}
                    <span className="text-blue-400 font-semibold">
                        IEEE BUP Student Branch
                    </span>
                    ,{" "}
                    <span className="text-purple-500 font-semibold">
                        IEEE BUP Student Branch WIE Affinity Group
                    </span>{" "}
                    and{" "}
                    <span className="text-amber-400 font-semibold">
                        IEEE Computer Society BUP Student Branch Chapter
                    </span>
                </p>

                {/* Subtitle */}

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="sm:text-xl md:text-3xl text-gray-300 mb-12 text-center px-6"
                >
                    Where Tomorrow's Innovators Meet Today's Industry Leaders
                </motion.p>

                {/* Countdown Timer */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="flex justify-center"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
                        {[
                            { label: "DAYS", value: timeLeft.days },
                            { label: "HOURS", value: timeLeft.hours },
                            { label: "MINUTES", value: timeLeft.minutes },
                            { label: "SECONDS", value: timeLeft.seconds },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-gray-900/70 backdrop-blur-md border border-cyan-500/50 rounded-2xl px-4 py-2 sm:px-6 sm:py-4 shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                            >
                                <div className="sm:text-lg md:text-xl xl:text-2xl font-bold text-cyan-400 neon-text">
                                    {item.value}
                                </div>
                                <div className="text-gray-400 text-xs sm:text-sm md:text-base mt-2 tracking-wider">
                                    {item.label}
                                </div>
                                {/* Glowing line effect */}
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Decorative moving lines */}

                {/* <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    viewport={{ once: true }}
                    className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-40"
                ></motion.div>

                <motion.div
                    animate={{ x: [0, -100, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"
                ></motion.div> */}
            </div>
        </section>
    );
};

export default Hero;
