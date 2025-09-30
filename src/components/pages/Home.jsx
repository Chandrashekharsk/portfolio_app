import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { blur } from "../../assets/index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { projects } from '../data';
// import { Avatar } from '@mui/material';
import "./styles/home.css"
import { skills as categorizedSkills } from "../data";
import { flattenSkills } from '../../../utils/flattenSkills';

const skills = flattenSkills(categorizedSkills);


const Home = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`min-h-screen overflow-x-hidden  ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Hero Section */}
      <section className={`relative z-10 shadow-md ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <motion.h1
              className={`text-4xl md:text-5xl font-extrabold leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`text-4xl md:text-5xl font-extrabold leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Hi, I&apos;m <span className="text-blue-500">Chandrashekhar Singh Kushwaha</span>
              </h1>
            </motion.h1>

            <motion.p
              className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className={`text-lg mt-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                A passionate <strong>Java Developer</strong> and <strong>Software Engineer</strong> with a focus on building reliable, scalable, and user-friendly applications.
                I specialize in <strong>Java, Spring Boot, Hibernate, MySQL, and REST APIs</strong>, while also having strong experience with &nbsp;
                <strong>React, Next.js, Node.js, and MongoDB</strong>.
                With a solid foundation in <strong>Data Structures & Algorithms</strong>, I combine performance and clean code to deliver efficient solutions.
              </p>

            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/projects" className="flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                View Projects <FiArrowRight className="ml-2" />
              </Link>
              <a target="_blank" href="https://www.linkedin.com/in/chandrashekharsk/" className={`flex items-center px-5 py-2.5 rounded-full border-2 border-blue-500 ${theme === "dark" ? "text-white hover:bg-gray-700" : "text-blue-600 hover:bg-blue-100"} transition`}>
                LinkedIn Profile
              </a>
              <a href="https://drive.google.com/file/d/1ujHxZ5vqgDxx0GRikppGxUH7Q90fkShB/view?usp=sharing" download className={`flex items-center px-5 py-2.5 rounded-full border-2 border-blue-500 ${theme === "dark" ? "text-white hover:bg-gray-700" : "text-blue-600 hover:bg-blue-100"} transition`}>
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              src={blur}
              alt="Chandrashekhar Singh Kushwaha"
              className="rounded-full w-52 h-52 md:w-64 md:h-64 object-cover shadow-2xl border-2 border-green-500"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            {/* Text Block */}
            <motion.div
              // className="md:w-2/3 text-center md:text-left"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className={`text-lg mb-4 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                I&apos;m a 4th year Computer Science student and a dedicated <strong>Java Developer</strong>.
                My expertise lies in <strong>Spring Boot, Java-based backend systems, and RESTful services</strong>,
                while also being skilled in frontend frameworks like <strong>React</strong> and styling with <strong>Tailwind CSS</strong>.
              </p>

              <p className={`text-md mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                I&apos;ve worked on multiple projects such as <strong>enterprise-level web apps</strong>, <strong>social platforms</strong> like <em>Fiestagram</em>,
                and <strong>food delivery systems</strong>, integrating Java backends with modern frontends.
                Alongside development, I actively practice <strong>competitive programming</strong> to strengthen my problem-solving mindset.
              </p>

              <p className={`text-md ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Beyond Java development, I’m deeply interested in <strong>system design, cloud deployment, cybersecurity, and AI-driven solutions</strong>.
                My career goal is to become a well-rounded software engineer capable of designing and deploying secure, scalable, and intelligent systems.
              </p>
              <a target='_blank' href="https://github.com/Chandrashekharsk" className="inline-flex items-center mt-4 text-blue-500 hover:underline">
                Visit GitHub Profile <FiArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Project Section with Card Layout */}
      <section id="projects" className={`pt-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-5">
          <h2 className={`text-3xl font-bold text-center mb-10 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            Projects
          </h2>

          <motion.div
            className="flex gap-8 py-4"
            style={{
              display: "flex",
              willChange: "transform",
            }}
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Display projects as cards */}
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-72 bg-white shadow-lg rounded-lg p-4 overflow-hidden" style={{ backgroundColor: theme === "dark" ? "#2d3748" : "#ffffff" }}>
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-3" />
                <h3 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {project.overview}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>




      {/* Skills Section with Smooth Circular Animation */}
      <section id="skills" className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-5 overflow-hidden">
          <h2 className={`text-3xl font-bold text-center mb-10 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            Skills
          </h2>

          <motion.div
            className="flex gap-8 py-4"
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              willChange: "transform",
            }}
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Each skill item repeats seamlessly without any visual breaks */}
            {skills.map((skill, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-32 flex flex-col items-center">
                <img src={skill.image} alt={skill.name} className="w-12 h-12 mb-2" />
                <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className={`pb-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring ${theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring ${theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring ${theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-md transition ${theme === "dark" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-600"}`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
