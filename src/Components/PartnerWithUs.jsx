import React from "react";
// Removed: import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

const tiers = [
    {
        name: "Platinum",
        gradient: "from-[#8a2be2] via-[#00ffff] to-[#6a5acd]",
        glow: "shadow-[0_0_25px_#8a2be2]",
        description:
            "Our most premium sponsorship tier. Maximum visibility, prime placement, and elite networking opportunities.",
        benefits: [
            "Keynote Speaking Opportunity",
            "Premium Booth & Branding",
            "Logo on Main Stage & Website",
            "Exclusive VIP Networking",
        ],
    },
    {
        name: "Gold",
        gradient: "from-[#ffd700] via-[#ffa500] to-[#ffcc00]",
        glow: "shadow-[0_0_25px_#ffd700]",
        description:
            "A prestigious level of sponsorship with extensive branding and promotional exposure throughout the event.",
        benefits: [
            "Booth at Expo Zone",
            "Logo on Website & Brochure",
            "Social Media Promotion",
            "Special Recognition on Stage",
        ],
    },
    {
        name: "Silver",
        gradient: "from-[#c0c0c0] via-[#808080] to-[#a9a9a9]",
        glow: "shadow-[0_0_25px_#c0c0c0]",
        description:
            "Ideal for emerging companies looking to connect with innovators and tech enthusiasts.",
        benefits: [
            "Standard Booth Access",
            "Logo in Event Materials",
            "Mention in Closing Ceremony",
        ],
    },
];

const PartnerWithUs = () => {
    return (
        <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            <div className="w-11/12 md:container mx-auto">
                {/* Glowing background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(138,43,226,0.1),transparent_70%)]"></div>

                <div className="px-6 text-center relative z-10">
                    {/* Title: Removed motion.h2 and animation props */}
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                        Partner With Us
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
                        Become a driving force behind IEEE BranchFest 2025 —
                        where innovation meets opportunity. Partner with us to
                        showcase your brand to thousands of bright minds and
                        industry leaders.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        {tiers.map((tier, index) => (
                            // Tier Cards: Replaced motion.div with standard div. Entrance animation removed.
                            // The hover animation is now purely CSS (hover:scale-105).
                            <div
                                key={tier.name}
                                className={`relative overflow-hidden border border-gray-700 rounded-2xl backdrop-blur-xl bg-gray-900/50 p-8 transition-all duration-500 hover:scale-105 group`}
                            >
                                {/* Glowing ring background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500`}
                                ></div>

                                <div className="relative z-10">
                                    <div
                                        className={`inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold text-black mb-6 bg-gradient-to-r ${tier.gradient}`}
                                    >
                                        <FaMedal className="mr-2" />
                                        {tier.name} Tier
                                    </div>

                                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                                        {tier.description}
                                    </p>

                                    <ul className="space-y-2 text-left text-gray-400 text-sm">
                                        {tier.benefits.map((b, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="text-cyan-400">
                                                    ▹
                                                </span>{" "}
                                                {b}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button: Replaced motion.button with standard button. Added hover:scale-105 and active:scale-95 */}
                                    <button
                                        className={`mt-8 px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r ${tier.gradient} text-black shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95`}
                                    >
                                        Become a {tier.name} Partner
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerWithUs;
