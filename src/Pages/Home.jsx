import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Competitions from "../Components/Competitions";
import PartnerWithUs from "../Components/PartnerWithUs";
import HallOfFame from "../Components/HallOfFame";
import JobFair from "../Components/JobFair";











const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Competitions></Competitions>
            <JobFair></JobFair>
            <PartnerWithUs></PartnerWithUs>
            <HallOfFame></HallOfFame>
        </div>
    );
};

export default Home;
