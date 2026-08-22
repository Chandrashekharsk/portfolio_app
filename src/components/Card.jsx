import { eduData } from "./data";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Card = () => {
  const { theme } = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <>
      {eduData.map((edu, index) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          viewport={{ once: true, amount: 0.15 }}
          className={`group relative flex flex-col overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 ${
            isDark
              ? "border-slate-700 bg-slate-900/90 text-slate-200 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
              : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:shadow-blue-500/10"
          }`}
        >
          {/* Decorative top accent */}
          <div
            className={`h-1 w-full ${
              isDark
                ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
                : "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"
            }`}
          />

          <div className="relative p-6 sm:p-7">
            {/* Subtle card glow */}
            <div
              className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${
                isDark ? "bg-cyan-400/10" : "bg-blue-400/10"
              }`}
            />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`mb-2 inline-block text-xs font-semibold uppercase tracking-[0.15em] ${
                      isDark ? "text-cyan-400" : "text-blue-600"
                    }`}
                  >
                    Education
                  </span>

                  <h5
                    className={`text-xl sm:text-2xl font-bold leading-snug capitalize ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {edu.title}
                  </h5>
                </div>

                <div
                  className={`flex h-12 min-w-12 items-center justify-center rounded-xl border px-3 text-sm font-bold ${
                    isDark
                      ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                      : "border-blue-200 bg-blue-50 text-blue-700"
                  }`}
                >
                  {edu.marks}
                </div>
              </div>

              <p
                className={`text-sm sm:text-base font-medium leading-6 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {edu.institute}
              </p>
            </div>
          </div>

          <div
            className={`mt-auto border-t p-6 sm:p-7 ${
              isDark
                ? "border-slate-800 bg-slate-950/40"
                : "border-slate-100 bg-slate-50/70"
            }`}
          >
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span
                  className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                    isDark ? "bg-cyan-400" : "bg-blue-600"
                  }`}
                />
                <p
                  className={`text-sm leading-6 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {edu.eduBoard}
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span
                  className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                    isDark ? "bg-cyan-400" : "bg-blue-600"
                  }`}
                />
                <p
                  className={`text-sm leading-6 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {edu.completionStatus}
                </p>
              </li>
            </ul>

            <a
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 flex w-full items-center justify-center rounded-xl border px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "border-cyan-400/40 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
                  : "border-blue-500 text-blue-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {edu.linkTitle}
            </a>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Card;