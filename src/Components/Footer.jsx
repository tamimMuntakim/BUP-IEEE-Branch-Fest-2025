import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 py-10 border-t border-gray-800 overflow-hidden">
            <div className="w-11/12 md:container mx-auto px-2">
                {/* Subtle glow background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(138,43,226,0.1),transparent_70%)]"></div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 text-center lg:text-left">
                    {/* Left Section */}
                    <div className="text-sm text-gray-400">
                        <p className="font-semibold text-white">
                            IEEE BranchFest 2025
                        </p>
                        <p>
                            25<sup>th</sup> - 26<sup>th</sup> November, 2025 |
                            BUP Campus, Mirpur Cantonment, Dhaka-1216
                        </p>
                    </div>

                    {/* Center Section - Socials */}
                    {/* <div className="flex items-center justify-center gap-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
                        >
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-400 transition transform hover:scale-110"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div> */}

                    {/* Right Section */}

                    <div className="space-y-2 text-sm">
                        <p className="text-gray-400">
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
                        <p className="text-gray-500 text-xs">
                            © 2025 IEEE BranchFest. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
