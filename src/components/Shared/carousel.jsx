import  { useState, useRef } from 'react';

const pages = [
  '/src/assets/images/IMG_9768.jpg',
  '/src/assets/images/IMG_9785.jpg',
  '/src/assets/images/IMG_9794.jpg',
  '/src/assets/images/IMG_9830.jpg',
  '/src/assets/images/IMG_9748.jpg'
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Start from the middle image
    const [isDragging, setIsDragging] = useState(false);
    const startPosition = useRef(0);
    const endPosition = useRef(0);

    // Function to handle mouse down event
    const handleMouseDown = (e) => {
        setIsDragging(true);
        startPosition.current = e.clientX;
    };

    // Function to handle mouse move event
    const handleMouseMove = (e) => {
        if (isDragging) {
            endPosition.current = e.clientX;
        }
    };

    // Function to handle mouse up event
    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            if (startPosition.current - endPosition.current > 75) {
                setActiveIndex((activeIndex + 1) % pages.length);
            } else if (startPosition.current - endPosition.current < -75) {
                setActiveIndex((activeIndex - 1 + pages.length) % pages.length);
            }
        }
    };

    // Function to handle keyboard arrow keys
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            setActiveIndex((activeIndex + 1) % pages.length);
        } else if (e.key === 'ArrowLeft') {
            setActiveIndex((activeIndex - 1 + pages.length) % pages.length);
        }
    };

    return (
        <div
            className="relative w-full h-[35vw] overflow-hidden flex items-center justify-center bg-gray-100"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => setIsDragging(false)} // Stop dragging if mouse leaves the div
            onKeyDown={handleKeyDown}
            tabIndex="0" // Make the div focusable
        >
            {pages.map((src, index) => (
                <div
                    key={index}
                    className={`absolute transition-transform duration-500 transform ease-in-out rounded-lg bg-cover bg-center shadow-xl
                                ${index === activeIndex ? 'scale-100 opacity-100 z-30' : 'scale-75 opacity-50 z-20'}`}
                    style={{
                        width: '60%',
                        height: '100%',
                        backgroundImage: `url(${src})`,
                        transform: `translateX(${(index - activeIndex) * 110}%)` // Adjust position by 110% to account for spacing
                    }}
                />
            ))}
        </div>
    );
};

export default Carousel;
