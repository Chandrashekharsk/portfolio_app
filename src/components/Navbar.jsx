import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from './data'; // Assuming you have a data.js file with navLinks
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../slices/themeSlice'; // Assuming you have a themeSlice.js file for Redux
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'; // Import Heroicons
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../config/firebase-config';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
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
            // setIsTransparent(true);
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

    const navigate = useNavigate();
    const handleLogoutClick = async () => {
        try {
            await signOut(auth); // Sign out the user
            navigate("/"); // Redirect to sign-in page or homepage
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-100 
                ${isTransparent ? 'bg-transparent' : ""} 
                ${theme === "dark" ? "bg-black text-gray-100" : "bg-gray-200 text-black"}
                ${isNavbarVisible ? 'opacity-100' : 'opacity-0'} shadow-lg`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">
                    <div className="flex items-center space-x-4">
                        {/* Mobile Menu Icon on the leftmost side */}
                        <div className="md:hidden">
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
                        {/* Navbar Title */}
                        <Link to="/" className="text-xl font-semibold">
                            Chandrashekhar Singh Kushwaha
                        </Link>
                    </div>
                    <div className="hidden md:flex flex-grow items-center justify-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={`/${link.id}`}
                                className={`${active === link.title
                                        ? "text-green-500 underline dark:text-green-500"
                                        : ""
                                    } hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300`}
                                onClick={() => setActive(link.title)}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={handleThemeClick} className="text-gray-800 dark:text-gray-200 focus:outline-none">
                            {theme === "dark" ? (
                                <SunIcon className="w-6 h-6 text-yellow-500" />
                            ) : (
                                <MoonIcon className="w-6 h-6 fill-blue-500 text-xl text-blue-600" />
                            )}
                        </button>
                        {
                            !user ? (
                                <Link to={"/sign-in"} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                                    Login
                                </Link>
                            ) : (
                                // <img
                                //     style={{
                                //         width: "40px",
                                //         height: "40px",
                                //         borderRadius: "{50}%",
                                //         border: "2px solid #fff"
                                //     }}
                                //     src={user?.photoURL || ""}
                                //     alt="profile"
                                //     className="profile-picture"
                                // />
                                        <button onClick={handleLogoutClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                                    Logout
                                </button>
                            )
                        }

                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div
                    className={`fixed top-0 left-0 h-screen w-1/3 md:hidden ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"} shadow-lg z-50`}
                >
                    <div className="flex justify-end p-4">
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 dark:text-gray-200">
                            <svg
                                className={`w-6 h-6 ${theme === "dark" ? "text-white" : "text-black"}`}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={`/${link.id}`}
                                className="block px-4 py-2"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActive(link.title);
                                }}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};


export default Navbar;
