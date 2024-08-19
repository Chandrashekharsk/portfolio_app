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
    title:"B.Tech In Computer Science and Engineering",
    institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    marks: "6.58 CGPA",
    eduBoard: "RGPV University",
    completionStatus: "PURSUING (EXPECTED 2026)",
    link: "https://www.rgpv.ac.in/",
    linkTitle: "Visit Institite"
  },
]

export const ExperienceData = [
  {
    role: "Software Developer Intern",
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

export const projects = [
  {
    title: "Portfolio App - REACT",
    image: "/images/portfolio_img.png",
    visitLink: "https://portfolio-ancc10rsv-chandrashekhars-projects-d80f3903.vercel.app",
    technologiesUsed: [
      "react",
      "tailwind",
      "react-icons",
      "framer-motion",
    ],
    overview: "This is developed for showcase my develpment skills, built with React, featuring smooth animations, form validation, and dynamic routing to showcase my projects and skills",
  },
  {
    title: "Music School - NEXT.JS",
    image: "/images/musicSchool_img.png",
    visitLink: "",
    githubLink: "https://github.com/Chandrashekharsk/music_school",
    technologiesUsed: [
      "next.js",
      "react",
      "aceternity",
      "framer-motion"
    ],
    overview: "A mini modern web application developed to showcase the courses offered by a music school. The UI is highly interactive and it highlights the available courses in a visually appealing and user-friendly manner.",
  },
  {
    title: "Recipe App - MERN",
    image: "/images/recipeApp_img.png",
    visitLink: "",
    githubLink: "https://github.com/Chandrashekharsk/recipe_app",
    technologiesUsed: [
      "react",
      "node.js",
      "mongodb",
      "jsonwebtoken"
    ],
    overview: "Developed a full-stack recipe app, where any user can login and explore already created recipes of other users. Also user can create their own recipe and save recipes ",
  },
];


