import {
  mobile,
  uic,
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
  vue,
  vuetify,
  sql,
  carrent,
  jobit,
  tripguide,
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Vue.js Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "SQL",
    icon: sql,
  },
  {
    name: "Vuetify",
    icon: vuetify,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Nolbir",
    icon: "https://www.nolbir.io/_next/image?url=%2FLogo.png&w=96&q=75",
    iconBg: "#383E56",
    date: "Dec 2021 - Jun 2022",
    points: [
      "Developing and maintaining web applications using React.js, Nextjs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Vuejs Developer",
    company_name: "UIC group",
    icon: uic,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using Vue.js, Nuxtjs and related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Contributing to significant projects, bringing valuable expertise and dedication to the team.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Olcha uz",
    icon: "https://media.licdn.com/dms/image/C4D0BAQE2OmXSCc4wFA/company-logo_100_100/0/1658919898710/olcha_uz_logo?e=1717632000&v=beta&t=AUIs8n8T2jytrVQICPbrdkpolv6fTicSDPQQE_tFKT4",
    iconBg: "#383E56",
    date: "Oct 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using Vue.js, Nuxtjs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Contributing to significant projects, bringing valuable expertise and dedication to the team.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
