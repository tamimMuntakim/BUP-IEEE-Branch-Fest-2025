import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Competitions from "../Components/Competitions";
import PartnerWithUs from "../Components/PartnerWithUs";
import HallOfFame from "../Components/HallOfFame";
import JobFair from "../Components/JobFair";
import UnderConstruction from "../Components/UnderConstruction";
import EstimatedPartners from "../Components/EstimatedPartners";











const Home = () => {
    return (
        <div>
            <UnderConstruction></UnderConstruction>
            <Hero></Hero>
            <About></About>
            <Competitions></Competitions>
            <JobFair></JobFair>
            <PartnerWithUs></PartnerWithUs>
            <EstimatedPartners></EstimatedPartners>
            <HallOfFame></HallOfFame>
        </div>
    );
};

export default Home;
