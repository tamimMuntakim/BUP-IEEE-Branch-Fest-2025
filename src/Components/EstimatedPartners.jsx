import React from "react";
// Removed: import { motion } from "framer-motion";

// Placeholder URL used to avoid compilation errors caused by local asset imports
// import partner1 from "../assets/Logo/basis.png";
// import partner2 from "../assets/Logo/bjit.png";
// import partner3 from "../assets/Logo/bkash.png";
// import partner4 from "../assets/Logo/brac.png";
// import partner5 from "../assets/Logo/daraz.png";
// import partner6 from "../assets/Logo/emk-padded.png";
// import partner7 from "../assets/Logo/gp.png";
// import partner8 from "../assets/Logo/ssl.jpeg";
// import partner9 from "../assets/Logo/trustbank.png";
// import partner10 from "../assets/Logo/github_education.png";
import radiant from "../assets/Logo/radiant.png";
// import github_education from "../assets/Logo/github_education.png";
import ap from "../assets/Logo/ap.png";
import ostad from "../assets/Logo/ostad.png";
import ingenious from "../assets/Logo/ingenious.jpeg";
import health_care from "../assets/Logo/health_care.jpeg";

const partnerLogos = [
    // partner10,
    // partner1,
    // partner2,
    // partner3,
    // partner4,
    // partner5,
    // partner6,
    // partner7,
    // partner8,
    // partner9,
    radiant,
    ap,
    ostad,
    health_care,
    ingenious
    // github_education,
];

const EstimatedPartners = () => {
    return (
        <section id="partners" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            <div className="w-11/12 md:container mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(138,43,226,0.1),transparent_70%)]"></div>

                <div className="px-6 relative z-10">
                    {/* Title: motion.h2 removed */}
                    <h2 className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold mb-12 bg-linear-to-r/hsl from-emerald-300 to-indigo-600 text-transparent bg-clip-text">
                        Our Partners
                    </h2>

                    {/* Logos Grid Container: motion.div removed */}
                    <div className="flex flex-wrap gap-10 items-center justify-center">
                        {partnerLogos.map((logo, i) => (
                            // Individual Logo Card: motion.div removed. Added transition-transform duration-300 transform hover:scale-[1.08]
                            <div
                                key={i}
                                className="p-4 bg-gray-900/40 backdrop-blur-lg border border-gray-700 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-transform duration-300 transform hover:scale-[1.08]"
                            >
                                <img
                                    src={logo}
                                    alt={`Partner ${i + 1}`}
                                    className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 bg-base-100 rounded"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EstimatedPartners;
