// src/pages/Home.jsx

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Hero, Footer, WhatWeOffer, WhoWeAre, WhyChooseUs, CallToAction, OurTeam } from '../sections';  // Corrected path
import LoadingScreen from '../components/LoadingScreen';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('http://localhost:8000/');
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

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
