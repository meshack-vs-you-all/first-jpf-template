import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section 
      id='home'
      className="relative w-full flex flex-col justify-center min-h-screen overflow-hidden"
    >
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-negative">
        <source src="/src/assets/videos/jpf_stretch_hub.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video, ensuring content is readable */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content container */}
      <div className='relative z-10 flex flex-col justify-center items-center w-full p-5'>
        <h1 className='font-merriweather text-4xl text-white sm:text-6xl sm:leading-tight font-bold text-center '>
          ONE-ON-ONE ASSISTED STRETCH
          <br />
          <span className='text-white'>STUDIO</span>
        </h1>
        <p className='font-montserrat text-white text-lg leading-8 mt-6 mb-14 sm:max-w-sm text-center'>
          Experience Personalized Assisted Stretching designed to enhance your flexibility, boost performance, and reduce injury risk, regardless of your fitness level.
        </p>
        <Button label='Book Now' iconURL={arrowRight} />
      </div>

      {/* Bottom Banner Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-primary h-20 flex items-center justify-center w-full">
        <a 
          href="#"
          className="text-white text-xl font-montserrat leading-none tracking-wide px-5"
        >
          First Timers 50-minute Intro Stretch starting at $30 (Ksh. 3,900)
        </a>
      </div>
      
    </section>
  );
}

export default Hero;
