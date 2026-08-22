import { useSelector } from "react-redux";
import { skills } from "../data";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skill = () => {
  const { theme } = useSelector((state) => state.theme);

  const isDark = theme === "dark";

  const textColor = isDark ? "text-white" : "text-slate-900";
  const mutedColor = isDark ? "text-slate-400" : "text-slate-600";
  const categoryText = isDark ? "text-cyan-400" : "text-blue-700";

  return (
    <section
      className={`relative overflow-hidden py-20 md:py-24 transition-colors duration-500 ${
        isDark
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span
            className={`inline-block mb-3 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
              isDark
                ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                : "border-blue-200 bg-blue-50 text-blue-700"
            }`}
          >
            My Expertise
          </span>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Technical Skills
          </motion.h2>

          <p className={`mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 ${mutedColor}`}>
            Technologies and tools I use to build scalable, modern, and
            maintainable applications.
          </p>

          <div
            className={`mx-auto mt-6 h-1 w-16 rounded-full ${
              isDark
                ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                : "bg-gradient-to-r from-blue-600 to-cyan-500"
            }`}
          />
        </motion.div>

        {Object.entries(skills).map(([category, categorySkills], idx) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.15 }}
            className="mb-16 last:mb-0"
          >
            <div className="mb-8 flex flex-col items-center">
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${categoryText}`}
              >
                {category}
              </h3>

              <div
                className={`mt-3 h-1 w-10 rounded-full ${
                  isDark
                    ? "bg-cyan-400"
                    : "bg-blue-600"
                }`}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
              {categorySkills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -7, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                  }}
                  className={`group relative flex min-h-[132px] flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 shadow-sm transition-all duration-300 ${
                    isDark
                      ? "border-slate-800 bg-slate-900/80 hover:border-cyan-400/30 hover:bg-slate-800 hover:shadow-cyan-500/10"
                      : "border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-blue-500/10"
                  }`}
                >
                  {/* Hover glow */}
                  <div
                    className={`pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                      isDark ? "bg-cyan-400/20" : "bg-blue-400/20"
                    }`}
                  />

                  <div
                    className={`relative mb-3 flex h-16 w-16 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${
                      isDark
                        ? "border-slate-700 bg-slate-800"
                        : "border-slate-100 bg-slate-50"
                    }`}
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      loading="lazy"
                      className="h-10 w-10 sm:h-11 sm:w-11 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h4
                    className={`relative text-xs sm:text-sm font-semibold leading-5 ${textColor}`}
                  >
                    {skill.name}
                  </h4>
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