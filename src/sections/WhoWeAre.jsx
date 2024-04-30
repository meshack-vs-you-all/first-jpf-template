import { tabInfo } from '../constants';
import Tabs from '../components/Tabs';
import { useState } from 'react';
const WhoWeAre = () => {
    // State to keep track of which information to display
    const [activeTab, setActiveTab] = useState('whoWeAre');
    const tabs = Object.keys(tabInfo).map(key => ({ key, title: tabInfo[key].title }));

    return (
        <main className="flex flex-col lg:flex-row gap-10 p-5 mt-[70px]">
            <div className="flex flex-col lg:w-1/2">
                <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
                
                <div className="text-merriweather text-gray-600 text-lg p-8 mt-8 border-t border-gray-300">
                    {tabInfo[activeTab].content}
                </div>
            </div>

            <div className="lg:w-1/2">
                <img 
                    src="/src/assets/images/stretch-hub-female.jpg" 
                    alt="Stretching session at JPF Stretch Hub"
                    className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none"
                />

            </div>
            
        </main>
        
    );
};

export default WhoWeAre;
