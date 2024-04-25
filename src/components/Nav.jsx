import { navLinks } from "../assets/constants";

const Nav = () => {
  return (
    <div>
      {/* Announcement Banner */}
      <div className="bg-gray text-center py-2 font-semibold">
        <p><b>INTRODUCING NAIROBI&apos;S FIRST STRETCH HUB</b></p>
     </div>

      {/* Location Banner */}
      <div className="bg-brand-blue text-center py-2">
        <a href="#" className="inline-block px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          GET DIRECTIONS
        </a>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white shadow">
        <nav className="flex justify-between items-center w-full px-5 py-3">
          <a href='/'>
              <img src="/src/assets/images/jpf_logo.jpg" 
                   alt="logo"
                   className="h-16 w-auto" />
          </a>
          <ul className="hidden lg:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className='font-montserrat text-lg text-gray-800'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex text-lg font-medium font-montserrat mr-24'>
            <a href='/' className="text-gray-800">Learn More</a>
          </div>
          <div className="lg:hidden relative">
            <button className="appearance-none bg-transparent border-none cursor-pointer p-2">
              <img src="/src/assets/icons/hamburger.svg" alt="Menu" className="w-6 h-6" />
            </button>
            <ul className="absolute right-0 top-full bg-white shadow-lg hidden flex-col items-start gap-2 p-4 w-48" style={{ top: '50px' }}>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className='block px-4 py-2 text-lg text-black'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
