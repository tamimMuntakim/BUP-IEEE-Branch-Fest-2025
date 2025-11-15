import React, { useState, useEffect } from "react";

// Updated to be an array of updates. The component will now cycle through all items.
const latestUpdateData = [
    {
        news: "Unleash your creativity through digital arts! Deadline: November 20th, 2025",
        redirect_to:
            "https://forms.gle/teBaFm4U4gJZ3cYc6",
        redirecting_text: "Register Now",
    },
    {
        news: "“DESIGN-A-THON” powered by Ostad! Deadline: November 18th, 2025",
        redirect_to:
            "https://forms.gle/uh2Yfus7ipsH68GF9",
        redirecting_text: "Register Now",
    },
    {
        news: "Make tech reels, win hearts! Deadline: November 20th, 2025",
        redirect_to:
            "https://forms.gle/fJUqsZFqBsgVYqk77",
        redirecting_text: "Register Now",
    },
    {
        news: "Call for Poster Designs! Deadline: November 16th, 2025",
        redirect_to:
            "https://docs.google.com/forms/d/e/1FAIpQLSdNuHmexGpYdbK17mq7bztjpvCZs-TXdvY9Fidj20Ccnf3OrA/viewform",
        redirecting_text: "Register Now",
    },
    {
        news: "Call for Abstracts! Deadline: November 16th, 2025",
        redirect_to: "https://forms.gle/RherQjZowWSEGFJUA",
        redirecting_text: "Register Now",
    },
    // {
    //     news: "Become a Campus Ambassador for IEEE BranchFest 2025! Deadline: November 12th, 2025",
    //     redirect_to: "https://forms.gle/LUmYJGWcqtswAzNg6",
    //     redirecting_text: "Apply Now",
    // },
    // {
    //     news: "1 day Left for Logo Design Contest! Deadline: November 8th, 2025 (11:59 PM BST)",
    //     redirect_to: "https://forms.gle/NY5cAt8zL5YjJdv99",
    //     redirecting_text: "Submit Now",
    // },
    // {
    //     news: "Keynote speaker announcement: Dr. Anya Sharma, CEO of TechCorp, will open the event.",
    //     redirect_to: "#speakers",
    //     redirecting_text: "View Speakers",
    // },
    // {
    //     news: "Abstract submission window opens next week! Prepare your papers.",
    //     redirect_to: "#abstracts",
    //     redirecting_text: "Prepare Submission",
    // },
];

// Inline SVG for Bell Icon (replaces FaRegBell)
const BellIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
            fill="currentColor"
            d="M224 0c17.7 0 32 14.3 32 32V51.2C329.8 69.4 384 133.1 384 208v57.9c0 48.6 1.8 96.5 5.2 143.2c.5 7.9-2.3 15.6-7.3 21.1l-25.3 28.5c-43.8 49.3-109.1 77.2-177.4 77.2c-68.3 0-133.6-27.9-177.4-77.2l-25.3-28.5c-5-5.5-7.8-13.2-7.3-21.1C30.2 362.5 32 314.6 32 265.9V208c0-74.9 54.2-138.6 128-156.8V32c0-17.7 14.3-32 32-32s32 14.3 32 32zm80 448H136c0 17.7 14.3 32 32 32h112c17.7 0 32-14.3 32-32z"
        />
    </svg>
);

// Inline SVG for External Link Icon (replaces FaExternalLinkAlt)
const ExternalLinkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
            fill="currentColor"
            d="M384 320c-17.7 0-32 14.3-32 32v64H64V160h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-64c0-17.7-14.3-32-32-32zM368 0h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V69.3l-133.4 133.3c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 32H368c-17.7 0-32-14.3-32-32z"
        />
    </svg>
);

const LatestUpdate = () => {
    // State to track the index of the currently displayed update
    const [currentIndex, setCurrentIndex] = useState(0);

    // 1. Check if the array is empty or invalid. If so, return null to take up no space.
    if (!latestUpdateData || latestUpdateData.length === 0) {
        return null;
    }

    const totalUpdates = latestUpdateData.length;

    // useEffect to handle the automatic rotation of updates
    useEffect(() => {
        // Only start the interval if there's more than one update to rotate
        if (totalUpdates > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalUpdates);
            }, 7000); // Rotate every 5 seconds

            // Cleanup function to clear the interval when the component unmounts
            return () => clearInterval(interval);
        }
    }, [totalUpdates]);

    // Get the current update data
    const currentUpdate = latestUpdateData[currentIndex];
    const { news, redirect_to, redirecting_text } = currentUpdate;

    // Apply conditional padding: only add sm:pr-16 if we have more than one update (and thus dots)
    const containerClasses = `w-11/12 md:container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between relative z-10 ${
        totalUpdates > 1 ? "sm:pr-4" : ""
    }`;

    return (
        <div className="bg-gray-950 border-b border-cyan-700/50 py-3 relative overflow-hidden">
            {/* Subtle animated light effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_center,rgba(0,255,255,0.05),transparent_70%)] animate-pulse-slow"></div>

            {/* Apply conditional padding here */}
            <div className={containerClasses}>
                {/* News Message (using 'key' to force re-render/transition on content change) */}
                <p
                    key={currentIndex} // Key forces transition when index changes
                    className="text-white text-sm sm:text-base font-medium flex items-center text-center sm:text-left mb-2 sm:mb-0 transition-opacity duration-700 ease-in-out"
                    style={{ animation: "fade-in 0.7s ease-in-out" }} // Apply temporary fade-in animation
                >
                    <BellIcon className="text-cyan-400 mr-2 flex-shrink-0 h-4 w-4" />
                    <span className="">{news}</span>
                </p>

                {/* Call-to-Action Link */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                    <a
                        href={redirect_to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-xs md:btn-sm btn-secondary btn-soft hover:text-white"
                    >
                        {redirecting_text}
                        <ExternalLinkIcon className="ml-2 h-2.5 w-2.5" />
                    </a>

                    {/* Navigation Dots (Only rendered if totalUpdates > 1) */}
                    {totalUpdates > 1 && (
                        <div className="flex transform -translate-y-1/2 space-x-1">
                            {latestUpdateData.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                        index === currentIndex
                                            ? "bg-cyan-400 w-3"
                                            : "bg-gray-600 hover:bg-gray-400"
                                    }`}
                                    // Allow manual change on click
                                    onClick={() => setCurrentIndex(index)}
                                    role="button"
                                    aria-label={`View update ${index + 1}`}
                                ></div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Custom Tailwind keyframes for animation */}
            <style jsx="true">{`
                @keyframes pulse-slow {
                    0%,
                    100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 10s infinite;
                }
                /* Fade-in animation for content rotation */
                @keyframes fade-in {
                    from {
                        opacity: 0.5;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default LatestUpdate;
