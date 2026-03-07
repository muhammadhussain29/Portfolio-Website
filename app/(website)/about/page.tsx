"use client";

import { experiences, testimonials, awards, education } from "@/constant/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChevronLeft, ChevronRight, ArrowRight, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 md:py-32 px-6 md:px-20 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-400/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <span className="inline-block text-primary font-semibold uppercase tracking-widest text-sm">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white">
              Building Modern{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                Web Experiences
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              I&apos;m Muhammad Hussain, a Full Stack Developer passionate about
              creating scalable, high-performance web applications using modern
              technologies like React, Next.js, Node.js, and MongoDB.
            </p>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              My goal is to build digital products that combine clean code,
              thoughtful design, and seamless user experiences.
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-3 font-semibold hover:bg-primary/90 transition-colors group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 bg-primary/5 shadow-xl">
              <Image
                src="/images/profile.png"
                alt="Muhammad Hussain"
                fill
                sizes="(max-width: 768px) 16rem, 20rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section className="py-20 md:py-24 bg-slate-50 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="mb-12 space-y-2 text-center">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Learning Path
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Education
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              My academic background and learning journey.
            </p>
          </div>

          <div className="space-y-0">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-10 md:pl-12 pb-10 last:pb-0 border-l-2 border-primary/20"
              >
                <div className="absolute -left-[9px] top-1 flex size-6 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                  <GraduationCap size={14} />
                </div>
                <div className="rounded-xl bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-primary/10 p-6 md:p-8 ml-4 hover:border-primary/30 dark:hover:border-primary/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-primary/10 dark:text-primary px-3 py-1.5 rounded-full w-fit">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-primary font-semibold text-sm md:text-base">
                    {item.institution}
                  </p>
                  <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section
        className="py-20 md:py-24 px-6 md:px-20 max-w-7xl mx-auto"
        id="experience"
      >
        <div className="mb-12 space-y-2">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            A timeline of my professional journey in software engineering.
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary/20 rounded-r-lg bg-slate-50/50 dark:bg-primary/5 p-6 md:p-8 hover:border-primary/40 transition-colors"
            >
              <div className="absolute -left-2.5 top-6 size-5 rounded-full bg-primary border-4 border-background-light dark:border-background-dark" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {experience.role}
                  </h3>
                  <p className="text-primary font-semibold">
                    {experience.company}
                  </p>
                </div>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-primary/10 dark:text-primary px-3 py-1.5 rounded-full w-fit">
                  {experience.duration}
                </span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 list-disc ml-4">
                {experience.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- AWARDS & CERTIFICATIONS --- */}
      <section className="py-20 md:py-24 bg-slate-50 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="mb-12 space-y-2 text-center">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Achievements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Awards & Certifications
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Recognition and certifications from my learning journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {awards.map((item, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-primary/10 hover:border-primary/30 dark:hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Trophy size={20} />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-primary text-sm font-semibold mt-1">
                  {item.issuer}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 md:py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Kind Words
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Client Testimonials
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl">
              Working with amazing companies and people to build high-quality digital products.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous"
              className="testimonial-prev flex size-12 items-center justify-center rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="testimonial-next flex size-12 items-center justify-center rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

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
              <div className="flex flex-col h-full p-6 md:p-8 rounded-2xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 hover:border-primary/20 transition-colors">
                <div className="flex text-primary mb-4 text-lg">
                  {"★".repeat(Math.floor(item.rating))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed flex-1">
                  &ldquo;{item.review}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-primary/10">
                  <p className="font-bold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-primary text-sm font-medium">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 md:py-24 px-6 md:px-20 max-w-7xl mx-auto text-center" id="contact">
        <div className="rounded-3xl bg-primary px-8 py-16 md:p-20 relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Ready to start your next big project?
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              I&apos;m open to new opportunities and collaborations. Let&apos;s build something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-primary px-8 py-4 font-bold hover:bg-slate-50 transition-colors group"
            >
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}