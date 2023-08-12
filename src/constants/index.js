import {
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
  next,
  solidity,
  python,
  ethereum,
  fullstack,
  weather,
  netflix,
  shareit,
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
    title: "Frontend Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  {
    title: "Fullstack Developer",
    icon: fullstack,
  },
  {
    title: "Web3 Developer",
    icon: ethereum,
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
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next js",
    icon: next,
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
    name: "Redux",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "This web app lets users search for weekly weather forecasts of cities, fetching real-time data via an API, including details like humidity and wind speed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Geo api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/rameshvoodi/weather-app",
  },
  {
    name: "Netflix clone",
    description:
      "This Netflix clone features authentication, allowing users to log in and enjoy videos of their preferred genres and pin them. The database is managed using Prismadb.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/rameshvoodi/netflix-clone",
  },
  {
    name: "Share it",
    description:
      "A social media app where users save pictures based on categories. It utilizes Google authentication and also allows users to create and share their own posts.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shareit,
    source_code_link: "https://github.com/rameshvoodi/shareit",
  },
];

export { services, technologies, projects };
