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
    id: "resume",
    title: "Resume",
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
    eduBoard: "Madhya Pradesh Board of Secondary Education",
    completionStatus: "PASSING YEAR 2020",
    link: "https://scdevelopmentmp.nic.in/GSchool/SiteDefault.aspx?ty=MTY1",
    linkTitle: "Visit Institite",
  },
  {
    id: "xii",
    title: "Class XII",
    institute: "Govt.Gyanodaya Vidhyalaya S.C. Excellence H.S. School, Rewa",
    marks: "81.00 %",
    eduBoard: "Madhya Pradesh Board of Secondary Education",
    completionStatus: "PASSING YEAR 2022",
    link: "https://scdevelopmentmp.nic.in/GSchool/SiteDefault.aspx?ty=MTY1",
    linkTitle: "Visit Institite",
  },
  {
    id: "college",
    title: "B.Tech In Computer Science ",
    institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya University",
    marks: "7.2 CGPA",
    eduBoard: "Rajiv Gandhi Proudyogiki Vishwavidyalaya University, Bhopal",
    completionStatus: "EXPECTED 2026",
    link: "https://www.rgpv.ac.in",
    linkTitle: "Visit Institite",
  },
];

export const ExperienceData = [
  {
    role: "Jr. Software Developer Intern",
    image: "https://leopardruns.com/logo.png", // replace with actual company logo if available
    companyName: "Leopardruns Innovation & Technology",
    location: "Bhopal, M.P.",
    companyLink: "https://leopardruns.com",
    timePeriod: "45 days",
    project:
      "Worked on a MERN Stack e-commerce project, focusing on frontend customization and backend optimization.",
    achievements:
      "Created reusable React components and customized multiple pages, improving development speed and UI consistency. Optimized existing APIs and developed new REST APIs for better performance and scalability.",
    skillUtilize: "React, JavaScript, Node.js, Express.js, MongoDB, Git.",
    contribution:
      "Designed and implemented reusable UI components, integrated APIs, and enhanced backend performance by refactoring existing endpoints.",
    professionalGrowth:
      "Gained practical experience in full-stack development and strengthened problem-solving skills by working on real-world projects.",
  },
];

export const skills = {
  Languages: [
    { name: "Java", image: "/images/java.svg" },
    { name: "C/C++", image: "/images/cpp.svg" },
    { name: "JavaScript", image: "/images/javascript.svg" },
    { name: "HTML", image: "/images/html.svg" },
    { name: "CSS", image: "/images/css.svg" },
    { name: "SQL", image: "/images/sql.svg" },
  ],
  Development: [
    { name: "Spring Boot", image: "/images/springboot.svg" },
    { name: "React", image: "/images/react.svg" },
    { name: "Next.js", image: "/images/nextjs1.svg" },
    { name: "Node.js", image: "/images/nodejs.svg" },
    { name: "Express.js", image: "/images/express1.svg" },
  ],
  Databases: [
    { name: "MongoDB", image: "/images/mongodb.svg" },
    { name: "MySQL", image: "/images/mysql.svg" },
  ],
  Others: [
    { name: "Docker", image: "/images/docker.svg" },
    { name: "Postman", image: "/images/postman.svg" },
    { name: "GitHub", image: "/images/github.svg" },
  ],
};

