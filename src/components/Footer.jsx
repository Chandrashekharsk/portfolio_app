import { FaLinkedin, FaDiscord, FaTwitter, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-black py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="https://www.linkedin.com/in/chandrashekhar-singh-kushwaha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://discord.com/invite/FXKmpmDh" target="_blank" rel="noopener noreferrer" className="text-purple-700 dark:text-purple-500 hover:text-purple-800 dark:hover:text-purple-400 transition-colors duration-300">
                            <FaDiscord className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com/cs9981625252" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a href="mailto:cs9981625252@gmail.com" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-300">
                            <FaEnvelope className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/Chandrashekharsk" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/chandrashekharsk_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 transition-colors duration-300">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="flex space-x-6">
                        <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            Contact
                        </Link>
                        <Link to="/feedback" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            Feedback
                        </Link>
                    </div>
                </div>
                <div className="mt-4 text-center text-gray-500 dark:text-gray-400">
                    &copy; 2024 Chandrashekhar Singh Kushwaha. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
