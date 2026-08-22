import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data";
import { useSelector } from "react-redux";


// ============================================================
// PROJECT SIDEBAR
// ============================================================

const ProjectList = ({
  projects,
  selectedProject,
  onProjectClick,
}) => {
  const { theme } = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <aside
      className={`
        hidden md:block
        sticky top-14
        h-[calc(100vh-3.5rem)]
        w-[220px] lg:w-[250px]
        shrink-0
        overflow-y-auto
        border-r
        p-5
        scrollbar-hide
        ${
          isDark
            ? "border-slate-800 bg-slate-950"
            : "border-slate-200 bg-slate-50"
        }
      `}
    >
      {/* Heading */}
      <div className="mb-7">


        <h2
          className={`mt-1 text-xl font-bold ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Projects
        </h2>

        <div className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
      </div>

      {/* Project Names */}
      <ul className="space-y-2">
        {projects.map((project, index) => {
          const isSelected =
            selectedProject.title === project.title;

          return (
            <li key={index}>
              <button
                onClick={() => onProjectClick(project, index)}
                className={`
                  w-full rounded-xl px-3 py-3
                  text-left
                  transition-all duration-300
                  ${
                    isSelected
                      ? isDark
                        ? "border border-blue-500/30 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/5"
                        : "border border-blue-500/20 bg-blue-50 text-blue-600 shadow-md"
                      : isDark
                      ? "border border-transparent text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                      : "border border-transparent text-slate-600 hover:bg-white hover:text-slate-900"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`
                      flex h-7 w-7 shrink-0 items-center justify-center
                      rounded-lg text-xs font-bold
                      ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                          : isDark
                          ? "bg-slate-800 text-slate-500"
                          : "bg-slate-200 text-slate-500"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="truncate text-sm font-medium">
                    {project.title}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
  selectedProject: PropTypes.object.isRequired,
  onProjectClick: PropTypes.func.isRequired,
};


// ============================================================
// PROJECT DETAILS
// ============================================================

const ProjectDetails = ({
  projects,
  projectRefs,
  onProjectVisible,
}) => {
  const { theme } = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <main
      className={`
        flex-1
        min-w-0
        h-[calc(100vh-3.5rem)]
        overflow-y-auto
        scroll-smooth
        scrollbar-hide
        ${
          isDark
            ? "bg-slate-950 text-slate-200"
            : "bg-slate-50 text-slate-700"
        }
      `}
      onScroll={onProjectVisible}
    >
      <div className="mx-auto max-w-6xl space-y-8 px-5 py-10 sm:px-7 lg:px-10">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 sm:text-sm">
            What I've Built
          </p>

          <h1
            className={`text-3xl font-extrabold sm:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            My Projects
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </div>


        {/* PROJECT CARDS */}

        {projects.map((project, index) => (
          <article
            key={index}
            ref={(element) => {
              projectRefs.current[index] = element;
            }}
            className={`
              scroll-mt-6
              overflow-hidden
              rounded-3xl
              border
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              ${
                isDark
                  ? "border-slate-800 bg-slate-900/80 hover:border-blue-500/30"
                  : "border-slate-200 bg-white hover:border-blue-500/30"
              }
            `}
          >

            {/* Top Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400" />

            <div className="p-5 sm:p-7 lg:p-8">

              {/* Project Header */}
              <div className="mb-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-500">
                  Project {String(index + 1).padStart(2, "0")}
                </p>

                <h2
                  className={`text-2xl font-bold sm:text-3xl ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {project.title}
                </h2>
              </div>


              {/* IMAGE + TECHNOLOGIES */}

              <div className="flex flex-col gap-7 lg:flex-row">

                {/* Image */}
                <div className="w-full lg:w-[55%]">
                  <div
                    className={`
                      overflow-hidden
                      rounded-2xl
                      border
                      p-2
                      ${
                        isDark
                          ? "border-slate-700 bg-slate-950"
                          : "border-slate-200 bg-slate-50"
                      }
                    `}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-auto
                        min-h-[220px]
                        max-h-[420px]
                        w-full
                        rounded-xl
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-[1.02]
                      "
                    />
                  </div>
                </div>


                {/* Technologies */}
                <div className="flex w-full flex-col justify-center lg:w-[45%]">

                  <h3
                    className={`mb-4 text-lg font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technologiesUsed.map(
                      (tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`
                            rounded-full
                            border
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            ${
                              isDark
                                ? "border-slate-700 bg-slate-950 text-slate-300"
                                : "border-slate-200 bg-slate-50 text-slate-600"
                            }
                          `}
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>


              {/* LINKS */}

              <div className="mt-7 flex flex-wrap gap-3">

                {project.visitLink ? (
                  <a
                    href={project.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-blue-600
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-blue-700
                    "
                  >
                    Live Link
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                ) : (
                  <span
                    className={`
                      rounded-xl
                      border
                      px-4
                      py-2.5
                      text-sm
                      ${
                        isDark
                          ? "border-slate-700 text-slate-500"
                          : "border-slate-200 text-slate-500"
                      }
                    `}
                  >
                    Not Hosted
                  </span>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      ${
                        isDark
                          ? "border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-blue-400"
                          : "border-slate-200 text-slate-700 hover:border-blue-500/50 hover:text-blue-600"
                      }
                    `}
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
              </div>


              {/* Overview */}

              <div
                className={`
                  mt-7
                  rounded-2xl
                  border
                  p-4
                  sm:p-5
                  ${
                    isDark
                      ? "border-slate-800 bg-slate-950/50"
                      : "border-slate-200 bg-slate-50"
                  }
                `}
              >
                <p
                  className={`text-sm leading-7 sm:text-base ${
                    isDark
                      ? "text-slate-300"
                      : "text-slate-700"
                  }`}
                >
                  <span className="font-semibold text-blue-500">
                    Overview:
                  </span>{" "}
                  {project.overview}
                </p>
              </div>

            </div>
          </article>
        ))}
      </div>
    </main>
  );
};


// ============================================================
// MAIN COMPONENT
// ============================================================

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(
    projects[0]
  );

  const projectRefs = useRef([]);

  const { theme } = useSelector((state) => state.theme);
  const isDark = theme === "dark";


  // CLICK PROJECT FROM SIDEBAR
  const handleProjectClick = (project, index) => {
    setSelectedProject(project);

    const element = projectRefs.current[index];

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <div
      className={`
        flex
        min-h-[calc(100vh-3.5rem)]
        pt-14
        ${
          isDark
            ? "bg-slate-950"
            : "bg-slate-50"
        }
      `}
    >

      {/* ==================================================
          LEFT SIDEBAR
          ================================================== */}

      <ProjectList
        projects={projects}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />


      {/* ==================================================
          RIGHT PROJECT AREA
          ================================================== */}

      <ProjectDetails
        projects={projects}
        projectRefs={projectRefs}
      />

    </div>
  );
};


export default Projects;