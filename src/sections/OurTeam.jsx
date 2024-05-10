const trainers = [
    { id: 1, name: 'Japheth Amimo', role: 'Founder | Lead Trainer', image: '/src/assets/images/team/japheth.jpg', quote: "As a wellness coach with extensive experience in the fitness industry, I believe that good health begins with a healthy spine and balanced muscles. \nI am dedicated to helping my clients improve their health, regardless of their current conditions. \nI'm passionate about using nutrition and exercise to reverse lifestyle diseases and alleviate joint and muscle pain.\n\nI'm looking forward to interacting with you.", contactLink: "/contact/japheth" },
    { id: 2, name: 'Daniel Obar', role: 'Corrective Exercise Therapist', image: '/src/assets/images/team/Obar.jpg', quote: "An expert exercise specialist with a focus on corrective exercises, athlete development, and sports therapy.\nSince 2018, I've dedicated myself to enhancing performance and health through personalized training and inclusive programs for special populations. \nI emphasize proper diet and exercise to maximize health, prevent injuries, and unlock potential—because good food fuels a good mood.\n\nJoin me for a transformative journey towards empowerment, growth, and unparalleled success.", contactLink: "/contact/daniel" },
    { id: 3, name: 'Charles Mbugua', role: 'Spin Class Instructor', image: '/src/assets/images/team/Mbugua.jpg', quote: "A dedicated fitness enthusiast and cyclist since 2013, and a professional trainer since 2014.\nI advocate for strength training, mobility, and cardiovascular endurance as foundational elements of sustainable fitness and overall wellness.\nPassionate about guiding individuals towards achieving their health and fitness goals sustainably, I also lead the local cycling team, VeloNos.\nOur proudest moment was completing a 600-kilometer ride to Tanzania and back in just 19 hours and 30 minutes in 2019.\n\n Join me in building a stronger, healthier future.", contactLink: "/contact/charles" },
    { id: 4, name: 'Julie Nali', role: 'Personal Trainer', image: '/src/assets/images/team/Nali.jpg', quote: "Hello! \nI'm dedicated to helping women embrace the true essence of fitness beyond its commercial image.\nMy mission is to make fitness a fun, integral part of your daily life, helping you to love and embrace your unique self.\nI'm here to support all aspects of your well-being, from alleviating physical pain to boosting your self-confidence. \n\nJoin me on a journey to holistic wellness, tailored just for you.", contactLink: "/contact/julie" },
    
];

const OurTeam = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full p-5">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-primary">OUR TRAINERS</h2>
                <p className="text-white mt-4">Discover the passionate professionals behind <span className="text-brand-primary">Japheth&#39;s Powered Fitness</span> Stretch Hub.<br /> Our team comprises highly qualified trainers with diverse expertise, committed to empowering individuals to achieve their fitness goals.<br/> Get to know the experts who will guide you on your journey to optimal health and wellness.</p>
            </div>

            {trainers.map(trainer => (
                <div key={trainer.id} className="bg-light rounded-lg shadow-inner w-full max-w-4xl mx-auto flex flex-col md:flex-row mb-6 transition duration-300 ease-in-out hover:shadow-xl">
                    <div className="md:w-1/2 flex flex-col items-center p-4">
                        <img className="w-40 h-40 object-cover rounded" src={trainer.image} alt={trainer.name} />
                        <h3 className="text-xl text-black font-semibold mt-4">{trainer.name}</h3>
                        <p className="text-black">{trainer.role}</p>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center p-4 bg-gray-100 rounded-r-lg">
                        <p className="text-black text-wrap text-lg whitespace-pre-wrap">{trainer.quote}</p>
                        <a href={trainer.contactLink} className="self-end mr-4 mt-4 text-black hover:text-brand-primary">
                            <i className="fa fa-envelope text-2xl"></i>
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default OurTeam;
