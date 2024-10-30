import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data';
import { useSelector } from 'react-redux';
import "./styles/projects.css";

// ProjectDetails component to render the project details
const ProjectDetails = ({ projects, projectRefs }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`w-full p-6 shadow-inner rounded-lg overflow-y-auto max-h-screen space-y-12 scrollbar-hide ${
      theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-700'
    }`}>
      {projects.map((project, index) => (
        <div
          key={index}
          ref={projectRefs.current[index]}
          className={`p-6 rounded-lg shadow-lg transition-transform duration-200 hover:shadow-2xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}
        >
          <h2 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
          }`}>{project.title}</h2>

          <div className="flex flex-col md:flex-row mb-6">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-45 md:w-1/2 md:h-64 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />

            {/* Technologies Used */}
            <div className="mt-4 md:mt-0 md:ml-8 flex flex-col justify-center w-full md:w-1/2">
              <p className={`text-lg font-semibold mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Technologies Used:</p>
              <ul className={`list-disc ml-5 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.technologiesUsed.map((tech, techIndex) => (
                  <li key={techIndex} className="pb-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Links */}
          <div className="flex items-center space-x-8 mb-4">
            <a
              href={project.visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center transition-all duration-200 ease-in-out ${
                theme === 'dark' ? 'text-blue-400 hover:text-blue-600' : 'text-blue-500 hover:text-blue-700'
              }`}
            >
              Live Link <FaExternalLinkAlt className="ml-2" />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center transition-all duration-200 ease-in-out ${
                theme === 'dark' ? 'text-blue-400 hover:text-blue-600' : 'text-blue-500 hover:text-blue-700'
              }`}
            >
              GitHub <FaGithub className="ml-2" />
            </a>
          </div>

          {/* Project Overview */}
          <p className="leading-relaxed">
            <strong>Overview:</strong> {project.overview}
          </p>
        </div>
      ))}
    </div>
  );
};

ProjectDetails.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      technologiesUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
      visitLink: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ).isRequired,
  projectRefs: PropTypes.object.isRequired,
};

// Main Projects component
const Projects = () => {
  const projectRefs = useRef(projects.map(() => React.createRef()));
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`flex h-screen pt-14 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Right Panel with all projects displayed sequentially */}
      <ProjectDetails
        projects={projects}
        projectRefs={projectRefs}
      />
    </div>
  );
};

export default Projects;
