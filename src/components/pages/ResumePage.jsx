import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useSelector } from "react-redux";
import { resumeLink } from "../data";

const ResumePage = () => {
  const { theme } = useSelector((state) => state.theme);
  const pdfRef = useRef();

  const bgClass = theme === "dark" ? "bg-gray-800" : "bg-white";
  const textClass = theme === "dark" ? "text-gray-200" : "text-gray-600";
  const headerClass = theme === "dark" ? "text-gray-100" : "text-gray-800";
  const sectionClass = theme === "dark" ? "bg-gray-700" : "bg-gray-50";
  const linkClass = theme === "dark" ? "text-blue-400" : "text-blue-500";
  const iconColor = theme === "dark" ? "white" : "black";

  const SectionTitle = ({ children }) => (
    <h2 className={`text-lg font-bold mb-2 pb-1 border-b border-gray-400 ${headerClass}`}>
      {children}
    </h2>
  );

  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} mt-5 py-6 px-4`}>
      <a
        href={resumeLink}
        target="_blank"
        rel="noreferrer"
        aria-label="View resume PDF"
        className={`fixed bottom-16 right-10 ${theme === "dark" ? "bg-blue-700" : "bg-blue-600"} text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition z-50`}
      >
        <IoEye size={22} />
      </a>

      <PDFExport paperSize="A4" margin={[18, 18, 18, 18]} scale={0.75} ref={pdfRef}>
        <div className={`${bgClass} p-6 rounded-lg shadow-lg max-w-3xl mx-auto`}>
          <header className="text-center mb-5">
            <h1 className={`text-2xl font-bold mb-2 ${headerClass}`}>
              CHANDRASHEKHAR SINGH KUSHWAHA
            </h1>
            <div className={`flex flex-wrap justify-center gap-x-3 gap-y-1 ${textClass} text-sm`}>
              <span className="inline-flex items-center gap-1"><MdPhone style={{ color: iconColor }} /> (+91) 8103892672</span>
              <span className="inline-flex items-center gap-1"><MdEmail style={{ color: iconColor }} /> cs9981625252@gmail.com</span>
              <span className="inline-flex items-center gap-1"><HiOutlineHome style={{ color: iconColor }} /> Hyderabad, Telangana</span>
            </div>
            <div className={`flex flex-wrap justify-center gap-3 ${textClass} text-sm mt-1`}>
              <span>Portfolio: <a href="https://ichandrashekhar.vercel.app" className={`${linkClass} hover:underline`} target="_blank" rel="noreferrer">ichandrashekhar.vercel.app</a></span>
              <span><FaLinkedin className="inline" style={{ color: iconColor }} /> <a href="https://linkedin.com/in/chandrashekharsk" className={`${linkClass} hover:underline`} target="_blank" rel="noreferrer">LinkedIn</a></span>
              <span><FaGithub className="inline" style={{ color: iconColor }} /> <a href="https://github.com/Chandrashekharsk" className={`${linkClass} hover:underline`} target="_blank" rel="noreferrer">GitHub</a></span>
            </div>
          </header>

          <section className="mb-4">
            <SectionTitle>Professional Summary</SectionTitle>
            <p className={`text-sm ${textClass}`}>
              I am B.Tech graduate and Java Developer with 6 months of professional full-stack java developer experience and additional internship experience. Skilled in Java, Spring Boot, REST APIs, React.js, SQL, and object-oriented programming, with hands-on experience in application development, API integration, database operations, and responsive user interfaces. Strong foundation in data structures, algorithms, and software development practices.
            </p>
          </section>

          <section className="mb-4">
            <SectionTitle>Skills</SectionTitle>
            <div className={`text-sm ${textClass} space-y-1`}>
              <p><strong className={headerClass}>Languages:</strong> Java, JavaScript, TypeScript, SQL</p>
              <p><strong className={headerClass}>Frontend:</strong> React.js, Next.js, HTML, CSS, Tailwind CSS, Redux Toolkit</p>
              <p><strong className={headerClass}>Backend &amp; Frameworks:</strong> Spring Boot, Spring MVC, Spring Security, Hibernate/JPA, REST APIs, JWT, JDBC, WebSocket</p>
              <p><strong className={headerClass}>Tools &amp; Testing:</strong> Maven, Gradle, JUnit, Mockito, Postman, Git, GitHub, Docker, Linux</p>
              <p><strong className={headerClass}>Databases &amp; Cloud:</strong> MySQL, MongoDB, Redis, Firebase, AWS (basics)</p>
              <p><strong className={headerClass}>Core Concepts:</strong> OOP, Data Structures &amp; Algorithms, Collections Framework, Multithreading, Exception Handling, System Design Basics</p>
            </div>
          </section>

          <section className="mb-4">
            <SectionTitle>Education</SectionTitle>
            <div className={`text-sm ${textClass} space-y-2`}>
              <div className="flex justify-between gap-3"><div><strong className={headerClass}>Bachelor of Technology — Computer Science Engineering</strong><p>RGPV University | 7.5 CGPA</p></div><span className="shrink-0">2026</span></div>
              <div className="flex justify-between gap-3"><div><strong className={headerClass}>Class XII</strong><p>Govt. Gyanodaya Vidyalaya S.C. Excellence H.S. School | 81%</p></div><span className="shrink-0">2022</span></div>
              <div className="flex justify-between gap-3"><div><strong className={headerClass}>Class X</strong><p>Govt. Gyanodaya Vidyalaya S.C. Excellence H.S. School | 95%</p></div><span className="shrink-0">2020</span></div>
            </div>
          </section>

          <section className="mb-4">
            <SectionTitle>Professional Work Experience</SectionTitle>
            <div className="mb-3">
              <div className="flex justify-between gap-3">
                <h3 className={`font-semibold ${headerClass}`}>Full Stack Java Developer — CodewebX</h3>
                <span className={`text-sm ${textClass} shrink-0`}>6 Months</span>
              </div>
              <p className={`text-sm ${textClass}`}><strong>Projects:</strong> GoNeer, Hello11</p>
              <ul className={`list-disc ml-5 text-sm ${textClass} mt-1 space-y-1`}>
                <li>Developed full-stack application features using React.js, REST API integrations, authentication, Firebase, and database technologies, focusing on reusable and maintainable code.</li>
                <li>Implemented application functionality, frontend state management, and API integrations to support reliable data flow and improve application usability.</li>
                <li>Used Git/GitHub for version control and Postman for API testing while collaborating on application development tasks.</li>
              </ul>
            </div>
          </section>

          <section className="mb-4">
            <SectionTitle>Internship Experience</SectionTitle>
            <div>
              <div className="flex justify-between gap-3">
                <h3 className={`font-semibold ${headerClass}`}>Jr. Software Developer Intern — Leopardruns Innovation &amp; Technology</h3>
                <span className={`text-sm ${textClass} shrink-0`}>1.5 Months</span>
              </div>
              <p className={`text-sm ${textClass}`}><strong>Project:</strong> E-commerce</p>
              <ul className={`list-disc ml-5 text-sm ${textClass} mt-1 space-y-1`}>
                <li>Developed and optimized 5+ reusable React.js components, improving UI reusability and frontend performance through lazy loading and debouncing.</li>
                <li>Refactored API data-fetching logic, reducing fetch time by 30%, and implemented Redux for scalable state management.</li>
              </ul>
            </div>
          </section>

          <section className="mb-4">
            <SectionTitle>Projects</SectionTitle>
            <div className={`${sectionClass} p-3 rounded-lg mb-3`}>
              <h3 className={`font-semibold ${headerClass}`}>FIESTAGRAM — Social Media Application</h3>
              <p className={`text-sm ${textClass}`}>Live: <a href="https://fiestagram.vercel.app" className={`${linkClass} hover:underline`} target="_blank" rel="noreferrer">fiestagram.vercel.app</a></p>
              <ul className={`list-disc ml-5 text-sm ${textClass} mt-1 space-y-1`}>
                <li>Developed media features including real-time chat, post sharing, likes, and comments.</li>
                <li>Implemented Firebase Authentication for 1,000+ users and backend APIs for data persistence.</li>
              </ul>
            </div>
            <div className={`${sectionClass} p-3 rounded-lg`}>
              <h3 className={`font-semibold ${headerClass}`}>AI-POWERED SUMMARIZER — Chrome Extension</h3>
              <p className={`text-sm ${textClass}`}>GitHub: <a href="https://github.com/Chandrashekharsk/ai_chrome_extension" className={`${linkClass} hover:underline`} target="_blank" rel="noreferrer">ai_chrome_extension</a></p>
              <ul className={`list-disc ml-5 text-sm ${textClass} mt-1 space-y-1`}>
                <li>Built RESTful APIs for secure communication between the Chrome extension and backend services.</li>
                <li>Implemented persistent storage for generated summaries, enabling users to access previously summarized content.</li>
              </ul>
            </div>
          </section>

          <section>
            <SectionTitle>Certifications &amp; Achievements</SectionTitle>
            <p className={`text-sm ${textClass}`}>
              Spring Boot Development — IBM (Coursera) • Full-Stack Web Development — Coursera • Codecraft Hackathon — Winner • LeetCode — 250+ Problems Solved
            </p>
          </section>
        </div>
      </PDFExport>
    </div>
  );
};

export default ResumePage;
