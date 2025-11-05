import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import partner1 from "../assets/Logo/basis.png";
import partner2 from "../assets/Logo/bjit.png";
import partner3 from "../assets/Logo/bkash.png";
import partner4 from "../assets/Logo/brac.png";
import partner5 from "../assets/Logo/daraz.png";
import partner6 from "../assets/Logo/emk-padded.png";
import partner7 from "../assets/Logo/gp.png";
import partner8 from "../assets/Logo/ssl.jpeg";
import partner9 from "../assets/Logo/trustbank.png";

const partnerLogos = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
];

const EstimatedPartners = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            <div className="w-11/12 md:container mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(138,43,226,0.1),transparent_70%)]"></div>

                <div className="px-6 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
                    >
                        Our Estimated Partners
                    </motion.h2>

                    {/* Logos Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-items-center"
                    >
                        {partnerLogos.map((logo, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-4 bg-gray-900/40 backdrop-blur-lg border border-gray-700 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transform-gpu"
                            >
                                <img
                                    src={logo}
                                    alt={`Partner ${i + 1}`}
                                    className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EstimatedPartners;
