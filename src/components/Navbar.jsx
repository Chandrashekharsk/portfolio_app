import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from './data';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [active, setActive] = useState("");
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isTransparent, setIsTransparent] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const location = useLocation();

    useEffect(() => {
        // Set the active state based on the current URL path
        const currentPath = location.pathname.substring(1);
        const activeLink = navLinks.find(link => link.id === currentPath);
        if (activeLink) {
            setActive(activeLink.title);
        }

        // Check for saved theme preference in local storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Make the navbar transparent after 3 seconds
        const timer = setTimeout(() => {
            setIsTransparent(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down
                setIsNavbarVisible(false); // Set to invisible
            } else if (currentScrollY < lastScrollY || currentScrollY < 51) {
                // Scrolling up
                setIsNavbarVisible(true); // Set to visible
            }

            // Update scrollY position
            setLastScrollY(currentScrollY); 
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isTransparent ? 'bg-transparent' : 'bg-black dark:bg-gray-900'
            } ${isNavbarVisible ? 'opacity-100' : 'opacity-0'} shadow-lg`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-semibold text-gray-800 dark:text-white">
                            Chandrashekhar Singh Kushwaha
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={`/${link.id}`}
                                className={`${active === link.title ? "text-green-500 underline" : "text-gray-800"} dark:${active === link.title ? "text-green-500 underline" : "text-gray-200"} hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300`}
                                onClick={() => setActive(link.title)}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <button onClick={toggleTheme} className="text-gray-800 dark:text-gray-200 focus:outline-none">
                            {isDarkMode ? (
                                <FaSun className="w-6 h-6 text-yellow-400" /> // Sun icon for dark mode
                            ) : (
                                <FaMoon className="w-6 h-6 text-yellow-500" /> // Moon icon for light mode
                            )}
                        </button>
                        <div className="md:hidden ml-4">
                            <button onClick={toggleMobileMenu} className="focus:outline-none">
                                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={`/${link.id}`}
                            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActive(link.title);
                            }}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
