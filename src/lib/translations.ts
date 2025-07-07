import { Trophy, Award, Star, GitFork, type LucideIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  imageHint: string;
}

interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Skill {
    category: string;
    technologies: string[];
}

interface Translations {
  [key: string]: {
    meta: {
      title: string;
      description: string;
    };
    nav: {
      about: string;
      skills: string;
      projects: string;
      achievements: string;
      github: string;
    };
    hero: {
      subtitle: string;
      button: string;
    };
    about: {
      title: string;
      description: string;
      details: string;
      button: string;
    };
    skills: {
      title: string;
      subtitle: string;
      items: Skill[];
    };
    projects: {
      title: string;
      subtitle: string;
      items: Project[];
    };
    achievements: {
      title: string;
      subtitle: string;
      items: Achievement[];
    };
    contact: {
      title: string;
      subtitle: string;
      telegram: string;
    };
    footer: {
      rights: string;
    }
  };
}

export const translations: Translations = {
  en: {
    meta: {
      title: "Polat Zafarov | Frontend Developer",
      description: "Interactive portfolio of Polat Zafarov, a frontend developer with 4 years of experience.",
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      achievements: "Achievements",
      github: "GitHub",
    },
    hero: {
      subtitle: "Frontend Developer with 4 years of experience crafting beautiful and performant web experiences.",
      button: "View My Work",
    },
    about: {
      title: "About Me",
      description: "I'm a Frontend Developer based in Tashkent, Uzbekistan, with a passion for building beautiful, responsive, and user-friendly web applications.",
      details: "With 4 years of experience, I've honed my skills in modern web technologies, always striving to write clean, efficient, and maintainable code. I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
      button: "Contact"
    },
    skills: {
      title: "My Skills",
      subtitle: "Technologies and tools I work with.",
      items: [
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
      ]
    },
    projects: {
      title: "My Work",
      subtitle: "A selection of projects I'm proud of.",
      items: [
        {
          title: "Script Marketplace",
          description: "A platform for buying and selling reusable code scripts, built with React and Supabase.",
          technologies: ["React", "CSS", "Supabase", "Node.js"],
          liveUrl: "https://tstn.onrender.com/",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "code marketplace",
        },
        {
          title: "FUTURA Architects",
          description: "A modern and stylish website for an architectural bureau, featuring smooth animations with GSAP.",
          technologies: ["HTML", "CSS", "jQuery", "GSAP"],
          liveUrl: "https://futura-architects.com/",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "architecture website",
        },
        {
          title: "University Website",
          description: "An informational website for a technical university, built with a clean and responsive design.",
          technologies: ["HTML", "SCSS", "JavaScript"],
          liveUrl: "https://zafarovpolat.github.io/TDTU/",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "university campus",
        },
        {
          title: "Food Ideology",
          description: "A visually engaging website for a food company, using Next.js and Framer Motion for dynamic animations.",
          technologies: ["Next.js", "CSS", "Framer Motion"],
          liveUrl: "https://iye-81rw.onrender.com/",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "food delivery",
        },
      ],
    },
    achievements: {
      title: "Achievements & Recognition",
      subtitle: "Milestones that mark my journey.",
      items: [
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
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project in mind or just want to say hi? Let's connect.",
      telegram: "Telegram",
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  ru: {
    meta: {
        title: "Полат Зафаров | Фронтенд-разработчик",
        description: "Интерактивное портфолио Полата Зафарова, фронтенд-разработчика с 4-летним опытом.",
    },
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      achievements: "Достижения",
      github: "GitHub",
    },
    hero: {
      subtitle: "Фронтенд-разработчик с 4-летним опытом создания красивых и производительных веб-интерфейсов.",
      button: "Мои работы",
    },
    about: {
      title: "Обо мне",
      description: "Я фронтенд-разработчик из Ташкента, Узбекистан. Моя страсть — создание красивых, адаптивных и удобных веб-приложений.",
      details: "За 4 года опыта я отточил свои навыки в современных веб-технологиях, всегда стремясь писать чистый, эффективный и поддерживаемый код. Мне нравится превращать сложные проблемы в простые, красивые и интуитивно понятные решения.",
      button: "Связаться"
    },
    skills: {
      title: "Мои навыки",
      subtitle: "Технологии и инструменты, с которыми я работаю.",
      items: [
        {
          category: "Фронтенд",
          technologies: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux Toolkit", "Vue.js", "Vuex"],
        },
        {
          category: "Бэкенд",
          technologies: ["Node.js", "Express.js"],
        },
        {
          category: "Инструменты и прочее",
          technologies: ["Git", "GitHub", "REST API", "Webpack", "Vite", "Figma", "Adobe Photoshop", "Telegram Bot"],
        },
      ]
    },
    projects: {
      title: "Мои работы",
      subtitle: "Подборка проектов, которыми я горжусь.",
      items: [
        {
          title: "Маркетплейс скриптов",
          description: "Платформа для покупки и продажи готовых скриптов, созданная с использованием React и Supabase.",
          technologies: ["React", "CSS", "Supabase", "Node.js"],
          liveUrl: "https://tstn.onrender.com/",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "code marketplace",
        },
        {
          title: "FUTURA Architects",
          description: "Современный и стильный сайт для архитектурного бюро с плавными анимациями на GSAP.",
          technologies: ["HTML", "CSS", "jQuery", "GSAP"],
          liveUrl: "https://futura-architects.com/",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "architecture website",
        },
        {
          title: "Сайт для университета",
          description: "Информационный сайт для технического университета, созданный с чистым и адаптивным дизайном.",
          technologies: ["HTML", "SCSS", "JavaScript"],
          liveUrl: "https://zafarovpolat.github.io/TDTU/",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "university campus",
        },
        {
          title: "Идеология Еды",
          description: "Визуально привлекательный сайт для пищевой компании, использующий Next.js и Framer Motion для динамичных анимаций.",
          technologies: ["Next.js", "CSS", "Framer Motion"],
          liveUrl: "https://iye-81rw.onrender.com/",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "food delivery",
        },
      ],
    },
    achievements: {
      title: "Достижения и признание",
      subtitle: "Вехи, отмечающие мой путь.",
      items: [
        {
          icon: Trophy,
          title: "1-е место на Хакатоне 2023",
          description: "Награжден за создание инновационного решения для местных сообществ менее чем за 48 часов.",
        },
        {
          icon: Award,
          title: "Сертифицированный разработчик AWS",
          description: "Сертификация уровня Associate, подтверждающая опыт работы с облачными сервисами AWS.",
        },
        {
          icon: Star,
          title: "Фрилансер с высшим рейтингом",
          description: "Постоянно получал 5-звездочные оценки и положительные отзывы на нескольких фриланс-платформах.",
        },
        {
          icon: GitFork,
          title: "Участник Open Source",
          description: "Активно участвовал в нескольких проектах с открытым исходным кодом, включая документацию и исправление ошибок.",
        },
      ],
    },
    contact: {
      title: "Свяжитесь со мной",
      subtitle: "Есть проект на уме или просто хотите поздороваться? Давайте пообщаемся.",
      telegram: "Telegram",
    },
    footer: {
      rights: "Все права защищены."
    }
  },
};

export const contactInfo = {
  telegram: "https://t.me/zafarovpolat",
  github: "https://github.com/Zafarovpolat",
  cv: "https://zafarovpolat.github.io/cv/Polat_Zafarov_CV.pdf",
};
