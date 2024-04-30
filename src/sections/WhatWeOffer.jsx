const services = [
    {
        id: 1,
        name: 'Personalized Stretching', //Sports Performance Enhance athletic performance through targeted sports stretching.Group SessionsJoin our group sessions and enjoy a fun and engaging stretch routine.
        description: 'Tailored stretching sessions to improve flexibility, reduce pain and enhance performance.',
        image: ''
    },
    {
        id: 2,
        name: 'Corrective Exercises',
        description: 'Levarages an understanding of anatomy, kinesiology and biomechanics to address and fix movement compensations and imbalances to improve overall quality of movement in everyday life. ',
        image: ''
    },
    {
        id: 3,
        name: 'Energy-based Spin Classes ',
        description: 'Boosts cardiovascular health while increasing overall endurance .',
        image: ''
    }
];

const WhatWeOffer = () => {
    return (
        <div className=" h-screen container mx-auto px-4 py-12 border-t-brand-dark border-t-4">
            <h2 className="text-3xl font-bold text-center text-brand-primary mb-20">OUR STRETCH SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {services.map(service => (
                    <div key={service.id} className="relative bg-white rounded-lg p-10  flex flex-col items-center text-left">
                        <img 
                            src={service.image} 
                            alt={service.name}
                            className="w-full h-40 -mt-20 mb-4"
                            style={{clipPath: ''}} //Add a clipPath shape for the images
                        />
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <p className="text-center">{service.description}</p>
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
