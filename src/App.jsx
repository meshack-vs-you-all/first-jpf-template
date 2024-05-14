import { useState, useEffect } from 'react';
import axios from 'axios';
import { Hero, Footer, WhatWeOffer, WhoWeAre, WhyChooseUs, CallToAction, OurTeam } from './sections';
import Nav from './components/Nav';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [welcomeMessage, setWelcomeMessage] = useState('');

    useEffect(() => {
        const fetchWelcomeMessage = async () => {
            try {
                const response = await axios.get('http://localhost:8000/');
                console.log('Response:', response.data);
                setWelcomeMessage(response.data.message);
            } catch (error) {
                console.error('Error fetching welcome message:', error);
            } finally {
                setIsLoading(false);
            }
        };
        

        fetchWelcomeMessage();
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <main className="relative flex-auto w-full pt-20">
            <Nav />
            <section className="mt-10"><Hero /></section>
            
            <section className="bg-light w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><WhoWeAre /></section>
            <section id='OurTeam' className="bg-[#1d1f22] flex flex-col lg:flex-row gap-5 p-5 my-10"><OurTeam /></section>
            <section id='WhatWeOffer' className="bg-light w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><WhatWeOffer /></section>
            <section id='WhyChooseUs' className="bg-[#1d1f22] text-white w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><WhyChooseUs /></section>
            <section id='Contact' className="bg-light w-full flex flex-col lg:flex-row gap-5 p-5 mb-10"><CallToAction /></section>
            <section className="bg-black pt-20 mb-0"><Footer /></section>
            <div>{/* Display the welcome message fetched from the backend */}
       <p className='text-xl text-black'>{welcomeMessage}</p></div> 
        </main>
       
    );
};

export default App;
