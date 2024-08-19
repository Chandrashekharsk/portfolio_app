import { useSelector } from "react-redux";
import { skills } from "../data.js";

const Skill = () => {
  const {theme} = useSelector((state) => state.theme);

  return (
    <section className={`py-20 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="max-w-7xl py-4 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>
        <p className="mt-4 text-lg">
          Below are some of the technologies I specialize in.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center p-4 rounded-lg shadow-lg ${
                theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
              } transition-colors duration-300`}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3
                className={`text-xl font-semibold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {skill.name}
              </h3>
              <p
                className={`mt-2 transition-colors duration-300 ${
                  theme === "dark"
                    ? "text-gray-400 group-hover:text-gray-200"
                    : "text-gray-600 group-hover:text-gray-800"
                }`}
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
