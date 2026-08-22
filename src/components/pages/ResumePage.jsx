import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { HiOutlineGlobeAlt, HiOutlineHome } from "react-icons/hi";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useSelector } from "react-redux";

const ResumePage = () => {
  const { theme } = useSelector((state) => state.theme);
  const pdfRef = useRef();

  const bgClass = theme === "dark" ? "bg-gray-800" : "bg-white";
  const textClass = theme === "dark" ? "text-gray-200" : "text-gray-600";
  const headerClass = theme === "dark" ? "text-gray-100" : "text-gray-800";
  const sectionClass = theme === "dark" ? "bg-gray-700" : "bg-gray-50";
  const linkClass = theme === "dark" ? "text-blue-400" : "text-blue-500";
  const iconColor = theme === "dark" ? "white" : "black";

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      } mt-5 py-6 px-4`}
    >
      {/* Floating Resume View Button */}
      <button
        className={`fixed bottom-16 right-10 ${
          theme === "dark" ? "bg-blue-700" : "bg-blue-600"
        } text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition flex items-center gap-2 z-50`}
      >
        <a
          href="https://drive.google.com/file/d/1k8njR0_k-Vsr5UdQcz2-1k4szHYXvg24/view"
          target="_blank"
          rel="noreferrer"
        >
          <IoEye size={22} />
        </a>
      </button>

      <PDFExport
        paperSize="Legal"
        margin={[20, 15, 20, 15]}
        scale={0.7}
        ref={pdfRef}
      >
        <div
          className={`${bgClass} p-6 rounded-lg shadow-lg max-w-2xl mx-auto`}
        >
          {/* ================= HEADER ================= */}
          <header className="text-center mb-5">
            <h1
              className={`${headerClass} text-2xl font-bold mb-2`}
            >
              CHANDRASHEKHAR SINGH KUSHWAHA
            </h1>

            <div
              className={`flex flex-wrap justify-center gap-3 ${textClass} text-sm`}
            >
              <div className="flex items-center gap-2">
                <MdPhone style={{ color: iconColor }} />
                <span>(+91) 8103892672</span>
              </div>

              <div className="flex items-center gap-2">
                <MdEmail style={{ color: iconColor }} />
                <span>cs9981625252@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <HiOutlineHome style={{ color: iconColor }} />
                <span>Secunderabad, Hyderabad, Telangana</span>
              </div>

              <div className="flex items-center gap-2">
                <FaLinkedin style={{ color: iconColor }} />
                <a
                  href="https://linkedin.com/in/chandrashekharsk"
                  className={`${linkClass} hover:underline`}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaGithub style={{ color: iconColor }} />
                <a
                  href="https://github.com/Chandrashekharsk"
                  className={`${linkClass} hover:underline`}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-2">
                <HiOutlineGlobeAlt style={{ color: iconColor }} />
                <a
                  href="https://ichandrashekhar.vercel.app"
                  className={`${linkClass} hover:underline`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </header>

          {/* ================= OBJECTIVE ================= */}
          <section className="mb-4">
            <h2
              className={`text-lg font-semibold mb-2 ${headerClass}`}
            >
              Objective
            </h2>

            <p className={`text-sm ${textClass}`}>
              Java Full Stack Developer with internship experience in
              building scalable web applications. Strong foundation in
              Core Java, Object-Oriented Programming, Spring Boot,
              RESTful APIs, SQL, React.js, and modern web technologies.
              Passionate about building enterprise-grade applications.
            </p>
          </section>

          {/* ================= TECHNICAL SKILLS ================= */}
          <section className="mb-4">
            <h2
              className={`text-lg font-semibold mb-2 ${headerClass}`}
            >
              Technical Skills
            </h2>

            <div className={`text-sm ${textClass} space-y-1`}>
              <p>
                <strong className={headerClass}>Languages:</strong>{" "}
                Java, JavaScript (ES6+), TypeScript, SQL
              </p>

              <p>
                <strong className={headerClass}>Frontend:</strong>{" "}
                HTML5, CSS3, React.js, Next.js, Tailwind CSS,
                Bootstrap, Redux Toolkit
              </p>

              <p>
                <strong className={headerClass}>Backend:</strong>{" "}
                Spring Boot, Spring MVC, Spring Data JPA, Hibernate,
                JWT Authentication, REST APIs, JDBC
              </p>

              <p>
                <strong className={headerClass}>Databases:</strong>{" "}
                MongoDB, MySQL, PostgreSQL
              </p>

              <p>
                <strong className={headerClass}>Others:</strong>{" "}
                DSA, OOP, Git, GitHub, Linux, Postman, Docker,
                MVC Architecture, Microservices, Collection Frameworks
              </p>
            </div>
          </section>

          {/* ================= INTERNSHIP ================= */}
          <section className="mb-4">
            <h2
              className={`text-lg font-semibold mb-2 ${headerClass}`}
            >
              Internship
            </h2>

            {/* CodewebX */}
            <div className="mb-4">
              <h3
                className={`text-base font-semibold ${headerClass}`}
              >
                Full Stack Developer Intern @ CodewebX — 3 Months
              </h3>

              <p className={`text-sm font-medium ${textClass}`}>
                Projects: GoNeer — Water Service E-Commerce Platform,
                Hello 11 — Car Renting & Riding Application
              </p>

              <ul
                className={`list-disc ml-5 text-sm ${textClass} mt-1`}
              >
                <li>
                  Developed and maintained scalable full-stack
                  applications with optimized frontend architecture
                  and reusable React components.
                </li>

                <li>
                  Designed and integrated RESTful APIs, implementing
                  JWT authentication, Firebase integration, and
                  efficient MongoDB data models.
                </li>

                <li>
                  Improved application performance through query
                  optimization, structured state management, and
                  clean backend architecture practices.
                </li>
              </ul>
            </div>

            {/* Leopardruns */}
            <div>
              <h3
                className={`text-base font-semibold ${headerClass}`}
              >
                Jr. Software Developer Intern @ Leopardruns Innovation
                & Technology — 1.5 Months
              </h3>

              <p className={`text-sm font-medium ${textClass}`}>
                Project: E-Commerce Application
              </p>

              <ul
                className={`list-disc ml-5 text-sm ${textClass} mt-1`}
              >
                <li>
                  Developed and optimized 5+ reusable React
                  components, enhancing UI performance.
                </li>

                <li>
                  Refactored API calls, reducing data fetch time by
                  30% and improving application efficiency.
                </li>

                <li>
                  Implemented Redux state management, making the
                  application more scalable.
                </li>
              </ul>
            </div>
          </section>

          {/* ================= PROJECTS ================= */}
          <section className="mb-4">
            <h2
              className={`text-lg font-semibold mb-2 ${headerClass}`}
            >
              Projects
            </h2>

            {/* AI SUMMARIZER */}
            <div
              className={`${sectionClass} p-4 rounded-lg shadow mb-3`}
            >
              <h3
                className={`text-base font-semibold ${headerClass}`}
              >
                AI SUMMARIZER – AI Powered Chrome Extension
              </h3>

              <p className={`text-sm ${textClass} mb-1`}>
                A Chrome Extension that generates AI-powered summaries
                of selected webpage content using Spring Boot and
                Gemini API.
              </p>

              <ul
                className={`list-disc ml-5 text-sm ${textClass}`}
              >
                <li>
                  Designed and implemented RESTful APIs for secure
                  communication between the browser extension and
                  backend services, enabling fast and reliable summary
                  generation.
                </li>

                <li>
                  Implemented persistent storage for generated
                  summaries, allowing users to access previously
                  summarized content while improving productivity and
                  reading efficiency.
                </li>
              </ul>
            </div>

            {/* SPRING CHAT */}
            <div
              className={`${sectionClass} p-4 rounded-lg shadow mb-3`}
            >
              <h3
                className={`text-base font-semibold ${headerClass}`}
              >
                SPRING CHAT – Real-Time Chat Application
              </h3>

              <p className={`text-sm ${textClass} mb-1`}>
                A real-time communication platform enabling users to
                create and join chat rooms for seamless instant
                messaging.
              </p>

              <ul
                className={`list-disc ml-5 text-sm ${textClass}`}
              >
                <li>
                  Developed a chat application using Spring Boot,
                  React.js, and WebSocket, enabling users to create
                  and join multiple chat rooms with instant message
                  synchronization.
                </li>

                <li>
                  Implemented WebSocket-based bidirectional
                  communication, providing low-latency messaging and
                  a responsive real-time user experience.
                </li>

                <li>
                  Designed scalable backend services and a responsive
                  React interface, ensuring reliable communication
                  and efficient handling of multiple concurrent
                  users.
                </li>
              </ul>
            </div>

            {/* FIESTAGRAM */}
            <div
              className={`${sectionClass} p-4 rounded-lg shadow`}
            >
              <h3
                className={`text-base font-semibold ${headerClass}`}
              >
                FIESTAGRAM – Social Media Application
              </h3>

              <p className={`text-sm ${textClass} mb-1`}>
                A social media application developed with various
                interactive features.
              </p>

              <ul
                className={`list-disc ml-5 text-sm ${textClass}`}
              >
                <li>
                  Implemented real-time chat and post-sharing with
                  interactive features like likes and comments,
                  reducing interaction delays by 50%.
                </li>

                <li>
                  Secured authentication for 1,000+ users using
                  Firebase Auth, ensuring data protection.
                </li>
              </ul>
            </div>
          </section>

          {/* ================= EDUCATION ================= */}
          <section className="mb-4">
            <h2
              className={`text-lg font-semibold mb-2 ${headerClass}`}
            >
              Education
            </h2>

            <div className={`text-sm ${textClass} space-y-1`}>
              <p>
                <strong className={headerClass}>
                  B.Tech – Computer Science Engineering
                </strong>{" "}
                — RGPV University, Bhopal | 7.5 CGPA | 2026
              </p>

              <p>
                <strong className={headerClass}>
                  XII – Madhya Pradesh Board of Secondary Education
                </strong>{" "}
                | 81.00% | 2022
              </p>

              <p>
                <strong className={headerClass}>
                  X – Madhya Pradesh Board of Secondary Education
                </strong>{" "}
                | 94.75% | 2020
              </p>
            </div>
          </section>

          {/* ================= CERTIFICATIONS ================= */}
          <section>
            <h2
              className={`text-lg font-semibold mb-2 ${headerClass}`}
            >
              Certifications & Achievements
            </h2>

            <ul
              className={`list-disc ml-5 text-sm ${textClass}`}
            >
              <li>Spring Boot – IBM</li>
              <li>Learn Java – IBM</li>
              <li>
                Coding Hackathon Success – Won Codecraft Hackathon
                organized by college
              </li>
              <li>
                LeetCode Problem Solver – Solved 250+ LeetCode
                problems
              </li>
              <li>
                Smart India Hackathon 2025 – Internal Hackathon
                Certificate
              </li>
              <li>
                Full-Stack Web Development and Backend Development –
                Coursera
              </li>
            </ul>
          </section>
        </div>
      </PDFExport>
    </div>
  );
};

export default ResumePage;