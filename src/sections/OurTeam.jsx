//import { FaEnvelope } from 'react-icons/fa'; // Import icon for better scalability and style control

const trainers = [
    { id: 1, name: 'Japheth Amimo', role: 'Founder / Personal Trainer', image: '/src/assets/images/team/japheth.jpg', quote: "Join us to unlock your potential with personalized training.", contactLink: "/contact/japheth" },
    { id: 2, name: 'Daniel Obar', role: 'Corrective Exercise Therapist', image: '/src/assets/images/team/Obar.jpg', quote: "Empowering your journey towards a healthier body and mind.", contactLink: "/contact/daniel" },
    { id: 3, name: 'Charles Mbugua', role: 'Spin Class Instructor', image: '/src/assets/images/team/Mbugua.jpg', quote: "Get ready to spin your way to fitness and fun!", contactLink: "/contact/charles" },
    { id: 4, name: 'Julie Nali', role: 'Personal Trainer', image: '/src/assets/images/team/Nali.jpg', quote: "Dedicated to helping you achieve your fitness goals, one session at a time.", contactLink: "/contact/julie" },
];

const OurTeam = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full p-5 ">{/*bg-hero-dark-mobile bg-cover lg:bg-hero-dark lg:bg-cover*/}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-primary">OUR TRAINERS</h2>
                <p className="text-gray-800 mt-4">Discover the passionate professionals behind <span className="text-brand-primary">Japheth&apos;s Powered Fitness</span> Stretch Hub.<br /> Our team comprises highly qualified trainers with diverse expertise, committed to empowering individuals to achieve their fitness goals.<br/> Get to know the experts who will guide you on your journey to optimal health and wellness.</p>
            </div>

            <div className="lg:grid-cols-2 lg:grid flex flex-wrap justify-center gap-4">
                {trainers.map(trainer => (
                    <div key={trainer.id} className="bg-white rounded-lg shadow-md w-full md:w-96 transition duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1 hover:scale-105">
                        <img className="w-full h-56 object-cover rounded-t-lg" src={trainer.image} alt={trainer.name} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{trainer.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">{trainer.role}</p>
                            <p className="text-gray-600">{trainer.quote}</p>
                            {/*<a href={trainer.contactLink} className="inline-flex items-center justify-center mt-4 text-brand-primary hover:text-brand-primary-dark">
                                <FaEnvelope className="mr-2 text-lg" />Contact
                </a>*/}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;
