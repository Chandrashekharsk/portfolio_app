import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { skills } from '../data';
import { blur } from "../../assets/index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { projects } from '../data';
import resume  from '/resume.pdf';
import { Avatar } from '@mui/material';
import { Stack } from 'react-bootstrap';
import "./styles/home.css"

const Home = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`min-h-screen overflow-x-hidden  ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
{/* Hero Section */}
<section className={`shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
  <div className="container mx-auto px-5 py-20 flex flex-col-reverse items-center md:flex-row md:items-start">
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
        Hi, I'm <span className="text-blue-500">Chandrashekhar Singh Kushwaha</span>
      </h1>
      <p className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
        Full-Stack Developer with expertise in building dynamic and scalable web applications. Experienced in frontend and backend technologies and databases as well. Ensuring high-quality, user-focused digital experiences. I am skilled in Data Structures and Algorithms.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        <Link to="/projects" className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          View Projects <FiArrowRight className="ml-2" />
        </Link>
        <a href="#contact" className={`flex items-center px-4 py-2 rounded-full outline outline-blue-500 ${theme === "dark" ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-transparent text-gray-800 hover:bg-gray-200"} transition`}>
          Contact Me
        </a>
        <a href={resume} download className={`flex items-center px-4 py-2 rounded-full outline outline-blue-500 ${theme === "dark" ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-transparent  text-gray-800 hover:bg-gray-200"} transition`}>
          Download Resume
        </a>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
      <img src={blur} alt="Chandrashekhar Singh Kushwaha" className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg" />
    </div>
  </div>
</section>



{/* About Section */}
<section id="about" className="container mx-auto px-8 py-20">
  <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
  <div className="flex flex-col md:flex-row items-center md:space-x-10">
    <div className="md:w-1/3 md:mr-12 mb-6 md:mb-0">
    <Stack>
      <Avatar
        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdlYiUyMGFwcGxpY2F0aW9ufGVufDB8fDB8fHww"
        alt="About Me"
        className="rounded-lg shadow-lg"
        sx = {{ width: 284, height: 284 }} 
        variant="dot"
      />
      </Stack>
      
    </div>
    <div className="md:w-2/3">
      <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        I’m a FULL-Stack Developer specializing in creating responsive web applications. With a solid background in React, Node.js, and databases like MongoDB and PostgreSQL, I deliver impactful digital solutions. I’m committed to continuous learning and enjoy coding challenges, tech blogging, and exploring new technologies.
      </p>
      <Link to="/projects" className="flex items-center text-blue-500 hover:underline">
        Check out my work <FiArrowRight className="ml-2" />
      </Link>
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
