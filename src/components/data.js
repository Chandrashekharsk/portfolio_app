import {
  FaLinkedin,
  FaDiscord,
  FaTwitter,
  FaEnvelope,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
export const footerElems = [
  {
    icon: FaLinkedin,
    color: "blue",
    link: "https://www.linkedin.com/in/chandrashekhar-singh-kushwaha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm",
  },
  {
    icon: FaDiscord,
    color: "purple",
    link: "https://discord.com/invite/FXKmpmDh",
  },
  {
    icon: FaTwitter,
    color: "blue",
    link: "https://twitter.com/cs9981625252",
  },
  {
    icon: FaEnvelope,
    color: "red",
    link: "mailto:cs9981625252@gmail.com",
  },
  {
    icon: FaGithub,
    color: "gray",
    link: "https://github.com/Chandrashekharsk",
  },
  {
    icon: FaInstagram,
    color: "pink",
    link: "https://www.instagram.com/chandrashekharsk_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

export const navLinks = [
  {
    id:"resume",
    title:"Resume"
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "feedbacks",
    title: "Feedback",
  },
];

export const eduData = [
  {
    id: "x",
    title: "Class X",
    institute: "Govt.Gyanodaya Vidhyalaya S.C. Excellence H.S. School, Rewa",
    marks: "94.75 %",
    eduBoard: "MP Board",
    completionStatus: "PASSING YEAR 2020",
    link: "https://scdevelopmentmp.nic.in/GSchool/SiteDefault.aspx?ty=MTY1",
    linkTitle: "Visit Institite",
  },
  {
    id: "xii",
    title: "Class XII",
    institute: "Govt.Gyanodaya Vidhyalaya S.C. Excellence H.S. School, Rewa",
    marks: "81.00 %",
    eduBoard: "MP Board",
    completionStatus: "PASSING YEAR 2022",
    link: "https://scdevelopmentmp.nic.in/GSchool/SiteDefault.aspx?ty=MTY1",
    linkTitle: "Visit Institite",
  },
  {
    id: "college",
    title: "B.Tech In Computer Science ",
    institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    marks: "7 CGPA",
    eduBoard: "RGPV University",
    completionStatus: "EXPECTED 2026",
    link: "https://www.rgpv.ac.in/",
    linkTitle: "Visit Institite",
  },
];

export const ExperienceData = [
  {
    role: "Jr. Software Developer Intern",
    image:
      "https://docs.google.com/document/d/1hseTPG0kx7L560saP6rY1J7RaysNjpp8UzAYtqLO3mM/edit?pli=1", // Use a company logo URL instead of a personal email link for a cleaner look.
    companyName: "Leopardruns Innovation & Technology",
    location: "Bhopal, M.P.",
    companyLink: "https://leopardruns.com",
    timePeriod: "45 days",
    project:
      "Developed and optimized my portfolio web applications, enhancing performance and user experience. Collaborated with the development team to implement new features and fix bugs.",
    achievements:
      "Successfully delivered a key project within tight deadlines, improving the efficiency of a core application by 20%.",
    skillUtilize:
      "JavaScript, React, Node.js, Express.js, MongoDB, Git, and version control practices.",
    contribution:
      "Contributed to both frontend and backend development, implementing responsive design and RESTful APIs. Played a critical role in debugging and testing code to ensure seamless functionality.",
    professionalGrowth:
      "Gained hands-on experience in full-stack development and improved problem-solving skills by working on real-world projects. Enhanced my ability to work in a team and deliver results under pressure.",
  },
];

export const skills = {
  "Programming Languages": [
    { name: "C/C++", image: "/images/cpp.svg" },
    { name: "Java", image: "/images/java.svg" },
    { name: "Python", image: "/images/python.svg" },
    { name: "TypeScript", image: "/images/typescript.svg" },
    { name: "JavaScript", image: "/images/javascript.svg" },
  ],
  "Scripting & Markup Languages": [
    { name: "HTML", image: "/images/html.svg" },
    { name: "CSS", image: "/images/css.svg" },
    { name: "SQL", image: "/images/sql.svg" },
  ],
  "Frontend Development": [
    { name: "React", image: "/images/react.svg" },
    { name: "Next.js", image: "/images/nextjs1.svg" },
  ],
  "Backend Development": [
    { name: "Node.js", image: "/images/nodejs.svg" },
    { name: "Express.js", image: "/images/express1.svg" },
    { name: "Spring Boot", image: "/images/springboot.svg" },
  ],
  "Databases": [
    { name: "MongoDB", image: "/images/mongodb.svg" },
    { name: "MySQL", image: "/images/mysql.svg" },
  ],
  "DevOps & Tools": [
    { name: "Docker", image: "/images/docker.svg" },
    { name: "Postman", image: "/images/postman.svg" },
    { name: "GitHub", image: "/images/github.svg" },
  ]
};

export const AchievementsData = [
  {
    title: "Hackathon Success",
    image: "/images/hackathon_cert.jpg",
    organization: "College (part of MATRIM-2025)",
    location: "Bhopal, M.P.",
    date: "15-04-2025", 
    description: "Won the Code-craft Hackathon organized by college during MATRIM-2025 for showcasing innovative coding solutions under pressure and limited time.",
    achievements: [
      "Won the Codecraft Hackathon among 1200+ participants.",
      "Developed a working project prototype within limited time.",
      "Engineered an end-to-end E-Waste Management System for real-time monitoring and sustainable disposal of electronic waste."
    ],
    skillsUtilized: "Teamwork, Competitive Programming, Real-Time Development, Rapid Prototyping",
    impact: "Displayed ability to think under pressure and build practical solutions with limited resources.",
    professionalGrowth: "Improved collaborative and time-bound coding skills, boosting innovation and confidence."
  },
  {
    title: "LeetCode Problem Solver",
    image: "/images/leetcode.png", // You can later add a LeetCode certificate or logo here
    organization: "LeetCode",
    location: "LeetCode Platform",
    date: "08-06-2025", 
    description: "Solved over 150+ coding problems on LeetCode, showcasing consistent practice and problem-solving dedication.",
    achievements: [
      "Solved 150+ coding problems on LeetCode.",
      "Improved algorithmic thinking and optimization skills.",
      "Developed strong consistency in daily problem-solving habits."
    ],
    skillsUtilized: "Problem-Solving, Algorithms, DSA (Data Structures and Algorithms), Time Complexity Optimization",
    impact: "Built a solid foundation in data structures and algorithms, improving coding speed and accuracy.",
    professionalGrowth: "Enhanced preparation for technical interviews, refined logic-building, and boosted confidence in competitive coding."
  }
]

const origin = window.location.origin;

export const projects = [
  {
    title: "Fiestagram",
    image: "/images/fiestagram_img.png",
    visitLink: `https://fiestagram.vercel.app`,
    githubLink: "https://github.com/Chandrashekharsk/fiestagram",
    technologiesUsed: [
      "react",
      "shadcn",
      "redux",
      "cloudinary",
      "nodejs",
      "mongodb",
    ],
    overview:
      "Fiestagram is a dynamic Instagram clone designed for social sharing and engagement. The platform allows users to register, log in, and manage their profiles securely. Key features include the ability to create and upload posts with images and captions, engage with others by liking their posts, and explore a visually appealing feed of shared content. With a responsive design, Fiestagram ensures a seamless user experience across all devices, from mobile to desktop. Hosted with a robust backend and frontend infrastructure, Fiestagram is the perfect platform to foster creativity and community interaction through multimedia content sharing.",
  },
  {
  title: "AI Summarizer",
  image: "/images/ai_summarizer.png",
  visitLink: "",
  githubLink: "https://github.com/Chandrashekharsk/ai_chrome_extension",
  technologiesUsed: [
    "chrome-extension", "springboot", "gemini-api"
  ],
  overview: "AI Summarizer is a utility Chrome Extension designed to help users quickly summarize selected text from any webpage. It uses a Spring Boot backend integrated with Google's Gemini API to generate concise summaries, improving reading efficiency and offering persistent access to summarized content."
},
{
  title: "Spring Chat",
  image: "/images/spring_chat.png",
  visitLink: "",
  githubLink: "https://github.com/Chandrashekharsk/ChatSpring",
  technologiesUsed: [
    "springboot", "react", "websockets"
  ],
  overview: "Spring Chat is a real-time communication platform enabling users to create and join chat rooms for instant messaging. Built with Spring Boot and React, it leverages WebSockets to offer seamless, low-latency communication in a responsive and user-friendly UI."
},
{
  title: "BitLinks",
  image: "/images/bitlinks.png",
  visitLink: "https://bit-links-a-free-url-shortner.vercel.app",
  githubLink: "https://github.com/Chandrashekharsk/BitLinks---A-free-URL-shortner",
  technologiesUsed: [
    "nextjs", "nodejs"
  ],
  overview: "BitLinks is a full-stack URL shortener that supports creating and managing over 2,000+ links. It allows users to generate short URLs with custom aliases and includes features for tracking redirects and improving page SEO. Built using Next.js for fast rendering and Node.js for backend logic."
},

  {
    title: "Smart Food",
    image: "/images/smart_food.png",
    visitLink: `https://smart-food-eight.vercel.app`,
    githubLink: "https://github.com/Chandrashekharsk/smart_food",
    technologiesUsed: [
      "react",
      "react-icons",
      "material-ui",
      "express",
      "nodejs",
      "mongoose",
    ],
    overview:
      "Smart Food is a full-stack MERN recipe exploration and creation platform that lets users register, log in, and interact with a wide range of recipes. Key features include the ability to create, update, and delete recipe posts, edit profile details and pictures, and like or bookmark recipes. Users can also explore recipes based on keywords—such as ingredients, recipe name, or creator’s username—through an intuitive search function. The platform provides an organized and user-friendly interface for recipe discovery, featuring favorites, profile management, and a responsive design.",
  },
  {
    title: "Daily News",
    image: "/images/dailyNews_img.png",
    visitLink: `https://daily-news-psi.vercel.app/`,
    githubLink: "https://github.com/Chandrashekharsk/dailyNews",
    technologiesUsed: [
      "react",
      "react-hooks",
      "react-top-loading-bar",
      "react-infinite-scroll-component",
    ],
    overview:
      "Daily News is a professional news app that provides real-time news updates across various categories. The app allows users to browse through news articles, view detailed information on selected topics, and stay informed with breaking news. Features include category-based news filtering, bookmarking articles for later reading, and a sleek, responsive design that ensures accessibility across devices. The platform is designed to be both informative and user-friendly.",
  },
  {
    title: "Brainwave AI",
    image: "/images/brainWave_ai.png",
    visitLink: `https://brainwave-ai-six.vercel.app/`,
    githubLink: "https://github.com/Chandrashekharsk/brainwave_ai",
    technologiesUsed: [
      "react",
      "react-router-dom",
      "react-just-parallax",
      "scroll-lock",
    ],
    overview:
      "Brainwave AI is a sleek, single-page web application designed to introduce users to the features of Brainwave AI, highlighting its unique AI capabilities through a visually appealing, modern UI. Utilizing React and libraries like react-just-parallax for immersive animations, this app offers a clean, interactive browsing experience. The interface is crafted to capture user attention with smooth, elegant animations while maintaining fast load times.",
  },
  {
    title: "IPhone Web Clone",
    image: "/images/random.png",
    visitLink: `https://iphone-web-clone-dun.vercel.app/`,
    githubLink: "https://github.com/Chandrashekharsk/iphoneWeb_clone",
    technologiesUsed: ["react", "sentry", "three.js", "react-dom"],
    overview:
      "This project is a web-based clone of the iPhone landing page, replicating Apple's signature design aesthetic and interactive elements. Built with React and Three.js, it emphasizes clean design, smooth animations, and a user-friendly layout. Error monitoring with Sentry ensures robust error tracking and performance monitoring, enhancing stability and usability, creating a near-authentic experience similar to the Apple website.",
  },
  {
    title: "Portfolio",
    image: "/images/portfolio_img.png",
    visitLink: `${origin}/`,
    githubLink: "https://github.com/Chandrashekharsk/portfolio_app",
    technologiesUsed: ["react", "redux-toolkit", "framer-motion", "firebase"],
    overview:
      "This dynamic portfolio app was developed with React, showcasing a responsive, interactive platform for my personal and professional projects. Powered by Firebase for authentication and data management, it features real-time data updates, secure user authentication, and seamless content organization. With Framer Motion, the app includes visually captivating animations that make navigating the portfolio enjoyable and engaging.",
  },
  {
    title: "Password Generator",
    image: "/images/password-generator-img.png",
    visitLink: `https://password-generator-beta-lyart.vercel.app/`,
    githubLink: "https://github.com/Chandrashekharsk/password-generator",
    technologiesUsed: ["react", "tailwind", "vite"],
    overview:
      "The Password Generator app is a straightforward tool that enables users to generate secure, customizable passwords. Users can specify password length and include numbers or special characters for increased security. Built with React and styled using Tailwind, the app provides a fast, intuitive interface for generating unique, strong passwords, catering to various security needs while prioritizing user simplicity and usability.",
  },
  {
    title: "Netflix Clone",
    image: "/images/netflix_clone.png",
    visitLink: `https://netflix-clone-psi-tawny.vercel.app/`,
    githubLink: "https://github.com/Chandrashekharsk/netflix_clone",
    technologiesUsed: ["react", "redux toolkit", "node.js", "mongodb"],
    overview:
      "This full-stack Netflix clone was created using the MERN stack, emulating core streaming features like user authentication, video streaming, and content browsing. The app's front-end is built with React and Redux Toolkit for state management, ensuring a smooth, responsive experience. MongoDB and Node.js support data storage and handling for users and media, providing a seamless, immersive streaming experience on par with commercial platforms.",
  },
  {
    title: "Music School",
    image: "/images/musicSchool_img.png",
    // visitLink: `${origin}/not-hosted`,
    visitLink: ``,
    githubLink: "https://github.com/Chandrashekharsk/music_school",
    technologiesUsed: ["next.js", "react", "aceternity", "framer-motion"],
    overview:
      "The Music School app is a vibrant, interactive web application designed to promote the offerings of a music school. Developed with Next.js and Framer Motion for fluid animations, the platform features a responsive, visually engaging UI that showcases available courses and enables prospective students to learn more about the school's offerings. This project prioritizes usability with clean design and captivating animations to provide an exceptional browsing experience.",
  },
];
