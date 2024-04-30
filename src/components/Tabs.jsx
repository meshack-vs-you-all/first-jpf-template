const Tabs = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div className="flex flex-col space-y-6 mb-12">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    className={`uppercase px-6 py-2 text-lg font-semibold 
                                ${activeTab === tab.key ? 'bg-blue-500 text-brand-primary' : 'bg-gray-300 text-black'} 
                                rounded-md shadow cursor-pointer transition-colors duration-300 ease-in-out`}
                    onClick={() => onTabClick(tab.key)}
                >
                    {tab.title}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
