import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="hero min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your-image.jpg")' }}>
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">Chandrashekhar Singh Kushwaha</h1>
                    <p className="text-xl md:text-2xl text-gray-300 mt-4">Full-Stack Developer | MERN Stack Specialist</p>
                    <Link to="/contact" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">Get in Touch</Link>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">About Me</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        I am a passionate full-stack developer with expertise in MERN stack and a keen interest in creating scalable web applications.
                        With a background in competitive programming and cyber security, I strive to write efficient and secure code.
                    </p>
                    <Link to="/about" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">Learn More</Link>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">Projects</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Explore some of the projects I’ve worked on, ranging from web applications to full-stack development and cloud deployments.
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Add your project cards here */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Project 1</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of Project 1.</p>
                            <Link to="/projects" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">View Details</Link>
                        </div>
                        {/* Repeat for other projects */}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">Skills</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Here are some of the technologies and tools I work with regularly.
                    </p>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Add your skill icons or text here */}
                        <div className="flex flex-col items-center">
                            <img src="/path/to/skill-icon.svg" alt="Skill 1" className="w-12 h-12" />
                            <p className="mt-2 text-gray-800 dark:text-gray-200">JavaScript</p>
                        </div>
                        {/* Repeat for other skills */}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">Contact Me</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        I’d love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
                    </p>
                    <Link to="/contact" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">Contact Now</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
