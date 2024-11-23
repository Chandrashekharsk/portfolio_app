import React, { useRef } from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useSelector } from "react-redux";

const ResumePage = () => {
  const { theme } = useSelector((state) => state.theme); // Get theme value from Redux state
  const pdfRef = useRef();

  const handleDownload = () => {
    if (pdfRef.current) {
      pdfRef.current.save();
    }
  };

  // Define conditional classes based on the theme
  const bgClass = theme === "dark" ? "bg-gray-800" : "bg-white";
  const textClass = theme === "dark" ? "text-gray-200" : "text-gray-600";
  const headerClass = theme === "dark" ? "text-gray-100" : "text-gray-800";
  const sectionClass = theme === "dark" ? "bg-gray-700" : "bg-gray-50";
  const linkClass = theme === "dark" ? "text-blue-400" : "text-blue-500";

  // Explicit color for icons based on theme
  const iconColor = theme === "dark" ? "white" : "black";

  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} mt-5 py-6 px-4`}>
      {/* Floating Download Button */}
      <button
        onClick={handleDownload}
        className={`fixed bottom-5 right-7 ${theme === "dark" ? "bg-green-700" : "bg-green-600"
          } text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-800 transition flex items-center gap-2`}
      >
        <FaDownload />
        <span className="hidden md:block">Download Resume</span>
      </button>

      {/* PDF Export */}
      <PDFExport
        paperSize="Legal"
        margin={[20, 15, 20, 15]} // Increased margins for better spacing
        scale={0.7} // Slightly scale down content for better fit
        ref={pdfRef}
      >
        {/* Resume Content */}
        <div className={`${bgClass} p-6 rounded-lg shadow-lg max-w-2xl mx-auto`}>
          {/* Header */}
          <header className="text-center mb-4">
            <h1 className={`${headerClass} text-2xl font-bold mb-2`}>Chandrashekhar Singh Kushwaha</h1>
            <div className={`flex flex-wrap justify-center gap-3 ${textClass} text-sm`}>
              <div className="flex items-center gap-2">
                <MdEmail style={{ color: iconColor }} />
                <span>cs9981625252@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin style={{ color: iconColor }} />
                <a
                  href="https://linkedin.com/in/chandrashekharsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} hover:underline`}
                >
                  linkedin.com/in/chandrashekharsk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub style={{ color: iconColor }} />
                <a
                  href="https://github.com/chandrashekharsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} hover:underline`}
                >
                  github.com/chandrashekharsk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineGlobeAlt style={{ color: iconColor }} />
                <a
                  href="https://portfolio-app-chandrashekhars-projects-d80f3903.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} hover:underline`}
                >
                  Portfolio Website
                </a>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Summary</h2>
            <p className={`text-sm ${textClass}`}>
              Proactive and detail-oriented Software Developer with expertise in full-stack development using modern
              frameworks such as React, Node.js, and Tailwind CSS. Strong focus on creating scalable, user-friendly
              applications. Proven ability to deliver optimized solutions in fast-paced environments.
            </p>
          </section>

          {/* Projects Section */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Projects</h2>
            <div className="space-y-2">
              <div className={`${sectionClass} p-4 rounded-lg shadow transition`}>
                <h3 className={`text-base font-semibold ${headerClass}`}>Smart Food</h3>
                <p className={`text-sm ${textClass}`}>
                  Developed an interactive recipe discovery and meal planning platform with real-time user
                  authentication, bookmarking, and personalized recommendations. Boosted user engagement by 20%.
                </p>
                <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                  <li>Technologies: React, Node.js, MongoDB, Tailwind CSS.</li>
                  <li>Hosted backend on Render and frontend on Vercel for high availability.</li>
                </ul>
              </div>
              <div className={`${sectionClass} p-4 rounded-lg shadow transition`}>
                <h3 className={`text-base font-semibold ${headerClass}`}>DailyNews</h3>
                <p className={`text-sm ${textClass}`}>
                  Developed a news aggregator application categorized by topics like technology and world events,
                  offering a streamlined user experience. Implemented infinite scrolling and caching for efficient
                  data management, boosting user retention. Hosted on Vercel.
                </p>
                <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                  <li>Technologies: React.</li>
                  <li>Features: Topic categorization, infinite scrolling, caching.</li>
                  <li>Hosting: Vercel for fast performance.</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Experience Section */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Experience</h2>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>Jr. Software Developer Intern</h3>
              <p className={`text-sm ${textClass}`}>Leopardruns Innovation & Technology (Remote) | Jul 2024</p>
              <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                <li>
                  Developed responsive, pixel-perfect frontend components from Figma designs, improving user experience
                  across devices.
                </li>
                <li>Integrated RESTful APIs, improving data retrieval speed by 25% and reducing bugs by 15%.</li>
              </ul>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Achievements</h2>
            <div className="mb-4">
              <h3 className={`text-base font-semibold ${headerClass}`}>Coding Marathon Winner</h3>
              <p className={`text-sm ${textClass}`}>MGI Bhopal, Madhya Pradesh | Bhopal, Oct 2024</p>
              <ul className={`list-disc ml-4 text-sm ${textClass}`}>
                <li>Secured the Weekly Marathon Merit Certificate at MGI Bhopal organized by Geeks of Gurukul for outstanding performance in coding and algorithm challenges.</li>
                <li>Demonstrated advanced problem-solving skills, consistently achieving top scores in competitive programming tests.</li>
              </ul>
            </div>

          </section>


          {/* Technical Skills Section */}
          <section className="my-2">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className={`text-base font-semibold ${headerClass}`}>Programming Languages</h3>
                <p className={`text-sm ${textClass}`}>C/C++, JavaScript, TypeScript, Python, Java.</p>
              </div>
              <div>
                <h3 className={`text-base font-semibold ${headerClass}`}>Frontend Development</h3>
                <p className={`text-sm ${textClass}`}>React, Next.js, Tailwind CSS, Redux Toolkit.</p>
              </div>
              <div>
                <h3 className={`text-base font-semibold ${headerClass}`}>Backend Development</h3>
                <p className={`text-sm ${textClass}`}>Node.js, Express.js, MongoDB, PostgreSQL.</p>
              </div>
              <div>
                <h3 className={`text-base font-semibold ${headerClass}`}>Developer Tools</h3>
                <p className={`text-sm ${textClass}`}>Git, Docker, Postman, REST APIs, Vercel, Render.</p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-4">
            <h2 className={`text-lg font-semibold mb-4 ${headerClass}`}>Education</h2>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>Millennium Institute of Technology & Science</h3>
              <p className={`text-sm ${textClass}`}>Bachelor of Technology, Computer Science and Engineering | 2022 – 2026</p>
              <p className={`text-sm ${textClass}`}>Bhopal, Madhya Pradesh</p>
            </div>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>Govt. Gyanodaya Vidhyalaya S.C. Excellence H.S. School</h3>
              <p className={`text-sm ${textClass}`}>Higher Secondary Education | 2020 – 2022</p>
              <p className={`text-sm ${textClass}`}>Rewa, Madhya Pradesh</p>
            </div>
            <div>
              <h3 className={`text-base font-semibold ${headerClass}`}>Govt. Gyanodaya Vidhyalaya S.C. Excellence H.S. School</h3>
              <p className={`text-sm ${textClass}`}>Secondary Education | 2018 – 2020</p>
              <p className={`text-sm ${textClass}`}>Rewa, Madhya Pradesh</p>
            </div>
          </section>

        </div>
      </PDFExport>
    </div>
  );
};

export default ResumePage;
