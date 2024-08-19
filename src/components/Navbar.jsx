import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from './data'; // Assuming you have a data.js file with navLinks
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../slices/themeSlice'; // Assuming you have a themeSlice.js file for Redux
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'; // Import Heroicons

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [active, setActive] = useState("");
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isTransparent, setIsTransparent] = useState(false);

    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);

    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.substring(1);
        const activeLink = navLinks.find(link => link.id === currentPath);
        if (activeLink) {
            setActive(activeLink.title);
        }

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            dispatch(setTheme("dark"));
            document.documentElement.classList.add('dark');
        } else {
            dispatch(setTheme("light"));
            document.documentElement.classList.remove('dark');
        }

        const timer = setTimeout(() => {
            setIsTransparent(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [location, dispatch]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleThemeClick = () => {
        if (theme === "light") {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            dispatch(setTheme("dark"));
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            dispatch(setTheme("light"));
        }
    };

    // if (isTransparent && theme === "dark") {
    //     return null;
    // }

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-100 
                ${isTransparent ? 'bg-transparent' : ""} 
                ${theme === "dark" ? "bg-black text-[#FFF5EE]" : "bg-white text-black"}
            } ${isNavbarVisible ? 'opacity-100' : 'opacity-0'} shadow-lg`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-semibold">
                            Chandrashekhar Singh Kushwaha
                        </Link>
                    </div>
                    <div className="hidden md:flex font-medium space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={`/${link.id}`}
                                className={`${
                                    active === link.title
                                        ? "text-green-500 underline dark:text-green-500"
                                        : ""
                                } hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300`}
                                onClick={() => setActive(link.title)}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <button onClick={handleThemeClick} className="text-gray-800 dark:text-gray-200 focus:outline-none">
                            {theme === "dark" ? (
                                <SunIcon className="w-6 h-6 text-yellow-500" />
                            ) : (
                                <MoonIcon className="w-6 h-6 text-blue-500" />
                            )}
                        </button>
                        <div className="md:hidden ml-4">
                            <button onClick={toggleMobileMenu} className="focus:outline-none">
                                <svg 
                                    className={`w-6 h-6 ${theme === "dark" ? "text-white" : "text-black"}`} 
                                    fill="none" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
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
