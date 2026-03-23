"use client";

import CTA from "@/components/website/CTA";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CloudUpload,
  Code2,
  CreditCard,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ProjectDetailPage() {
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
            Featured Case Study
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight gradient-text">
            Nexus: Enterprise <br />
            Analytics Suite
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            A comprehensive MERN stack solution designed for high-scale data
            visualization and team collaboration. Featuring real-time
            synchronization and military-grade security protocols.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(13,13,242,0.4)] transition-all">
              <Rocket className="size-5" aria-hidden />
              View Live Demo
            </button>
            <button className="flex items-center gap-2 bg-primary/5 backdrop-blur-md border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl transition-all">
              <Code2 className="size-4" aria-hidden />
              Source Code
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative aspect-square bg-primary/5 backdrop-blur-md border border-primary/20 rounded-3xl overflow-hidden flex items-center justify-center p-8">
            <div className="w-full h-full bg-slate-900 rounded-2xl shadow-2xl border border-white/5 overflow-hidden relative">
              <img
                alt="Project UI"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                data-alt="Modern SaaS dashboard interface with complex charts and data visualizations"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhDoO5PCCMGXQABsQFmf4VXdoEndFSua1FqEA3KsjCFy3o3ZV0ne0iNfazpnYbHMuuGMiFCZDmTae9lCkkPvXoaxx5ugyHCnzHnh1N2v1hH9pBwT7oQNwKoDsRlH4_kOhhHrzB3apJ-0NPOMJwt0A4F3FoZyoMWBdinotInzQfVgHTRYR6ctfbY2MvM_0SNo6MhcgB-rwptl6eQpA2Hb8dc9g8eGBIc_lSHJbAjuG9KNAtQTOZfuMxXM49xZGd16dNyySPNItRqw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">
              Role
            </p>
            <p className="text-xl font-semibold">Lead Fullstack</p>
          </div>
          <div className="space-y-1 border-l border-primary/20 pl-8">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">
              Stack
            </p>
            <p className="text-xl font-semibold">MERN + Redux</p>
          </div>
          <div className="space-y-1 border-l border-primary/20 pl-8">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">
              Duration
            </p>
            <p className="text-xl font-semibold">16 Weeks</p>
          </div>
          <div className="space-y-1 border-l border-primary/20 pl-8">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">
              Client
            </p>
            <p className="text-xl font-semibold">Starlight Tech</p>
          </div>
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
                Financial institutions faced significant latency issues when
                processing large-scale transaction data in real-time. The core
                requirement was to build a system that could handle over 5,000
                concurrent updates per second while maintaining 99.9% data
                integrity and providing sub-second latency for complex
                analytical queries.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Zap className="text-primary size-5" aria-hidden />
                The Solution
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                I architected a microservices-based system using Node.js and
                Redis for caching. By implementing a custom data-streaming
                pipeline with Socket.io and MongoDB Change Streams, I achieved
                real-time UI updates. For security, I integrated multi-factor
                authentication and end-to-end encryption for all sensitive PII
                data.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-primary/5 backdrop-blur-md border border-primary/20">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <BarChart3 className="text-primary size-5" aria-hidden />
              </div>
              <h3 className="font-bold mb-2">Real-time Analytics</h3>
              <p className="text-sm text-slate-400">
                Live data processing using WebSockets and D3.js visualization.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-primary/5 backdrop-blur-md border border-primary/20">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <ShieldCheck className="text-primary size-5" aria-hidden />
              </div>
              <h3 className="font-bold mb-2">Military-grade Security</h3>
              <p className="text-sm text-slate-400">
                AES-256 encryption and OAuth2.0 secure authentication protocols.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-primary/5 backdrop-blur-md border border-primary/20">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <CloudUpload className="text-primary size-5" aria-hidden />
              </div>
              <h3 className="font-bold mb-2">Cloud Infrastructure</h3>
              <p className="text-sm text-slate-400">
                Automated CI/CD pipelines with Docker and AWS deployment.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-primary/5 backdrop-blur-md border border-primary/20">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <CreditCard className="text-primary size-5" aria-hidden />
              </div>
              <h3 className="font-bold mb-2">Stripe Connect</h3>
              <p className="text-sm text-slate-400">
                Seamless global payouts and multi-currency support integration.
              </p>
            </div>
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
            <div data-purpose="stack-frontend">
              <h4 className="text-lg font-bold mb-6 text-slate-400 dark:text-slate-300 flex items-center gap-2">
                Frontend <span className="h-px bg-primary/20 grow"></span>
              </h4>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  React.js
                </span>
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  Redux Toolkit
                </span>
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  Tailwind CSS
                </span>
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  Framer Motion
                </span>
              </div>
            </div>
            <div data-purpose="stack-backend">
              <h4 className="text-lg font-bold mb-6 text-slate-400 dark:text-slate-300 flex items-center gap-2">
                Backend <span className="h-px bg-primary/20 grow"></span>
              </h4>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  Node.js
                </span>
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  Express.js
                </span>
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  Passport.js
                </span>
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  Redis
                </span>
              </div>
            </div>
            <div data-purpose="stack-database">
              <h4 className="text-lg font-bold mb-6 text-slate-400 dark:text-slate-300 flex items-center gap-2">
                Database &amp; Infrastructure{" "}
                <span className="h-px bg-primary/20 grow"></span>
              </h4>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  MongoDB
                </span>
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  AWS S3
                </span>
                <span className="px-6 py-3 bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-2">
                  Docker
                </span>
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
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Dashboard interface with complex data charts"
              alt="Dashboard interface with complex data charts"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANJtWL3mdugE9ahZkUSrzWC0gWq_Zgnq4GkK_B0_tks_2xBu398dgFLEbhZzUy8O4tg2-3ZKT1_EArTQ3PEvWqve3WFaj1hQjF4VFqoaUptwrudyRXJSfLGPpPpIMPvf3zHk6M7R3tTzk_Bq324ps8BzsuKhb16cVIXK8e3Epq_OnQDNxUiRnXS_aBwEAY6VX_0HWRZtCf__5gdwngWfGQuwTS6KsoidrRv8eKbB4G2058gXYkS_wbnU9Gqhn-Oh3LUDSpf_UHPA"
            />
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
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Mobile banking app dark interface"
                alt="Mobile banking app dark interface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt5eoLd1qOf1gtpv6IELYEpRsCxcAqrpPx4Gvk8oo3SSmCStEO0tDPgSB00P8GfzWzJtHOtsZcrhvegQpZvoXddbGY6x8glaYknFK27E04BG1PuGLSd-caPcvNvyHhCdgftf59gL3wjPVsFhUq0tq2tF4xCPBtc7-5WWpc9EQ3PhCNUo3LbQ6hlZMHkEY_XUvM8kzNKBnCPrV7cQplxbKEhyv_anH6TCBvOV5dw9oUeZ5WomX6DPRw6FHcgdaNj2IWysc6FIAVQA"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <h3 className="font-bold">Mobile Responsive</h3>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-primary/5 backdrop-blur-md border border-primary/20 group relative">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Transaction history and security settings"
                alt="Transaction history and security settings"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-B2mEuAMABGjnfLBt1CPrqw3tluUkPwO34vazHI6M9oUqSau-PMag36g7FL2FgBqwgzfq3rJriMWG6ukWFJOS3aAoZYGW_ILZre7t5sfZcX9MtiIeyEEk_DrJqlZiBiXkO2sVP-_6oca4NyzkODDcVGLZosRK7UpZy8wCMWaJAUS5FI7uGE5hpUiRfDURanQsHcJS5kvIKcLXCW3FtkexmA6HELrwWU1ff-lGL16Z06PzyqiXUFbUdseNFmBSNIuky4De8kCcCA"
              />
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
          <div className="rounded-2xl overflow-hidden bg-primary/5 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-colors group">
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="E-commerce management dashboard"
                alt="E-commerce management dashboard"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeZ4PLOiH3e5zvfU6jRGl3m1DKtXtXFIj1EF_Rrzm5a3j_30dvDVunF0OIk_0cY_la99KIOzAmU0e_6ZrU5LUuQ8mgw9oXRFEI7aaKQOBJduKICGD9NvW9VrEWj4wyfmwaVIJAthptbyFNsAIiE-yhqLV0oP0jYy8jLIMIO2Ahy0ljmun3AcA35gHP9cODfgme0kdjvg0uCca16GYrR7aQp-jfl-SVM8t_vGGIe7w7k5LWeKx1QA0UA3FF6gm9Uw7YoNGS-rbsJA"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold mb-2">E-Commerce SaaS</h4>
              <p className="text-sm text-slate-400 mb-4">
                A complete solution for medium-scale online stores with React
                &amp; Node.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase text-primary">
                  React
                </span>
                <span className="text-[10px] font-bold uppercase text-primary">
                  GraphQL
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-primary/5 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-colors group">
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Healthcare management system"
                alt="Healthcare management system"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOOcWaxvEzISor_MddKtfQ44dTyHmRG0pJi6N3QxWU7JLiPTtPn6Q6aHrmCX9fNE3cWSjjCVfvLqf9fNoA8wGyi3_W1yaoxH39qxZNk1m9F7k3WkAZaIB7eHoc_EhbpOz8haRmRlzcg4vgpNYePSa6SxiGjLmaloOrcztqw-42gZbV1DkNso5SqOc6QOz5YvnJpM8KQsFKHuop1LpDBNxRZFH9WoqzufTOyHYyKp9IaDnpqH9U2YHZerpPj2pHXLkeVSyddrWyQg"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold mb-2">HealthTrack CRM</h4>
              <p className="text-sm text-slate-400 mb-4">
                Patient management system for clinics using the PERN stack.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase text-primary">
                  PostgreSQL
                </span>
                <span className="text-[10px] font-bold uppercase text-primary">
                  Prisma
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-primary/5 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-colors group">
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Crypto wallet application"
                alt="Crypto wallet application"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD63FoFZJ-BN_-rPSK4MrIcKWm3l298iLsgWxyq92nrLTBHTgkmGccvwRAy-oav4D_kMzIqTMOzBdI49JPCyJmeUa9OnDLg8z3uKi5Ed-mXFtFj5nAnebQqo47AcPJM_nih1xzzlE7lMYiUo8GK0q6vCUNMkLA2qTQe6j9S-Yqrn36FUuI72vE0Hz743BzSRAdSfAhaX9juf-QVHEt9rvijoGP-mZad-8A3f0fVJgmsA9HVq_e8OXE1hCg3JRm1yK2CjPxdHsvjdg"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold mb-2">BitVault Wallet</h4>
              <p className="text-sm text-slate-400 mb-4">
                Secure multi-asset cryptocurrency wallet with Web3 integration.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase text-primary">
                  Solidity
                </span>
                <span className="text-[10px] font-bold uppercase text-primary">
                  Ethers.js
                </span>
              </div>
            </div>
          </div>
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
