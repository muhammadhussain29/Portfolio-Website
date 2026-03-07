import React from "react";
import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

/* ---------- FOOTER DATA ---------- */
const footerData = {
  brand: {
    email: "hussainmuhammad29@gmail.com",
    location: "Hyderabad, Pakistan",
    phone: "+92 315 7332765",
  },
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Frontend Development", href: "/services" },
    { label: "Responsive Web Design", href: "/services" },
    { label: "UI Animation & Interaction", href: "/services" },
    { label: "Full Stack MERN Development", href: "/services" },
    { label: "REST API Development", href: "/services" },
    { label: "Database Integration", href: "/services" },
  ],
  blog: [
    { title: "Getting Started with Next.js 15", href: "/blog/nextjs-15" },
    { title: "Building Scalable APIs with Node.js", href: "/blog/nodejs-apis" },
    { title: "Tailwind CSS Best Practices", href: "/blog/tailwind-tips" },
    { title: "React Server Components Explained", href: "/blog/react-server-components" },
  ],
  featuredProjects: [
    { label: "Solana Landing Page Clone", href: "/#projects" },
    { label: "FashionVista – E-commerce", href: "/#projects" },
    { label: "WeatherWise", href: "/#projects" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/share/1AZzsqNnVp/", icon: Facebook },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-hussain-mughal-213069248/", icon: Linkedin },
    { label: "Instagram", href: "https://www.instagram.com/m_hussain_mughal", icon: Instagram },
    { label: "Github", href: "https://github.com/muhammadhussain29", icon: Github },
  ],
  copyright: "© 2026 Muhammad Hussain. All rights reserved.",
};

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-200 dark:border-primary/20 bg-background-light dark:bg-background-dark px-6 md:px-20">
      {/* BIG BACKGROUND LETTER */}
      <div className="absolute left-16 top-1/2 -translate-y-1/2 text-[500px] font-bold text-white/5 dark:text-primary/5 leading-none select-none pointer-events-none">
        H
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-12">
        {/* TOP SOCIAL ROW */}
        <div className="ml-auto flex md:flex-row flex-col items-end justify-end text-sm uppercase gap-4 tracking-widest text-slate-500 dark:text-slate-400 mb-16">
          {footerData.social.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition flex items-center gap-2"
              >
                <span>
                  <Icon size={18} />
                </span>
                {item.label} ↗
              </a>
            );
          })}
        </div>

        {/* EMAIL */}
        <div className="flex justify-end items-end">
          <a
            href={`mailto:${footerData.brand.email}`}
            className="lg:text-6xl md:text-4xl sm:text-2xl text-xl font-semibold text-right md:pb-4 pb-2 border-b-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition"
          >
            {footerData.brand.email}
          </a>
        </div>

        {/* CONTACT DETAILS */}
        <div className="flex flex-col justify-end items-end leading-normal text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-16 mt-4">
          <p className="lg:text-lg md:text-base text-xs text-right">{footerData.brand.location}</p>
          <a href={`tel:${footerData.brand.phone.replace(/\s/g, "")}`} className="lg:text-lg md:text-base text-xs text-right hover:text-primary transition">
            {footerData.brand.phone}
          </a>
        </div>

        {/* MAIN GRID: Quick Links | Featured Projects | Services | Blog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-end gap-12">
          {/* <div className="hidden md:block" /> */}

          {/* QUICK LINKS */}
          <div className="text-right w-full sm:w-auto">
            <h4 className="text-slate-500 dark:text-slate-400 uppercase text-xs font-semibold mb-6 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-700 dark:text-slate-300 hover:text-primary transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FEATURED PROJECTS */}
          <div className="text-right w-full sm:w-auto">
            <h4 className="text-slate-500 dark:text-slate-400 uppercase text-xs font-semibold mb-6 tracking-wider">
              Featured Projects
            </h4>
            <ul className="space-y-3">
              {footerData.featuredProjects.map((project) => (
                <li key={project.label}>
                  <Link href={project.href} className="text-slate-700 dark:text-slate-300 hover:text-primary transition">
                    {project.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="text-right w-full sm:w-auto">
            <h4 className="text-slate-500 dark:text-slate-400 uppercase text-xs font-semibold mb-6 tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerData.services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-slate-700 dark:text-slate-300 hover:text-primary transition">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BLOG */}
          <div className="text-right w-full sm:w-auto">
            <h4 className="text-slate-500 dark:text-slate-400 uppercase text-xs font-semibold mb-6 tracking-wider">
              Latest from Blog
            </h4>
            <ul className="space-y-3">
              {footerData.blog.map((post) => (
                <li key={post.href}>
                  <Link href={post.href} className="text-slate-700 dark:text-slate-300 hover:text-primary transition">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LINE */}
        <hr className="border-t border-slate-200 dark:border-white/10 w-full mt-10" />

        {/* BOTTOM COPYRIGHT */}
        <div className="text-slate-500 dark:text-slate-500 text-sm text-right mt-6">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
