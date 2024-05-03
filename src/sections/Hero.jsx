import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import Slider from "../components/Slider";

const Hero = () => {
  return (
    // Main section container with flexible direction and padding
    <section 
      
      className="relative flex flex-col justify-center overflow-hidden mt-[100px]">
      {/* Responsive flex container that adjusts from column on small screens to row on large screens */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-7xl mx-auto z-10">
        
        {/* Text content section */}
        <div className="mt-[20px] lg:w-1/2  sm:order-1 lg:order-1 order-1">
          {/* Heading with responsive font size */}
          <h1 className='font-merriweather text-[36px] lg:text-4xl text-gray-800 leading-tight font-bold text-left lg:text-left'>
            ONE-ON-ONE ASSISTED STRETCH
            <br />
            {/* Highlighted text span, easy to change color via Tailwind class */}
            <span className='text-brand-primary'>STUDIO</span>
          </h1>
          {/* Paragraph with responsive text alignment */}
          <p className='mt-12 mb-10 font-montserrat text-md lg:text-lg text-gray-600 leading-8 text-left lg:text-left'>
            Experience Personalized Assisted Stretching designed to enhance your flexibility, boost performance, and reduce injury risk, regardless of your fitness level.
          </p>
          {/* Button component, alignment adjusts with screen size */}
          <Button label='Book Now' iconURL={arrowRight} className=" mx-auto lg:mx-0" />
        </div>

        {/* Video content section */}
        <div className="mt-5 lg:w-1/2 flex justify-center items-center p-5 lg:order-2 ">
          <Slider/>
          {/* Video wrapper with shadow and rounded corners for aesthetics 
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
            {/* Caption for the video, easily editable 
            <p className="p-2 text-center text-sm bg-brand-primary">Stretch session in JPF</p>
  </div>*/}
        </div>
        
      </div>

      {/* Bottom banner for promotions or notices */}
<div className="relative mt-[120px] p-0 inset-x-0 mb-0 bg-brand-primary h-20 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
  <a 
    href="#Pricing"
    className="text-white text-xl font-montserrat leading-none tracking-wide px-5 hover:text-opacity-80 transition-opacity duration-300"
  >
    First Timers 50-minute Intro Stretch starting at $30 (Ksh. 3,900)
  </a>
</div>

      
    </section>
  );
}

export default Hero;
