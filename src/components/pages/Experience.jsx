import { useSelector } from "react-redux";
import { ExperienceData } from '../data';
import pdf from "../../assets/Chandrashekharsk.pdf";

const Experience = () => {
  const {theme} = useSelector((state) => state.theme);

  return (
    <div className={`p-8 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h2 className={`text-4xl mt-7 font-bold mb-8 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>Experience</h2>

      <div className="space-y-12">
        {ExperienceData.map((experience, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-grow py-0">
              <h3 className={`text-2xl font-semibold ${theme === "dark" ? "text-teal-400" : "text-teal-600"}`}>{experience.role}</h3>
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
                  <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Key Responsibilities: </span>
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

            <div className="flex-shrink-0 w-full md:w-auto md:ml-6 mt-4 md:mt-0">
              <iframe
                src={pdf}
                width="100%"
                height="480px"
                title="Resume PDF"
                className="rounded-lg shadow-md"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
