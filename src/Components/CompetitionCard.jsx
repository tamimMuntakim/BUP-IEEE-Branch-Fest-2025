import React, { useState } from "react";

const CompetitionCard = ({
    image,
    title,
    description,
    registrationDeadline,
    rulebookLink,
    registrationLink,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Compare current date with deadline
    const isRegistrationOpen = registrationDeadline
        ? new Date(registrationDeadline) > new Date()
        : false;

    const handleOpenModal = () => {
        setIsOpen(true);
        document.getElementById(title.replace(/\s+/g, "_")).showModal();
    };

    return (
        <>
            {/* === CARD === */}
            <div
                className="relative bg-gray-900/70 border border-cyan-500/40 rounded-2xl overflow-hidden 
                shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]
                transition-all duration-300 transform hover:scale-[1.03]"
            >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Text */}
                <div className="p-5 flex flex-col justify-between h-48">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-300 text-sm flex-grow">
                        {description.length > 100
                            ? description.slice(0, 100) + "..."
                            : description}
                    </p>

                    <button
                        onClick={handleOpenModal}
                        className="mt-4 inline-block text-center px-4 py-2 border border-cyan-500 
                        text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-black 
                        transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.7)]"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* === MODAL === */}
            <dialog
                id={title.replace(/\s+/g, "_")}
                className="modal md:modal-middle sm:modal-start"
            >
                <div
                    className="modal-box bg-gray-900 text-gray-100 border border-cyan-500/40 
                    shadow-[0_0_25px_rgba(0,255,255,0.4)] w-[90%] sm:w-[70%] max-w-5xl"
                >
                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Left: Image */}
                        <div className="h-64 md:h-80 overflow-hidden rounded-lg">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right: Details */}
                        <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                                {title}
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {description}
                            </p>

                            {registrationDeadline && (
                                <p className="text-sm text-gray-400 mb-4">
                                    ⏰ Registration Deadline:{" "}
                                    <span className="text-cyan-300">
                                        {new Date(
                                            registrationDeadline
                                        ).toLocaleDateString()}
                                    </span>
                                </p>
                            )}

                            <div className="flex flex-wrap gap-3">
                                {/* Rulebook Button */}
                                {rulebookLink && (
                                    <a
                                        href={rulebookLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-accent btn btn-sm md:btn-md"
                                    >
                                        📘 View Rulebook
                                    </a>
                                )}

                                {/* Registration Button (only if open) */}
                                {isRegistrationOpen ? (
                                    <a
                                        href={registrationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-accent btn btn-sm md:btn-md"
                                    >
                                        📝 Register Now
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed"
                                    >
                                        ❌ Registration Closed
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Close Button */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default CompetitionCard;
