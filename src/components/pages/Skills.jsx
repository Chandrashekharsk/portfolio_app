import { useSelector } from "react-redux";
import { skills } from "../data";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
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
      className={`relative overflow-hidden py-16 sm:py-20 md:py-24 transition-colors duration-500 ${
        isDark
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <span
            className={`mb-4 inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
              isDark
                ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                : "border-blue-200 bg-blue-50 text-blue-700"
            }`}
          >
            My Expertise
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Technical Skills
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${mutedColor}`}
          >
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

        {/* ================= SKILL CATEGORIES ================= */}
        <div className="space-y-12 sm:space-y-14">
          {Object.entries(skills).map(
            ([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.08,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-4 sm:mb-7">
                  <div
                    className={`h-px flex-1 ${
                      isDark ? "bg-slate-800" : "bg-slate-200"
                    }`}
                  />

                  <div className="text-center">
                    <h3
                      className={`text-lg font-bold tracking-tight sm:text-xl md:text-2xl ${categoryText}`}
                    >
                      {category}
                    </h3>

                    <p
                      className={`mt-1 text-[11px] font-medium uppercase tracking-wider ${
                        isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
                      {categorySkills.length}{" "}
                      {categorySkills.length === 1
                        ? "Technology"
                        : "Technologies"}
                    </p>
                  </div>

                  <div
                    className={`h-px flex-1 ${
                      isDark ? "bg-slate-800" : "bg-slate-200"
                    }`}
                  />
                </div>

                {/* Skill Cards */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`group relative flex min-h-[125px] cursor-default flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 shadow-sm transition-all duration-300 ${
                        isDark
                          ? "border-slate-800 bg-slate-900/80 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/10"
                          : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-lg hover:shadow-blue-500/10"
                      }`}
                    >
                      {/* Hover Glow */}
                      <div
                        className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                          isDark
                            ? "bg-cyan-400/20"
                            : "bg-blue-400/20"
                        }`}
                      />

                      {/* Icon */}
                      <div
                        className={`relative mb-3 flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-300 group-hover:rotate-1 group-hover:scale-110 sm:h-16 sm:w-16 ${
                          isDark
                            ? "border-slate-700 bg-slate-800"
                            : "border-slate-100 bg-slate-50"
                        }`}
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          loading="lazy"
                          className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
                        />
                      </div>

                      {/* Skill Name */}
                      <h4
                        className={`relative text-center text-xs font-semibold leading-5 sm:text-sm ${textColor}`}
                      >
                        {skill.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skill;