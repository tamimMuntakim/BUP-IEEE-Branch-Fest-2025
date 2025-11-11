import React from "react";
import CompetitionCard from "./CompetitionCard";

import poster_presentation from "../assets/Photos/poster_persentation_resized.JPG";
import digital_art_contest from "../assets/Photos/digital_art_resized.jpg";
import design_a_thon from "../assets/Photos/design_a_thron_resized.jpg";
import ad_making_competition from "../assets/Photos/ad_making_resized.jpg";
import it_quiz from "../assets/Photos/it_quiz_resized.JPG";
import it_business_idea from "../assets/Photos/it_business_resized.JPG";
import abstract_submission from "../assets/Photos/abstract_submission_resized.png";
import tech_reels_competition from "../assets/Photos/reel_resized.png";
import ethical_case_solving from "../assets/Photos/ethical_case_resized.jpg";
import logo_design from "../assets/Photos/logo_design.png";

const Competitions = () => {
    const competitions = [
        // {
        //     title: "Logo Design Contest",
        //     image: logo_design,
        //     description:
        //         "We're looking for a unique, creative, and meaningful logo that captures the spirit of technology, innovation, and creativity— the essence of BranchFest!",
        //     registrationDeadline: "2025-11-08",
        //     rulebookLink:
        //         "https://drive.google.com/file/d/1pSw5nrAeep7jzkeHSMpxcCA-eVS-8jFe/view",
        //     registrationLink:
        //         "https://forms.gle/NY5cAt8zL5YjJdv99",
        // },
        {
            title: "Poster Presentation",
            image: poster_presentation,
            description:
                "Present your research findings through creative posters and compete for academic excellence awards.",
            registrationDeadline: "2025-02-20",
            rulebookLink:
                "https://example.com/rulebook/poster-presentation.pdf",
            registrationLink:
                "https://example.com/register/poster-presentation",
        },
        {
            title: "Digital Art Contest",
            image: digital_art_contest,
            description:
                "Showcase your artistic talents in an open-themed competition for graphic designers and digital artists.",
            registrationDeadline: "2025-02-18",
            rulebookLink: "https://example.com/rulebook/digital-art.pdf",
            registrationLink: "https://example.com/register/digital-art",
        },
        {
            title: "Design-A-Thon",
            image: design_a_thon,
            description:
                "24-hour intensive design competition to solve real-world problems through innovative solutions.",
            registrationDeadline: "2025-12-22",
            rulebookLink: "https://example.com/rulebook/design-a-thon.pdf",
            registrationLink: "https://example.com/register/design-a-thon",
        },
        {
            title: "Ad Making Competition",
            image: ad_making_competition,
            description:
                "Create compelling advertisements around given themes and showcase your marketing creativity.",
            registrationDeadline: "2025-02-19",
            rulebookLink: "https://example.com/rulebook/ad-making.pdf",
            registrationLink: "https://example.com/register/ad-making",
        },
        {
            title: "IT Quiz",
            image: it_quiz,
            description:
                "Test your knowledge in information technology through challenging quiz competition for tech enthusiasts.",
            registrationDeadline: "2025-02-17",
            rulebookLink: "https://example.com/rulebook/it-quiz.pdf",
            registrationLink: "https://example.com/register/it-quiz",
        },
        {
            title: "Tech Reels Competition",
            image: tech_reels_competition,
            description:
                "Create engaging short videos explaining tech concepts in innovative ways for social media platforms.",
            registrationDeadline: "2025-02-21",
            rulebookLink: "https://example.com/rulebook/tech-reels.pdf",
            registrationLink: "https://example.com/register/tech-reels",
        },
        {
            title: "IT Business Idea",
            image: it_business_idea,
            description:
                "Pitch sustainable IT business ideas to address real-world challenges and shape the future of technology.",
            registrationDeadline: "2025-02-23",
            rulebookLink: "https://example.com/rulebook/it-business-idea.pdf",
            registrationLink: "https://example.com/register/it-business-idea",
        },
        {
            title: "Abstract Submission",
            image: abstract_submission,
            description: `The Abstract Submission Competition is a flagship segment of IEEE BranchFest 2025, designedto showcase innovative research ideas and real-world applications of Artificial Intelligence (AI). Organized under the IEEE BUP Student Branch, this event encourages creative thinking,problem-solving, and collaboration among students and professionals across Bangladesh. The competition consists of two rounds: Online Qualifier and On-Site Final`,
            registrationDeadline: "2025-11-16",
            rulebookLink:
                "https://drive.google.com/file/d/1N_pVaiNIFz0l1_UIj-jcr889Z6mVVBFC/view?usp=drive_link",
            registrationLink: "https://forms.gle/RherQjZowWSEGFJUA",
        },
        {
            title: "Ethical Case Solving",
            image: ethical_case_solving,
            description:
                "Analyze real-world IT dilemmas and propose ethical solutions aligned with the IEEE code of ethics.",
            registrationDeadline: "2025-02-24",
            rulebookLink: "https://example.com/rulebook/ethical-case.pdf",
            registrationLink: "https://example.com/register/ethical-case",
        },
    ];

    return (
        <section
            id="competitions"
            className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 overflow-hidden"
        >
            <div className="w-11/12 md:container mx-auto">
                {/* Background tech grid */}

                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
                </div>

                {/* Title: Framer Motion removed */}
                <h2 className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold mb-12 bg-clip-text text-transparent  bg-linear-to-r/hsl from-blue-600 to-emerald-400 relative z-10">
                    Competitions at IEEE BranchFest 2025
                </h2>

                {/* Competition Grid */}
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
