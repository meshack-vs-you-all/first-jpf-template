const services = [
    {
        id: 1,
        name: 'Personalized Stretching',
        description: 'Tailored stretching sessions to improve flexibility, reduce pain, and enhance performance. This comprehensive approach helps athletes boost performance through targeted sports stretching and offers engaging group sessions.',
        image: '/src/assets/images/IMG_9794.jpg' // Update with actual image path
    },
    {
        id: 2,
        name: 'Corrective Exercises',
        description: 'Corrective exercises leverage an understanding of anatomy, kinesiology, and biomechanics to address and correct movement compensations and imbalances. This method improves the overall quality of movement in everyday life and prevents future injuries.',
        image: '/src/assets/images/IMG_9815.jpg' // Update with actual image path
    },
    {
        id: 3,
        name: 'Energy-based Spin Classes',
        description: 'Our energy-based spin classes focus on boosting cardiovascular health while dramatically increasing endurance. These sessions are perfect for anyone looking to energize their workout routine in a dynamic group setting.',
        image: '/src/assets/images/spin.jpg' // Update with actual image path
    }
];


const WhatWeOffer = () => {
    return (
        <div className="container bg-[#1f1d22] mx-auto px-4 py-12 min-h-screen">
            <h2 className="text-3xl font-bold text-center text-brand-primary mb-20">OUR STRETCH SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {services.map(service => (
                    <div key={service.id} className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center p-6 transform transition-all duration-500 hover:scale-105">
                        {/* Image fully inside the card */}
                        <img 
                            src={service.image} 
                            alt={service.name}
                            className="w-full h-40 object-cover object-center rounded-lg" // Ensures the image covers the area without distorting
                        />
                        <h3 className="text-xl font-semibold my-4">{service.name}</h3>
                        <p className="px-3">{service.description}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors">Check out other services</a>
            </div>
        </div>
    );
};

export default WhatWeOffer;