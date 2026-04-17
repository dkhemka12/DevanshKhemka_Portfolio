const siteData = {
  profile: {
    name: "Devansh Khemka",
    shortName: "DK",
    role: "Full Stack Developer",
    accentRole: "Product Builder",

    email: "khemkadevansh.dk@gmail.com",
    phone: "+91 7002281310",
    location: "India",

    availability: "Open to internships and collaboration",

    intro:
      "I build full-stack web applications and learn by creating real projects. I focus on making things work well, feel smooth, and solve actual problems.",

    about:
      "I’m a Software Product Engineering student at Kalvium (in partnership with Lovely Professional University). I build full-stack applications using React, Node.js, and MongoDB, and I enjoy improving performance, animations, and user experience through real projects.",

    ctaTitle:
      "Have an idea or want to collaborate? Let’s build something together.",
  },

  navigation: [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ],

  // 🔥 SKILLS (structured properly for UI)
  skills: {
    frontend: [
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    ],

    backend: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express" },
    ],

    database: [
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    ],

    auth: [
      { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens" },
      { name: "bcrypt", icon: "https://cdn-icons-png.flaticon.com/128/737/737596.png" }, 
      { name: "dotenv", icon: "https://cdn.simpleicons.org/dotenv" },
    ],

    realtime: [
      { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/postman" },
    ],

    tools: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { name: "Nodemon", icon: "https://cdn.simpleicons.org/nodemon" },
    ],

    concepts: [
      "CRUD Operations",
      "MVC Architecture",
      "Client-Server Architecture",
      "Asynchronous Programming",
      "API Integration",
    ],
  },

  // 🔥 PROJECTS (with real structure)
  projectHighlights: [
    {
      id: 1,
      name: "Healthcare System",
      image:
        "https://cdn.dribbble.com/userupload/5805299/file/original-158047e8a97cf299613857bd3f04d4ec.png?resize=752x&vertical=center",
      category: "Full Stack",
      summary:
        "A full-stack doctor-patient platform for managing appointments and healthcare interactions.",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      name: "Chat App",
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
      category: "Real-time App",
      summary:
        "A real-time messaging application built using WebSockets for instant communication.",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      name: "Weather App",
      image:
        "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1200&q=80",
      category: "API Project",
      summary:
        "A weather application that fetches and displays real-time data using external APIs.",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      name: "Notes App",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
      category: "MERN Stack",
      summary:
        "A CRUD-based notes application for managing tasks and personal notes efficiently.",
      github: "#",
      live: "#",
    },
  ],

  // 🔥 CURRENT LEARNING (important for growth signal)
  learning: [
    "Docker",
    "Backend Optimization",
    "System Design",
  ],

  // 🔥 SOCIALS
  socials: [
    { label: "GitHub", href: "https://github.com/dkhemka12" },
    { label: "LinkedIn", href: "https://linkedin.com/in/devanshkhemka" },
    { label: "Email", href: "mailto:khemkadevansh.dk@gmail.com" },
  ],
};

export default siteData;