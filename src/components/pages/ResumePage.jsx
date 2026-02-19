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
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} mt-5 py-6 px-4`}>

      {/* Floating Resume View Button */}
      <button
        className={`fixed bottom-16 right-10 ${theme === "dark" ? "bg-blue-700" : "bg-blue-600"} 
          text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition flex items-center gap-2`}
      >
        <a
          href="https://drive.google.com/file/d/1qWbpYSauH-YFIXBq16_kvfxo_cYcz6pf/view"
          target="_blank"
          rel="noreferrer"
        >
          <IoEye />
        </a>
      </button>

      <PDFExport paperSize="Legal" margin={[20, 15, 20, 15]} scale={0.7} ref={pdfRef}>
        <div className={`${bgClass} p-6 rounded-lg shadow-lg max-w-2xl mx-auto`}>

          {/* Header */}
          <header className="text-center mb-4">
            <h1 className={`${headerClass} text-2xl font-bold mb-2`}>
              CHANDRASHEKHAR SINGH KUSHWAHA
            </h1>
            <div className={`flex flex-wrap justify-center gap-3 ${textClass} text-sm`}>
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
                <span>Jahangirabad, Bhopal, M.P.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin style={{ color: iconColor }} />
                <a href="https://linkedin.com/in/chandrashekharsk" className={`${linkClass} hover:underline`} target="_blank">LinkedIn</a>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub style={{ color: iconColor }} />
                <a href="https://github.com/Chandrashekharsk" className={`${linkClass} hover:underline`} target="_blank">GitHub</a>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineGlobeAlt style={{ color: iconColor }} />
                <a href="https://ichandrashekhar.vercel.app" className={`${linkClass} hover:underline`} target="_blank">Portfolio</a>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Summary</h2>
            <p className={`text-sm ${textClass}`}>
              Motivated Software Developer with hands-on experience building scalable full-stack 
              applications using MongoDB, Express.js, React, and Node.js. Seeking opportunities 
              to contribute to high-impact projects while improving system design, performance 
              optimization, and backend architecture skills.
            </p>
          </section>

          {/* Internship */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Internship</h2>

            <div className="mb-3">
              <h3 className={`text-base font-semibold ${headerClass}`}>
                Full Stack Developer Intern – CodewebX (45 Days)
              </h3>
              <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                <li>Developed scalable MERN stack applications with reusable React components.</li>
                <li>Designed REST APIs using Node.js & Express with JWT authentication and Firebase integration.</li>
                <li>Improved performance through query optimization and structured backend architecture.</li>
              </ul>
            </div>

            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>
                Jr. Software Developer Intern – Leopardruns Innovation & Technology (45 Days)
              </h3>
              <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                <li>Developed and optimized 5+ reusable React components.</li>
                <li>Reduced API fetch time by 30% via refactoring.</li>
                <li>Implemented Redux state management for scalability.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Projects</h2>

            <div className={`${sectionClass} p-4 rounded-lg shadow mb-3`}>
              <h3 className={`text-base font-semibold ${headerClass}`}>
                Civic Reporting System – Smart Complaint Platform
              </h3>
              <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                <li>Built complaint submission & tracking system for civic issues.</li>
                <li>Automated department assignment & priority classification.</li>
                <li>Implemented real-time tracking via unique report IDs.</li>
              </ul>
            </div>

            <div className={`${sectionClass} p-4 rounded-lg shadow mb-3`}>
              <h3 className={`text-base font-semibold ${headerClass}`}>
                Fiestagram – Social Media Application
              </h3>
              <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                <li>Implemented real-time chat and post interactions.</li>
                <li>Secured 1,000+ users with Firebase Auth.</li>
                <li>Integrated Cloudinary for optimized image storage.</li>
              </ul>
            </div>

            <div className={`${sectionClass} p-4 rounded-lg shadow`}>
              <h3 className={`text-base font-semibold ${headerClass}`}>
                BitLinks – Free URL Shortener
              </h3>
              <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                <li>Handled 2,000+ shortened links with custom aliases.</li>
                <li>Built using Next.js & Node.js improving SEO and performance.</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Skills</h2>
            <p className={`text-sm ${textClass}`}>
              C++, JavaScript, Java, HTML, CSS, TypeScript, OOP, Data Structures & Algorithms, 
              SQL, React, Next.js, Node.js, Express.js, Spring Boot, MySQL, MongoDB, REST APIs, 
              GitHub, Postman, Docker
            </p>
          </section>

          {/* Achievements */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Achievements</h2>
            <ul className={`list-disc ml-4 text-sm ${textClass}`}>
              <li>Won Codecraft Hackathon organized by college.</li>
              <li>Solved 250+ LeetCode problems.</li>
            </ul>
          </section>

          {/* Certification */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Certifications</h2>
            <ul className={`list-disc ml-4 text-sm ${textClass}`}>
              <li>Smart India Hackathon 2025 – Internal Hackathon Certificate</li>
              <li>Full-Stack Web Development & Backend Development – Coursera</li>
              <li>Spring Boot – IBM</li>
            </ul>
          </section>

          {/* Education */}
          <section>
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Education</h2>
            <p className={`text-sm ${textClass}`}>
              B.Tech – Computer Science Engineering, RGPV Bhopal (2022–2026) | 7.3 CGPA
            </p>
            <p className={`text-sm ${textClass}`}>
              XII – MP Board | 81% (2021–2022)
            </p>
            <p className={`text-sm ${textClass}`}>
              X – MP Board | 94.75% (2019–2020)
            </p>
          </section>

        </div>
      </PDFExport>
    </div>
  );
};

export default ResumePage;
