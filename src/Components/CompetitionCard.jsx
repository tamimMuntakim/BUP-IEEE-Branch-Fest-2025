import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CompetitionCard = ({ image, title, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-gray-900/70 border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300"
    >
      {/* Competition Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Text Section */}
      <div className="p-5 flex flex-col justify-between h-48">
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm flex-grow">{description}</p>

        <motion.a
          href={link || "#"}
          whileHover={{ boxShadow: "0 0 15px rgba(0,255,255,0.7)" }}
          className="mt-4 inline-block text-center px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-black transition-all duration-300"
        >
          Learn More
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CompetitionCard;
