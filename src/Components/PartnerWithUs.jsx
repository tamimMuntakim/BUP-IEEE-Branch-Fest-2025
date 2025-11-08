import React, { useState, useEffect } from "react";
// REPLACED: import { FaMedal, FaMoneyBill } from "react-icons/fa";
import { Award, Wallet } from "lucide-react"; // New imports

// 1. New: Import and setup SweetAlert2
import Swal from "sweetalert2";

// Utility to ensure SweetAlert2 script is loaded in the environment
const loadScript = (src) => {
    return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        document.head.appendChild(script);
    });
};

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
        gradient: "from-slate-300 via-slate-400 to-gray-400",
        glow: "shadow-[0_0_25px_#d0d0d0]",
        description:
            "Ideal for emerging companies looking to connect with innovators and tech enthusiasts.",
        benefits: [
            "Standard Booth Access",
            "Logo in Event Materials",
            "Mention in Closing Ceremony",
        ],
    },
];

// --- PLACEHOLDERS: These are now used directly in fetch ---
const PARTNER_EMAIL = "ieee.bupsb@gmail.com";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_contact_api_key;
// -----------------------------------------------------------

const PartnerWithUs = () => {
    // 2. Replaced useForm state with manual state management
    const [submitting, setSubmitting] = useState(false);

    // Load SweetAlert2 script on component mount
    useEffect(() => {
        loadScript("https://cdn.jsdelivr.net/npm/sweetalert2@11");
    }, []);

    const handleOpenModal = (tierName) => {
        // Open the modal
        document.getElementById("sponsorship-modal").showModal();

        // Populate a hidden subject field with the tier name
        document.getElementById(
            "subject-input"
        ).value = `Inquiry for ${tierName} Sponsorship Tier`;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Ensure Swal is available
        const Swal = window.Swal;

        if (submitting) return;
        setSubmitting(true);

        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);

        // Basic validation
        if (!formProps.name || !formProps.email || !formProps.message) {
            Swal.fire({
                icon: "warning",
                title: "Missing Fields",
                text: "Please fill in your Name, Email, and Message.",
                timer: 2000,
                // --- Dark Theme Styling ---
                background: "#1f2937",
                color: "#e5e7eb",
                customClass: {
                    popup: "border border-gray-700",
                },
            });
            setSubmitting(false);
            return;
        }

        const payload = {
            access_key: WEB3FORMS_ACCESS_KEY,
            ...formProps, // Includes name, email, message, subject, etc.
            // Override 'to' and 'subject' with correct web3forms fields
            to: PARTNER_EMAIL,
            subject: formProps.subject_display || formProps.subject,
            // Explicitly remove the auxiliary field not needed by the API
            subject_display: undefined,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (data.success) {
                // 3. SweetAlert2 Success in Dark Theme
                Swal.fire({
                    icon: "success",
                    title: "Inquiry Sent!",
                    text: "We will review your inquiry and contact you soon.",
                    timer: 3000,
                    background: "#1f2937",
                    color: "#e5e7eb",
                    customClass: {
                        popup: "border border-gray-700",
                    },
                });

                // Close the modal and reset form
                document.getElementById("sponsorship-modal").close();
                event.target.reset(); // Reset form fields
            } else {
                // 3. SweetAlert2 Error in Dark Theme
                Swal.fire({
                    icon: "error",
                    title: "Submission Failed",
                    text:
                        data.message ||
                        "There was an issue sending your message. Please try again.",
                    background: "#1f2937",
                    color: "#e5e7eb",
                    customClass: {
                        popup: "border border-gray-700",
                    },
                });
                document.getElementById("sponsorship-modal").close();
            }
        } catch (error) {
            console.error("Fetch error:", error);
            Swal.fire({
                icon: "error",
                title: "Network Error",
                text: "Could not connect to the server. Check your connection.",
                background: "#1f2937",
                color: "#e5e7eb",
                customClass: {
                    popup: "border border-gray-700",
                },
            });
            document.getElementById("sponsorship-modal").close();
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="partner-with-us"
            // ADJUSTED: Changed from 'bg-gradient-to-b from-black via-gray-900 to-black' to solid dark gray
            className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
        >
            <div className="w-11/12 md:container mx-auto">
                <style>
                    {/* Custom styling for SweetAlert2 dark theme to ensure consistency */}
                    {`
                    .swal2-popup {
                        background-color: #1f2937 !important;
                        color: #e5e7eb !important;
                        border-radius: 0.75rem !important; /* Tailwind rounded-xl */
                        border: 1px solid #374151 !important; /* Gray-700 border */
                    }
                    .swal2-title, .swal2-content {
                        color: #e5e7eb !important;
                    }
                `}
                </style>
                {/* Kept existing decorative radial gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(138,43,226,0.1),transparent_70%)]"></div>

                <div className="text-center relative z-10">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
                        Partner With Us
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-sm sm:text-lg">
                        Become a driving force behind IEEE BranchFest 2025 —
                        where innovation meets opportunity. Partner with us to
                        showcase your brand to thousands of bright minds and
                        industry leaders.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        {tiers.map((tier, index) => (
                            <div
                                key={tier.name}
                                className={`relative overflow-hidden border border-gray-700 rounded-2xl backdrop-blur-lg bg-gray-900/50 p-4 md:p-8 transition-all duration-500 hover:scale-105 group ${tier.glow}`}
                            >
                                {/* Glowing ring background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-all duration-500`}
                                ></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex-grow">
                                        <div
                                            className={`inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold text-black mb-6 bg-gradient-to-r ${tier.gradient}`}
                                        >
                                            {/* REPLACED FaMedal with Award */}
                                            <Award className="mr-2 w-5 h-5" />
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
                                    </div>

                                    <button
                                        onClick={() =>
                                            handleOpenModal(tier.name)
                                        }
                                        className={`mt-8 btn btn-sm md:btn-md bg-gradient-to-r ${tier.gradient} text-black shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 border-none`}
                                    >
                                        {/* REPLACED FaMoneyBill with Wallet */}
                                        <Wallet className="w-5 h-5" />
                                        Become a {tier.name} Partner
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* === SPONSORSHIP INQUIRY MODAL === */}
            <dialog id="sponsorship-modal" className="modal md:modal-middle">
                <div className="modal-box bg-gray-900 text-gray-100 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,255,255,0.4)] w-[90%] sm:w-[70%] max-w-lg">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                        Sponsorship Inquiry
                    </h3>

                    {/* Web3Forms Submission Form - Now using local state and fetch */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Hidden Inputs for Web3Forms Configuration - Now static/ignored */}
                        <input
                            type="hidden"
                            name="access_key"
                            value={WEB3FORMS_ACCESS_KEY}
                        />
                        {/* Removed 'to' as it's passed in the payload in fetch */}

                        {/* Hidden subject field, populated by handleOpenModal */}
                        <input
                            type="hidden"
                            id="subject-input"
                            name="subject"
                        />

                        {/* 1. User Name Field */}
                        <div>
                            <label className="label">
                                <span className="label-text text-gray-300">
                                    Your Name{" "}
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                required
                                className="input input-bordered w-full bg-gray-800 text-white border-gray-700 focus:border-cyan-400"
                            />
                        </div>

                        {/* 2. User Email Field (Required by Web3Forms for 'from' address) */}
                        <div>
                            <label className="label">
                                <span className="label-text text-gray-300">
                                    Your Email Address{" "}
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                required
                                className="input input-bordered w-full bg-gray-800 text-white border-gray-700 focus:border-cyan-400"
                            />
                        </div>

                        {/* 3. Subject Field (User Editable, for display) */}
                        <div>
                            <label className="label">
                                <span className="label-text text-gray-300">
                                    Subject (Editable)
                                </span>
                            </label>
                            <input
                                type="text"
                                name="subject_display" // Use a new name to distinguish from hidden subject
                                placeholder="Regarding the Gold Tier Sponsorship"
                                className="input input-bordered w-full bg-gray-800 text-white border-gray-700 focus:border-cyan-400"
                                // Remove onChange logic, as form data is read from FormData object
                            />
                        </div>

                        {/* 4. Body Field (Message) */}
                        <div>
                            <label className="label">
                                <span className="label-text text-gray-300">
                                    Your Message{" "}
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                            <textarea
                                name="message"
                                placeholder="Tell us about your company and your partnership goals."
                                required
                                rows="5"
                                className="textarea textarea-bordered w-full bg-gray-800 text-white border-gray-700 focus:border-cyan-400"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="">
                            <p className="text-xs md:text-sm text-yellow-300">
                                *** Want to attach a file? Kindly include the
                                drive link in your message.
                            </p>
                            {/* Removed results.message display as SweetAlert now handles feedback */}
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="btn w-full btn-sm md:btn-md btn-accent text-white transition duration-300"
                                disabled={submitting}
                            >
                                {submitting ? "Sending..." : "Send Inquiry"}
                            </button>
                            {/* Removed results.message display as SweetAlert now handles feedback */}
                        </div>
                    </form>

                    {/* Close Button via modal-action */}
                    <div className="modal-action mt-4">
                        <form method="dialog">
                            {/* The close button hides the modal */}
                            <button className="btn btn-soft btn-accent hover:text-white btn-sm md:btn-md">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>

                {/* Modal Backdrop for click-outside-to-close */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </section>
    );
};

// Main App component to setup the environment
const App = () => {
    // Basic dark theme wrapper for aesthetics
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
            <div className="">
                <PartnerWithUs />
            </div>
        </div>
    );
};

export default App;
