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
    marks: "Pursuing",
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

export const skills = [
  {
    name: "JavaScript",
    image: "/images/javascript.svg",
    description: "Dynamic and versatile programming language.",
  },
  {
    name: "Java",
    image: "/images/java.svg",
    description: "High-level, object-oriented programming language.",
  },
  {
    name: "Python",
    image: "/images/python.svg",
    description: "Interpreted, high-level programming language.",
  },
  {
    name: "HTML",
    image: "/images/html.svg",
    description: "Standard markup language for web pages.",
  },
  {
    name: "CSS",
    image: "/images/css.svg",
    description: "Style sheet language used for styling web pages.",
  },
  {
    name: "React",
    image: "/images/react.svg",
    description: "JavaScript library for building user interfaces.",
  },
  {
    name: "Node.js",
    image: "/images/nodejs.svg",
    description: "JavaScript runtime built on Chrome’s V8 engine.",
  },
  {
    name: "Express.js",
    image: "/images/express1.svg",
    description: "Minimalist web framework for Node.js.",
  },
  {
    name: "Next.js",
    image: "/images/nextjs1.svg",
    description: "React framework with hybrid static & server rendering.",
  },
  {
    name: "MongoDB",
    image: "/images/mongodb.svg",
    description: "NoSQL database for modern applications.",
  },
  {
    name: "TypeScript",
    image: "/images/typescript.svg",
    description: "Superset of JavaScript with static typing.",
  },
  {
    name: "GitHub",
    image: "/images/github.svg",
    description: "Platform for version control and collaboration.",
  },
  {
    name: "Docker",
    image: "/images/docker.svg",
    description: "Platform for developing, shipping, and running applications.",
  },
  {
    name: "AWS",
    image: "/images/aws1.svg",
    description: "Cloud computing platform offering various services.",
  },
];

export const AchievementsData = [
  {
    title: "Coding Marathon Winner",
    image: "/images/coding_marathon_win.jpg", // Replace with a valid URL for the certificate image or Geeks of Gurukul logo
    organization: "Geeks of Gurukul",
    location: "MGI Bhopal, Madhya Pradesh",
    date: "19-10-2024",
    description:
      "Earned the Weekly Marathon Merit Certificate at Geeks of Gurukul's offline classes at MGI Bhopal, recognizing exceptional performance in weekly coding tests.",
    achievements: [
      "Awarded for outstanding performance in weekly tests.",
      "Demonstrated strong dedication and skills.",
      "Consistently met the high standards set by the training program.",
    ],
    skillsUtilized:
      "Problem-solving, Competitive Programming, Time Management, DSA (Data Structures and Algorithms)",
    impact:
      "Showcased commitment and excellence, reinforcing skills essential for competitive programming and coding challenges.",
    professionalGrowth:
      "Enhanced problem-solving abilities, gained recognition in a competitive environment, and built resilience through rigorous testing.",
  },
];

// Get the full domain (e.g., "localhost:3000" or "www.example.com")
// const domain = window.location.host;
// Or you can just get the protocol and domain name (e.g., "http://localhost:3000" or "https://www.example.com")
const origin = window.location.origin;

export const projects = [
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
      "Smart Food is a full-stack MERN recipe exploration and creation platform that lets users register, log in, and interact with a wide range of recipes. Key features include the ability to create, update, and delete recipe posts, edit profile details and pictures, and like or bookmark recipes. Users can also explore recipes based on keywords—such as ingredients, recipe name, or creator’s username—through an intuitive search function. The platform provides an organized and user-friendly interface for recipe discovery, featuring favorites, profile management, and a responsive design. (NOTE: before visit this project, make sure you have not enable block cookies in your browser ).",
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
  // {
  //   title: "Khana Khazana",
  //   image: "/images/recipeApp_img.png",
  //   visitLink: `https://recipes-mernapp.vercel.app/`,
  //   githubLink: "https://github.com/Chandrashekharsk/recipe_app",
  //   technologiesUsed: [
  //     "react",
  //     "node.js",
  //     "express.js",
  //     "mongodb",
  //   ],
  //   overview: "Khana Khazana is a full-stack recipe-sharing application that allows users to explore a variety of recipes uploaded by other users. Registered users can create, save, and share their own unique recipes, with full authentication and user profile management. The app features a responsive UI with a rich experience for discovering, browsing, and managing recipes. It is built using the MERN stack to support seamless interactions and efficient data storage for a dynamic user experience."
  // },
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
    image: "/images/iphoneweb_img.png",
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

  // {
  //   title: "Fiestagram",
  //   image:"/images/fiestagram_img.png",
  //   visitLink:"https://y-steel-iota.vercel.app/",
  //   githubLink: "https://github.com/Chandrashekharsk/fiestagram",
  //   technologiesUsed: [
  //     "next.js",
  //     "prisma",
  //     "clerk",
  //     "mysql",
  //     "cloudinary",
  //   ],
  //   overview: "Fiestagram is a social media application inspired by Instagram, built with Next.js and Prisma, offering essential features like posting images and user interaction. It leverages Clerk for secure authentication, MySQL for data storage, and Cloudinary for media handling. Designed as a minimalistic, lightweight alternative, Fiestagram demonstrates social media functionalities with a focus on performance, simplicity, and potential scalability for future development."
  // },
];
