import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python3,
    CSharp,
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
      title: "Developer",
      icon: web,
    },
    {
      title: "Polygot",
      icon: mobile,
    },
    {
      title: "Pianist",
      icon: backend,
    },
    {
      title: "Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python 3",
      icon: python3,
    },
    {
      name: "C#",
      icon: CSharp,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Germany Exchange Program",
      company_name: "YFU",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jul 2018 - Jul 2019",
      points: [
        "Attended high school in Germany for one year.",
        "Developed proficiency in German and formed deep bond with German people and culture." ,
        "Volunteered Interviewing YFU exchange program candidates.",
    ],
    },
    {
      title: "Facility Assistant",
      company_name: "Georgia Tech Campus Recreation Center",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2023 - Oct 2023",
      points: [
        "Trained to use customer service software.",
        "Organized, cleaned, and stocked racks and shelves to maintain store visual appeal.",
      ],
    },
    {
      title: "Sales Associate",
      company_name: "Jmart USA",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
        "Managed Main Equipment Issue stations and ensured patron satisfaction.",
        "Maintained professional interactions and a safe workspace.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Leona is ambitious, studious, and a quick learner. I can always count on her on coding projects!",
      name: "Grace Shao",
      designation: "Networking Lead",
      company: "Girls Who Code",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Aminated AI Chatbot Web App",
      description:
        "Developed in a team of 6 a website allowing users to chat with AI, with responses visualized as dynamic particles reflecting tone and emotion for enhanced immersion.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "THREEJS",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/tarant3/VIP-Project",
    },
    {
      name: "2D dungeon crawler",
      description:
        "Developed mobile-friendly dungeon crawler game in a team of 5.",
      tags: [
        {
          name: "solid principle",
          color: "blue-text-gradient",
        },
        {
          name: "unit tests",
          color: "green-text-gradient",
        },
        {
          name: "agile",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/hyacheung/CS2340B_Team50/tree/main",
    },
    {
      name: "Shooter Game",
      description:
        "Created a 2D shooter game that allows users to jump, pick-up and attack independently.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };