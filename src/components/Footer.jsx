import { useSelector } from 'react-redux';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";


const Footer = () => {
    const { theme } = useSelector((state) => state.theme);

    return (
        <footer
            className={`${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"} 
                        py-6 shadow-lg transition-all duration-200`}
        >
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                
                {/* Copyright Text */}
                <div className={`text-center md:text-left mb-4 md:mb-0 ${theme === "dark" ? "text-gray-500" : "text-gray-600"}`}>
                    &copy; {new Date().getFullYear()} Chandrashekhar Singh Kushwaha. All rights reserved.
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/chandrashekharsk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:text-primary transition-colors duration-300 ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}`}
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/chandrashekharsk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:text-primary transition-colors duration-300 ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}`}
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://leetcode.com/u/Chandrashekhar_singh_Kushwaha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:text-primary transition-colors duration-300 ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}`}
                    >
                        <SiLeetcode  className="w-6 h-6" />
                    </a>
                    <a
                        href="https://twitter.com/cs9981625252"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:text-primary transition-colors duration-300 ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}`}
                    >
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:cs9981625252@gmail.com"
                        className={`hover:text-primary transition-colors duration-300 ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}`}
                    >
                        <FaEnvelope className="w-6 h-6" />
                    </a>
                    {/* WhatsApp Icon */}
                    <a
                        href="https://wa.me/+918103892672" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:text-primary transition-colors duration-300 ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}`}
                    >
                        <FaWhatsapp className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
