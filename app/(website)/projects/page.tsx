"use client";

import CTA from "@/components/website/CTA";
import HeroSection from "@/components/website/HeroSection";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FeaturedProjects } from "@/constant/projects";
import { projects } from "@/constant/projects";
import ProjectCard from "@/components/website/ProjectCard";
import Image from "next/image";

const FILTERS: { id: "all" | string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
];

// const STATS = [
//   { value: projects.length, label: "Total Projects", accent: true },
//   { value: projects.filter((project) => project.category === "MERN Apps").length, label: "MERN Apps", accent: false },
//   { value: projects.filter((project) => project.category === "Open Source").length, label: "Open Source", accent: false },
//   { value: projects.filter((project) => project.category === "Happy Clients").length, label: "Happy Clients", accent: true },
// ] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof FILTERS)[number]["id"]>("all");

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
        <div className="bg-primary/5 backdrop-blur-md border border-primary/20 rounded-4xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative overflow-hidden group w-full">
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" /> */}

            {/* Image */}
            <Image
              src={FeaturedProjects[0]?.images?.[0] || "/images/not-found.webp"}
              alt={FeaturedProjects[0]?.name || "Project Image"}
              fill
              className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 w-full h-full"
              // sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center min-w-0">
            <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-2">
              Featured Project
            </span>
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 dark:text-white">
              {FeaturedProjects[0].name}
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {FeaturedProjects[0].description}
            </p>
            <ul className="space-y-3 mb-8">
              {FeaturedProjects[0].features.map((feature) => {
                return (
                  <li
                    key={feature.title}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <feature.icon
                      className="text-primary size-5 shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span>{feature.title}</span>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              {FeaturedProjects[0].previewLink ? (
                <Link
                  href={FeaturedProjects[0].previewLink}
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
                  FeaturedProjects[0].githubLink ||
                  "https://github.com/muhammadhussain29"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary/5 backdrop-blur-md border border-primary/20 text-white py-3 rounded-xl font-bold text-center hover:bg-white/5 transition-colors"
              >
                <Github className="size-4" aria-hidden />
                {FeaturedProjects[0].githubLink ? "GitHub" : "My GitHub"}
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
          {projects.length === 0 ? (
            <p className="col-span-full text-center text-slate-400 py-12">
              No projects in this category yet.
            </p>
          ) : (
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          )}
        </div>
      </div>

      {/* Stats */}
      {/* <section className="max-w-7xl mx-auto px-6 md:px-20 mb-24">
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
      </section> */}

      <CTA
        heading="Have a project in mind?"
        description="Let's build something amazing together. I'm currently open to new opportunities and interesting projects."
        button={{ href: "/contact", label: "Get in Touch" }}
      />
    </>
  );
}
