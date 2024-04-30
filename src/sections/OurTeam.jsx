const trainers = [
    { id: 1, name: 'Japheth Amimo', role: 'Founder / Personal Trainer', image: '/src/assets/images/team/japheth.jpg', quote: "Join us to unlock your potential with personalized training.", contactLink: "/contact/japheth" },
    { id: 2, name: 'Daniel Obar', role: 'Corrective Exercise Therapist', image: '/src/assets/images/team/Obar.jpg', quote: "Empowering your journey towards a healthier body and mind.", contactLink: "/contact/daniel" },
    { id: 3, name: 'Charles Mbugua', role: 'Spin Class Instructor', image: '/src/assets/images/team/Mbugua.jpg', quote: "Get ready to spin your way to fitness and fun!", contactLink: "/contact/charles" },
    { id: 4, name: 'Julie Nali', role: 'Personal Trainer', image: '/src/assets/images/team/Nali.jpg', quote: "Dedicated to helping you achieve your fitness goals, one session at a time.", contactLink: "/contact/julie" },
];

const OurTeam = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full p-5">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-primary">OUR TRAINERS</h2>
                <p className="text-white mt-4">Discover the passionate professionals behind <span className="text-brand-primary">Japheth&#39;s Powered Fitness</span> Stretch Hub.<br /> Our team comprises highly qualified trainers with diverse expertise, committed to empowering individuals to achieve their fitness goals.<br/> Get to know the experts who will guide you on your journey to optimal health and wellness.</p>
            </div>

            {trainers.map(trainer => (
                <div key={trainer.id} className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto flex flex-col md:flex-row mb-6 transition duration-300 ease-in-out hover:shadow-xl">
                    <div className="md:w-1/2 flex flex-col items-center p-4">
                        <img className="w-40 h-40 object-cover rounded" src={trainer.image} alt={trainer.name} />
                        <h3 className="text-xl font-semibold mt-4">{trainer.name}</h3>
                        <p className="text-gray-600">{trainer.role}</p>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-between p-4 bg-gray-100 rounded-r-lg">
                        <p className="text-gray-700 text-lg">{trainer.quote}</p>
                        <a href={trainer.contactLink} className="self-end mr-4 mt-4 text-black hover:text-brand-primary-dark">
                            <i className="fa fa-envelope text-2xl"></i>
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default OurTeam;
