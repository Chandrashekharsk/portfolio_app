import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Card from "../Card";

const Education = () => {
  const { theme } = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <section
      className={`relative min-h-[87vh] overflow-hidden px-5 py-20 sm:px-6 md:py-24 transition-colors duration-500 ${
        isDark
          ? "bg-slate-950 text-slate-200"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span
            className={`mb-3 inline-block rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
              isDark
                ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                : "border-blue-200 bg-blue-50 text-blue-700"
            }`}
          >
            Academic Journey
          </span>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            Education
          </h2>

          <div
            className={`mx-auto mt-5 h-1 w-16 rounded-full ${
              isDark
                ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                : "bg-gradient-to-r from-blue-600 to-cyan-500"
            }`}
          />

          <p
            className={`mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-7 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A foundation built through continuous learning, practical
            experience, and a strong focus on technology.
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <Card />
        </motion.div>
      </div>
    </section>
  );
};

export default Education;