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

      <button
        className={`fixed bottom-16 right-10 ${theme === "dark" ? "bg-blue-700" : "bg-blue-600"
          } text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition flex items-center gap-2`}
      >
        <a href="https://drive.google.com/file/d/1THu0kZ0ymf-bjOTrVLmQEPY02GfuepfH/view" target="_blank">
        <IoEye />
        </a>
      </button>

      <PDFExport
        paperSize="Legal"
        margin={[20, 15, 20, 15]}
        scale={0.7}
        ref={pdfRef}
      >
        <div className={`${bgClass} p-6 rounded-lg shadow-lg max-w-2xl mx-auto`}>
          <header className="text-center mb-4">
            <h1 className={`${headerClass} text-2xl font-bold mb-2`}>Chandrashekhar Singh Kushwaha</h1>
            <div className={`flex flex-wrap justify-center gap-3 ${textClass} text-sm`}>
              <div className="flex items-center gap-2"><MdEmail style={{ color: iconColor }} /><span>cs9981625252@gmail.com</span></div>
              <div className="flex items-center gap-2"><FaLinkedin style={{ color: iconColor }} /><a href="https://linkedin.com/in/chandrashekharsk" className={`${linkClass} hover:underline`} target="_blank">linkedin.com/in/chandrashekharsk</a></div>
              <div className="flex items-center gap-2"><FaGithub style={{ color: iconColor }} /><a href="https://github.com/Chandrashekharsk" className={`${linkClass} hover:underline`} target="_blank">github.com/Chandrashekharsk</a></div>
              <div className="flex items-center gap-2"><HiOutlineGlobeAlt style={{ color: iconColor }} /><a href="https://portfolio-app-chandrashekhars-projects-d80f3903.vercel.app/" className={`${linkClass} hover:underline`} target="_blank">Portfolio</a></div>
            </div>
          </header>

          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Summary</h2>
            <p className={`text-sm ${textClass}`}>
              Motivated and skilled software developer with strong problem-solving abilities, hands-on project experience, and a passion for building scalable, real-world applications.
            </p>
          </section>

          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Experience</h2>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>Jr. Software Developer – Leopardruns Innovation & Technology</h3>
              <p className={`text-sm ${textClass}`}>Bhopal, M.P.</p>
              <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                <li>Developed and optimized 5+ reusable React components, enhancing UI performance.</li>
                <li>Refactored API calls, reducing data fetch time by 30% and improving app efficiency.</li>
                <li>Implemented Redux state management, making the app more scalable.</li>
              </ul>
            </div>
          </section>

          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Key Achievements</h2>
            <ul className={`list-disc ml-4 text-sm ${textClass}`}>
              <li>Solved 150+ questions on LeetCode.</li>
              <li>Won the Codecraft Hackathon (MATRIM-2025) organized by college.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Projects</h2>
            <div className="space-y-2">
              {[
                {
                  title: "FIESTAGRAM",
                  desc: "A social media application with real-time chat, likes, comments, and Firebase Auth.",
                  points: ["Used Cloudinary for optimized image storage.", "Boosted interaction efficiency by 50%."]
                },
                {
                  title: "AI SUMMARIZER",
                  desc: "Chrome extension that summarizes webpage text using Spring Boot and Gemini API.",
                  points: ["Improved summary speed by 60%.", "Persistent summary access across pages."]
                },
                {
                  title: "SPRING CHAT",
                  desc: "Real-time chat app using Spring Boot + React + WebSockets.",
                  points: ["Supports room creation and instant messaging.", "Enhances user communication."]
                },
                {
                  title: "BITLINKS",
                  desc: "A URL shortener app with custom aliasing and analytics.",
                  points: ["Handled 2,000+ links using Next.js and Node.js.", "Improved SEO and load speed."]
                },
              ].map(({ title, desc, points }) => (
                <div className={`${sectionClass} p-4 rounded-lg shadow transition`} key={title}>
                  <h3 className={`text-base font-semibold ${headerClass}`}>{title}</h3>
                  <p className={`text-sm ${textClass}`}>{desc}</p>
                  <ul className={`list-disc ml-4 text-sm ${textClass}`}>{points.map(p => <li key={p}>{p}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>

          <section className="my-2">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Technical Skills</h2>
            <p className={`text-sm ${textClass}`}>
              C/C++, Java, JavaScript, Python, HTML, CSS, TypeScript, SQL, Data Structures, OOP, Spring Boot, React, Next.js, Node.js, Express.js, MySQL, MongoDB, REST APIs, GitHub, Postman, Docker, SEO, WebSockets
            </p>
          </section>

          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Education</h2>
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
