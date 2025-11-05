import React, { useState, useEffect } from "react";
// We keep motion imported since it's used for the countdown
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
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden ">
            <div className="w-11/12 md:container mx-auto">
                {/* Techy animated background lines (CSS grid/radial gradient) - RETAINED */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                </div>

                {/* Animated Title -> CONVERTED TO STANDARD H1 (Loads Instantly) */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r/hsl from-sky-600 to-teal-400 text-center">
                    IEEE BranchFest 2025
                </h1>

                {/* Subtitle -> CONVERTED TO STANDARD P (Loads Instantly) */}
                <p className="sm:text-xl md:text-3xl text-gray-300 mb-12 text-center px-6">
                    Where Tomorrow's Innovators Meet Today's Industry Leaders
                </p>

                {/* Countdown Timer -> FRAMER MOTION RETAINED */}
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

                {/* Decorative moving lines -> REMOVED ENTIRELY for performance */}
            </div>
        </section>
    );
};

export default Hero;
