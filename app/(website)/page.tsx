"use client";

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
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
import {
  projects,
  stackItems,
  testimonials,
} from "@/constant/data";
import CTA from "@/components/website/CTA";
import Experience from "@/components/website/Experience";
import Services from "@/components/website/Services";

export default function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
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
              <h3 className="text-3xl text-slate-400 dark:text-slate-400 -mb-2">
                Hello, I&apos;m
              </h3>
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
              {/* button */}
              <button
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                className="absolute bottom-40 right-40 border-2 border-primary hover:bg-primary/20 rounded-full p-6 cursor-pointer animate-bounce group"
              >
                <ArrowDown
                  size={30}
                  className="text-primary group-hover:scale-110 transition-all duration-300"
                />
              </button>
              {/* glow */}
              <div className="absolute w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>

              <div className="relative h-64 w-64 md:h-96 md:w-96 overflow-hidden border-b-8 rounded-full border-primary p-2">
                <Image
                  alt="Muhammad Hussain"
                  src="/images/profile-without-bg.png"
                  fill
                  sizes="(min-width: 768px) 20rem, 16rem"
                  className="object-cover shadow-2xl hover:scale-105 transition-all duration-300"
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
                Meet the <br /> Developer
              </h2>
            </div>

            {/* Big Number */}
            <div className="mt-24 xl:ml-24 ml-10">
              <span className="relative text-[100px] md:text-[180px] lg:text-[240px] tracking-tighter text-white leading-none">
                2<span className="absolute top-5 text-[100px] -mb-10">+</span>
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
            <p className="max-w-lg text-slate-400 leading-relaxed">
              I’m a Computer Science graduate and MERN Stack Developer with a
              strong interest in building modern and scalable web applications.
              I have hands-on experience working with technologies like React,
              Node.js, Express, and MongoDB to develop full-stack applications
              and responsive user interfaces. I enjoy creating clean,
              user-friendly solutions and integrating APIs to build dynamic
              digital products.
            </p>
            {/* Paragraph */}
            <p className="max-w-lg text-slate-400 leading-relaxed -mt-6">
              My journey in software development started with curiosity about
              how applications work behind the scenes. Since then, I have worked
              on several projects including authentication systems, API-based
              applications, and interactive web interfaces. I’m continuously
              improving my backend development skills and exploring advanced
              areas like scalable architectures and Artificial Intelligence
              while contributing to real-world software projects.
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
      <Experience />

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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.preview}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
      <Services />

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
          autoplay={{
            delay: 2500,
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
      <CTA
        heading="Ready to start your next big project?"
        description=" I'm currently looking for new opportunities and collaborations. Drop me a line and let's build something amazing together."
        button={{ href: "/contact", label: "Get in Touch" }}
      />
    </>
  );
}
