import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

import shehab from "../assets/Photos/Shehab.jpg";
import mridula from "../assets/Photos/Chair_Mridula.jpg";
import farhana from "../assets/Photos/Chair_Farhana.jpg";

// Define the colors for each group/chapter
const colors = {
    wie: {
        shadow: "shadow-purple-500 hover:shadow-purple-400",
        border: "border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]", // purple-400 shadow
        text: "text-purple-500",
    },
    sb: {
        shadow: "shadow-blue-400 hover:shadow-blue-300",
        border: "border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]", // blue-400 shadow
        text: "text-blue-400",
    },
    cs: {
        shadow: "shadow-amber-400 hover:shadow-amber-300",
        border: "border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]", // amber-400 shadow
        text: "text-amber-400",
    },
};

const contacts = [
    {
        name: "Mridula Mozid",
        role: "Chairperson",
        branch: "IEEE BUP Student Branch WIE Affinity Group",
        email: "mridula2254901037@student.bup.edu.bd",
        phone: "+880 1711 465592",
        image: mridula,
        // Assign color scheme
        colorScheme: colors.wie,
    },
    {
        name: "MD. Shehab Uddin",
        role: "Chairperson",
        branch: "IEEE BUP Student Branch",
        email: "md.shehab2254901121@student.bup.edu.bd",
        phone: "+880 1521 557665",
        image: shehab,
        // Assign color scheme
        colorScheme: colors.sb,
    },
    {
        name: "Umme Farhana Sumaiya",
        role: "Chairperson",
        branch: "IEEE Computer Society BUP Student Branch Chapter",
        email: "umme2254901127@student.bup.edu.bd",
        phone: "+880 1742 753559",
        image: farhana,
        // Assign color scheme
        colorScheme: colors.cs,
    },
];

const Contact = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            <div className="w-11/12 md:container mx-auto">
                {/* Neon glow background - kept general or adjusted to complement all colors */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(138,43,226,0.15),transparent_70%)]"></div>

                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-4xl font-bold mb-12 bg-linear-to-r from-blue-400 from-25% via-purple-500 via-50% to-amber-400 to-75% lg:from-purple-500 lg:via-blue-400 lg:from-28% lg:to-65% text-transparent bg-clip-text"
                    >
                        Contact Our Chairpersons
                    </motion.h2>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {contacts.map((person, index) => {
                            // Assign special order classes
                            let orderClass = "";
                            if (index === 1) {
                                // Shehab: first in mobile, middle in large
                                orderClass = "order-1 lg:order-2";
                            } else if (index === 0) {
                                orderClass = "order-2 lg:order-1";
                            } else if (index === 2) {
                                orderClass = "order-3";
                            }

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    className={`bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl 
                                    shadow-md hover:shadow-lg
                                    p-8 text-center transition-all duration-300 ${orderClass} ${person.colorScheme.shadow}`}
                                >
                                    <div className="flex justify-center mb-6">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            // Dynamic Border and Shadow
                                            className={`h-24 w-24 rounded-full border-2 object-cover ${person.colorScheme.border}`}
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">
                                        {person.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-1">
                                        {person.role}
                                    </p>
                                    {/* Dynamic Branch Name Color */}
                                    <p
                                        className={`text-sm mb-4 ${person.colorScheme.text}`}
                                    >
                                        {person.branch}
                                    </p>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition">
                                            {/* Icon color is kept cyan for contrast/uniformity */}
                                            <Mail className="h-4 w-4 text-cyan-400" />
                                            <a
                                                href={`mailto:${person.email}`}
                                                className="hover:underline"
                                            >
                                                {person.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition">
                                            {/* Icon color is kept cyan for contrast/uniformity */}
                                            <Phone className="h-4 w-4 text-cyan-400" />
                                            <a href={`tel:${person.phone}`}>
                                                {person.phone}
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
