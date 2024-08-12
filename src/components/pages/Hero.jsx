import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './styles/hero.css'; // Assuming you'll style the component using CSS
import fm2 from "../../assets/fm2.jpg"

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">I am a Full-Stack Developer specialized in MERN Stack</p>
        <div className="hero-links">
          <Link to="/projects" className="hero-link">Projects</Link>
          <Link to="/skills" className="hero-link">Skills</Link>
          <Link to="/https://github.com/Chandrashekharsk" className="hero-link">Github</Link>
        </div>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={fm2} alt="Hero" />
      </motion.div>
    </div>
  );
};

export default Hero;
