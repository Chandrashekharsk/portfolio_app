// import { react } from "../../assets/index";

import {skills} from "../data.js"

const Skill = () => {
  return (
      <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">Skills</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Below are some of the technologies I specialize in.
              </p>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                  {skills.map((skill, index) => (
                      <div key={index} className="group flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                          <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" />
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                          <p className="mt-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
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
