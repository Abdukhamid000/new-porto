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
  yuristim,
  mercury,
  jobit,
  tictac,
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
    name: "Yuristim uz (lending)",
    description:
      "Yuristim.uz is a dynamic and visually engaging landing project crafted with cutting-edge technologies including Vue.js, TypeScript, GSAP, and Tailwind CSS. This platform seamlessly blends a sleek user interface with powerful functionality, offering a seamless experience for visitors. With Vue.js providing robust interactivity, TypeScript ensuring type safety, GSAP for smooth animations, and Tailwind CSS for a responsive design, Yuristim.uz stands as a testament to innovation in web development. Explore the world of legal services with ease and style on Yuristim.uz.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: yuristim,
    source_code_link: "https://www.yuristim.uz/",
  },
  {
    name: "Mercury (lending)",
    description:
      "Mercury Lending is a sleek and efficient web project, developed using Vue.js, TypeScript, and Tailwind CSS. Despite its simplicity, this platform offers a wealth of information through its well-organized sections. The seamless integration of Vue.js ensures a smooth and interactive user experience, while TypeScript adds a layer of type safety to the codebase. Tailwind CSS contributes to the project's clean and responsive design. Explore the world of lending with Mercury, where simplicity meets functionality.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mercury,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tic tac toe (game)",
    description:
      "Dive into the timeless fun of Tic Tac Toe with this engaging web game. Crafted with precision using JavaScript, HTML, and CSS, this project showcases a seamless blend of functionality and design. Challenge your logical thinking and strategic skills in the classic battle of Xs and Os. With a clean and intuitive interface, this Tic Tac Toe game offers a delightful gaming experience for players of all ages. Enjoy the thrill of competition and test your wits with every move in this nostalgic yet modern rendition of a timeless classic.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://github.com/Abdukhamid000/TIC_TAC_TOE",
  },
];

export { services, technologies, experiences, testimonials, projects };
