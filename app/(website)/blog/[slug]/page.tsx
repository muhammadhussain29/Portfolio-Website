"use client";

import CTA from "@/components/website/CTA";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock3,
  Github,
  Globe,
  Linkedin,
  Mail,
  Share2,
} from "lucide-react";

const relatedPosts = [
  {
    title: "Optimizing React Rendering Cycles for Enterprise Dashboards",
    category: "Performance",
    desc: "Learn how to leverage useMemo and useCallback effectively to manage complex state in data-heavy applications...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-WFUWNrhiFefFzrSk4yiibGDGiWQBzPtI7Bq_f_L9W_q0nyYOAXmD1tQP9M_vryxvCF6CU2xV1KV5MI1VikUO0eTz-Vw3TU3yQa1cFPEyyFrl2Me-ZgG6eCJ5n7dXPZaAXiSGZgqHdOlbRpjTC2AsDzZHjWel4jMVcZW8kbx1ir315FjxG40i5bMdKApNVqKuFQTEl6P-li4U-tofOxfOGD0ChP3EJYbkmDEmcq2GJ9CxlLglLK9ppkWl05BogGtOreAztEgsVw",
  },
  {
    title: "JWT vs Session: Choosing the Right Auth Strategy for 2024",
    category: "Security",
    desc: "A deep dive into secure authentication flows, looking at refresh token rotation and cookie-based security...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMV-ZGgVjY2BVDpjuoL8vx2MJaheYl6ptdHN2PF0Mx_1jrUIL1zy7G0nRuhP7x5qg53psUpksDIYxYkzjX0OrlQsueHwHKf_SUO1EpLnlcp191xNUqX0QgIbzu_-OjVT1tfq_a6wVJWl1JqmVyn8pcfRi9YqGKbNp1mblxmPfKu4-FDoU4bk8ziI0y93Fj1_tWJiAf510oPAlcpn2MWPmB-7hSkMqUdcr9vTRn9BfEhsGoxn7R8tN3RIT8FBQpnAV9BSg1wrB_Jw",
  },
] as const;

