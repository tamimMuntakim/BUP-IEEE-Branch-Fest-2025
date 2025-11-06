import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

import shehab from "../assets/Photos/Shehab.jpg";
import mridula from "../assets/Photos/Chair_Mridula.jpg";
import farhana from "../assets/Photos/Chair_Farhana.jpg";

const contacts = [
    {
        name: "Mridula Mozid",
        role: "Chairperson",
        branch: "IEEE BUP SB WIE Affinity Group",
        email: "mridula2254901037@student.bup.edu.bd",
        phone: "+880 1711 465592",
        image: mridula,
    },
    {
        name: "MD. Shehab Uddin",
        role: "Chairperson",
        branch: "IEEE BUP Student Branch",
        email: "md.shehab2254901121@student.bup.edu.bd",
        phone: "+880 1521 557665",
        image: shehab,
    },
    {
        name: "Umme Farhana Sumaiya",
        role: "Chairperson",
        branch: "IEEE BUP SB Computer Society Chapter",
        email: "umme2254901127@student.bup.edu.bd",
        phone: "+880 1999 374799",
        image: farhana,
    },
];

const Contact = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            <div className="w-11/12 md:container mx-auto">
                {/* Neon glow background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(138,43,226,0.15),transparent_70%)]"></div>

                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
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
                                    shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_25px_rgba(0,255,255,0.35)] 
                                    p-8 text-center transition-all duration-300 ${orderClass}`}
                                >
                                    <div className="flex justify-center mb-6">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="h-24 w-24 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.4)] object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">
                                        {person.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {person.role}
                                    </p>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {person.branch}
                                    </p>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition">
                                            <Mail className="h-4 w-4 text-cyan-400" />
                                            <a
                                                href={`mailto:${person.email}`}
                                                className="hover:underline"
                                            >
                                                {person.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition">
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
