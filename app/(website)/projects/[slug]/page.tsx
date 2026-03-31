"use client";

import CTA from "@/components/website/CTA";
import { ArrowRight, Brain, Code2, Rocket, Zap } from "lucide-react";
import { useParams } from "next/navigation";
import { projects } from "@/constant/projects";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/website/ProjectCard";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-12 items-center py-24 min-h-screen">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {project.badge}
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight gradient-text">
            {project.name}
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            {/* {project.challenge} */}
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={project.previewLink}
              target="_blank"
              className={`${project.previewLink ? "cursor-pointer" : "cursor-not-allowed"} flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(13,13,242,0.4)] transition-all ${project.previewLink ? "bg-primary" : "bg-primary/10"}`}
            >
              <Rocket className="size-5" aria-hidden />
              View Live Demo
            </Link>
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl transition-all"
            >
              <Code2 className="size-4" aria-hidden />
              Source Code
            </Link>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative aspect-square bg-primary/5 backdrop-blur-md border border-primary/20 rounded-3xl overflow-hidden flex items-center justify-center p-8">
            <div className="w-full h-full bg-slate-900 rounded-2xl shadow-2xl border border-white/5 overflow-hidden relative">
              <Image
                src={
                  project.images[0]
                    ? project.images[0]
                    : "/images/not-found.webp"
                }
                alt={project.name}
                fill
                className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 w-full h-full"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-1">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">
              Role
            </p>
            <p className="text-xl font-semibold">{project.role}</p>
          </div>
          <div className="space-y-1 border-l border-primary/20 pl-8">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">
              Stack
            </p>
            <p className="text-xl font-semibold">{project.category}</p>
          </div>
          <div className="space-y-1 border-l border-primary/20 pl-8">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">
              Duration
            </p>
            <p className="text-xl font-semibold">{project.duration}</p>
          </div>
          {/* <div className="space-y-1 border-l border-primary/20 pl-8">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">
              Client
            </p>
            <p className="text-xl font-semibold">{project.client}</p>
          </div> */}
        </div>
      </section>

      {/* challenge section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Brain className="text-primary size-5" aria-hidden />
                The Challenge
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Zap className="text-primary size-5" aria-hidden />
                The Solution
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-primary/5 backdrop-blur-md border border-primary/20"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  {/* <Icon icon={feature.icon} className="text-primary size-5" aria-hidden /> */}
                  <feature.icon className="text-primary size-5" aria-hidden />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tech stack */}
      <section className="py-20 px-6" id="tech-stack">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="space-y-12">
            <div
              className={`${project.techStackItems?.frontend ? project.techStackItems.frontend.length > 0 : false ? "block" : "hidden"}`}
              data-purpose="stack-frontend"
            >
              <h4 className="text-lg font-bold mb-6 text-slate-400 dark:text-slate-300 flex items-center gap-2">
                Frontend <span className="h-px bg-primary/20 grow"></span>
              </h4>
              <div className="flex flex-wrap gap-4">
                {project.techStackItems?.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={`${project.techStackItems?.backend && project.techStackItems.backend.length > 0 ? "block" : "hidden"}`}
              data-purpose="stack-backend"
            >
              <h4 className="text-lg font-bold mb-6 text-slate-400 dark:text-slate-300 flex items-center gap-2">
                Backend <span className="h-px bg-primary/20 grow"></span>
              </h4>
              <div className="flex flex-wrap gap-4">
                {project.techStackItems?.backend.map((tech) => (
                  <span
                    key={tech}
                    className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={`${project.techStackItems?.database && project.techStackItems.database.length > 0 ? "block" : "hidden"}`}
              data-purpose="stack-database"
            >
              <h4 className="text-lg font-bold mb-6 text-slate-400 dark:text-slate-300 flex items-center gap-2">
                Database &amp; Infrastructure{" "}
                <span className="h-px bg-primary/20 grow"></span>
              </h4>
              <div className="flex flex-wrap gap-4">
                {project.techStackItems?.database.map((tech) => (
                  <span
                    key={tech}
                    className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={`${project.techStackItems?.tools ? project.techStackItems.tools.length > 0 : false ? "block" : "hidden"}`}
              data-purpose="stack-tools"
            >
              <h4 className="text-lg font-bold mb-6 text-slate-400 dark:text-slate-300 flex items-center gap-2">
                Tools <span className="h-px bg-primary/20 grow"></span>
              </h4>
              <div className="flex flex-wrap gap-4">
                {project.techStackItems?.tools.map((tech) => (
                  <span
                    key={tech}
                    className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* interface section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Interface Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          <div className="md:col-span-8 rounded-2xl overflow-hidden bg-primary/5 backdrop-blur-md border border-primary/20 group relative">
            <Image
              src={
                project.images[1] ? project.images[1] : "/images/not-found.webp"
              }
              alt={project.name}
              width={1000}
              height={1000}
            />
            {/* <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Dashboard interface with complex data charts"
              alt="Dashboard interface with complex data charts"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANJtWL3mdugE9ahZkUSrzWC0gWq_Zgnq4GkK_B0_tks_2xBu398dgFLEbhZzUy8O4tg2-3ZKT1_EArTQ3PEvWqve3WFaj1hQjF4VFqoaUptwrudyRXJSfLGPpPpIMPvf3zHk6M7R3tTzk_Bq324ps8BzsuKhb16cVIXK8e3Epq_OnQDNxUiRnXS_aBwEAY6VX_0HWRZtCf__5gdwngWfGQuwTS6KsoidrRv8eKbB4G2058gXYkS_wbnU9Gqhn-Oh3LUDSpf_UHPA"
            /> */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <h3 className="text-xl font-bold">Main Analytics View</h3>
                <p className="text-slate-300">
                  Detailed financial forecasting and balance monitoring.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="rounded-2xl overflow-hidden bg-primary/5 backdrop-blur-md border border-primary/20 group relative">
              <Image
                src={
                  project.images[2]
                    ? project.images[2]
                    : "/images/not-found.webp"
                }
                alt={project.name}
                width={1000}
                height={1000}
              />
              {/* <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Mobile banking app dark interface"
                alt="Mobile banking app dark interface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt5eoLd1qOf1gtpv6IELYEpRsCxcAqrpPx4Gvk8oo3SSmCStEO0tDPgSB00P8GfzWzJtHOtsZcrhvegQpZvoXddbGY6x8glaYknFK27E04BG1PuGLSd-caPcvNvyHhCdgftf59gL3wjPVsFhUq0tq2tF4xCPBtc7-5WWpc9EQ3PhCNUo3LbQ6hlZMHkEY_XUvM8kzNKBnCPrV7cQplxbKEhyv_anH6TCBvOV5dw9oUeZ5WomX6DPRw6FHcgdaNj2IWysc6FIAVQA"
              /> */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <h3 className="font-bold">Mobile Responsive</h3>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-primary/5 backdrop-blur-md border border-primary/20 group relative">
              <Image
                src={
                  project.images[3]
                    ? project.images[3]
                    : "/images/not-found.webp"
                }
                alt={project.name}
                width={1000}
                height={1000}
              />
              {/* <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Transaction history and security settings"
                alt="Transaction history and security settings"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-B2mEuAMABGjnfLBt1CPrqw3tluUkPwO34vazHI6M9oUqSau-PMag36g7FL2FgBqwgzfq3rJriMWG6ukWFJOS3aAoZYGW_ILZre7t5sfZcX9MtiIeyEEk_DrJqlZiBiXkO2sVP-_6oca4NyzkODDcVGLZosRK7UpZy8wCMWaJAUS5FI7uGE5hpUiRfDURanQsHcJS5kvIKcLXCW3FtkexmA6HELrwWU1ff-lGL16Z06PzyqiXUFbUdseNFmBSNIuky4De8kCcCA"
              /> */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <h3 className="font-bold">Security Layer</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* explore more projects */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Explore More Projects</h2>
          <a
            className="text-primary font-semibold flex items-center gap-2 hover:underline"
            href="#"
          >
            View Portfolio <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects
            .filter((project) => project.slug !== slug)
            .slice(0, 3)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      </section>
      {/* cta */}
      <CTA
        heading="Ready to Transform Your Ideas into Reality?"
        description="Let's discuss your project and see how we can help you achieve your goals."
        button={{ href: "/contact", label: "Contact Us" }}
      />
    </>
  );
}
