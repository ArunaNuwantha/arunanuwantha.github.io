import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  java,
  pixelin,
  enhancedBeatz,
  paraAugmenter,
  gameHub,
  junkFury,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "Database Design and Management",
    icon: ux,
  },
  {
    title: "DevOps and CI/CD",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
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
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
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
    title: "Senior Software Engineer",
    company_name: "Pagero AB",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Sri Lanka",
  },
  {
    title: "Software Engineer",
    company_name: "Synopsys Inc",
    icon: microverse,
    iconBg: "#333333",
    date: "Sri Lanka",
  },
  {
    title: "Full Stack Developer",
    company_name: "Treble Solutions",
    icon: kelhel,
    iconBg: "#333333",
    date: "Sri Lanka",
  },
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Diversity Cyber Council",
  //   icon: dcc,
  //   iconBg: "#333333",
  //   date: "Sep 2022 - Present",
  // },
];

const projects = [
  {
    id: "project-1",
    name: "Pixelin",
    description:
      "A collaborative pixel drawing web application that allows users to create and share pixel art in real-time.",
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
    image: pixelin,
    repo: "",
    demo: "https://pixelin-alpha.vercel.app/",
  },
  {
    id: "project-2",
    name: "Enhance Beatz",
    description:
      "Say goodbye to unwanted breathing sounds and hello to crystal-clear beats with our cutting-edge AI-powered technology.",
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
    image: enhancedBeatz,
    repo: "",
    demo: "https://enhance-beatz.vercel.app/",
  },

  {
    id: "project-3",
    name: "Para Augmenter",
    description:
      "Type your text, let our AI enhance it, and explore dynamic, tailored results instantly.",
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
    image: paraAugmenter,
    repo: "",
    demo: "https://para-augmenter.vercel.app/chat",
  },
  {
    id: "project-4",
    name: "Game Hub",
    description: `A single-page application that allows users to search for any games ratings and its details.`,
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
    image: gameHub,
    repo: "https://github.com/ArunaNuwantha/game-hub",
    demo: "",
  },
  {
    id: "project-5",
    name: "Junk Fury",
    description:
      "A 2D game raising awareness about sea pollution through exciting gameplay.",
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
    image: junkFury,
    repo: "https://github.com/ArunaNuwantha/junk_fury",
    demo: "",
  },
];

export { services, technologies, experiences, projects };
