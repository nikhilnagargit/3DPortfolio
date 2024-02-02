import {
  cloud,
  devops,
  integration,
  react,
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
  threejs,
  ltimindtree,
  vyorius,
  weatherapp,
  searchandrescue,
  resume,
  aigenie,
  azure,
  nextjs,
  oracle,
  workoutapp,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#projects",
    title: "Projects",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: resume,
    title: "Resume",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: react,
  },
  {
    title: "Integrations/API Development",
    icon: integration,
  },
  {
    title: "DevOps/CI-CD Automation",
    icon: devops,
  },
  {
    title: "Cloud Services Administration",
    icon: cloud,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "React Native",
    icon: reactjs,
  },

  {
    name: "TypeScript",
    icon: typescript,
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
  {
    name: "oracle cloud",
    icon: oracle,
  },
  {
    name: "azure",
    icon: azure,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "LTIMindtree - Mumbai",
    icon: ltimindtree,
    iconBg: "#383E56",
    date: "July 2021 - October 2023",
    points: [
      "Developed and supported multistep workflow application for SX cloud using React, Formik, Redux, RTK, React-router, hooks and tailwind.css for flagship metal manufacturing client. Custom SX application was used to track, approve, integrate and manage the metal/raw material suppliers all over the India.",
      "Contriubing Integration Command Centre (ICC) application dashboard using Next.js, React, Redux, Typescript, SASS, HOC which required dynamic loading for 20000+ rows, with pagination feature. Conducted unit tests, integration tests for critical workflows using Jest and React Testing Library.",
      "Achieved expertise in Oracle Integration Cloud for developing REST/SOAP API endpoints. Administered 8+ SOA and OIC environments (Patching, Tuning, Installation, ESS, Upgrade) on oracle Linux and Cloud Infrastructure. Enclosed 200+ CRs/SRs/Bugs from SIT, UAT and PROD environments during fiscal year 2023.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Vyorius Drones - Delhi",
    icon: vyorius,
    iconBg: "#E6DEDD",
    date: "Delhi, Apr 2020 - August 2020",
    points: [
      "Vyorius is a SaaS platform for UAVs bringing all of the command, control, supervision, management, asset tracking and maintenance tools in one place",
      "Developed frontend prototype using open-source tools, Python, React and Redux for geospatial data collection and visualization.",
      "Utilized Data Structures and Algorithms knowledge to find optimal paths for drone travel to achieve timebound medical equipment delivery.",
      "Leveraged free OpenStreetMap API, JavaScript, Leaflet.js, Django REST Framework for visualizing drone travel on web.",
      ,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He has done a great job in customizing existing order booking platform for our site. Indeed, He is very supportive.",
    name: "Dheeraj Prajapati",
    designation: "Founder",
    company: "Kruds",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their client's success like this guy does.",
    name: "Chris Evans",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "AI Genie",
    description:
      "A generative AI based application to demonstrate the latest usecase emegred after chat GPT boom. you can generate images,videos and many more from the prompt.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk Authentication",
        color: "pink-text-gradient",
      },
      {
        name: "ShadCN UI",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
    ],
    image: aigenie,
    source_code_link: "https://github.com/nikhilnagargit/genius-ai-saas",
    live_demo: "https://ai-genie-by-nikhil.netlify.app/",
  },
  {
    name: "Search and Rescue",
    description:
      "Web based platform for SAR operations, aim to find missing objects with minimum time in a determined area. This Application uses gis, maps and algorithms to find out the estimated area where an aircraft would be, and then the search team can use this Map and other details to locate the lost Aircraft.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
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
      {
        name: "openStreetMaps",
        color: "blue-text-gradient",
      },
    ],
    image: searchandrescue,
    source_code_link: "https://github.com/nikhilnagargit/Search-And-Rescue",
    live_demo: "https://github.com/nikhilnagargit/Search-And-Rescue",
  },
  {
    name: "Stretch Mobile App",
    description:
      "Developed for local gym client. This workout tracking app is designed to help you stay motivated and on track, all while providing you information along with on-device notifications.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "redux-tool-kit",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "expo-router",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: workoutapp,
    source_code_link: "https://github.com/nikhilnagargit/workout-app",
    live_demo: "https://github.com/nikhilnagargit/workout-app",
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
];

export { services, technologies, experiences, testimonials, projects };
