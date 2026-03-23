"use client";

import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  UserRound,
} from "lucide-react";
import Breadcrumb from "@/components/ui/BreadCrumb";
import Link from "next/link";

export default function GeneralInfoPage() {
  return (
    <div className="">
      {/* Header */}
      <div className="">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">General Info</h1>
            <Breadcrumb className="pt-1" />
          </div>
          <Link href={"/dashboard/general-info/edit"}  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-primary/90 cursor-pointer">
            Edit Profile <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Basic */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-300 p-6 md:p-8 lg:col-span-2 space-y-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-300 bg-slate-50/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 inline-flex items-center gap-1.5">
                <UserRound size={14} className="text-primary" />
                Name
              </p>
              <p className="text-slate-900 font-bold text-lg">
                Muhammad Hussain
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-slate-50/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 inline-flex items-center gap-1.5">
                <BriefcaseBusiness size={14} className="text-primary" />
                Role
              </p>
              <p className="text-slate-900 font-bold text-lg">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 inline-flex items-center gap-1.5">
              <FileText size={14} className="text-primary" />
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I build scalable, user-focused digital solutions using the modern
              MERN stack with clean architecture and performance-first mindset.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 inline-flex items-center gap-1.5">
              <BadgeCheck size={14} className="text-primary" />
              Links
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/muhammadhussain29"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-hussain-mughal-213069248/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href="mailto:hussainmuhammad29@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition"
              >
                <Mail size={15} />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Side */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-300 p-6 md:p-8 space-y-6">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 inline-flex items-center gap-1.5">
              <UserRound size={14} className="text-primary" />
              Profile Picture
            </h2>
            <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-slate-300 bg-slate-100 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile-without-bg.png"
                alt="Muhammad Hussain profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 inline-flex items-center gap-1.5">
              <BriefcaseBusiness size={14} className="text-primary" />
              Exp Years
            </h2>
            <p className="text-primary text-5xl font-black leading-none">2+</p>
            <p className="text-gray-500 text-sm">Total years of experience</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 inline-flex items-center gap-1.5">
              <FileText size={14} className="text-primary" />
              Resume
            </h2>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-white px-4 py-3 font-bold hover:opacity-90 transition"
            >
              <Download size={16} />
              View Resume
            </a>
            <p className="text-gray-500 text-xs">
              Update the URL to your resume file.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
