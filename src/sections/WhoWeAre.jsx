import React, { useState } from 'react';

const WhoWeAre = () => {
    // State to keep track of which information to display
    const [activeTab, setActiveTab] = useState('whoWeAre');

    // Information content for each tab
    const infoContent = {
        whoWeAre: "Welcome to JPF Stretch HUB, Nairobi's premier destination for professional assisted stretching. Whether you're an athlete looking to boost performance, someone struggling with chronic pain, or just looking to improve your overall flexibility, our expert stretch therapists are here to help you achieve your goals.",
        whyStretch: "Stretching helps increase your range of motion and may improve your performance in physical activities or decrease your risk of injuries. It can also help to heal and prevent back pain.",
        benefits: "Regular stretching can help increase your flexibility, which is crucial for your overall health. Not only can improved flexibility help you to perform everyday activities with relative ease, but it can also help delay the reduced mobility that can come with aging."
    };

    return (
        <main className="bg- w-full h-screen flex flex-col lg:flex-row gap-10 p-5">
            {/* Button Section */}
            <div className="flex flex-col lg:w-1/2">
                <div className="flex flex-col space-y-6 mb-12">
                    {['whoWeAre', 'whyStretch', 'benefits'].map((tab) => (
                        <button
                            key={tab}
                            className={`uppercase px-6 py-2 text-lg font-semibold 
                                        ${activeTab === tab ? 'bg-blue-500 text-brand-blue' : 'bg-gray-300 text-black'} 
                                        rounded-md shadow cursor-pointer transition-colors duration-300 ease-in-out`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === 'whoWeAre' ? 'Who We Are' : tab === 'whyStretch' ? 'Why Stretch?' : 'Benefits'}
                        </button>
                    ))}
                </div>
                {/* Content Display Area */}
                <div className="text-gray-600 text-lg p-8 mt-8 border-t border-gray-300">
                    {infoContent[activeTab]}
                </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2">
                <img 
                    src="/src/assets/images/stretch-hub-female.jpg" 
                    alt="Stretching session at JPF Stretch HUB"
                    className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none"
                />
            </div>
        </main>
    );
};

export default WhoWeAre;
