import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa'; 
import './styles/hero.css';
import  hello1 from "../../assets/hello1.png"
import fm6 from "../../assets/fm6.jpg"
import resume from "../../assets/Resume.pdf"

const Hero = () => {
  return (
    <>
    <div className="hero-container bg-gray-900 gap-8">
    <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={hello1} alt="Hero" />
      </motion.div>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Thanks For Visiting</h1>
        <p className="hero-subtitle">I am a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). With a strong foundation in both frontend and backend development, I have successfully delivered complex web applications focused on scalability, performance, and user experience. My expertise includes cloud deployment, particularly with Cloudflare Pages, and hands-on experience with modern web technologies like React and Node.js.</p>
        <div className="hero-links">
          <Link to="/projects" className="hero-link">Projects</Link>
          <Link to="/skills" className="hero-link">Skills</Link>
          <a href="https://github.com/Chandrashekharsk" target='_blank' className="hero-link">Github</a>
          <a href={resume} download className="resume-button">
              <FaDownload />
            </a>
        </div>
      </motion.div>
    </div>

    <div className="hero-container bg-gray-900 gap-8">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">My Approach</h1>
        <p className="hero-subtitle">My development approach is rooted in a deep understanding of software design principles, competitive programming, and cybersecurity practices. I excel in fast-paced environments, leveraging problem-solving skills to tackle challenging projects, from creating interactive dark-themed portfolios to deploying secure web applications. My commitment to continuous learning drives me to deliver innovative solutions that align with business needs.</p>
        {/* <div className="hero-links">
          <Link to="/projects" className="hero-link">Projects</Link>
          <Link to="/skills" className="hero-link">Skills</Link>
          <a href="https://github.com/Chandrashekharsk" target='_blank' className="hero-link">Github</a>
        </div> */}
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={fm6} alt="Hero" />
      </motion.div>
    </div>
    </>
  );
};

export default Hero;
