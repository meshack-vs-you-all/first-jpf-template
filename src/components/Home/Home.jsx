// src/pages/Home.jsx

import { Hero, Footer, WhatWeOffer, WhoWeAre, WhyChooseUs, CallToAction, OurTeam } from '../../sections';  // Corrected path

const Home = () => {

    return (
        <>
            <section className="mt-10"><Hero /></section>
            <section className="bg-light w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><WhoWeAre /></section>
            <section id='WhatWeOffer' className="bg-[#1d1f22] w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><WhatWeOffer /></section>
            <section id='WhyChooseUs' className="bg-light text-black w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><WhyChooseUs /></section>
            <section id='OurTeam' className="bg-[#1d1f22] flex flex-col lg:flex-row gap-5 p-5 my-10"><OurTeam /></section>
            <section id='Contact' className="bg-light w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><CallToAction /></section>
            <section className="bg-black pt-20 mb-0"><Footer /></section>
        </>
    );
};

export default Home;
