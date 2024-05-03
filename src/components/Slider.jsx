import { useRef } from 'react';

const items = [
  { type: 'video', src: '/src/assets/videos/jpf_stretch_hub.webm', caption: 'Stretch session in JPF' },
  { type: 'image', src: '/src/assets/images/landing_page.jpg', caption: 'Image 1 Description' },
  { type: 'image', src: '/src/assets/images/landing_page.jpg', caption: 'Image 2 Description' }
];

function Slider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    } else {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      <button 
        onClick={() => scroll('left')} 
        className="p-2 bg-gray-200 bg-opacity-75 text-2xl text-black rounded-full hover:bg-gray-300"
        aria-label="Scroll left"
      >
        &lt;
      </button>
      <div ref={sliderRef} className="overflow-x-hidden flex snap-x snap-mandatory scroll-smooth w-full max-w-screen-lg mx-0">
        {items.map((item, index) => (
          <div key={index} className="snap-center shrink-0 w-full flex flex-col items-center justify-center p-0">
            {item.type === 'video' ? (
              <div className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
                <video autoPlay loop muted className="w-full h-auto" style={{ aspectRatio: '16 / 9' }}>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <img src={item.src} alt={item.caption} className="w-full max-w-md shadow-lg rounded-lg" />
            )}
          </div>
        ))}
      </div>
      <button 
        onClick={() => scroll('right')} 
        className="p-2 bg-gray-200 bg-opacity-75 text-2xl text-black rounded-full hover:bg-gray-300"
        aria-label="Scroll right"
      >
        &gt;
      </button>
    </div>
  );
}

export default Slider;
