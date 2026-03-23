"use client";

import HeroSection from "@/components/website/HeroSection";
import CTA from "@/components/website/CTA";
import Services from "@/components/website/Services";
import {
  Brush,
  Code2,
  Gauge,
  Layers,
  Rocket,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Planning",
    description: "Defining goals, user stories, and technical requirements.",
    icon: Layers,
  },
  {
    id: "02",
    title: "Design",
    description: "Visualizing the product with high-fidelity prototypes.",
    icon: Brush,
  },
  {
    id: "03",
    title: "Development",
    description: "Turning designs into functional, clean codebases.",
    icon: Code2,
  },
  {
    id: "04",
    title: "Deployment",
    description: "Launching to the cloud with optimized CI/CD pipelines.",
    icon: Rocket,
  },
] as const;

const strengths = [
  { title: "Clean Code", icon: ShieldCheck },
  { title: "Performance", icon: Gauge },
  { title: "Scalability", icon: Workflow },
  { title: "Responsive", icon: Smartphone },
] as const;

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        heading="What I Can Do For You"
        description="From frontend interfaces to full-stack applications, I build scalable and user-focused digital solutions with the modern MERN stack."
        badge="Services"
      />

      <Services />

      {/* Section 3: Process Section (How I Work) */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              How I Work
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative p-8 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-xl text-center md:text-left h-full"
                >
                  <div className="text-primary font-bold text-6xl opacity-10 absolute top-4 right-4">
                    {step.id}
                  </div>
                  <Icon className="text-primary size-8 mb-4 mx-auto md:mx-0" />
                  <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Section 4: Why Choose Me */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">
              Expertise rooted in{" "}
              <span className="text-primary">Performance</span> and Scalability.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              I focus on long-term maintainability. My code isn&apos;t just
              about what the user sees, it&apos;s about building a foundation
              that allows your business to grow without technical debt.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-lg"
                  >
                    <Icon className="text-primary mb-2 size-5" />
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.title}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-1/2 w-full aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative bg-primary/5 backdrop-blur-md border border-primary/20 w-full h-full rounded-xl overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Code display"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                data-alt="Modern abstract code lines on high-tech terminal screen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk5XKOVONQqC-jmgBfQWenCnQSQknMqWcin7TYJTpHEN7SAzbWKkA2Gt-_or7IgVeBZcstZ3QKp5qvpVTxpLkSA8edvHZJW9oCsVK-T9h226dppYm1NkJgWTN1XF_k1y5qktSvNYZRdnfrHW1txRMjJSL3dl3AP7TCSoaQ0u4pzdRYkiXUwIn1RIOZqKAbXjdLSu2F5kmO84nlCT_YmoEWBBIdVR9odHtul48W1GdNU9RqfPZRW-S5m5ScZUJem_LJdKswP1RUiw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading="Have a project in mind?"
        description=" Let's collaborate to build something extraordinary. I'm currently accepting new projects and would love to hear your ideas."
        button={{ href: "/contact", label: "Get in Touch" }}
      />
    </>
  );
}
