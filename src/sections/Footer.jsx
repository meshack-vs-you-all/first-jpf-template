const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">About Us</h2>
                    <p>Japheth&#39;s Powered Fitness is Nairobi&#39;s premier destination for professional assisted stretching. We are dedicated to improving wellness and flexibility in our community.</p>
                </div>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                    <ul>
                        <li><a href="#services" className="hover:text-gray-300">Our Services</a></li>
                        <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
                        <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
                        <li><a href="#faq" className="hover:text-gray-300">FAQ</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
                    <ul className="flex items-center space-x-4">
                        <li><a href="https://facebook.com" className="hover:text-gray-300"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v1/icons/facebook.svg" alt="Facebook" className="h-6 w-6" /></a></li>
                        <li><a href="https://twitter.com" className="hover:text-gray-300"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v1/icons/twitter.svg" alt="Twitter" className="h-6 w-6" /></a></li>
                        <li><a href="https://instagram.com" className="hover:text-gray-300"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v1/icons/instagram.svg" alt="Instagram" className="h-6 w-6" /></a></li>
                        <li><a href="https://linkedin.com" className="hover:text-gray-300"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v1/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-10 text-sm">
                © {new Date().getFullYear()} Japheth&s Powered Fitness. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
