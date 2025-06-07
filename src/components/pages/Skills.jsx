import { useSelector } from "react-redux";
import { skills } from "../data";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skill = () => {
  const { theme } = useSelector((state) => state.theme);

  const cardHover = theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const categoryText = theme === "dark" ? "text-sky-400" : "text-sky-700";

  return (
    <section className={`py-16 transition-all duration-500 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-10"
        >
          Technical Skills
        </motion.h2>

        {Object.entries(skills).map(([category, skills], idx) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h3
              className={`text-2xl sm:text-3xl font-bold tracking-wide mb-2 ${categoryText} border-none outline-none no-underline`}
              style={{ borderBottom: "none", textDecoration: "none" }}
            >
              {category}
            </h3>
            <div className={`w-12 h-1 rounded-full mx-auto mb-8`}></div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`flex flex-col flex-wrap items-center justify-center p-3 rounded-lg shadow-sm ${cardHover} transition-transform duration-200`}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 mb-2 object-contain"
                  />
                  <h4 className={`text-sm font-medium ${textColor}`}>{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
