import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  bayhomes_icon,
  tafaseel_icon,
  amilcar_icon,
  tesla,
  shopify,
  bayhomes,
  AIsummarize,
  tafaseel,
  devoverflow,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

/* export const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "RESTful API Development",
    icon: backend,
  },
  {
    title: "Admin Dashboard Systems",
    icon: mobile,
  },
  {
    title: "Database Design & Optimization",
    icon: creator,
  },
  {
    title: "Authentication & Authorization",
    icon: web,
  },
]; */

export const services = [
  {
    title: "Full-Stack Web Development",
    icon: web,
  },
  {
    title: "Backend & RESTful API Development",
    icon: backend,
  },
  {
    title: "Admin Dashboard Systems",
    icon: creator,
  },
  {
    title: "Database Design & Optimization",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Back-End Developer",
    company_name: "Bay Homes Real State",
    icon: bayhomes_icon,
    iconBg: "#383E56",
    date: "JUN 2024 - SEP 2024",
    points: [
      "Developed and maintained server‑side logic and infrastructure for a real estate listing website, ensuring seamless performance and security.",
      "Integrated RESTful APIs to support dynamic property listings, user authentication, and admin dashboard functionalities.",
      "Collaborated with front‑end developers and designers to align user experience with backend processes.",
     " Managed data storage using MongoDB databases, ensuring optimized queries and data integrity.",
     "Implemented authentication, authorization, and secure data transactions to safeguard user and property data."
    ],
  },
  {
  title: "Full-Stack Web Developer Intern",
  company_name: "Amilcar Technologies",
  icon: amilcar_icon,
  iconBg: "#E6DEDD",
  date: "JUNE 2025 - AUG 2025",
  points: [
    "Enhanced trading project processing efficiency by 18% by restructuring workflows and reducing repetitive tasks.",
    "Designed relational database structures and executed optimized insert/update operations to ensure stable and reliable data flow.",
    "Improved textile project UI performance by 22% through component restructuring and frontend performance optimization.",
    "Reduced machine data errors by 15% by enhancing logging mechanisms and refining data handling logic.",
    "Developed system features across data processing and interface integrations using PHP and JavaScript.",
    "Built monitoring dashboards displaying real-time machine status updates and operational alerts.",
    "Developed a flexible inventory management system with secure user authentication and detailed operational reporting.",
    "Created interactive dashboards supporting trading activities with clear and actionable visual insights."
  ],
},

  {
  title: "Full-Stack Developer",
  company_name: "Tafaseel Project",
  icon: tafaseel_icon,
  iconBg: "#383E56",
  date: "DEC 2025 - JUN 2026",
  points: [
    "Designed and developed a dynamic admin dashboard using Next.js and React to manage and upload real estate projects efficiently.",
    "Built secure RESTful APIs to handle project creation, high-quality image uploads, and structured data management.",
    "Implemented image optimization and storage solutions to ensure fast loading performance while maintaining high visual quality.",
    "Developed role-based authentication and authorization for the admin dashboard to ensure secure access control.",
    "Structured and organized project content to deliver a clean, modern, and user-friendly presentation on the website.",
    "Integrated backend services with MongoDB to manage project data, ensuring scalability and data consistency."
  ],
},

 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bay Homes Real Estate",
    description:
      "A full-stack real estate platform built with Next.js and MongoDB, featuring secure RESTful APIs, dynamic property listings, user authentication, and an integrated admin dashboard for efficient data and content management.",
    tags: [
      { name: "Next.js", color: "white-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
    ],
    image: bayhomes,
    source_code_link: "https://www.bayhomesae.com/",
  },

  {
    name: "Tafaseel Architecture",
    description:
      "A modern architectural company website developed using Next.js and custom APIs, featuring a secure admin dashboard for managing projects, uploading high-quality images, and organizing structured content with optimized performance.",
    tags: [
      { name: "Next.js", color: "white-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
    ],
    image: tafaseel,
    source_code_link: "https://www.tafaseelarch.com/",
  },

  {
    name: "AI Summarizer",
    description:
      "An AI-powered web application built with React that generates concise summaries from any URL using OpenAI models via RapidAPI, delivering fast and efficient content processing with a clean user interface.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "RapidAPI", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
    ],
    image: AIsummarize,
    source_code_link: "https://ai-summarizer-two-zeta.vercel.app/",
  },

  {
    name: "DevOverFlow",
    description:
      "A full-stack developer Q&A platform built with Next.js and Tailwind CSS, enabling users to ask questions, post answers, vote, save content, and receive AI-powered recommendations within a structured knowledge-sharing environment.",
    tags: [
      { name: "Next.js", color: "white-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
    ],
    image: devoverflow,
    source_code_link: "https://dev-over-flow-xi.vercel.app/",
  },
];

export { technologies, experiences, testimonials, projects };
