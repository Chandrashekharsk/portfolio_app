import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { blur } from "../../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { projects } from "../data";
// import { Avatar } from '@mui/material';
import "./styles/home.css";
import { skills as categorizedSkills } from "../data";
import { flattenSkills } from "../../../utils/flattenSkills";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const skills = flattenSkills(categorizedSkills);

const Home = () => {
  const { theme } = useSelector((state) => state.theme);
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
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
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

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Hero Section */}
      <section
        className={`relative z-10 overflow-hidden border-b ${theme === "dark" ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"}`}
      >
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="container mx-auto px-5 sm:px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <motion.h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${theme === "dark" ? "text-white" : "text-slate-950"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Chandrashekhar Singh Kushwaha
                </span>
            </motion.h1>

            <motion.p
              className={`text-base sm:text-lg leading-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              A <strong>Java Full Stack Developer</strong> specializing in{" "}
                <strong>
                  Java, Spring Boot, JPA, Hibernate, REST APIs, and MySQL
                </strong>
                , with hands-on experience in{" "}
                <strong>
                  React.js, TypeScript, and modern web development
                </strong>
                . Strong foundation in{" "}
                <strong>OOP, DSA, SQL, and backend development</strong>,
                 focused
                on building scalable, maintainable, and efficient applications.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/projects"
                className="group flex items-center px-5 py-3 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Projects <FiArrowRight className="ml-2" />
              </Link>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/chandrashekharsk/"
                className={`flex items-center px-5 py-3 rounded-full border border-blue-500/60 ${theme === "dark" ? "text-white hover:bg-blue-500/10" : "text-blue-700 hover:bg-blue-50"} transition-all duration-300 hover:-translate-y-0.5`}
              >
                LinkedIn Profile
              </a>
              <a
                href="https://drive.google.com/file/d/1k8njR0_k-Vsr5UdQcz2-1k4szHYXvg24/view"
                download
                className={`flex items-center px-5 py-3 rounded-full border border-blue-500/60 ${theme === "dark" ? "text-white hover:bg-blue-500/10" : "text-blue-700 hover:bg-blue-50"} transition-all duration-300 hover:-translate-y-0.5`}
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <motion.img
              src={blur}
              alt="Chandrashekhar Singh Kushwaha"
              className="rounded-full w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover shadow-2xl shadow-blue-500/20 border-4 border-white/10 ring-1 ring-blue-500/40"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 md:py-24 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">About Me</h2>

  <div className="flex flex-col-reverse md:flex-row items-center gap-10">
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p
        className={`text-lg mb-4 leading-relaxed ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        I&apos;m a <strong>Java Full Stack Developer</strong> and Computer Science
        graduate with hands-on internship experience building scalable web
        applications. My core expertise includes{" "}
        <strong>
          Java, Spring Boot, Spring MVC, Spring Data JPA, REST APIs,
          React.js, and SQL
        </strong>
        , along with modern technologies such as{" "}
        <strong>Next.js, Tailwind CSS, Redux Toolkit, and TypeScript</strong>.
      </p>

      <p
        className={`text-md mb-4 leading-relaxed ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        During my internships at <strong>CodewebX</strong> and{" "}
        <strong>Leopardruns Innovation & Technology</strong>, I worked on
        real-world applications including e-commerce, water-service, and
        car-rental platforms. I developed reusable React components,
        integrated RESTful APIs, implemented{" "}
        <strong>JWT authentication, Firebase, MongoDB, and Redux</strong>,
        and improved application performance through optimized API calls
        and database queries.
      </p>

      <p
        className={`text-md mb-4 leading-relaxed ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        I&apos;ve also built projects such as{" "}
        <strong>AI Summarizer</strong>, a Spring Boot and Gemini-powered
        Chrome extension, and <strong>Spring Chat</strong>, a real-time
        communication platform using <strong>Spring Boot, React.js, and
        WebSocket</strong>. My social media project,{" "}
        <strong>Fiestagram</strong>, includes real-time chat, post sharing,
        likes, comments, and Firebase authentication for 1,000+ users.
      </p>

      <p
        className={`text-md mb-4 leading-relaxed ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Beyond development, I enjoy solving challenging problems and
        continuously improving my problem-solving skills. I&apos;ve solved{" "}
        <strong>250+ LeetCode problems</strong> and won my college&apos;s{" "}
        <strong>Codecraft Hackathon</strong>. I&apos;m particularly interested
        in building <strong>scalable backend systems, enterprise
        applications, microservices, and AI-powered solutions</strong>.
      </p>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/chandrashekharsk"
        className="inline-flex items-center mt-5 text-blue-500 font-semibold hover:text-cyan-400 transition-colors"
      >
        Visit Github Profile<FiArrowRight className="ml-2" />
      </a>
    </motion.div>
  </div>
</div>
      </section>

      {/* Project Section with Card Layout */}
      <section
        id="projects"
        className={`py-20 md:py-24 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-5 sm:px-6">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Projects
          </h2>

          <motion.div
            className="flex gap-6 py-4 px-1"
            style={{
              display: "flex",
              willChange: "transform",
            }}
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Display projects as cards */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 rounded-2xl p-4 overflow-hidden border shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundColor: theme === "dark" ? "#172033" : "#ffffff",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl mb-4"
                />
                <h3
                  className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
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

      {/* Skills Section with Smooth Circular Animation */}
      <section
        id="skills"
        className={`py-20 md:py-24 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-5 overflow-hidden">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Skills
          </h2>

          <motion.div
            className="flex gap-6 py-4 px-1"
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              willChange: "transform",
            }}
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Each skill item repeats seamlessly without any visual breaks */}
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-32 h-32 flex flex-col items-center justify-center rounded-2xl border ${theme === "dark" ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-slate-50"} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-12 h-12 mb-3 object-contain"
                />
                <p
                  className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 md:py-24 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-5 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">Contact Me</h2>
          <div className="max-w-2xl mx-auto">
            <form ref={formRef} onSubmit={handleSubmit} className={`space-y-6 rounded-3xl border p-6 sm:p-8 shadow-2xl backdrop-blur-sm ${theme === "dark" ? "border-slate-700 bg-slate-950/70" : "border-slate-200 bg-white/90"}`}>
              <div>
                <label
                  className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Your Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className={`w-full mt-2 px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${theme === "dark" ? "bg-slate-800 text-white border-slate-700 placeholder:text-slate-500" : "bg-slate-50 text-slate-900 border-slate-200 placeholder:text-slate-400"}`}
                  placeholder="Full name"
                />
              </div>

              <div>
                <label
                  className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className={`w-full mt-2 px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${theme === "dark" ? "bg-slate-800 text-white border-slate-700 placeholder:text-slate-500" : "bg-slate-50 text-slate-900 border-slate-200 placeholder:text-slate-400"}`}
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label
                  className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className={`w-full mt-2 px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${theme === "dark" ? "bg-slate-800 text-white border-slate-700 placeholder:text-slate-500" : "bg-slate-50 text-slate-900 border-slate-200 placeholder:text-slate-400"}`}
                  placeholder="Drop your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3.5 rounded-xl font-semibold shadow-lg transition-all duration-300 ${theme === "dark" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600 text-white hover:bg-blue-700"} disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {sending ? "Almost shot..." : "Shoot Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;