export const AchievementsData = [
  {
    title: "Hackathon Success",
    image: "/images/hackathon_cert.jpg",
    organization: "College (part of MATRIM-2025)",
    location: "Bhopal, M.P.",
    date: "15-04-2025",
    description:
      "Won the Code-craft Hackathon organized by college during MATRIM-2025 for showcasing innovative coding solutions under pressure and limited time.",
    achievements: [
      "Won the Codecraft Hackathon among 1200+ participants.",
      "Developed a working project prototype within limited time.",
      "Engineered an end-to-end E-Waste Management System for real-time monitoring and sustainable disposal of electronic waste.",
    ],
    skillsUtilized:
      "Teamwork, Competitive Programming, Real-Time Development, Rapid Prototyping",
    impact:
      "Displayed ability to think under pressure and build practical solutions with limited resources.",
    professionalGrowth:
      "Improved collaborative and time-bound coding skills, boosting innovation and confidence.",
  },
  {
    title: "Introducing Spring Boot",
    image: "/images/springBoot.jpg",
    organization: "IBM SkillsBuild",
    location: "Online",
    date: "28 Jul 2025",
    description: "Completion of the Introducing Spring Boot course.",
    achievements: ["Completed a 2-hour and 30-minute course introducing Spring Boot[cite: 24, 27, 28]."],
    skillsUtilized: "Spring Boot, Java Frameworks",
    impact:
      "Gained an introduction to the Spring Boot framework.",
    professionalGrowth: "Acquired a new skill in a popular Java framework.",
  },
  {
    title: "LeetCode Problem Solver",
    image: "/images/leetcode.png", // You can later add a LeetCode certificate or logo here
    organization: "LeetCode",
    location: "LeetCode Platform",
    date: "15-09-2025",
    description:
      "Solved over 200+ coding problems on LeetCode, showcasing consistent practice.",
    achievements: [
      "Developed a strong understanding in Java language, Data Structures and algorithms with practice. ",
      "Improved algorithmic thinking and optimization skills.",
      "Developed strong consistency in daily problem-solving habits.",
    ],
    skillsUtilized:
      "Problem-Solving, Algorithms, DSA (Data Structures and Algorithms), Time Complexity Optimization",
    impact:
      "Built a solid foundation in data structures and algorithms, improving coding speed and accuracy.",
    professionalGrowth:
      "Enhanced preparation for technical interviews, refined logic-building, and boosted confidence in competitive coding.",
  },
  {
    title: "Learn Java",
    image: "/images/learnJava.jpg",
    organization: "IBM SkillsBuild",
    location: "Online",
    date: "28 Jul 2025",
    description: "Completion of the Learn Java course.",
    achievements: ["Completed a 25-hour course on learning Java[cite: 5, 8, 9]."],
    skillsUtilized: "Java, Programming Fundamentals",
    impact:
      "Gained foundational knowledge in Java programming.",
    professionalGrowth: "Expanded programming language skills.",
  },
  {
    title: "Full-stack web developers and back-end developers",
    image: "/images/fullStack.jpg",
    organization: "IBM SkillsBuild",
    location: "Online (Coursera)",
    date: "28 Jul 2025",
    description: "Completion of the Full-stack web developers and back-end developers course on Coursera.",
    achievements: ["Completed a 12-hour course on full-stack and back-end web development[cite: 15, 18, 19]."],
    skillsUtilized: "Full-stack Development, Back-end Development",
    impact:
      "Learned key concepts in full-stack and back-end development.",
    professionalGrowth: "Advanced web development knowledge.",
  },
  
  {
    title: "Fundamentals of Web apps",
    image: "/images/fullStackFundamental.jpg",
    organization: "IBM SkillsBuild",
    location: "Online",
    date: "28 Jul 2025",
    description: "Completion of the Fundamentals of Web apps course.",
    achievements: ["Completed a 3-hour course on the fundamentals of web applications[cite: 34, 37, 38]."],
    skillsUtilized: "Web Development, Web Applications",
    impact:
      "Strengthened understanding of core web application principles.",
    professionalGrowth: "Solidified foundational knowledge for web development.",
  },
];

// const origin = window.location.origin;

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
    technologiesUsed: ["chrome-extension", "springboot", "gemini-api"],
    overview:
      "AI Summarizer is a utility Chrome Extension designed to help users quickly summarize selected text from any webpage. It uses a Spring Boot backend integrated with Google's Gemini API to generate concise summaries, improving reading efficiency and offering persistent access to summarized content.",
  },
  {
    title: "Spring Chat",
    image: "/images/spring_chat.png",
    visitLink: "",
    githubLink: "https://github.com/Chandrashekharsk/ChatSpring",
    technologiesUsed: ["springboot", "react", "websockets"],
    overview:
      "Spring Chat is a real-time communication platform enabling users to create and join chat rooms for instant messaging. Built with Spring Boot and React, it leverages WebSockets to offer seamless, low-latency communication in a responsive and user-friendly UI.",
  },
  {
    title: "BitLinks",
    image: "/images/bitlinks.png",
    visitLink: "https://bit-links-a-free-url-shortner.vercel.app",
    githubLink:
      "https://github.com/Chandrashekharsk/BitLinks---A-free-URL-shortner",
    technologiesUsed: ["nextjs", "nodejs"],
    overview:
      "BitLinks is a full-stack URL shortener that supports creating and managing over 2,000+ links. It allows users to generate short URLs with custom aliases and includes features for tracking redirects and improving page SEO. Built using Next.js for fast rendering and Node.js for backend logic.",
  },
  {
    title: "Visualizer",
    image: "/images/visualizer.png",
    visitLink: "https://visualizer-virid.vercel.app",
    githubLink:
      "https://github.com/Chandrashekharsk/visualizer",
    technologiesUsed: ["nextjs", "mongodb"],
    overview:
      "Visualizer is a data visualization platform that seeds company profile data from a JSON file into MongoDB and displays it through interactive charts. It showcases business insights using bar charts, pie charts, and pillar charts for clear comparisons and analytics. Built with Next.js for smooth rendering and MongoDB for scalable data storage.",
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
    title: "Password Generator",
    image: "/images/password-generator-img.png",
    visitLink: `https://password-generator-beta-lyart.vercel.app/`,
    githubLink: "https://github.com/Chandrashekharsk/password-generator",
    technologiesUsed: ["react", "tailwind", "vite"],
    overview:
      "The Password Generator app is a straightforward tool that enables users to generate secure, customizable passwords. Users can specify password length and include numbers or special characters for increased security. Built with React and styled using Tailwind, the app provides a fast, intuitive interface for generating unique, strong passwords, catering to various security needs while prioritizing user simplicity and usability.",
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
