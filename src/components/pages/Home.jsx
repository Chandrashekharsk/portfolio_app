import { FiArrowRight, FiMail, FiPhone, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { blur } from "../../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { projects } from "../data";
import "./styles/home.css";
import { skills as categorizedSkills } from "../data";
import { flattenSkills } from "../../../utils/flattenSkills";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { resumeLink } from "../data";

const skills = flattenSkills(categorizedSkills);

const Home = () => {
  const { theme } = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) {
      toast.error("Form not ready.");
      return;
    }

    try {
      setSending(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      toast.success("Message sent successfully 🚀");

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message ❌");
    } finally {
      setSending(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        isDark
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section
        className={`relative isolate overflow-hidden border-b ${
          isDark
            ? "border-slate-800 bg-slate-950"
            : "border-slate-200 bg-white"
        }`}
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-56px)] max-w-7xl flex-col-reverse items-center justify-center gap-12 px-5 py-16 sm:px-6 md:flex-row md:gap-14 md:py-20 lg:gap-20 lg:px-8">
          
          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          
<div className="w-full text-center md:w-[58%] md:text-left">
  
  {/* Small Badge */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-5 flex justify-center md:justify-start"
  >
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
        isDark
          ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
          : "border-blue-200 bg-blue-50 text-blue-700"
      }`}
    >
      Java Full Stack Developer | 6 Months Experience
    </span>
  </motion.div>

  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={`text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl ${
      isDark ? "text-white" : "text-slate-950"
    }`}
  >
    Hi, I'm{" "}
    <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
      Chandrashekhar
    </span>
    <br />
    Singh Kushwaha
  </motion.h1>

  {/* Description */}
  <motion.p
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className={`mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base md:mx-0 md:text-lg ${
      isDark ? "text-slate-300" : "text-slate-600"
    }`}
  >
    I'm a Java Full Stack Developer with{" "}
    <strong className={isDark ? "text-white" : "text-slate-900"}>
      6 months of professional software development experience
    </strong>
    , building real-world web applications using Java, Spring Boot,
    React.js, REST APIs, and MySQL. At CodewebX, I contributed to
    projects including GoNeer and Hello11, working on backend
    development, API integration, authentication, and database
    management. I'm passionate about building scalable,
    maintainable applications and delivering reliable software
    solutions.
  </motion.p>

  {/* Tech Pills */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.25 }}
    className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start"
  >
    {[
      "Java",
      "Spring Boot",
      "React.js",
      "REST APIs",
      "MySQL",
    ].map((tech) => (
      <span
        key={tech}
        className={`rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm ${
          isDark
            ? "border-slate-700 bg-slate-900 text-slate-300"
            : "border-slate-200 bg-slate-100 text-slate-700"
        }`}
      >
        {tech}
      </span>
    ))}
  </motion.div>

  {/* CTA Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
  >
    {/* Projects */}
    <Link
      to="/projects"
      className="group inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-500/30 sm:px-6"
    >
      View Projects
      <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>

    {/* Contact */}
    <button
      onClick={scrollToContact}
      className={`inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 sm:px-6 ${
        isDark
          ? "border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10"
          : "border-blue-500/50 text-blue-700 hover:bg-blue-50"
      }`}
    >
      <FiMail className="mr-2" />
      Contact Me
    </button>

    {/* Resume */}
    <a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 sm:px-6 ${
        isDark
          ? "border-slate-700 text-slate-300 hover:border-blue-400 hover:text-blue-400"
          : "border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600"
      }`}
    >
      <FiDownload className="mr-2" />
      Resume
    </a>
  </motion.div>
</div>


          {/* =================================================
              PROFILE IMAGE
          ================================================= */}
          <div className="relative flex w-full justify-center md:w-[42%]">
            {/* Outer Glow */}
            <div className="absolute h-64 w-64 rounded-full bg-blue-500/20 blur-3xl sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <motion.img
                src={blur}
                alt="Chandrashekhar Singh Kushwaha"
                className="h-52 w-52 rounded-full border-4 border-white/10 object-cover shadow-2xl shadow-blue-500/20 ring-1 ring-blue-500/40 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Decorative ring */}
              <div className="pointer-events-none absolute -inset-3 rounded-full border border-blue-500/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}
      <section
        id="about"
        className={`scroll-mt-16 py-20 md:py-24 ${
          isDark ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>

          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p
                className={`mb-5 text-base leading-8 sm:text-lg ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I'm a <strong>Java Full Stack Developer</strong> and Computer
                Science graduate with hands-on internship experience building
                scalable web applications. My core expertise includes{" "}
                <strong>
                  Java, Spring Boot, Spring MVC, Spring Data JPA, REST APIs,
                  React.js, and SQL
                </strong>
                , along with modern technologies such as{" "}
                <strong>
                  Next.js, Tailwind CSS, Redux Toolkit, and TypeScript
                </strong>
                .
              </p>

              <p
                className={`mb-5 text-base leading-8 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                During my internships at <strong>CodewebX</strong> and{" "}
                <strong>Leopardruns Innovation & Technology</strong>, I worked
                on real-world applications including e-commerce, water-service,
                and car-rental platforms.
              </p>

              <p
                className={`mb-5 text-base leading-8 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I've also built projects such as{" "}
                <strong>AI Summarizer</strong>,{" "}
                <strong>Spring Chat</strong>, and{" "}
                <strong>Fiestagram</strong>, combining modern frontend,
                backend, database, authentication, and real-time technologies.
              </p>

              <p
                className={`text-base leading-8 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Beyond development, I enjoy solving challenging problems and
                continuously improving my problem-solving skills. I've solved{" "}
                <strong>250+ LeetCode problems</strong> and won my college's{" "}
                <strong>Codecraft Hackathon</strong>.
              </p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/chandrashekharsk"
                className="mt-6 inline-flex items-center font-semibold text-blue-500 transition-colors hover:text-cyan-400"
              >
                Visit GitHub Profile
                <FiArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}
      <section
        id="projects"
        className={`scroll-mt-16 overflow-hidden py-20 md:py-24 ${
          isDark ? "bg-slate-950" : "bg-slate-50"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>

          <motion.div
            className="flex gap-6 py-4"
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`w-72 flex-shrink-0 overflow-hidden rounded-2xl border p-4 shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isDark
                    ? "border-slate-800 bg-slate-900"
                    : "border-slate-200 bg-white"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 h-44 w-full rounded-xl object-cover"
                />

                <h3 className="mb-2 text-xl font-bold">
                  {project.title}
                </h3>

                <p
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.overview}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}
      <section
        id="skills"
        className={`scroll-mt-16 overflow-hidden py-20 md:py-24 ${
          isDark ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-5">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Skills
          </h2>

          <motion.div
            className="flex gap-6 py-4"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`flex h-32 w-32 flex-shrink-0 flex-col items-center justify-center rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isDark
                    ? "border-slate-700 bg-slate-800/60"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="mb-3 h-12 w-12 object-contain"
                />

                <p
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}
      <section
        id="contact"
        className={`scroll-mt-16 relative overflow-hidden py-20 md:py-24 ${
          isDark ? "bg-slate-950" : "bg-slate-50"
        }`}
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative container mx-auto px-5 sm:px-6">
          
          {/* Contact Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span
              className={`inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
                isDark
                  ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                  : "border-blue-200 bg-blue-50 text-blue-700"
              }`}
            >
              Let's Connect
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Contact Me
            </h2>

            <p
              className={`mt-4 text-sm leading-7 sm:text-base ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Have a project, job opportunity, or just want to connect?
              Send me a message and I'll get back to you.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            
            {/* Contact Card */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`rounded-3xl border p-5 shadow-2xl backdrop-blur-sm sm:p-8 ${
                isDark
                  ? "border-slate-800 bg-slate-900/80"
                  : "border-slate-200 bg-white"
              }`}
            >
              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="user_name"
                  className={`text-sm font-semibold ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Your Full Name
                </label>

                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your full name"
                  className={`mt-2 w-full rounded-xl border px-4 py-3.5 outline-none transition-all focus:ring-2 focus:ring-blue-500/40 ${
                    isDark
                      ? "border-slate-700 bg-slate-800 text-white placeholder:text-slate-500"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="user_email"
                  className={`flex items-center gap-2 text-sm font-semibold ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  <FiMail />
                  Your Email
                </label>

                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  required
                  placeholder="example@gmail.com"
                  className={`mt-2 w-full rounded-xl border px-4 py-3.5 outline-none transition-all focus:ring-2 focus:ring-blue-500/40 ${
                    isDark
                      ? "border-slate-700 bg-slate-800 text-white placeholder:text-slate-500"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>

              {/* Phone Number */}
              <div className="mb-5">
                <label
                  htmlFor="user_phone"
                  className={`flex items-center gap-2 text-sm font-semibold ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  <FiPhone />
                  Contact Number
                  <span className="text-xs font-normal text-slate-500">
                    (Optional)
                  </span>
                </label>

                <input
                  id="user_phone"
                  type="tel"
                  name="user_phone"
                  placeholder="+91 98765 43210"
                  pattern="[+]?[0-9\s()-]{7,20}"
                  className={`mt-2 w-full rounded-xl border px-4 py-3.5 outline-none transition-all focus:ring-2 focus:ring-blue-500/40 ${
                    isDark
                      ? "border-slate-700 bg-slate-800 text-white placeholder:text-slate-500"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  }`}
                />

                <p
                  className={`mt-2 text-xs ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Add your number if you'd prefer a phone or WhatsApp reply.
                </p>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`text-sm font-semibold ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project, opportunity, or message..."
                  className={`mt-2 w-full resize-none rounded-xl border px-4 py-3.5 outline-none transition-all focus:ring-2 focus:ring-blue-500/40 ${
                    isDark
                      ? "border-slate-700 bg-slate-800 text-white placeholder:text-slate-500"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="group flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            {/* Direct Contact */}
            <div className="mt-8 text-center">
              <p
                className={`text-sm ${
                  isDark ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Prefer direct contact?
              </p>

              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:cs9981625252@gmail.com"
                  className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                    isDark
                      ? "border-slate-700 text-slate-300 hover:border-blue-400 hover:text-blue-400"
                      : "border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  <FiMail className="mr-2" />
                  Email Me
                </a>

                <a
                  href="tel:+918103892672"
                  className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                    isDark
                      ? "border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                      : "border-slate-200 text-slate-600 hover:border-cyan-500 hover:text-cyan-600"
                  }`}
                >
                  <FiPhone className="mr-2" />
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;