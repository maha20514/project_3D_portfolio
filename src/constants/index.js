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
  tesla,
  shopify,
  bayhomes,
  AIsummarize,
  nft,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
      "A real estate web platform powered by Next.js and MongoDB. I developed and managed backend APIs for property listings, user authentication, and data management.",
    tags: [
      {
        name: "Next.js",
        color: "white-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: bayhomes,
    source_code_link: "https://www.bayhomesae.com/",
  },
  {
    name: "AI Summarizer",
    description:
      "An AI-powered tool that summarizes content from any URL using OpenAI's GPT models. Built with React and integrated via RapidAPI for seamless content processing.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI ",
        color: "green-text-gradient",
      },
      {
        name: "OPenAI",
        color: "pink-text-gradient",
      },
    ],
    image: AIsummarize,
    source_code_link: "https://ai-summarizer-two-zeta.vercel.app/",
  },
  {
    name: "NFT Marketplace",
    description:
      "A decentralized platform enabling users to mint, buy, and trade NFTs. Built with Next.js, Solidity, and Web3.js, with smart contracts and blockchain-based asset verification.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Web3.js",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://nft-marketplace-nu-nine.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
