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
          href="https://drive.google.com/file/d/1ujHxZ5vqgDxx0GRikppGxUH7Q90fkShB/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <IoEye />
        </a>
      </button>

      <PDFExport paperSize="Legal" margin={[20, 15, 20, 15]} scale={0.7} ref={pdfRef}>
        <div className={`${bgClass} p-6 rounded-lg shadow-lg max-w-2xl mx-auto`}>

          {/* Header Section */}
          <header className="text-center mb-4">
            <h1 className={`${headerClass} text-2xl font-bold mb-2`}>
              Chandrashekhar Singh Kushwaha
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
              Motivated and skilled software developer with strong problem-solving abilities, hands-on project experience,
              and a passion for building scalable, real-world applications.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Experience</h2>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>
                Jr. Software Developer Intern – Leopardruns Innovation & Technology
              </h3>
              <p className={`text-sm ${textClass}`}>Bhopal, M.P. | E-commerce Project</p>
              <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                <li>Developed and optimized 5+ reusable React components, enhancing UI performance.</li>
                <li>Refactored API calls, reducing data fetch time by 30% and improving app efficiency.</li>
                <li>Implemented Redux state management, making the app more scalable.</li>
              </ul>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Key Achievements</h2>
            <ul className={`list-disc ml-4 text-sm ${textClass}`}>
              <li>Solved 250+ questions on LeetCode.</li>
              <li>Won the Codecraft Hackathon organized by college (MATRIM-2025).</li>
            </ul>
          </section>

          {/* Projects */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Projects</h2>
            <div className="space-y-3">
              {[
                {
                  title: "Fiestagram – Social Media Application",
                  desc: "A social media application with real-time chat, posts, and Firebase authentication.",
                  points: [
                    "Implemented real-time chat and post-sharing with likes & comments, reducing delays by 50%.",
                    "Secured authentication for 1,000+ users using Firebase Auth.",
                    "Integrated Cloudinary for image storage and optimization."
                  ]
                },
                {
                  title: "AI Summarizer – Chrome Extension",
                  desc: "Webpage text summarization tool powered by Spring Boot and Gemini API.",
                  points: [
                    "Improved summary speed by 60% and enabled persistent summary access.",
                    "Enhanced reading experience by simplifying long content instantly."
                  ]
                },
                {
                  title: "Smart Food – Recipe Showcase App",
                  desc: "A MERN full-stack recipe app for creating, updating, and bookmarking recipes.",
                  points: [
                    "Implemented authentication, recipe management, and profile editing.",
                    "Added like and bookmark features for enhanced user engagement."
                  ]
                },
                {
                  title: "BitLinks – Free URL Shortener",
                  desc: "Full-stack URL shortener app with analytics and custom aliases.",
                  points: [
                    "Handled 2,000+ shortened links using Next.js and Node.js.",
                    "Improved SEO and reduced redirect latency."
                  ]
                }
              ].map(({ title, desc, points }) => (
                <div className={`${sectionClass} p-4 rounded-lg shadow`} key={title}>
                  <h3 className={`text-base font-semibold ${headerClass}`}>{title}</h3>
                  <p className={`text-sm ${textClass}`}>{desc}</p>
                  <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                    {points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Technical Skills</h2>
            <p className={`text-sm ${textClass}`}>
              Java, C/C++, HTML, CSS, JavaScript, SQL, Data Structures & Algorithms, OOP, Spring Boot, React, Next.js,
              Node.js, Express.js, MySQL, MongoDB, REST APIs, GitHub, Postman, SEO, Docker, WebSockets
            </p>
          </section>

          {/* Education */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Education</h2>

            {/* Chronological Order */}
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>Secondary Education (X)</h3>
              <p className={`text-sm ${textClass}`}>
                Govt. Gyanodaya Vidhyalaya S.C. Excellence H.S. School, Rewa, M.P. | 94.75% (2019–2020)
              </p>
            </div>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>Higher Secondary Education (XII)</h3>
              <p className={`text-sm ${textClass}`}>
                Govt. Gyanodaya Vidhyalaya S.C. Excellence H.S. School, Rewa, M.P. | 81% (2021–2022)
              </p>
            </div>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>B.Tech in Computer Science & Engineering</h3>
              <p className={`text-sm ${textClass}`}>
                Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, M.P. | 7.3 CGPA (2022–2026)
              </p>
            </div>
          </section>

        </div>
      </PDFExport>
    </div>
  );
};

export default ResumePage;
