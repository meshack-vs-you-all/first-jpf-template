import { tabInfo } from '../constants';
import Tabs from '../components/Shared/Tabs';
import { useState } from 'react';
import Carousel from '../components/Shared/carousel';


const WhoWeAre = () => {
    // State to keep track of which tab is currently active
    const [activeTab, setActiveTab] = useState('whoWeAre');
    const tabs = Object.keys(tabInfo).map(key => ({ key, title: tabInfo[key].title }));

    return (
        <main className="flex flex-col lg:flex-row gap-10 p-5 mt-[70px]">
            <div className="flex flex-col lg:w-1/2">
                <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
                
                <div className="text-merriweather text-gray-600 text-lg p-8 mt-8 border-t border-gray-300">
                    <p style={{ whiteSpace: "pre-wrap" }}>{tabInfo[activeTab].content}</p>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="lg:w-1/2 w-full align-items-center h-auto lg:h-screen relative overflow-hidden">
                {/* The Carousel component is nested here. It should now respect the bounds of its container. */}
                <Carousel />
            </div>
        </main>
    );
};

export default WhoWeAre;
