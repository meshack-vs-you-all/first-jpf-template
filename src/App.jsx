import { useState, useEffect } from 'react';
import { Hero, Footer, WhatWeOffer, WhoWeAre, WhyChooseUs, CallToAction, OurTeam, Pricing } from './sections';
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
<main className="relative m-0 p-0 flex-auto w-full overflow-x-hidden pt-20">
    <Nav />
    <section  className='min-h-[100vh] px-5 pb-0 '><Hero /></section>
    <section id='WhoWeAre' className="bg-[#1d1f22] text-white flex flex-col lg:flex-row gap-5 p-5 my-5"><WhoWeAre /></section>
    <section id='WhatWeOffer' className="flex flex-col lg:flex-row gap-5 p-5 my-10"><WhatWeOffer /></section>
    <section id='Pricing' className="flex flex-col lg:flex-row gap-5 p-5 my-10"><Pricing /></section>
    <section id='WhyChooseUs' className="bg-[#1d1f22] text-white w-full flex flex-col lg:flex-row gap-5 p-5 my-10"><WhyChooseUs /></section>
    <section id='OurTeam' className="bg-light flex flex-col lg:flex-row gap-5 p-5 my-10"><OurTeam /></section>
    <section id='CallToAction' className="bg-[#1d1f22] flex flex-col lg:flex-row gap-5 p-5 mb-0"><CallToAction /></section>
    <section id='Footer' className="bg-[#1d1f22] pt-20 mb-0"><Footer /></section>
</main>

    );
};

export default App;
