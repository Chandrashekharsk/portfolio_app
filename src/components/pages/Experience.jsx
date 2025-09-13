import { useSelector } from "react-redux";
import { ExperienceData } from '../data';
import {completionLetter} from "../../assets/index";

const Experience = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`py-11 p-4 lg:min-h-[87vh] shadow-lg ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h2 className={`pt-14 mb-6 md:mb-4 lg:mb-1 text-4xl font-bold sm:mb-8 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>
        Experience
      </h2>

      <div className="space-y-12">
        {ExperienceData.map((experience, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-grow py-2">
              <h3 className={`text-2xl p-2 font-semibold ${theme === "dark" ? "text-teal-400" : "text-teal-600"}`}>
                {experience.role}
              </h3>
              <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                <strong>@ </strong>
                <a
                  href={experience.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === "dark" ? "text-blue-400 hover:underline" : "text-blue-600 hover:underline"}`}
                >
                  {experience.companyName}
                </a>
              </p>
              <p className="mt-2">
                <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Location: </span>
                <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{experience.location}</span>
              </p>
              <p className="mt-2">
                <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Period: </span>
                <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{experience.timePeriod}</span>
              </p>

              <ul className="mt-4 space-y-2">
                <li>
                  <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Project: </span>
                  <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{experience.project}</span>
                </li>
                <li>
                  <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Achievements: </span>
                  <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{experience.achievements}</span>
                </li>
                <li>
                  <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Skills Utilized: </span>
                  <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{experience.skillUtilize}</span>
                </li>
                <li>
                  <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Contribution: </span>
                  <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{experience.contribution}</span>
                </li>
                <li>
                  <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Professional Growth: </span>
                  <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{experience.professionalGrowth}</span>
                </li>
              </ul>
            </div>

            <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-4 md:mt-0">
              <img
                src={completionLetter}
                alt="Certificate"
                width="100%"
                height="auto"
                className=" shadow-lg"
                style={{ minHeight: "219px", maxHeight: "600px" }}
                
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