export default function BlogDetailPage() {
  return (
    <>
    {/* hero section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-16 md:mb-20 pt-12">
        <div className="text-center md:text-left">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border border-primary/20">
            MERN Stack
          </span>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter mb-8 text-slate-900 dark:text-white">
            Mastering Distributed Systems <br className="hidden md:block" />{" "}
            with Node.js &amp; MongoDB
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Exploring architectural patterns for high-availability, scalability,
            and seamless data consistency in modern web ecosystems.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-12 py-8 border-y border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                alt="Professional headshot of Muhammad Hussain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDeJAr_gD9gRhLUyw07RViQRVwcTXwPQOuCucXx6zKsaWBfmWat7oGIWpBv1PJjZ33YZCUbjzTIZ0h331WriZvfsdENIEsjusFXObwsRKmBfASJYoMm1lIrDW1MeXk9OvgmrmUaUbbEdYGaiuzdwZfJ_GWhdnANKmieFqwrIaeWnHuL7YDppSKOdiEusb0o3K6TIYjwTUx85CHqyJhHEVVSlwIhkj8Oy40vSy_S2KhqtpoupCHkNgWF9YDg_pt89Zh1bSEhsAFiQ"
              />
            </div>
            <div>
              <p className="text-slate-900 dark:text-white font-bold">
                Muhammad Hussain
              </p>
              <p className="text-slate-400 text-sm">
                Lead Full Stack Architect
              </p>
            </div>
          </div>
          <div className="h-8 w-px bg-primary/20 hidden md:block" />
          <div className="flex items-center gap-2 text-slate-400">
            <Calendar className="text-primary size-4" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Oct 24, 2024
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Clock3 className="text-primary size-4" />
            <span className="text-sm font-medium uppercase tracking-wider">
              12 min read
            </span>
          </div>
        </div>
      </section>

      {/* featured image */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-20">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-xl opacity-50 group-hover:opacity-100 transition-opacity" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="relative w-full aspect-21/9 object-cover rounded-xl shadow-2xl border border-white/5"
            alt="Abstract server room technology networking visualization"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMRyq3kI4yO0EXPavAYIF8V1n5zrH36OAVRNAVi53DDsoFfg9EsuM2ygEgMQTAgDdq2XZOwe2FwUj6jF0lXFJdm4mIQdEG_Wxik8VQ_Y2dGq1ka1b80cJpQKsRqNJHxwPrcz3ZHHRj4I1EgQk5vwkCATbp7RLTJXqqRObDG-tU6HMEWkOAV_Jm3Cjbduu2dfADG6GOk5exNUHsLYK8oMgMCsP0RqfrPaaRbEjzgm9ph6ESp_49KR10apftn9WyyGjkcX1sfENgtw"
          />
        </div>
      </section>

      {/* article content */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-8">
            <div>
              <h4 className="text-sm font-bold text-primary tracking-widest uppercase mb-6">
                In this article
              </h4>
              <nav className="space-y-4">
                <a
                  className="block text-slate-900 dark:text-white hover:text-primary transition-colors text-sm font-medium"
                  href="#introduction"
                >
                  01. Introduction
                </a>
                <a
                  className="block text-slate-400 hover:text-primary transition-colors text-sm font-medium pl-4"
                  href="#distributed-logic"
                >
                  02. Distributed Logic
                </a>
                <a
                  className="block text-slate-400 hover:text-primary transition-colors text-sm font-medium pl-4"
                  href="#aggregation"
                >
                  03. Efficient Aggregation
                </a>
                <a
                  className="block text-slate-400 hover:text-primary transition-colors text-sm font-medium pl-4"
                  href="#conclusion"
                >
                  04. Final Thoughts
                </a>
              </nav>
            </div>
            <div className="bg-primary/5 backdrop-blur-md p-6 rounded-2xl border border-primary/20">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Share this piece
              </p>
              <div className="flex gap-4">
                {[Share2, Globe, Mail].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary transition-all text-white"
                    type="button"
                  >
                    <Icon className="size-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <article className="lg:col-span-9 max-w-4xl">
          <h2
            className="text-3xl font-bold text-slate-900 dark:text-white mb-6"
            id="introduction"
          >
            Designing for the Void: Why Scale Matters
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            When we talk about distributed systems in the context of the MERN
            stack, we often get bogged down in package-level decisions. The real
            challenge is handling consistency and state across distributed
            nodes. Node.js is excellent for high-concurrency environments when
            the network topology and event flow are designed properly.
          </p>

          <h3
            className="text-2xl font-semibold text-slate-900 dark:text-white mt-12 mb-6"
            id="distributed-logic"
          >
            The Microservices Paradigm in Node.js
          </h3>
          <p className="text-slate-400 leading-relaxed mb-8">
            Moving from monolith to microservices changes how data moves through
            your system. Message brokers like RabbitMQ and Redis Pub/Sub become
            core infrastructure, ensuring updates from one service can propagate
            safely to others with resilience.
          </p>

          <div className="bg-primary/5 backdrop-blur-md p-8 rounded-2xl border border-primary/20 my-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-16 -mt-16" />
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Key Takeaways
            </h4>
            <ul className="space-y-4">
              {[
                "Prefer asynchronous messaging for inter-service communication to prevent cascading failures.",
                "Implement robust retry mechanisms and circuit breakers at the gateway level.",
                "Use MongoDB replica sets for high availability across zones.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 size-5" />
                  <span className="text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3
            className="text-2xl font-semibold text-slate-900 dark:text-white mt-12 mb-6"
            id="aggregation"
          >
            Advanced MongoDB Aggregations
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            For distributed workloads, push as much computation as possible to
            the data layer. This example pipeline generates real-time engagement
            metrics while keeping app-layer overhead low.
          </p>

          <div className="bg-primary/5 rounded-xl border border-primary/20 p-6 my-8 font-mono text-sm leading-relaxed overflow-x-auto no-scrollbar">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
              <div className="w-3 h-3 rounded-full bg-primary/50" />
            </div>
            <pre className="text-slate-300">{`db.orders.aggregate([
  { $match: { status: "shipped" } },
  { $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$amount" },
      orderCount: { $count: {} }
  }},
  { $sort: { totalSpent: -1 } },
  { $limit: 10 }
]);`}</pre>
          </div>

          <div
            id="conclusion"
            className="flex flex-wrap gap-3 mt-16 pt-8 border-t border-primary/20"
          >
            {["Node.js", "MongoDB", "Architecture", "Cloud Systems"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-primary/10 rounded-full text-xs font-bold text-primary tracking-wider uppercase border border-primary/20"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </article>
      </section>

      {/* author bio section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-24">
        <div className="bg-primary/5 backdrop-blur-md p-10 rounded-xl border border-primary/20 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              alt="Portrait of Muhammad Hussain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvRdDA398DCdPEptzKkZ2yYl3b_Hf-AzCEsTmD6qbiMZk8GrEHhvzA11ukwI4YJq0s0Zefv1AICXqiCl3tUCB_MtCZV08u0XbhXGam8spQcas2Mao4Fl4cDK0p6V_JTtSmQ56gmXzsGaCaXYdVN-fYKV_H0f4adY7CVLhtP_Au-Dimsy2r34e7JTiAuEHqzQDJybZtAdqs9Ikv6xaQtRTdVuTWxsRtFdsTERRHhSOlCXZdJqCeN2ocH67LZ5RSOfwB9IG1JRGaTQ"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Written by Muhammad Hussain
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Full Stack Developer &amp; Systems Architect specializing in
              high-concurrency Node.js applications and scalable MongoDB
              systems.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                className="text-primary hover:text-white transition-colors"
                href="#"
              >
                <Globe className="size-5" />
              </a>
              <a
                className="text-primary hover:text-white transition-colors"
                href="#"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                className="text-primary hover:text-white transition-colors"
                href="#"
              >
                <Github className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* newsletter section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-24">
        <div className="bg-primary/5 backdrop-blur-md p-12 rounded-xl border border-primary/20 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Engineering Insights, Monthly.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10">
            Get architectural breakdowns, performance tips, and MERN deep-dives
            straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              className="flex-1 bg-white/5 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-slate-200 placeholder:text-slate-500 transition-all px-4 py-3"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-linear-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* recommended posts section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-32">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h4 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
              Recommended
            </h4>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Continue Reading
            </h2>
          </div>
          <a
            className="hidden md:inline-flex items-center gap-2 text-primary font-bold hover:underline"
            href="/blog"
          >
            View All Posts
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {relatedPosts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={post.title}
                  src={post.image}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">
                {post.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-400 line-clamp-2">{post.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* cta section */}
      <CTA
        heading="Want to work together?"
        description="I help startups and enterprises build resilient digital products with modern architecture."
        button={{ href: "/contact", label: "Contact Me" }}
      />
    </>
  );
}
