import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi";
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
        <a href="https://drive.google.com/file/d/1ujHxZ5vqgDxx0GRikppGxUH7Q90fkShB/view?usp=sharing" target="_blank" rel="noreferrer">
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
                <MdEmail style={{ color: iconColor }} />
                <span>cs9981625252@gmail.com</span>
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
                <a href="https://portfolio-app-chandrashekhars-projects-d80f3903.vercel.app/" className={`${linkClass} hover:underline`} target="_blank">Portfolio</a>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Summary</h2>
            <p className={`text-sm ${textClass}`}>
              Motivated and skilled software developer with strong problem-solving abilities, 
              hands-on project experience, and a passion for building scalable, real-world applications.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Experience</h2>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>
                Jr. Software Developer – Leopardruns Innovation & Technology
              </h3>
              <p className={`text-sm ${textClass}`}>Bhopal, M.P.</p>
              <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                <li>Developed and optimized 5+ reusable React components, enhancing UI performance.</li>
                <li>Refactored API calls, reducing data fetch time by 30% and improving app efficiency.</li>
                <li>Implemented Redux state management, making the app more scalable.</li>
              </ul>
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Key Achievements</h2>
            <ul className={`list-disc ml-4 text-sm ${textClass}`}>
              <li>Solved 150+ problems on LeetCode.</li>
              <li>Won Codecraft Hackathon (MATRIM-2025) at college level.</li>
            </ul>
          </section>

          {/* Projects */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Projects</h2>
            <div className="space-y-3">
              {[
                {
                  title: "Fiestagram",
                  desc: "A social media app with chat, likes, comments, and Firebase Auth.",
                  points: [
                    "Reduced interaction delays by 50% with real-time chat and posts.",
                    "Secured authentication for 1,000+ users using Firebase.",
                    "Integrated Cloudinary for optimized image storage."
                  ]
                },
                {
                  title: "AI Summarizer",
                  desc: "Chrome extension for webpage text summarization using Spring Boot + Gemini API.",
                  points: [
                    "Improved summary speed by 60%.",
                    "Provided persistent summary access across pages."
                  ]
                },
                {
                  title: "Spring Chat",
                  desc: "Real-time chat app using Spring Boot + React + WebSockets.",
                  points: [
                    "Enabled room creation and instant messaging.",
                    "Enhanced user communication experience."
                  ]
                },
                {
                  title: "BitLinks",
                  desc: "Full-stack URL shortener with custom aliases & analytics.",
                  points: [
                    "Handled 2,000+ links with Next.js + Node.js.",
                    "Improved SEO and page load speed."
                  ]
                }
              ].map(({ title, desc, points }) => (
                <div className={`${sectionClass} p-4 rounded-lg shadow`} key={title}>
                  <h3 className={`text-base font-semibold ${headerClass}`}>{title}</h3>
                  <p className={`text-sm ${textClass}`}>{desc}</p>
                  <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                    {points.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Technical Skills</h2>
            <p className={`text-sm ${textClass}`}>
              C/C++, Java, HTML, CSS, JavaScript, SQL, Data Structures & Algorithms, OOP, 
              Spring Boot, React, Next.js, Node.js, Express.js, MySQL, MongoDB, REST APIs, 
              GitHub, Postman, SEO, WebSockets
            </p>
          </section>

          {/* Education */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-2 ${headerClass}`}>Education</h2>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>B.Tech in Computer Science & Engineering</h3>
              <p className={`text-sm ${textClass}`}>Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, M.P. | 7 CGPA (2022–2026)</p>
            </div>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>Higher Secondary Education</h3>
              <p className={`text-sm ${textClass}`}>Govt. Gyanodaya Vidhyalaya S.C. Excellence H.S. School, Rewa, M.P. | 81% (2020–2022)</p>
            </div>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>Secondary Education</h3>
              <p className={`text-sm ${textClass}`}>Govt. Gyanodaya Vidhyalaya S.C. Excellence H.S. School, Rewa, M.P. | 94.75% (2018–2020)</p>
            </div>
          </section>

        </div>
      </PDFExport>
    </div>
  );
};

export default ResumePage;
