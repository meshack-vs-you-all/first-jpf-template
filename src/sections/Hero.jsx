import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    // Main section container with flexible direction and padding
    <section 
      id="home"
      className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-100 p-4"
    >
      {/* Responsive flex container that adjusts from column on small screens to row on large screens */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-7xl mx-auto z-10">
        
        {/* Text content section */}
        <div className="lg:w-1/2 p-5 space-y-4">
          {/* Heading with responsive font size */}
          <h1 className='font-merriweather text-3xl lg:text-5xl text-gray-800 leading-tight font-bold text-center lg:text-left'>
            ONE-ON-ONE ASSISTED STRETCH
            <br />
            {/* Highlighted text span, easy to change color via Tailwind class */}
            <span className='text-brand-primary'>STUDIO</span>
          </h1>
          {/* Paragraph with responsive text alignment */}
          <p className='font-montserrat text-md lg:text-lg text-gray-600 leading-8 text-center lg:text-left'>
            Experience Personalized Assisted Stretching designed to enhance your flexibility, boost performance, and reduce injury risk, regardless of your fitness level.
          </p>
          {/* Button component, alignment adjusts with screen size */}
          <Button label='Book Now' iconURL={arrowRight} className="mx-auto lg:mx-0" />
        </div>

        {/* Video content section */}
        <div className="lg:w-1/2 flex justify-center items-center p-5">
          {/* Video wrapper with shadow and rounded corners for aesthetics */}
          <div className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-auto"
              style={{ aspectRatio: '16 / 9' }}  // Maintains a 16:9 aspect ratio, adjustable via inline styles
            >
              <source src="/src/assets/videos/jpf_stretch_hub.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Caption for the video, easily editable */}
            <p className="p-2 text-center text-sm bg-gray-100">Stretch session in JPF</p>
          </div>
        </div>
        
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
