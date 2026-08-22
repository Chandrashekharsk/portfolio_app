import { useSelector } from "react-redux";
import { ExperienceData } from "../data";

const Experience = () => {
  const { theme } = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <section
      className={`relative min-h-screen overflow-hidden py-16 sm:py-20 lg:py-24 ${
        isDark
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Ambient Background Glow */}
      <div
        className={`pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl ${
          isDark ? "bg-blue-500/10" : "bg-blue-400/10"
        }`}
      />

      <div
        className={`pointer-events-none absolute bottom-0 -left-40 h-96 w-96 rounded-full blur-3xl ${
          isDark ? "bg-cyan-400/5" : "bg-cyan-400/10"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Professional Journey
          </p>

          <h2
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            Experience
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </div>

        {/* Experience List */}
        <div className="relative space-y-8 lg:space-y-10">
          {/* Timeline Line */}
          <div
            className={`absolute bottom-4 left-[19px] top-4 hidden w-px md:block ${
              isDark
                ? "bg-gradient-to-b from-blue-500/60 via-slate-700 to-transparent"
                : "bg-gradient-to-b from-blue-500/50 via-slate-300 to-transparent"
            }`}
          />

          {ExperienceData.map((experience, index) => (
            <article
              key={index}
              className="relative md:pl-12"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border md:flex ${
                  isDark
                    ? "border-blue-500/40 bg-slate-950"
                    : "border-blue-500/30 bg-slate-50"
                }`}
              >
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
              </div>

              {/* Experience Card */}
              <div
                className={`group overflow-hidden rounded-3xl border p-5 shadow-xl transition-all duration-300 sm:p-7 lg:p-8 ${
                  isDark
                    ? "border-slate-800 bg-slate-900/70 hover:border-blue-500/40 hover:shadow-blue-500/5"
                    : "border-slate-200 bg-white hover:border-blue-500/30 hover:shadow-blue-500/5"
                }`}
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
                  {/* Experience Details */}
                  <div className="min-w-0 flex-1">
                    {/* Role */}
                    <h3
                      className={`text-2xl font-bold leading-tight sm:text-3xl ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {experience.role}
                    </h3>

                    {/* Company */}
                    <p
                      className={`mt-2 text-sm sm:text-base ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      <span className="mr-1 font-semibold text-blue-500">
                        @
                      </span>

                      <a
                        href={experience.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold transition-colors duration-300 ${
                          isDark
                            ? "text-blue-400 hover:text-cyan-400"
                            : "text-blue-600 hover:text-cyan-600"
                        }`}
                      >
                        {experience.companyName}
                      </a>
                    </p>

                    {/* Metadata */}
                    <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                      <p
                        className={`text-sm ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        <span className="font-semibold text-blue-500">
                          Location:
                        </span>{" "}
                        {experience.location}
                      </p>

                      <p
                        className={`text-sm ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        <span className="font-semibold text-blue-500">
                          Period:
                        </span>{" "}
                        {experience.timePeriod}
                      </p>
                    </div>

                    {/* Experience Information */}
                    <div className="mt-6 space-y-4">
                      <ExperienceItem
                        label="Project"
                        value={experience.project}
                        isDark={isDark}
                      />

                      <ExperienceItem
                        label="Achievements"
                        value={experience.achievements}
                        isDark={isDark}
                      />

                      <ExperienceItem
                        label="Skills Utilized"
                        value={experience.skillUtilize}
                        isDark={isDark}
                      />

                      <ExperienceItem
                        label="Contribution"
                        value={experience.contribution}
                        isDark={isDark}
                      />

                      <ExperienceItem
                        label="Professional Growth"
                        value={experience.professionalGrowth}
                        isDark={isDark}
                      />
                    </div>
                  </div>

                  {/* Certificate / Experience Image */}
                  <div className="w-full shrink-0 lg:w-[340px] xl:w-[380px]">
                    <div
                      className={`overflow-hidden rounded-2xl border p-2 transition-all duration-300 ${
                        isDark
                          ? "border-slate-700 bg-slate-950/50 group-hover:border-blue-500/40"
                          : "border-slate-200 bg-slate-50 group-hover:border-blue-500/30"
                      }`}
                    >
                      <img
                        src={experience.image}
                        alt={`${experience.companyName} certificate`}
                        className="h-auto max-h-[520px] w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Reusable Experience Item */
const ExperienceItem = ({ label, value, isDark }) => {
  return (
    <div
      className={`rounded-xl border p-3.5 sm:p-4 ${
        isDark
          ? "border-slate-800 bg-slate-950/40"
          : "border-slate-200 bg-slate-50/70"
      }`}
    >
      <p
        className={`text-sm leading-7 ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        <span className="font-semibold text-blue-500">{label}:</span>{" "}
        {value}
      </p>
    </div>
  );
};

export default Experience;

