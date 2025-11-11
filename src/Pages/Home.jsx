import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Competitions from "../Components/Competitions";
import PartnerWithUs from "../Components/PartnerWithUs";
import HallOfFame from "../Components/HallOfFame";
import JobFair from "../Components/JobFair";
// import UnderConstruction from "../Components/UnderConstruction";
import EstimatedPartners from "../Components/EstimatedPartners";
import Contact from "../Components/Contact";
import LatestUpdate from "../Components/LatestUpdate";
import { useLocation } from "react-router";

const Home = () => {
    const location = useLocation();

    // This runs every time the location changes (i.e., when you land on the page)
    useEffect(() => {
        if (location.hash) {
            // Remove the '#' to get the pure element ID (e.g., 'about')
            const elementId = location.hash.substring(1);

            // Find the element
            const element = document.getElementById(elementId);

            // If the element exists, scroll to it smoothly
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }

            // OPTIONAL: Clear the hash from the URL history after scrolling
            // window.history.replaceState(null, null, ' ');
        }
    }, [location.hash]);
    return (
        <div>
            {/* <UnderConstruction></UnderConstruction> */}
            <LatestUpdate></LatestUpdate>
            <Hero></Hero>
            <About></About>
            <Competitions></Competitions>
            <JobFair></JobFair>
            <PartnerWithUs></PartnerWithUs>
            <EstimatedPartners></EstimatedPartners>
            <HallOfFame></HallOfFame>
            <Contact></Contact>
        </div>
    );
};

export default Home;
