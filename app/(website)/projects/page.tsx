"use client";

import {
  projects,
  type ProjectCategory,
  type ProjectItem,
} from "@/constant/data";
import CTA from "@/components/website/CTA";
import HeroSection from "@/components/website/HeroSection";
import {
  Code2,
  ExternalLink,
  Github,
  Layers,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const FEATURE_DETAIL_ICONS = [
  ShieldCheck,
  Sparkles,
  Layers,
  Code2,
  LayoutGrid,
] as const;

const FILTERS: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
];

const STATS = [
  { value: "50+", label: "Total Projects", accent: true },
  { value: "32", label: "MERN Apps", accent: false },
  { value: "12", label: "Open Source", accent: false },
  { value: "99%", label: "Happy Clients", accent: true },
] as const;

function defaultStackBadge(project: ProjectItem) {
  if (project.stackBadge) return project.stackBadge;
  return project.tech.slice(0, 2).join(" + ");
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof FILTERS)[number]["id"]>("all");

  const featuredProject = useMemo(
    () => projects.find((p) => p.featured) ?? projects[0],
    [],
  );

  const gridProjects = useMemo(() => {
    return projects.filter((p) => {
      if (activeFilter === "all") return true;
      return p.category === activeFilter;
    });
  }, [activeFilter]);

  return (
    <>
      <HeroSection
        heading="Projects I've Built"
        description="MERN Stack Developer specializing in high-performance, scalable web applications with glassmorphic UI. Explore my latest digital experiences."
        badge="Available for Projects"
        buttons={[
          {
            href: "https://github.com/muhammadhussain29",
            label: "View My Github",
          },
        ]}
      />

      {/* Featured Project */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        <div className="bg-primary/5 backdrop-blur-md border border-primary/20 rounded-4xl overflow-hidden flex flex-col lg:flex-row hero-glow">
          <div className="lg:w-3/5 relative overflow-hidden group min-h-[220px] lg:min-h-0">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={featuredProject.title}
              className="w-full h-full min-h-[220px] object-cover aspect-video lg:aspect-auto lg:min-h-[320px] scale-105 group-hover:scale-100 transition-transform duration-700"
              src={featuredProject.preview}
            />
          </div>
          <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center min-w-0">
            <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-2">
              Featured Project
            </span>
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 dark:text-white">
              {featuredProject.title}
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {featuredProject.description}
            </p>
            <ul className="space-y-3 mb-8">
              {featuredProject.features.slice(0, 5).map((feature, index) => {
                const Icon =
                  FEATURE_DETAIL_ICONS[index % FEATURE_DETAIL_ICONS.length];
                return (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Icon
                      className="text-primary size-5 shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              {featuredProject.demo ? (
                <Link
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold text-center hover:opacity-90 transition-opacity"
                >
                  Live Demo
                  <ExternalLink className="size-4" aria-hidden />
                </Link>
              ) : (
                <span className="flex-1 inline-flex items-center justify-center gap-2 bg-primary/40 text-white/90 py-3 rounded-xl font-bold text-center cursor-not-allowed">
                  Demo soon
                </span>
              )}
              <Link
                href={
                  featuredProject.github ||
                  "https://github.com/muhammadhussain29"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary/5 backdrop-blur-md border border-primary/20 text-white py-3 rounded-xl font-bold text-center hover:bg-white/5 transition-colors"
              >
                <Github className="size-4" aria-hidden />
                {featuredProject.github ? "GitHub" : "My GitHub"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeFilter === id}
              onClick={() => setActiveFilter(id)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors ${
                activeFilter === id
                  ? "bg-primary text-white"
                  : "bg-primary/5 backdrop-blur-md border border-primary/20 hover:bg-white/5 text-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {gridProjects.length === 0 ? (
            <p className="col-span-full text-center text-slate-400 py-12">
              No projects in this category yet.
            </p>
          ) : (
            gridProjects.map((project, index) => (
              <article
                key={index}
                className="group bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(13,13,242,0.15)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={project.preview}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full max-w-[85%] truncate inline-block">
                      {defaultStackBadge(project)}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 min-h-0">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-slate-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-sm text-slate-400 mb-6 line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <div className="flex gap-3 mt-auto">
                    {project.demo ? (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary/5 backdrop-blur-md border border-primary/20 text-xs font-bold py-2.5 rounded-lg hover:bg-primary transition-all"
                      >
                        DEMO
                        <ExternalLink className="size-3.5" aria-hidden />
                      </Link>
                    ) : (
                      <span className="flex-1 inline-flex items-center justify-center bg-primary/5 backdrop-blur-md border border-primary/20 text-xs font-bold py-2.5 rounded-lg text-slate-500 cursor-not-allowed">
                        DEMO
                      </span>
                    )}
                    <Link
                      href={
                        project.github || "https://github.com/muhammadhussain29"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary/5 backdrop-blur-md border border-primary/20 text-xs font-bold py-2.5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Github className="size-3.5" aria-hidden />
                      GITHUB
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-24">
        <div className="px-6 py-16 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  className={`text-4xl md:text-5xl font-black mb-2 ${
                    stat.accent ? "text-primary" : "text-white"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium uppercase tracking-widest text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Have a project in mind?"
        description="Let's build something amazing together. I'm currently open to new opportunities and interesting projects."
        button={{ href: "/contact", label: "Get in Touch" }}
      />
    </>
  );
}
