import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chisomo Chiweza",
  initials: "CC",
  location: "Blantyre, Malawi, UTC +2",
  locationLink: "https://www.google.com/maps/place/Blantyre",
  about: "Software Engineer exploring problems with code.",
  summary:
    "I am an early-stage software engineer learning to apply my theoretical computer science background to the problems of enterprise software development. To a new challenge, I bring an innate curiosity, creativity, tenacious research skills and a genuine love for programming. Ever the lifelong learner, I aspire to produce quality software that prioritizes robustness, security and good architectural design",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "chisomochiweza@proton.me",
    tel: "+265881931635",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mwprogrammer",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chisomochiweza/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Malawi",
      degree: "Bachelor of Science in Computer Science",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "NBS Bank Plc.",
      link: "https://nbs.mw/",
      badges: [""],
      title: "Systems Development Intern",
      start: "September 2023",
      end: "Present",
      description:
        "Currently undertaking an intensive but meaningful training opportunity at NBS Bank to be a Systems Developer. Here, I have the chance to learn about the Fintech industry and as a result explore the intersection between software engineering and business. In addition to being introduced to new technologies, I am also learning about how to build enterprise software, it's best practices, architectural patterns and design, project management and technical leadership.",
    },
    {
      company: "Electricity Supply Corporation in Malawi",
      link: "https://www.escom.mw/",
      badges: [""],
      title: "Government Graduate Intern",
      start: "July 2023",
      end: "September 2023",
      description:
        "Was placed in ESCOM's ICT Department where I directly reported to the Systems Development ICT Officer. Upon being given the opportunity to work on the ESCOM 360 degree project, I researched the feasibility of porting ESCOM services to the Whatsapp business platform as an automated chatbot and implemented the bulk of the project. This experience matured the programming skills I developed pursuing my Computer Science degree and gave me my first taste of what it's like to work in a team.",
    },
  ],
  skills: [
    "JavaScript",
    "C#",
    "SQL",
    "ReactJS",
    "Node.js",
    "ASP.NET",
    "Microsoft SQL SERVER",
    "REST API Development",
    "Microservices Architecture",
  ],
  projects: [
    {
      title: "cloud api npm package",
      techStack: ["Government Graduate Intern", "JavaScript", "Nodejs"],
      description:
        "A modified port of the original package developed by Douglas Mwangi",
      link: {
        label: "cloud api npm package",
        href: "https://github.com/mwprogrammer/whatsappcloudapi_wrapper",
      },
    },
    {
      title: "movemalawi.org",
      techStack: ["Volunteering", "HTML/CSS", "JavaScript", "TailwindCSS"],
      description: "Website built for Move Malawi.",
      link: {
        label: "movemalawi.org",
        href: "https://movemalawi.org/",
      },
    },
  ],
} as const;
