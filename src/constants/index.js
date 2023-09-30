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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ltimindtree,
  vyorius,
  chegg,
  weatherapp,
  searchandrescue,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
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
    title: "Senior Consultant",
    company_name: "LTIMindtree",
    icon: ltimindtree,
    iconBg: "#383E56",
    date: "July 2021 - October 2023",
    points: [
      "Developing frontend interfaces for in-house enterprise applications.",
      "Administering(patching, purging, upgrading, scheduling) fully fledged SOA/OIC/Linux applications for flagship metal manufacturing client.",
      "Developing APIs and Integrations using Oracle Integration Cloud",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developing automation pipelines(DevOps) and scripts for automated deployments.",
      "Tools: React, Redux, javascript, OracleCloudInfra, Python, Weblogic, OracleSOASuite",
    ],
  },
  {
    title: "FullStack Development Intern",
    company_name: "Vyorius Drones",
    icon: vyorius,
    iconBg: "#E6DEDD",
    date: "Apr 2020 - July 2020",
    points: [
      "Vyorius is a SaaS platform for mobile unmanned robots, bringing all of the command, control, supervision, management, asset tracking and maintenance tools in one place",
      "Developed frontend prototype using open source tools and javascript for geospatial data collection and visualization",
      "Built python based REST API to convert vector O.S.M. data to raster data and find a suitable path for drone travel.",
      "Tools : JavaScript, React, Leaflet.js, OpenStreetMaps, Python, Github, ElasticSearch,Django",
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
    name: "Search and Rescue",
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
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "leafleat.js",
        color: "green-text-gradient",
      },
    ],
    image: searchandrescue,
    source_code_link: "https://github.com/nikhilnagargit/Search-And-Rescue",
    live_demo: "https://github.com/nikhilnagargit/Search-And-Rescue",
  },
  {
    name: "Weather Forcaster",
    description:
      "Fully responsive PWA application that enables users to search and save weather info all around the world.",
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
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/nikhilnagargit/weatherapp",
    live_demo: "https://nimble-melba-ecc87f.netlify.app/",
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
    live_demo: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
