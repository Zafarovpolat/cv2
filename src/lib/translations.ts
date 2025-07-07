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
          title: "E-commerce Платформа",
          description: "Полнофункциональный интернет-магазин с современным интерфейсом, фильтрацией товаров и безопасным процессом оформления заказа.",
          technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
          liveUrl: "#",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "ecommerce platform",
        },
        {
          title: "Приложение для управления задачами",
          description: "Совместный инструмент для управления задачами для команд с обновлениями в реальном времени и функцией перетаскивания.",
          technologies: ["Vue.js", "Firebase", "Vuetify"],
          liveUrl: "#",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "task management",
        },
        {
          title: "Интерактивное портфолио",
          description: "Это самое портфолио, демонстрирующее навыки с анимациями и интерактивной темой кодекса.",
          technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
          liveUrl: "#",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "portfolio abstract",
        },
        {
          title: "Панель визуализации данных",
          description: "Мощная панель для визуализации сложных наборов данных с интерактивными диаграммами и графиками.",
          technologies: ["React", "D3.js", "Express.js"],
          liveUrl: "#",
          githubUrl: "#",
          image: "https://placehold.co/600x400.png",
          imageHint: "data dashboard",
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
