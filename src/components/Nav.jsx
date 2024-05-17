import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      {/* Announcement Banner */}
      <div className="bg-gray text-center py-2 font-semibold">
        <p><b>INTRODUCING NAIROBI&apos;S FIRST STRETCH HUB</b></p>
      </div>

      {/* Location Banner */}
      <div className="bg-brand-primary text-center py-2 flex items-center justify-center relative">
        <a href="#" className="animate-pulse inline-block px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          GET DIRECTIONS
        </a>
        <Link to="/auth" className="text-sm font-medium text-white hover:underline absolute right-4">
          Sign In
        </Link>
      </div>

      {/* Navigation Bar */}
      <header className="bg-light shadow">
        <nav className="flex justify-between items-center w-full px-5 py-3">
          <Link to='/'>
            <img src="/src/assets/images/jpf_logo.jpg" alt="logo" className="h-16 w-auto" />
          </Link>
          <ul className="hidden lg:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`font-montserrat text-lg text-gray-800 hover:text-brand-primary ${activeLink === item.label ? 'active' : ''}`}
                  onClick={() => setActiveLink(item.label)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex text-lg font-medium font-montserrat mr-24'>
            <Link to='/#WhyChooseUs' className="text-gray-800 hover:text-brand-primary active:text-brand-primary">Learn More</Link>
          </div>
          <div className="lg:hidden relative">
            <button onClick={toggleMenu} className="appearance-none bg-transparent border-none cursor-pointer p-2">
              <img src="/src/assets/icons/hamburger.svg" alt="Menu" className="w-6 h-6" />
            </button>
            {isOpen && (
              <ul className="absolute right-0 top-full bg-white shadow-lg flex flex-col items-start gap-2 p-4 w-48">
                {navLinks.map((item) => (
                  <li key={item.label} onClick={closeMenu}>
                    <Link to={item.href} className='block px-4 py-2 text-lg text-black'>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
