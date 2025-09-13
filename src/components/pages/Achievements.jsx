import { useSelector } from "react-redux";
import { AchievementsData } from '../data';

const Achievements = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`py-11 p-4 lg:min-h-[87vh] shadow-lg ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h2 className={`pt-14 mb-6 md:mb-4 lg:mb-1 text-4xl font-bold sm:mb-8 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>
        Achievements
      </h2>

      <div className="space-y-12">
        {AchievementsData.map((achievement, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-grow py-2">
              <h3 className={`text-2xl p-2 font-semibold ${theme === "dark" ? "text-teal-400" : "text-teal-600"}`}>
                {achievement.title}
              </h3>
              <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                <strong>@ </strong>
                <span className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                  {achievement.organization}
                </span>
              </p>
              <p className="mt-2">
                <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Location: </span>
                <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{achievement.location}</span>
              </p>
              <p className="mt-2">
                <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Date: </span>
                <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{achievement.date}</span>
              </p>

              <p className="mt-4">
                <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Description: </span>
                <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{achievement.description}</span>
              </p>

              <ul className="mt-4 space-y-2">
                <li>
                  <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Achievements: </span>
                  <ul className="ml-4 list-disc">
                    {achievement.achievements.map((item, i) => (
                      <li key={i} className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{item}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Skills Utilized: </span>
                  <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{achievement.skillsUtilized}</span>
                </li>
                <li>
                  <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Impact: </span>
                  <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{achievement.impact}</span>
                </li>
                <li>
                  <span className={`${theme === "dark" ? "text-teal-300" : "text-teal-500"} font-semibold`}>Professional Growth: </span>
                  <span className={theme === "dark" ? "text-gray-200" : "text-gray-800"}>{achievement.professionalGrowth}</span>
                </li>
              </ul>
            </div>

            <div 
            className="w-full md:w-1/2 lg:w-1/3 xl:w-[29%] mt-4 md:mt-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:cursor-zoom-in" >

              <img
                src={achievement.image} 
                alt="Achievement Certificate"
                width="100%"
                height="auto"
                className="shadow-lg"
                style={{ minHeight: "219px", maxHeight: "600px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
