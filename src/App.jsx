import { useState, useEffect } from 'react';
import { Hero, Footer, WhatWeOffer, WhoWeAre, WhyChooseUs, CallToAction, OurTeam } from './sections';
import Nav from './components/Nav';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Here you could also fetch data or perform other setup tasks
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); // Delay for 4 seconds

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <main className="relative flex-auto w-full pt-20">
            <Nav />
            <section className=" bg-hero mt-10"><Hero /></section>
            <section className="bg-light w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><WhoWeAre /></section>
            <section className="bg-[#1d1f22] flex flex-col lg:flex-row gap-5 p-5 my-10"><OurTeam /></section>
            <section className="bg-light w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><WhatWeOffer /></section>
            <section className="bg-[#1d1f22] text-white w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><WhyChooseUs /></section>
            <section className="bg-light w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><CallToAction /></section>
            <section className="bg-black pt-20 mb-0"><Footer /></section>
        </main>
    );
};

export default App;
