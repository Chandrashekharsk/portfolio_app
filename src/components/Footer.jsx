import { footerElems } from './data';
import { footerElems2 } from './data';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { theme } = useSelector((state) => state.theme);

    return (
        <footer 
            className={`${theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"} 
                        py-4 shadow-lg transition-all duration-100`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        {footerElems.map((elem) => (
                            <a
                                key={elem.link}
                                href={elem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={` 
                                    ${theme === "dark" ? "text-blue-500 hover:text-blue-500 hover:shadow-md hover:shadow-white" : "text-green-500 hover:text-green-500 hover:shadow-md hover:shadow-black"} 
                                    transition-colors duration-300`}
                            >
                                <elem.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>

                    <div className="flex space-x-6">
                        {footerElems2.map((elem) => (
                            <Link
                                key={elem.name}
                                to={`/${elem.route}`}
                                className={`
                                    ${theme === "dark" ? "text-blue-500" : "text-green-500"} 
                                    transition-colors hover:underline hover:shadow-md hover:shadow-white duration-300`}
                            >
                                {elem.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={`mt-4 text-center ${theme === "dark" ? "text-gray-100" : "text-black"}`}>
                    &copy; 2024 Chandrashekhar Singh Kushwaha. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
