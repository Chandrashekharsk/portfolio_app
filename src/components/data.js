import { FaLinkedin, FaDiscord, FaTwitter, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
export const footerElems = [
  {
    icon: FaLinkedin,
    color:"blue",
    link:"https://www.linkedin.com/in/chandrashekhar-singh-kushwaha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm",
  },
  {
    icon: FaDiscord,
    color:"purple",
    link:"https://discord.com/invite/FXKmpmDh"
  },
  {
    icon: FaTwitter,
    color:"blue",
    link:"https://twitter.com/cs9981625252"
  },
  {
    icon: FaEnvelope,
    color:"red",
    link:"mailto:cs9981625252@gmail.com"
  },
  {
    icon: FaGithub,
    color:"gray",
    link:"https://github.com/Chandrashekharsk"
  },
  {
    icon: FaInstagram,
    color:"pink",
    link:"https://www.instagram.com/chandrashekharsk_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
]

export const footerElems2 = [
  {
    name:"feedback",
    route:"feedbacks"
  },
]

export const navLinks = [
  {
    id: "skills",
    title: "Skills"
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "experience",
    title: "Experience"
  },
  {
    id: "education",
    title: "Education"
  },
  { 
    id: "testimonials",
    title:"Testimonials"
  },
  {
    id: "feedbacks",
    title: "Feedback"
  },
]

export const eduData = [
  {
    id:"x",
    title:"Class X",
    institute: "Govt.Gyanodaya Vidhyalaya S.C. Excellence H.S. School, Rewa",
    marks: "94.75 %",
    eduBoard: "MP Board",
    completionStatus: "PASSING YEAR 2020",
    link : "https://scdevelopmentmp.nic.in/GSchool/SiteDefault.aspx?ty=MTY1",
    linkTitle: "Visit Institite"
  },
  {
    id:"xii",
    title:"Class XII",
    institute: "Govt.Gyanodaya Vidhyalaya S.C. Excellence H.S. School, Rewa",
    marks: "81.00 %",
    eduBoard: "MP Board",
    completionStatus: "PASSING YEAR 2022",
    link:"https://scdevelopmentmp.nic.in/GSchool/SiteDefault.aspx?ty=MTY1",
    linkTitle: "Visit Institite"
  },
  {
    id:"college",
    title:"B.Tech In Computer Science ",
    institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    marks: "Pursuing",
    eduBoard: "RGPV University",
    completionStatus: "EXPECTED 2026",
    link: "https://www.rgpv.ac.in/",
    linkTitle: "Visit Institite"
  },
]

export const ExperienceData = [
  {
    role: "Jr. Software Developer Intern",
    image: "https://docs.google.com/document/d/1hseTPG0kx7L560saP6rY1J7RaysNjpp8UzAYtqLO3mM/edit?pli=1", // Use a company logo URL instead of a personal email link for a cleaner look.
    companyName: "Leopardruns Innovation & Technology",
    location: "Bhopal, M.P.",
    companyLink: "https://leopardruns.com",
    timePeriod: "45 days",
    project: "Developed and optimized my portfolio web applications, enhancing performance and user experience. Collaborated with the development team to implement new features and fix bugs.",
    achievements: "Successfully delivered a key project within tight deadlines, improving the efficiency of a core application by 20%.",
    skillUtilize: "JavaScript, React, Node.js, Express.js, MongoDB, Git, and version control practices.",
    contribution: "Contributed to both frontend and backend development, implementing responsive design and RESTful APIs. Played a critical role in debugging and testing code to ensure seamless functionality.",
    professionalGrowth: "Gained hands-on experience in full-stack development and improved problem-solving skills by working on real-world projects. Enhanced my ability to work in a team and deliver results under pressure.",
  }
];

export const skills = [
  { name: 'JavaScript', image: '/images/javascript.svg', description: 'Dynamic and versatile programming language.' },
  { name: 'Java', image: '/images/java.svg', description: 'High-level, object-oriented programming language.' },
  { name: 'Python', image: '/images/python.svg', description: 'Interpreted, high-level programming language.' },
  { name: 'HTML', image: '/images/html.svg', description: 'Standard markup language for web pages.' },
  { name: 'CSS', image: '/images/css.svg', description: 'Style sheet language used for styling web pages.' },
  { name: 'React', image: "/images/react.svg", description: 'JavaScript library for building user interfaces.' },
  { name: 'Node.js', image: '/images/nodejs.svg', description: 'JavaScript runtime built on Chrome’s V8 engine.' },
  { name: 'Express.js', image: '/images/express1.svg', description: 'Minimalist web framework for Node.js.' },
  { name: 'Next.js', image: '/images/nextjs1.svg', description: 'React framework with hybrid static & server rendering.' },
  { name: 'MongoDB', image: '/images/mongodb.svg', description: 'NoSQL database for modern applications.' },
  { name: 'TypeScript', image: '/images/typescript.svg', description: 'Superset of JavaScript with static typing.' },
  { name: 'GitHub', image: '/images/github.svg', description: 'Platform for version control and collaboration.' },
  { name: 'Docker', image: '/images/docker.svg', description: 'Platform for developing, shipping, and running applications.' },
  { name: 'AWS', image: '/images/aws1.svg', description: 'Cloud computing platform offering various services.' },
];


// Get the full domain (e.g., "localhost:3000" or "www.example.com")
// const domain = window.location.host;
// Or you can just get the protocol and domain name (e.g., "http://localhost:3000" or "https://www.example.com")
const origin = window.location.origin;

export const projects = [
  {
    title: "Netflix Clone",
    image: "/images/netflix_clone.png",
    visitLink: `https://netflix-clone-psi-tawny.vercel.app/`,
    githubLink: "https://github.com/Chandrashekharsk/netflix_clone",
    technologiesUsed: [
      "react",
      "redux toolkit",
      "node.js",
      "mongodb",
    ],
    overview: "I developed a full-stack Netflix clone using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application replicates core features like user authentication, video streaming, and content browsing. With a responsive front-end built in React, seamless data handling through Express and Node.js, and MongoDB for managing user and content data, this project delivers an immersive streaming experience similar to Netflix",
  },
  {
    title: "Khana khazana",
    image: "/images/recipeApp_img.png",
    visitLink: `https://recipes-mernapp.vercel.app/`,
    githubLink: "https://github.com/Chandrashekharsk/recipe_app",
    technologiesUsed: [
      "react",
      "node.js",
      "express.js",
      "mongodb",
    ],
    overview: "Developed a full-stack recipe app, where any user can login and explore already created recipes of other users. Also user can create their own recipe and save recipes ",
  },
  {
    title: "Portfolio ",
    image: "/images/portfolio_img.png",
    visitLink: `${origin}/`,
    githubLink: "https://github.com/Chandrashekharsk/portfolio_app",
    technologiesUsed: [
      "react",
      "redux-toolkit",
      "framer-motion",
      "firebase",
    ],
    overview: "This fully functional dynamic app, built with React and Firebase, designed to showcase my portfolio. It provides a seamless user experience with real-time data updates, secure authentication, and easy content management through Firebase."
  },
  {
    title: "Password Generator",
    image: "/images/password-generator-img.png",
    visitLink: `https://password-generator-beta-lyart.vercel.app/`,
    githubLink: "https://github.com/Chandrashekharsk/password-generator",
    technologiesUsed: [
      "react",
      "tailwind",
      "vite",
    ],
    overview: "The Password Generator is a simple and intuitive tool that allows users to create secure passwords by selecting the desired length, and including options for numbers and special characters, enhancing online security. It offers a user-friendly interface to quickly generate strong, customizable passwords for various needs.",
  },
  {
    title: "Music School ",
    image: "/images/musicSchool_img.png",
    visitLink: `${origin}/not-hosted`,
    githubLink: "https://github.com/Chandrashekharsk/music_school",
    technologiesUsed: [
      "next.js",
      "react",
      "aceternity",
      "framer-motion"
    ],
    overview: "A mini application developed to showcase the courses offered by a music school. The UI is highly interactive and it highlights the available courses in user-friendly manner.",
  },
  {
    title: "Fiestagram",
    image:"/images/fiestagram_img.png",
    visitLink:"https://y-steel-iota.vercel.app/",
    githubLink: "https://github.com/Chandrashekharsk/fiestagram",
    technologiesUsed: [
      "next.js",
      "prisma",
      "clerk",
      "mysql",
      "cloudinary",
    ],
    overview: "This is a simplified Next.js application inspired by Instagram, offering basic social media functionalities like posting images and interacting with content. It's designed as a lightweight version with potential for future enhancements and complexity."
  },
];


