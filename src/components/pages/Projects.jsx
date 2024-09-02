import { useSelector } from 'react-redux';
import { projects } from '../data';
import { motion } from 'framer-motion';
import './styles/projects.css'; // Import custom CSS for the moving light effect

const Projects = () => {
const {theme} = useSelector((state) => state.theme);

  return (
    <section
      className={`px-8 py-24 ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-black"}`}
    >
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 ${theme === "dark" ? "dark:text-white" : ""}`}>
          Projects
        </h2>
      </div>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card ${
              theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            } rounded-lg shadow-lg overflow-hidden relative`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="moving-light"></div> {/* Moving light effect */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 rounded-sm object-cover"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-2 pb-1">
              <h2 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                {project.title}
              </h2>
            </div>
            <div className="p-2">
              <h3 className={`font-semibold ${theme === "dark" ? "text-sky-400" : "text-blue-600"}`}>
                Overview:
              </h3>
              <p className={`text-sm mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
                {project.overview}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologiesUsed.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded ${
                      theme === "dark" ? "bg-gray-700 text-sky-400" : "bg-gray-200 text-blue-600"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologiesUsed.length > 4 && (
                  <span className={`text-xs ${theme === "dark" ? "text-sky-400" : "text-blue-600"}`}>
                    + more
                  </span>
                )}
              </div>
              <div className="flex pb-3 justify-between items-center">
                <motion.a
                  href={project.visitLink}
                  className={`px-4 py-2 rounded-full text-xs transition-all outline ${
                    theme === "dark"
                      ? "bg-gray-700 text-white hover:bg-sky-500 outline-sky-400"
                      : "bg-gray-200 text-black hover:bg-blue-500 outline-blue-400"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Visit
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  className={`px-4 py-2 rounded-full text-xs transition-all outline ${
                    theme === "dark"
                      ? "bg-gray-700 text-white hover:bg-sky-500 outline-sky-400"
                      : "bg-gray-200 text-black hover:bg-blue-500 outline-blue-400"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="mx-auto text-center">
        <h2 className={`text-small font-normal mt-7 ${theme === "dark" ? "text-sky-600" : "text-blue-600"}`}>
          more projects are on the way
        </h2>
      </div>
    </section>
  );
};

export default Projects;
