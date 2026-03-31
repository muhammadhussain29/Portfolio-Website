import {
  Menu,
  MousePointer2,
  ScrollText,
  Sparkles,
  SlidersHorizontal,
  ShoppingBag,
  LayoutGrid,
  Smartphone,
  Route,
  Blocks,
  ShoppingCart,
  Dumbbell,
  Sliders,
  FileText,
  Database,
  LayoutPanelLeft,
  Bell,
  Cpu,
  ListPlus,
  BarChart3,
  Workflow,
  Paintbrush,
  MonitorSmartphone,
  LayoutTemplate,
  Palette,
  Globe,
  Images,
  Mail,
  CloudSun,
  MapPin,
  Search,
  Moon,
  GalleryHorizontal
} from "lucide-react";

export type Project = {
  badge: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  techStack: string[];
  features: { title: string; icon: React.ElementType; desc: string }[];
  challenge: string;
  solution: string;
  role: string;
  duration: string;
  images: string[];
  githubLink: string;
  previewLink: string;
  featured?: boolean;
};

export const projects = [
  {
    featured: false,
    badge: "Frontend",
    name: "Animated Agency Website",
    slug: "animated-agency-website",
    description:
      "A highly interactive and visually engaging agency-style website focused on smooth animations, creative UI interactions, and immersive user experience using modern frontend technologies.",
    category: "Frontend Development",
    techStack: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "GSAP",
      "ScrollTrigger",
      "Vite",
    ],
    techStackItems: {
      frontend: [
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "GSAP",
        "ScrollTrigger",
      ],
      backend: [],
      database: [],
      tools: [
        "Vite",
      ],
    },
    features: [
      {
        title: "Advanced GSAP Animations",
        icon: Sparkles,
        desc: "Implemented smooth and complex animations using GSAP timelines for loader, hero text, and transitions.",
      },
      {
        title: "Scroll-Based Interactions",
        icon: ScrollText,
        desc: "Used ScrollTrigger to create dynamic animations triggered on scroll, including pinned sections and transitions.",
      },
      {
        title: "Custom Cursor Experience",
        icon: MousePointer2,
        desc: "Designed a custom animated cursor that reacts to hover elements for enhanced interactivity.",
      },
      {
        title: "Responsive Navigation System",
        icon: Menu,
        desc: "Built a fully responsive navbar with scroll hide/show behavior and animated mobile menu.",
      },
    ],
    challenge:
      "Managing multiple complex animations without affecting performance and ensuring smooth behavior across different screen sizes.",
    solution:
      "Optimized animation flows using GSAP timelines and ScrollTrigger, reduced unnecessary re-renders, and structured animations efficiently for better performance.",
    role: "Frontend Developer",
    duration: "1-2 Weeks",
    images: [
      "/portfolio/animated1.webp",
      "/portfolio/animated2.webp",
      "/portfolio/animated3.webp",
    ],
    githubLink: "https://github.com/muhammadhussain29/Animated-site-with-GSAP",
    previewLink: "https://muhammadhussain29.github.io/Animated-site-with-GSAP/",
  },
  {
    featured: false,
    badge: "Frontend",
    name: "FashionVista - E-commerce Landing Page",
    slug: "fashionvista-e-commerce-landing-page",
    description:
      "A modern and fully responsive fashion e-commerce landing page built with React and Tailwind CSS, featuring smooth GSAP animations, dynamic UI components, and an engaging user experience tailored for fashion brands.",
    category: "Frontend Development",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "GSAP",
      "@gsap/react",
      "React Icons",
    ],
    features: [
      {
        title: "Animated Hero Slider",
        icon: SlidersHorizontal,
        desc: "Interactive hero section with GSAP-powered slide transitions, dynamic content, and smooth navigation controls.",
      },
      {
        title: "Product Showcase System",
        icon: ShoppingBag,
        desc: "Responsive product grid with pricing, ratings, and interactive hover effects for better user engagement.",
      },
      {
        title: "Component-Based Architecture",
        icon: LayoutGrid,
        desc: "Structured React components for sections like Hero, Products, Blogs, Testimonials, and FAQ for scalability.",
      },
      {
        title: "Fully Responsive UI",
        icon: Smartphone,
        desc: "Optimized layout for all devices using Tailwind CSS ensuring seamless experience across screen sizes.",
      },
    ],
    challenge:
      "Handling complex GSAP animations within React components while maintaining smooth transitions and avoiding DOM conflicts.",
    solution:
      "Used @gsap/react for proper lifecycle management, implemented refs for precise animation targeting, and structured timelines efficiently to ensure smooth and performant animations.",
    role: "Frontend Developer",
    duration: "1-2 Weeks",
    images: [
      "/portfolio/fashion1.webp",
      "/portfolio/fashion2.webp",
      "/portfolio/fashion3.webp",
      "/portfolio/fashion4.webp",
    ],
    githubLink: "https://github.com/muhammadhussain29/E-Commerce-with-React",
    previewLink: "https://muhammadhussain29.github.io/E-Commerce-with-React/",
  },
  {
    featured: true,
    badge: "Frontend",
    name: "FitSync - Modern Gym Website",
    slug: "fitsync-modern-gym-website",
    description:
      "A sleek and fully responsive multi-page gym website built with React and Tailwind CSS, featuring smooth navigation, reusable components, and a modern UI designed to showcase fitness services, products, and user engagement.",
    category: "Frontend Development",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "React Icons",
    ],
    features: [
      {
        title: "Multi-Page SPA Navigation",
        icon: Route,
        desc: "Implemented seamless single-page application navigation using React Router DOM across multiple pages.",
      },
      {
        title: "Modular Component Architecture",
        icon: Blocks,
        desc: "Built reusable components for sections like Home, Products, Gallery, Trainers, and FAQ for scalability and maintainability.",
      },
      {
        title: "Interactive Product & Cart System",
        icon: ShoppingCart,
        desc: "Integrated product context and cart functionality with dynamic UI updates and state management.",
      },
      {
        title: "Responsive Fitness UI",
        icon: Dumbbell,
        desc: "Designed a modern and fully responsive interface optimized for all devices using Tailwind CSS.",
      },
    ],
    challenge:
      "Managing state across multiple pages while maintaining smooth navigation and component reusability in a scalable structure.",
    solution:
      "Used React Context API for shared state management, structured components efficiently, and implemented React Router for seamless navigation without page reloads.",
    role: "Frontend Developer",
    duration: "1-2 Weeks",
    images: [
      "/portfolio/fitsync.webp",
      "/portfolio/fitsync1.webp",
      "/portfolio/fitsync2.webp",
      "/portfolio/fitsync3.webp",
      "/portfolio/fitsync4.webp",
      "/portfolio/fitsync5.webp",
      "/portfolio/fitsync6.webp",
      "/portfolio/fitsync7.webp",
    ],
    githubLink: "https://github.com/muhammadhussain29/FitSync",
    previewLink: "https://muhammadhussain29.github.io/FitSync/",
  },
  {
    featured: false,
    badge: "Frontend",
    name: "CinePop - Movie Streaming Website",
    slug: "cinepop-movie-streaming-website",
    description:
      "A dynamic and responsive movie streaming website built with HTML, CSS, and JavaScript, featuring interactive UI components, custom slider animations, and advanced filtering functionality for an engaging user experience.",
    category: "Frontend Development",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      {
        title: "Custom Slider System",
        icon: Sliders,
        desc: "Built a fully functional movie slider with manual and auto sliding using pure JavaScript and CSS animations.",
      },
      {
        title: "Search & Filter Functionality",
        icon: Search,
        desc: "Implemented dynamic search and genre-based filtering system for movies with real-time UI updates.",
      },
      {
        title: "Interactive UI Animations",
        icon: Sparkles,
        desc: "Created smooth animations for text, slider transitions, and UI elements using custom CSS keyframes.",
      },
      {
        title: "Responsive Layout Design",
        icon: MonitorSmartphone,
        desc: "Designed a fully responsive layout ensuring seamless experience across desktop and mobile devices.",
      },
    ],
    challenge:
      "Implementing complex UI interactions like slider transitions and dynamic filtering without using any frontend framework.",
    solution:
      "Structured JavaScript logic with modular functions, managed DOM efficiently, and used CSS animations to handle smooth transitions and performance.",
    role: "Frontend Developer",
    duration: "1-2 Weeks",
    images: [
      "/portfolio/movie.webp",
      "/portfolio/movie1.webp",
      "/portfolio/movie2.webp",
    ],
    githubLink: "https://github.com/muhammadhussain29/movie-streaming-site",
    previewLink: "https://muhammadhussain29.github.io/movie-streaming-site/",
  },
  {
    featured: false,
    badge: "Frontend",
    name: "Notes Application",
    slug: "notes-application",
    description:
      "A feature-rich notes management application built with React, allowing users to create, edit, delete, and view notes with persistent storage and a clean, intuitive user interface.",
    category: "Frontend Development",
    techStack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Icons",
      "SweetAlert2",
      "UUID",
    ],
    features: [
      {
        title: "Full CRUD Notes System",
        icon: FileText,
        desc: "Implemented complete create, read, update, and delete functionality for managing notes efficiently.",
      },
      {
        title: "Local Storage Persistence",
        icon: Database,
        desc: "Stored notes in browser local storage to maintain data even after page refresh or reload.",
      },
      {
        title: "Interactive UI Panels",
        icon: LayoutPanelLeft,
        desc: "Designed dynamic panels for adding, editing, and viewing notes with smooth user interactions.",
      },
      {
        title: "User-Friendly Alerts & Validation",
        icon: Bell,
        desc: "Integrated SweetAlert2 for confirmation dialogs, validations, and improved user experience.",
      },
    ],
    challenge:
      "Managing state and synchronization between UI components and local storage while ensuring smooth user interactions.",
    solution:
      "Used React hooks like useState and useEffect for state management, implemented controlled components, and synchronized data with local storage efficiently.",
    role: "Frontend Developer",
    duration: "1 Week",
    images: [
      "/portfolio/notes.webp",
      "/portfolio/notes1.webp",
      "/portfolio/notes2.webp",
      "/portfolio/notes3.webp",
    ],
    githubLink: "https://github.com/muhammadhussain29/Notes-with-react",
    previewLink: "https://muhammadhussain29.github.io/Notes-with-react/",
  },
  {
    featured: false,
    badge: "Frontend",
    name: "FCFS Scheduling Visualizer (OS Project)",
    slug: "fcfs-scheduling-visualizer-os-project",
    description:
      "A visual simulation of the First Come First Serve (FCFS) CPU scheduling algorithm, allowing users to add processes and observe execution flow, waiting time, and turnaround time in real-time.",
    category: "Frontend Development",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      {
        title: "FCFS Algorithm Simulation",
        icon: Cpu,
        desc: "Implemented First Come First Serve scheduling logic with real-time process execution visualization.",
      },
      {
        title: "Dynamic Process Management",
        icon: ListPlus,
        desc: "Users can add processes with arrival and burst times dynamically and see them move through queues.",
      },
      {
        title: "Live Metrics Calculation",
        icon: BarChart3,
        desc: "Automatically calculates completion time, turnaround time, waiting time, and averages.",
      },
      {
        title: "Queue Visualization System",
        icon: Workflow,
        desc: "Visual representation of process states including waiting, ready, running, and completed queues.",
      },
    ],
    challenge:
      "Implementing real-time scheduling logic with accurate time tracking and synchronizing UI updates with algorithm execution.",
    solution:
      "Used JavaScript timers and structured arrays to simulate process queues, managed execution flow step-by-step, and updated DOM dynamically for real-time visualization.",
    role: "Frontend Developer",
    duration: "1-2 Weeks",
    images: [
      "/portfolio/os1.webp",
      "/portfolio/os2.webp",
      "/portfolio/os3.webp",
    ],
    githubLink: "https://github.com/muhammadhussain29/OS-Project",
    previewLink: "https://muhammadhussain29.github.io/OS-Project/",
  },
  {
    featured: false,
    badge: "Frontend",
    name: "Burger House - Restaurant Website",
    slug: "burger-house-restaurant-website",
    description:
      "A visually appealing restaurant website built from a PSD design, featuring a modern layout, responsive design, and clean UI to showcase food items, promotions, and reservation functionality.",
    category: "Frontend Development",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    features: [
      {
        title: "PSD to HTML Conversion",
        icon: Paintbrush,
        desc: "Converted a professional design into a fully functional and pixel-perfect responsive website.",
      },
      {
        title: "Responsive Layout System",
        icon: MonitorSmartphone,
        desc: "Implemented responsive design using Bootstrap grid and custom CSS for multiple screen sizes.",
      },
      {
        title: "Modern UI Sections",
        icon: LayoutTemplate,
        desc: "Designed multiple sections including hero, product showcase, promotions, and reservation form.",
      },
      {
        title: "Custom Styling & Effects",
        icon: Palette,
        desc: "Used custom CSS, gradients, shadows, and typography to enhance visual appeal and user experience.",
      },
    ],
    challenge:
      "Maintaining pixel-perfect design accuracy while ensuring responsiveness across different devices.",
    solution:
      "Utilized Bootstrap grid system along with custom CSS adjustments to replicate the design accurately and maintain responsiveness.",
    role: "Frontend Developer",
    duration: "3-5 Days",
    images: [
      "/portfolio/burger.webp",
      "/portfolio/burger1.webp",
      "/portfolio/burger2.webp",
    ],
    githubLink: "https://github.com/muhammadhussain29/PSD-TO-HTML-3",
    previewLink: "https://muhammadhussain29.github.io/PSD-TO-HTML-3/",
  },
  {
    featured: true,
    badge: "Frontend",
    name: "Solana Landing Page Clone",
    slug: "solana-landing-page-clone",
    description:
      "A highly interactive and fully responsive clone of the official Solana website, built using React and GSAP. The project focuses on advanced animations, seamless sliders, and modern UI design to replicate a real-world production-level landing page.",
    category: "Frontend Development",
    techStack: ["React", "Vite", "Tailwind CSS", "GSAP", "React Icons"],
    features: [
      {
        title: "Advanced GSAP Animations",
        icon: Sparkles,
        desc: "Implemented smooth, production-level animations including transitions, hover effects, and animated sections using GSAP.",
      },
      {
        title: "Custom Slider System",
        icon: SlidersHorizontal,
        desc: "Built a fully dynamic slider with autoplay, manual controls, and GSAP-based transitions for smooth navigation.",
      },
      {
        title: "Infinite Scrolling Gallery",
        icon: GalleryHorizontal,
        desc: "Developed a seamless infinite scrolling gallery using GSAP with pause-on-hover functionality.",
      },
      {
        title: "Component-Based Architecture",
        icon: LayoutGrid,
        desc: "Structured the project using reusable React components for scalability and maintainability.",
      },
    ],
    challenge:
      "Recreating complex UI animations and interactive components like sliders and infinite galleries while maintaining performance and smooth user experience.",
    solution:
      "Leveraged GSAP for precise animation control, used React refs for DOM targeting, and optimized component structure to ensure smooth performance and scalability.",
    role: "Frontend Developer",
    duration: "1-2 Weeks",
    images: [
      "/portfolio/solana.webp",
      "/portfolio/solana1.webp",
      "/portfolio/solana2.webp",
      "/portfolio/solana3.webp",
    ],
    githubLink: "https://github.com/muhammadhussain29/solana-landing-clone",
    previewLink: "https://muhammadhussain29.github.io/solana-landing-clone/",
  },
  {
    featured: false,
    badge: "Frontend",
    name: "TechSociety - Community Website",
    slug: "techsociety-community-website",
    description:
      "A modern and responsive website designed for a student-led tech community, featuring multiple sections like events, gallery, team, and contact with smooth animations and interactive UI elements.",
    category: "Frontend Development",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap 5",
      "AOS",
      "Font Awesome",
      "Web3Forms",
    ],
    features: [
      {
        title: "Multi-Page Website Structure",
        icon: Globe,
        desc: "Developed multiple pages including home, gallery, events, team, and contact for a complete website experience.",
      },
      {
        title: "Animated User Experience",
        icon: Sparkles,
        desc: "Integrated AOS animations and preloader to enhance user engagement and visual appeal.",
      },
      {
        title: "Dynamic Gallery System",
        icon: Images,
        desc: "Implemented responsive gallery with lightbox view and load more/show less functionality.",
      },
      {
        title: "Functional Contact Integration",
        icon: Mail,
        desc: "Built a fully functional contact form using Web3Forms API with map and social links integration.",
      },
    ],
    challenge:
      "Managing multiple sections and pages while maintaining consistent design, responsiveness, and smooth animations across the entire website.",
    solution:
      "Used Bootstrap grid system for layout consistency, modular CSS files for organization, and integrated AOS for smooth animations while keeping performance optimized.",
    role: "Frontend Developer",
    duration: "1 Week",
    images: [
      "/portfolio/tech1.webp",
      "/portfolio/tech2.webp",
      "/portfolio/tech3.webp",
      "/portfolio/tech4.webp",
    ],
    githubLink: "https://github.com/muhammadhussain29/Tech-Society",
    previewLink: "https://muhammadhussain29.github.io/Tech-Society/",
  },
  {
    featured: true,
    badge: "Full Stack",
    name: "WeatherWise - Weather Application",
    slug: "weatherwise-weather-application",
    description:
      "A dynamic weather application built with React that provides real-time weather updates, weekly forecasts, and location-based weather data with a clean UI and optimized search experience.",
    category: "Frontend Development",
    techStack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Axios",
      "OpenCage API",
      "Yahoo Weather API",
      "use-debounce",
    ],
    features: [
      {
        title: "Real-Time Weather & Forecast",
        icon: CloudSun,
        desc: "Displays current weather conditions along with a 7-day forecast using live API data.",
      },
      {
        title: "Geolocation-Based Weather",
        icon: MapPin,
        desc: "Fetches weather data automatically based on the user’s current location using browser geolocation.",
      },
      {
        title: "Optimized City Search",
        icon: Search,
        desc: "Implemented debounced search to reduce API calls and improve performance while searching cities.",
      },
      {
        title: "Dark Mode UI",
        icon: Moon,
        desc: "Toggleable dark mode for enhanced user experience and accessibility.",
      },
    ],
    challenge:
      "Handling multiple API integrations while ensuring efficient data fetching and minimizing unnecessary API calls during search.",
    solution:
      "Used Axios for structured API calls, implemented debouncing for search optimization, and managed state efficiently using React hooks.",
    role: "Frontend Developer",
    duration: "1 Week",
    images: [
      "/portfolio/weather.webp",
      "/portfolio/weather1.webp",
      "/portfolio/weather2.webp",
      "/portfolio/weather3.webp",
    ],
    githubLink: "https://github.com/muhammadhussain29/WeatherWise",
    previewLink: "https://muhammadhussain29.github.io/WeatherWise/",
  },
];

export const FeaturedProjects = projects.filter((p) => p.featured);
