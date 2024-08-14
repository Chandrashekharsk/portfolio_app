import { ExperienceData } from '../data';
import pdf from "../../assets/Chandrashekharsk.pdf";

const Experience = () => {
  return (
    <div className="bg-gray-900 text-white  p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl mt-7 font-bold mb-8 text-center">Experience</h2>

      <div className="space-y-12">
        {ExperienceData.map((experience, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-grow py-0">
              <h3 className="text-2xl font-semibold text-teal-400">{experience.role}</h3>
              <p className="text-gray-400"><strong>@ </strong>
                <a href={experience.companyLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {experience.companyName}
                </a>
              </p>
              <p className="mt-2">
                <span className="text-teal-300 font-semibold">Location: </span>
                <span className="text-gray-200">{experience.location}</span>
              </p>
              <p className="mt-2">
                <span className="text-teal-300 font-semibold">Period: </span>
                <span className="text-gray-200">{experience.timePeriod}</span>
              </p>

              <ul className="mt-4 space-y-2">
                <li>
                  <span className="text-teal-300 font-semibold">Key Responsibilities: </span>
                  <span className="text-gray-200">{experience.keyRes}</span>
                </li>
                <li>
                  <span className="text-teal-300 font-semibold">Achievements: </span>
                  <span className="text-gray-200">{experience.achievements}</span>
                </li>
                <li>
                  <span className="text-teal-300 font-semibold">Skills Utilized: </span>
                  <span className="text-gray-200">{experience.skillUtilize}</span>
                </li>
                <li>
                  <span className="text-teal-300 font-semibold">Contribution: </span>
                  <span className="text-gray-200">{experience.contribution}</span>
                </li>
                <li>
                  <span className="text-teal-300 font-semibold">Professional Growth: </span>
                  <span className="text-gray-200">{experience.professionalGrowth}</span>
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
