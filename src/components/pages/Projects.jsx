import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data';
import { useSelector } from 'react-redux';
import "./styles/projects.css";

// ProjectList component to render the list of project titles
const ProjectList = ({ projects, selectedProject, onProjectClick }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`w-[17%] p-4 overflow-y-auto shadow-lg rounded-md border-r scrollbar-hide ${
      theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
    }`}>
      <h2 className={`text-xl font-semibold mb-6 ${
        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
      }`}>Projects</h2>
      <ul className="space-y-3">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`cursor-pointer py-1 px-3 rounded-md transition-all duration-200 ease-in-out ${
              selectedProject.title === project.title
                ? theme === 'dark' 
                  ? 'bg-blue-700 text-blue-200 font-semibold shadow-md' 
                  : 'bg-blue-100 text-blue-700 font-semibold shadow-md'
                : theme === 'dark' 
                  ? 'text-gray-400 hover:bg-blue-900 hover:shadow-sm' 
                  : 'text-gray-600 hover:bg-blue-50 hover:shadow-sm'
            }`}
            onClick={() => onProjectClick(project, index)}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  )
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedProject: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onProjectClick: PropTypes.func.isRequired,
};

// ProjectDetails component to render the project details
const ProjectDetails = ({ projects, projectRefs }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`w-[83%] p-6 shadow-inner rounded-lg overflow-y-auto max-h-screen space-y-12 scrollbar-hide ${
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
          <div className="flex mb-6">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-1/2 h-64 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            {/* Technologies Used */}
            <div className="ml-8 flex flex-col justify-center w-1/2">
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
  )
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
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const projectRefs = useRef(projects.map(() => React.createRef()));
  const { theme } = useSelector((state) => state.theme);

  const handleProjectClick = (project, index) => {
    setSelectedProject(project);
    projectRefs.current[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`flex h-screen pt-14 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Left Panel */}
      <ProjectList
        projects={projects}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />

      {/* Right Panel with all projects displayed sequentially */}
      <ProjectDetails
        projects={projects}
        projectRefs={projectRefs}
      />
    </div>
  );
};

export default Projects;
