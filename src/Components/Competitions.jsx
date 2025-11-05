import React from "react";
import CompetitionCard from "./CompetitionCard";

import poster_presentation from "../assets/Photos/poster_persentation_resized.JPG";
import digital_art_contest from "../assets/Photos/digital_art_resized.jpg";
import design_a_thon from "../assets/Photos/design_a_thron_resized.jpg";
import ad_making_competition from "../assets/Photos/ad_making_resized.jpg";
import it_quiz from "../assets/Photos/it_quiz_resized.JPG";
import it_business_idea from "../assets/Photos/it_business_resized.JPG";
import abstract_submission from "../assets/Photos/abstract_submission_resized.jpg";
import tech_reels_competition from "../assets/Photos/reel_resized.JPG";
import ethical_case_solving from "../assets/Photos/ethical_case_resized.jpg";

const Competitions = () => {
    const competitions = [
        {
            title: "Poster Presentation",
            image: poster_presentation,
            description:
                "Present your research findings through creative posters and compete for academic excellence awards.",
        },
        {
            title: "Digital Art Contest",
            image: digital_art_contest,
            description:
                "Showcase your artistic talents in an open-themed competition for graphic designers and digital artists.",
        },
        {
            title: "Design-A-Thon",
            image: design_a_thon,
            description:
                "24-hour intensive design competition to solve real-world problems through innovative solutions.",
        },
        {
            title: "Ad Making Competition",
            image: ad_making_competition,
            description:
                "Create compelling advertisements around given themes and showcase your marketing creativity.",
        },
        {
            title: "IT Quiz",
            image: it_quiz,
            description:
                "Test your knowledge in information technology through challenging quiz competition for tech enthusiasts.",
        },
        {
            title: "Tech Reels Competition",
            image: tech_reels_competition,
            description:
                "Create engaging short videos explaining tech concepts in innovative ways for social media platforms.",
        },
        {
            title: "IT Business Idea",
            image: it_business_idea,
            description:
                "Pitch sustainable IT business ideas to address real-world challenges and shape the future of technology.",
        },
        {
            title: "Abstract Submission",
            image: abstract_submission,
            description:
                "Submit abstracts to experts for evaluation of originality and impact.",
        },
        {
            title: "Ethical Case Solving",
            image: ethical_case_solving,
            description:
                "Analyze real-world IT dilemmas and propose ethical solutions aligned with the IEEE code of ethics.",
        },
    ];

    return (
        <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 overflow-hidden">
            <div className="w-11/12 md:container mx-auto">
                {/* Background tech grid */}

                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                </div>

                {/* Title: Framer Motion removed */}
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 relative z-10">
                    Competitions at IEEE BranchFest 2025
                </h2>

                {/* Competition Grid */}
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 relative z-10">
                    {competitions.map((comp, index) => (
                        <CompetitionCard key={index} {...comp} />
                    ))}
                </div>
                {/* Removed futuristic sweeping lines for performance */}
            </div>
        </section>
    );
};

export default Competitions;
