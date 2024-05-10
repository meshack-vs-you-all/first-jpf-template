import { useState } from 'react';
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // State to track active link

  // Toggle the visibility of the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      {/* Announcement Banner */}
      <div className="bg-gray text-center py-2 font-semibold ">
        <p><b>INTRODUCING NAIROBI&#39;S FIRST STRETCH HUB</b></p>
      </div>

      {/* Location Banner */}
      <div className="bg-brand-primary text-center py-2">
        <a href="#" className="animate-pulse inline-block px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          GET DIRECTIONS
        </a>
      </div>

      {/* Navigation Bar */}
      <header className="bg-light shadow">
        <nav className="flex justify-between items-center w-full px-5 py-3">
          <a href='/'>
              <img src="/src/assets/images/jpf_logo.jpg" alt="logo" className="h-16 w-auto" />
          </a>
          <ul className="hidden lg:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`font-montserrat text-lg text-gray-800 hover:text-brand-primary ${activeLink === item.label ? 'active' : ''}`}
                  onClick={() => setActiveLink(item.label)} // Set active link on click
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex text-lg font-medium font-montserrat mr-24'>
            <a href='#WhyChooseUs' className="text-gray-800 hover:text-brand-primary active:text-brand-primary">Learn More</a>
          </div>
          <div className="lg:hidden relative">
            <button onClick={toggleMenu} className="appearance-none bg-transparent border-none cursor-pointer p-2">
              <img src="/src/assets/icons/hamburger.svg" alt="Menu" className="w-6 h-6" />
            </button>
            {isOpen && (
              <ul className="absolute right-0 top-full bg-white shadow-lg flex flex-col items-start gap-2 p-4 w-48">
                {navLinks.map((item) => (
                  <li key={item.label} onClick={closeMenu}>
                    <a href={item.href} className='block px-4 py-2 text-lg text-black'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
