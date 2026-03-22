"use client";

import HeroSection from "@/components/website/HeroSection";
import CTA from "@/components/website/CTA";
import Experience from "@/components/website/Experience";
import {
  BotIcon,
  BrainIcon,
  Calendar,
  EyeIcon,
  GraduationCapIcon,
  LayersIcon,
  RocketIcon,
  TerminalIcon,
  TrendingUpIcon,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection
        heading="Crafting Scalable Digital Experiences"
        description=" Full Stack MERN Developer specializing in building high-performance web applications with modern architecture and AI-driven precision."
        badge="About Me"
        buttons={[{ href: "/projects", label: "View My Work" }]}
      />

      {/* WHO AM I SECTION */}
      <section
        className="py-24 px-4 max-w-7xl mx-auto"
        data-purpose="biography-section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Engineering with <span className="text-primary">Passion</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I am Muhammad Hussain, a Computer Science professional dedicated
              to the art of Full Stack development. My journey in tech is driven
              by a constant curiosity for how systems interact and a commitment
              to writing clean, maintainable code.
            </p>
            <p>
              With deep expertise in the{" "}
              <span className="text-white font-medium">MERN Stack</span>, I
              bridge the gap between complex backend logic and intuitive
              frontend interfaces. My approach focuses on scalability,
              performance optimization, and seamless user experiences.
            </p>
            <p>
              Beyond standard web development, I am deeply interested in the
              integration of AI within web ecosystems, exploring how machine
              learning can enhance application intelligence and automation.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="border border-primary/20 backdrop-blur-2xl bg-primary/5 p-8 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-black mb-2 text-white group-hover:scale-110 transition-transform">
              2+
            </div>
            <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">
              Years Experience
            </div>
          </div>
          <div className="border border-primary/20 backdrop-blur-2xl bg-primary/5 p-8 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-black mb-2 text-white group-hover:scale-110 transition-transform">
              15+
            </div>
            <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">
              Projects Built
            </div>
          </div>
          <div className="border border-primary/20 backdrop-blur-2xl bg-primary/5 p-8 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-black mb-2 text-white group-hover:scale-110 transition-transform">
              2
            </div>
            <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">
              Internships
            </div>
          </div>
          <div className="border border-primary/20 backdrop-blur-2xl bg-primary/5 p-8 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-black mb-2 text-white group-hover:scale-110 transition-transform">
              98%
            </div>
            <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">
              AI Accuracy
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <Experience />

      {/* SKILLS SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
            <p className="text-slate-400 mt-4">
              Tools and technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <!-- Frontend --> */}
            <div className="border border-primary/20 backdrop-blur-2xl bg-primary/5 p-6 rounded-2xl border-t-4 border-t-blue-500 hover:shadow-[0_0_30px_rgba(13,13,242,0.1)] transition-all">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>{" "}
                Frontend
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex justify-between">
                  <span>React.js</span>{" "}
                  <span className="text-blue-500 text-xs">Expert</span>
                </li>
                <li className="flex justify-between">
                  <span>Next.js</span>{" "}
                  <span className="text-blue-500 text-xs">Advanced</span>
                </li>
                <li className="flex justify-between">
                  <span>Tailwind CSS</span>{" "}
                  <span className="text-blue-500 text-xs">Expert</span>
                </li>
                <li className="flex justify-between">
                  <span>Redux Toolkit</span>{" "}
                  <span className="text-blue-500 text-xs">Proficient</span>
                </li>
              </ul>
            </div>
            {/* <!-- Backend --> */}
            <div className="border border-primary/20 backdrop-blur-2xl bg-primary/5 p-6 rounded-2xl border-t-4 border-t-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                Backend
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex justify-between">
                  <span>Node.js</span>{" "}
                  <span className="text-green-500 text-xs">Expert</span>
                </li>
                <li className="flex justify-between">
                  <span>Express.js</span>{" "}
                  <span className="text-green-500 text-xs">Expert</span>
                </li>
                <li className="flex justify-between">
                  <span>REST APIs</span>{" "}
                  <span className="text-green-500 text-xs">Advanced</span>
                </li>
                <li className="flex justify-between">
                  <span>Socket.io</span>{" "}
                  <span className="text-green-500 text-xs">Intermediate</span>
                </li>
              </ul>
            </div>
            {/* <!-- Database --> */}
            <div className="border border-primary/20 backdrop-blur-2xl bg-primary/5 p-6 rounded-2xl border-t-4 border-t-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>{" "}
                Database
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex justify-between">
                  <span>MongoDB</span>{" "}
                  <span className="text-amber-500 text-xs">Advanced</span>
                </li>
                <li className="flex justify-between">
                  <span>PostgreSQL</span>{" "}
                  <span className="text-amber-500 text-xs">Intermediate</span>
                </li>
                <li className="flex justify-between">
                  <span>Firebase</span>{" "}
                  <span className="text-amber-500 text-xs">Advanced</span>
                </li>
                <li className="flex justify-between">
                  <span>Redis</span>{" "}
                  <span className="text-amber-500 text-xs">Basic</span>
                </li>
              </ul>
            </div>
            {/* <!-- Tools --> */}
            <div className="border border-primary/20 backdrop-blur-2xl bg-primary/5 p-6 rounded-2xl border-t-4 border-t-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>{" "}
                Tools
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex justify-between">
                  <span>Docker</span>{" "}
                  <span className="text-purple-500 text-xs">Familiar</span>
                </li>
                <li className="flex justify-between">
                  <span>Git/GitHub</span>{" "}
                  <span className="text-purple-500 text-xs">Expert</span>
                </li>
                <li className="flex justify-between">
                  <span>Postman</span>{" "}
                  <span className="text-purple-500 text-xs">Advanced</span>
                </li>
                <li className="flex justify-between">
                  <span>AWS (S3/EC2)</span>{" "}
                  <span className="text-purple-500 text-xs">Intermediate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
            Academic Foundation
          </h2>
          <div className="border border-primary/20 backdrop-blur-2xl bg-primary/5 rounded-[2.5rem] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* <!-- Degree Info --> */}
              <div className="lg:col-span-5 p-8 md:p-12 bg-primary/5 border-r border-white/5 flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-primary/10">
                  <GraduationCapIcon className="text-primary" size={70} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  BS in Computer Science
                </h3>
                <p className="text-primary font-semibold text-lg mb-4">
                  National University of Modern Languages
                </p>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Calendar className="text-sm" size={16} />
                  2022 - 2026
                </div>
              </div>
              {/* <!-- FYP Details --> */}
              <div className="lg:col-span-7 p-8 md:p-12 bg-slate-900/40">
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                    <RocketIcon className="text-xl" size={20} />
                  </span>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wider">
                    Final Year Project (FYP)
                  </h4>
                </div>
                <div className="space-y-6">
                  <p className="text-slate-400 text-lg leading-relaxed italic">
                    &quot;AI-powered predictive analytics dashboard for
                    e-commerce, bridging high-level data and actionable
                    insights.&quot;
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                      <LayersIcon className="text-primary" size={20} />
                      <div className="text-sm">
                        <span className="block text-white font-bold mb-1">
                          Architecture
                        </span>
                        <span className="text-slate-400">
                          MERN Stack Platform
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                      <BrainIcon className="text-primary" size={20} />
                      <div className="text-sm">
                        <span className="block text-white font-bold mb-1">
                          Intelligence
                        </span>
                        <span className="text-slate-400">
                          Python-based ML Models
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                      <TrendingUpIcon className="text-primary" size={20} />
                      <div className="text-sm">
                        <span className="block text-white font-bold mb-1">
                          Core Function
                        </span>
                        <span className="text-slate-400">
                          User Behavior Forecasting
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                      <EyeIcon className="text-primary" size={20} />
                      <div className="text-sm">
                        <span className="block text-white font-bold mb-1">
                          Outcome
                        </span>
                        <span className="text-slate-400">
                          Data-driven Optimization
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white from-0% to-primary to-100%">
              The Evolution
            </h2>
            <p className="text-slate-500 mt-4 uppercase tracking-[0.3em] text-sm">
              From Code to Context
            </p>
          </div>
          <div className="space-y-32">
            {/* <!-- Story Item 1 --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -top-12 -left-8 text-8xl font-black text-primary/5 italic select-none">
                  01
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary"></span> The Spark
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  It started with a simple HTML &quot;Hello World&quot;. What
                  began as curiosity quickly transformed into an obsession with
                  digital creation. I spent countless nights mastering the
                  fundamentals of JavaScript, understanding the nuances of CSS,
                  and eventually finding my home in the MERN ecosystem.
                </p>
              </div>
              <div className="relative order-1 lg:order-2 flex justify-center">
                <div className="border border-primary/20 backdrop-blur-2xl bg-primary/5 p-6 rounded-2xl w-64 animate-float rotate-3 shadow-[0_20px_50px_rgba(13,13,242,0.15)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <TerminalIcon className="text-primary" size={20} />
                    </div>
                    <span className="text-xs font-bold text-slate-300">
                      Milestone
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">
                    First full-stack CRUD app deployed successfully.
                  </p>
                </div>
                <div className="absolute -bottom-10 right-10 glass-card p-4 rounded-xl w-48 border-white/10 -rotate-6 hidden md:block">
                  <p className="text-[10px] text-primary font-bold uppercase mb-1">
                    Learning Curve
                  </p>
                  <p className="text-xs text-slate-300">
                    Mastered Asynchronous JS &amp; API Integration
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Story Item 2 --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative flex justify-center">
                <div className="glass-card p-6 rounded-2xl w-64 animate-float delay-150 border-white/20 -rotate-3 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                      <LayersIcon className="text-primary" size={20} />
                    </div>
                    <span className="text-xs font-bold text-slate-300">
                      Shift
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">
                    Architecting systems for 10k+ concurrent users.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-12 -left-8 text-8xl font-black text-primary/5 italic select-none">
                  02
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary"></span> Scale &amp;
                  Perspective
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  As I built more complex applications, I realized that code is
                  just a tool to solve human problems. This realization led me
                  to focus on architecture and scalability, ensuring that the
                  applications I build today can handle the demands of tomorrow.
                </p>
              </div>
            </div>
            {/* <!-- Story Item 3 --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -top-12 -left-8 text-8xl font-black text-primary/5 italic select-none">
                  03
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary"></span> Future
                  Integration
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Today, I combine my engineering background with a
                  forward-looking interest in Artificial Intelligence. My goal
                  is to create software that doesn&apos;t just work, but thinks,
                  adapts, and provides value in ways that weren&apos;t possible
                  before.
                </p>
              </div>
              <div className="relative order-1 lg:order-2 flex justify-center">
                <div className="glass-card p-6 rounded-2xl w-64 animate-float delay-300 border-primary/40 rotate-6 shadow-[0_0_40px_rgba(13,13,242,0.2)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500">
                      <BotIcon className="text-primary" size={20} />
                    </div>
                    <span className="text-xs font-bold text-slate-300">
                      Next Frontier
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">
                    Implementing OpenAI models into production web apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTA
        heading="Ready to start your next big project?"
        description="I'm open to new opportunities and collaborations. Let's build something amazing together."
        button={{ href: "/contact", label: "Get in Touch" }}
      />
    </>
  );
}
