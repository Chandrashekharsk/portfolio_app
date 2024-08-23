import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import './styles/hero.css';
import hello1 from "../../assets/hello1.png";
import fm6 from "../../assets/fm6.jpg";
import resume from "../../assets/Resume.pdf";
import { useSelector } from 'react-redux';

const Hero = () => {
  const theme = useSelector((state) => state.theme); // Adjusted to correctly access the theme value

  return (
    <div className={`${theme === "dark" ? "bg-black text-[#FFF5EE]" : "bg-white text-black"} min-h-screen`}>
      <div className="hero-container gap-8 pt-20">
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={hello1} className="hero-img" alt="Hero" />
        </motion.div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">Thanks For Visiting</h1>
          <p className="hero-subtitle">
            Hi, This is Chandrashekhar Singh Kushwaha. I am a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). With a strong foundation in both frontend and backend development, I have successfully delivered complex web applications. My expertise includes cloud deployment, particularly with Cloudflare Pages, and hands-on experience with modern web technologies like React and Node.js.
          </p>
          <div className="hero-links font-semibold">
            <Link to="/projects" className="hero-link">Projects</Link>
            <Link to="/skills" className="hero-link">Skills</Link>
            <a href="https://github.com/Chandrashekharsk" target="_blank" rel="noopener noreferrer" className="hero-link">GitHub</a>
            <a href={resume} download className="dark resume-button">
              <FaDownload />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero-container gap-8 pt-20">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">My Approach</h1>
          <p className="hero-subtitle">
          My development approach is rooted in a deep understanding of software design principles, competitive programming, and cybersecurity practices. I excel in fast-paced environments, leveraging problem-solving skills to tackle challenging projects, from creating interactive dark-themed portfolios to deploying secure web applications. My commitment to continuous learning drives me to deliver innovative solutions that align with business needs.
          </p>
          {/* <div className="hero-links font-semibold">
            <Link to="/projects" className="hero-link">Projects</Link>
            <Link to="/skills" className="hero-link">Skills</Link>
            <a href="https://github.com/Chandrashekharsk" target="_blank" rel="noopener noreferrer" className="hero-link">GitHub</a>
            <a href={resume} download className="dark resume-button">
              <FaDownload />
            </a>
          </div> */}
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={fm6} className="hero-img" alt="Hero" />
        </motion.div>
      </div>

      
    </div>
  );
};

export default Hero;
