import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative flex items-center justify-start min-h-screen p-4 bg-cover bg-center bg-hero"
      // Replace 'path/to/your/background-image.jpg' with your actual image path
    >
      <div className="w-full max-w-4xl pl-10 space-y-6">
        <h1 className='text-4xl lg:text-6xl text-white font-bold leading-tight'>
          ONE-ON-ONE ASSISTED STRETCH
          <br />
          <span className='text-brand-primary'>STUDIO</span>
        </h1>
        
        <p className='text-lg lg:text-xl text-white leading-8'>
          Experience Personalized Assisted Stretching designed to enhance your flexibility, boost performance, and reduce injury risk, regardless of your fitness level.
        </p>
        
        <Button label='Book Now' iconURL={arrowRight} className="mt-4" />
      </div>
      
    

      {/* Bottom banner for promotions or notices */}
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
