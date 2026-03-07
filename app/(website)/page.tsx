"use client";

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { experiences, projects, stackItems, leftServices, rightServices, testimonials } from "@/constant/data";

export default function Home() {
  return (
    <>
      {/* --- HOME SECTION --- */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* bg effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-400/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl">
          <div className="flex md:gap-16 gap-8 flex-wrap items-center text-left">
            {/* left side */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new projects
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
                Muhammad Hussain
              </h1>
              <h2 className="text-2xl md:text-3xl -mt-6 font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                Full Stack Developer
              </h2>
              <p className="max-w-2xl text-lg md:text-xl text-slate-400 dark:text-slate-400">
                I build scalable, user-centric applications using modern
                technologies.
              </p>
              <div className="flex items-center gap-6 py-2">
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="https://github.com/muhammadhussain29"
                >
                  <Github size={24} />
                </a>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="https://www.linkedin.com/in/muhammad-hussain-mughal-213069248/"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="mailto:hussainmuhammad29@gmail.com"
                >
                  <Mail size={24} />
                </a>
              </div>
              {/* buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  className="w-full sm:w-auto flex items-center justify-center rounded-lg bg-linear-to-r from-primary to-blue-600 px-10 py-4 text-white font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
                  href="/projects"
                >
                  View My Work
                </Link>
                <Link
                  className="w-full sm:w-auto flex items-center justify-center rounded-lg border-2 border-primary/40 dark:border-primary/40 px-10 py-4 font-bold text-slate-900 dark:text-white hover:bg-primary/10 transition-colors hover:border-primary"
                  href="/contact"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            {/* right side */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-primary/20 p-2 bg-primary/5">
                <Image
                  alt="Muhammad Hussain"
                  src="/images/profile.png"
                  fill
                  sizes="(min-width: 768px) 20rem, 16rem"
                  className="rounded-full object-cover shadow-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        className="relative w-full flex items-center px-8 py-24"
        id="about"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 justify-items-center">
          {/* LEFT SIDE */}
          <div className="relative flex flex-col justify-between">
            {/* Heading */}
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase tracking-tight text-white leading-tight">
                My Journey
              </h2>
            </div>

            {/* Big Number */}
            <div className="mt-24 xl:ml-24 ml-10">
              <span className="relative text-[100px] md:text-[180px] lg:text-[240px] tracking-tighter text-white leading-none">
                5<span className="absolute top-5 text-[100px] -mb-10">+</span>
              </span>
              <span className="relative z-20 w-28 h-28 inline-flex items-center justify-center text-center text-sm -mt-10 -ml-10 bg-primary rounded-full text-white">
                Years Of <br /> Experience
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center space-y-10 -mt-24">
            {/* Spinning Circle */}
            <div className="relative lg:-right-48 left-0 w-48 h-48 flex items-center justify-center">
              {/* Outer Circle Border */}
              <div className="absolute inset-0 rounded-full " />
            </div>

            {/* Paragraph */}
            <p className="max-w-md text-slate-400 leading-relaxed">
              I am a passionate Full Stack Engineer with a deep love for
              building digital products that solve real-world problems. My
              journey into software development started with a curiosity for how
              things work under the hood, which evolved into a career dedicated
              to crafting seamless user experiences.
            </p>
            {/* Paragraph */}
            <p className="max-w-md text-slate-400 leading-relaxed">
              Over the past 7 years, I&apos;ve had the privilege of working with
              diverse teams, from agile startups to established enterprises. I
              believe in the power of clean code, thoughtful architecture, and
              continuous learning to stay at the forefront of the ever-evolving
              tech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* --- STACK SECTION --- */}
      <section className="py-24" id="stack">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Tech Stack
            </h2>
            <p className="text-slate-400 dark:text-slate-400">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-7 stack-marquee">
            {[...stackItems, ...stackItems].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 p-6 hover:border-primary/40 transition-all group min-w-[160px]"
              >
                <span className={`text-3xl ${item.iconClass ?? ""}`}>
                  <Icon icon={item.icon} />
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section
        className="py-24 px-6 md:px-20 max-w-7xl mx-auto"
        id="experience"
      >
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-slate-400">
            A timeline of my professional journey in software engineering.
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary/20"
            >
              <div className="absolute -left-2.5 top-0 size-5 rounded-full bg-primary border-4 border-background-light dark:border-background-dark"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {experience.role}
                  </h3>
                  <p className="text-primary font-semibold">
                    {experience.company}
                  </p>
                </div>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-primary/10 dark:text-primary px-3 py-1 rounded-full w-fit">
                  {experience.duration}
                </span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 list-disc ml-4">
                {experience.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto" id="projects">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A selection of my recent works and open-source contributions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={project.preview}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <Image
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                alt={project.title}
                src={project.preview}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
              /> */}
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary text-[10px] font-bold uppercase px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <a
                  className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
                  href="#"
                >
                  View Project Details
                  <span className=" ml-1 text-sm">
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        {/* background glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
  w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"
        ></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center relative z-10">
          {/* LEFT SERVICES */}
          <div className="flex flex-col gap-12">
            {leftServices.map((service, index) => {
              return (
                <div
                  key={index}
                  className="glass p-8 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/40 transition"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <service.icon className="text-primary" size={28} />

                    <h3 className="text-lg font-bold uppercase tracking-wide">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CENTER CIRCLE */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* rotating ring */}
              <div className="absolute -inset-10 border border-primary/20 rounded-full animate-spin-slow"></div>

              {/* main circle */}
              <div
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-primary/40 
  flex items-center justify-center text-center relative overflow-hidden
  shadow-[0_0_80px_rgba(var(--color-primary-rgb),0.25)]"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-primary/20"></div>

                <div className="z-10">
                  <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
                    Exclusive
                  </span>

                  <h2 className="text-4xl font-black mt-2 leading-tight">
                    SERVICES
                  </h2>

                  <div className="w-12 h-[2px] bg-primary mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SERVICES */}
          <div className="flex flex-col gap-12">
            {rightServices.map((service, index) => {
              return (
                <div
                  key={index}
                  className="glass p-8 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/40 transition"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <service.icon className="text-primary" size={28} />

                    <h3 className="text-lg font-bold uppercase tracking-wide">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              Kind Words
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold">
              Client Testimonials
            </h2>

            <p className="text-slate-500 dark:text-slate-400 max-w-xl">
              Working with amazing companies and people around the globe to
              build high-quality digital products.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button className="testimonial-prev flex size-12 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary/10 hover:-translate-x-1 transition-all duration-300">
              <ChevronLeft size={24} />
            </button>

            <button className="testimonial-next flex size-12 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary/10 hover:translate-x-1 transition-all duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col p-8 rounded-xl bg-white dark:bg-primary/5 border border-slate-100 dark:border-primary/10 shadow-xl">
                {/* Stars */}
                <div className="flex text-primary mb-6">
                  {"★★★★★".slice(0, Math.floor(item.rating))}
                </div>

                {/* Review */}
                <p className="text-slate-700 dark:text-slate-200 italic">
                  &quot;{item.review}&quot;
                </p>

                {/* User */}
                <div className="mt-8 flex items-center gap-4">
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-primary text-xs uppercase">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        className="py-24 px-6 md:px-20 max-w-7xl mx-auto text-center"
        id="contact"
      >
        <div className="rounded-3xl bg-primary px-8 py-16 md:p-20 relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black mx-auto text-white leading-tight">
              Ready to start your next big project?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              I&apos;m currently looking for new opportunities and
              collaborations. Drop me a line and let&apos;s build something
              amazing together.
            </p>
            <Link
              className="mx-auto inline-flex items-center gap-2 rounded-lg border-2 px-10 py-4 font-bold group hover:scale-105 transition-all duration-300"
              href="/contact"
            >
              Get in Touch{" "}
              <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
