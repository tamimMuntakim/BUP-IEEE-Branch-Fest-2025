import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Competitions from "../Components/Competitions";
import PartnerWithUs from "../Components/PartnerWithUs";
import HallOfFame from "../Components/HallOfFame";
import JobFair from "../Components/JobFair";
import UnderConstruction from "../Components/UnderConstruction";
import EstimatedPartners from "../Components/EstimatedPartners";
import Contact from "../Components/Contact";
import LatestUpdate from "../Components/LatestUpdate";











const Home = () => {
    return (
        <div>
            <UnderConstruction></UnderConstruction>
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
