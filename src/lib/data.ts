import { Trophy, Award, Star, GitFork } from "lucide-react";

export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with a modern UI, product filtering, and a secure checkout process.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/600x400.png",
    imageHint: "ecommerce platform",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool for teams with real-time updates and drag-and-drop functionality.",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/600x400.png",
    imageHint: "task management",
  },
  {
    title: "Interactive Portfolio",
    description: "This very portfolio, showcasing skills with animations and an interactive codex theme.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/600x400.png",
    imageHint: "portfolio abstract",
  },
    {
    title: "Data Visualization Dashboard",
    description: "A powerful dashboard for visualizing complex datasets with interactive charts and graphs.",
    technologies: ["React", "D3.js", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/600x400.png",
    imageHint: "data dashboard",
  },
];

export const achievements = [
  {
    icon: Trophy,
    title: "1st Place Hackathon 2023",
    description: "Awarded for building an innovative solution for local communities in under 48 hours.",
  },
  {
    icon: Award,
    title: "Certified AWS Developer",
    description: "Associate-level certification demonstrating expertise in AWS cloud services.",
  },
  {
    icon: Star,
    title: "Top-Rated Freelancer",
    description: "Consistently received 5-star ratings and positive feedback on multiple freelance platforms.",
  },
  {
    icon: GitFork,
    title: "Open Source Contributor",
    description: "Actively contributed to several open-source projects, including documentation and bug fixes.",
  },
];

export const contact = {
  telegram: "https://t.me/zafarovpolat",
  github: "https://github.com/Zafarovpolat",
  cv: "https://zafarovpolat.github.io/cv/Polat_Zafarov_CV.pdf",
};

export const about = {
  description: "I'm a Frontend Developer based in Tashkent, Uzbekistan, with a passion for building beautiful, responsive, and user-friendly web applications.",
  details: "With 4 years of experience, I've honed my skills in modern web technologies, always striving to write clean, efficient, and maintainable code. I enjoy turning complex problems into simple, beautiful, and intuitive designs."
};

export const skills = [
  {
    category: "Frontend",
    technologies: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux Toolkit", "Vue.js", "Vuex"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js"],
  },
  {
    category: "Tools & Other",
    technologies: ["Git", "GitHub", "REST API", "Webpack", "Vite", "Figma", "Adobe Photoshop", "Telegram Bot"],
  },
];
