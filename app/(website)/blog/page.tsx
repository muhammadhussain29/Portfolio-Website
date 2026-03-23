"use client";

import HeroSection from "@/components/website/HeroSection";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Search,
  Send,
  Tag,
} from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "MERN Stack",
  "APIs",
  "AI / Learning",
] as const;

const featuredBlog = {
  title: "Mastering React Server Components in 2024",
  date: "May 24, 2024",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAi75hkw_3mIJhkOoodlnaL8JmvjV2MRTDbh0oqHA8jcZWhecJEQUtxk-HPqYq6qJpmIre8latGjZf1kiLwcCnz4el1qQkCWYiY5ZqVwtyOJBaqUdGS7N3Av4r_geLv7HywuPrP2VD7NpCwYDGBUSn7QBORyx5N9IpFeM0dEx9PM6WkLgShZharHyRHXJzDCqOptdnC4tqxDHHU2wVUCE0s9nZkuTxWM_cbHP-6zdM-ZqL-nxNgK3mhIQRbPrnYr4RzB2pcsIO4IA",
  excerpt:
    "A deep dive into how Server Components are revolutionizing the way we think about data fetching and client-side hydration in modern React applications.",
};

const blogPosts = [
  {
    category: "MERN Stack",
    date: "March 12, 2024",
    title: "Optimizing MongoDB Aggregation Pipelines",
    excerpt:
      "Learn the secrets to lightning-fast queries even with millions of documents using advanced indexing and pipeline optimization.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdFex7XHhrdFbebYaLNY1XaOxksMCp819VgRYa68T6wefjHnb6eBXSEeGZ4JLVwvmBxRn81Ii7jsppIYbK5q4rLQwPk92m2MGjYChwN-qfROo8fEsQXGrjB_bZcgjsYJBPdJFTpy4ZMpSuZ14xDkd18u7Fw20ME20fpi8MCF4f8n_faX24qrL7lDX3bU65lmAOXTR0s6FSiDRfTaCmxz4I4w7Cct5Y5cxNnCQQR3VYvOeS6jt5iYhvyq3v_ZuRRKOYsiNx91PUXw",
  },
  {
    category: "APIs",
    date: "February 28, 2024",
    title: "Building Type-Safe APIs with tRPC",
    excerpt:
      "Stop worrying about API contracts. Discover how tRPC creates a seamless bridge between your backend and frontend.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB51r1sRTMrlO--9m2p-KK9wz98AGXnvbAWip08lWSWyqdvousOP3BZYvSTAaUqixOULh9DCfJqxpn6ZLKTijm4MDdEcnZZCTDIL4W5Cj0K4ff9ekXfJJ4fsHX26O24-SLkidkBf3ZTzaEu9Si02ozh1jpICrnOYXmSoBN_ERcg9ouYXWMTgdSSeBfZeUGCJAbPg0U5h6kx9MPVA4NoXlPf5SyX0az9irl82PrUG6upkJ1Y66b5dhM9A5L48LT0vjWCJk-0lrl-7w",
  },
  {
    category: "AI / Learning",
    date: "February 15, 2024",
    title: "Integrating OpenAI into Node.js Apps",
    excerpt:
      "A comprehensive guide to leveraging LLMs for automated content generation and intelligent data processing in Express.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcx7pfxVKJU5Q1HpJEquJeCZXeSkaCmBG754qp4CHDLhcY_zlbEVbucvknZYhJ7-WixvoB6ZwR7hk6IveNs49UOU918qAQLh-v6C65CfWNtOvNgHd_ya-BJLhc3IEMobR_9AEyyi6abJf3TlQNDrQCQPlQR6Tc1DYFKwCK184updStx-UdnRmYxGcoCFRRcXW5aizUwEkrALxucAqgc5MU_vy3PvLwY1a3MC4vmt-donDsPHEGZgnFrJslPee4OjmhajT1CDnOKQ",
  },
  {
    category: "MERN Stack",
    date: "January 30, 2024",
    title: "The State of Redux in 2024",
    excerpt:
      "Is Redux still the king? Comparing Redux Toolkit with Zustand and React Query for state management.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3JdYc_xJLnyeAFfwQEkL6TSsuydR0utZSOvRvMOFwsEw5fVkRSkkNhfRnB-Wu98QqS2Bceris-U7g10aGfsmtRmKzza1y0yAt_o5QPT7egKu_6oSLB5FwVfmJCj668mrgjtzXkxeLZtap_kDdko5bcHERP3OLm746Ut7RBWNsaOteOysY3Ec9o55LbJCO_CCjAIIMcsNv4kl5u6v32I-uoWxta9v-qq62lWCs1GHzbZEqhx5S6gADGTLJ235ekrdGJjT_LaDDhA",
  },
  {
    category: "Web Development",
    date: "January 12, 2024",
    title: "Microservices vs. Monoliths",
    excerpt:
      "When should you split your MERN application into microservices? The trade-offs every architect should know.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJffqb-0i-l7_QRebFBKHnuTXk2ZV78j9C706IBhaZipFPpoZAAmcRZ6ROTTnYcRcskR5RAKrsL6IkZ7rwMvnGCIBSr4qMgisefxYyEwsCym8wuju1KFsoWkTDnL6_HLu8RrxFratK-3cETcTOK-gyLUQ7nm-ohcv-opfJInSpwGX41nkMAxVhFZ8EjtomMQ8ozDXZBz61Ze0YJ0Vf52VPhHTb4l8fHTt4asQhrnB5Tr7PhDBpZ0d28bpjSnHiyd2hQJxW0xpAGw",
  },
  {
    category: "Learning",
    date: "January 05, 2024",
    title: "Advanced CSS Grid Patterns",
    excerpt:
      "Pushing the boundaries of layout design with subgrids, named areas, and responsive auto-fit logic.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1gJGR8vLZjvJi58TPn1Aw2yqbfjkM-nILrBx1hPPKNilDzaQ8We5Im_1HVynhHfjl2zwhIOgmsvwgkJumZHSsB6Z1CzkY6UEqKO0foghZ0oZKM4cx0WkdjC6SnvopFeXTC5FuwW6BlfXL2CkOjkISboCwvcHJpKnkBealdsm6oB_r2lKQAXua6OCe7kx-zhXtBxq11Pz4mmpRZpr7fBfqdVqvn4KK9IWweT7bkOu6egQpkDx3gHlro7TVK_ftmJ544Zvz9_R2pQ",
  },
] as const;

export default function BlogsPage() {
  return (
    <>
      <HeroSection
        heading="Insights & Articles"
        description=" Exploring the frontiers of the MERN stack, distributed systems, and the evolving landscape of modern web architecture."
        badge="Blogs"
      />

      {/* Search & Filter */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 size-5" />
            <input
              className="w-full bg-white/5 border border-primary/20 rounded-full py-4 pl-12 pr-4 outline-none transition-all focus:ring-2 focus:ring-primary focus:border-transparent text-slate-200 placeholder:text-slate-500"
              placeholder="Search insights..."
              type="text"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-primary/5 backdrop-blur-md border border-primary/20 hover:bg-white/10 text-slate-300 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Blog */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-24">
        <div className="group relative grid md:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-primary/5 backdrop-blur-md border border-primary/20">
          <div className="md:col-span-7 h-80 md:h-[500px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale-20 group-hover:scale-105 transition-transform duration-700"
              data-alt="Abstract glowing neural network visualization"
              src={featuredBlog.image}
              alt={featuredBlog.title}
            />
          </div>
          <div className="md:col-span-5 flex flex-col justify-center p-8 md:p-12 bg-primary/5">
            <span className="text-primary font-bold text-[0.75rem] uppercase tracking-widest mb-4">
              Featured Article
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 group-hover:text-primary transition-colors text-slate-900 dark:text-white">
              {featuredBlog.title}
            </h2>
            <p className="text-slate-400 mb-8 line-clamp-3 leading-relaxed">
              {featuredBlog.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-slate-400 text-sm font-medium inline-flex items-center gap-2">
                <Calendar className="size-4" />
                {featuredBlog.date}
              </span>
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group/btn">
                Read More
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blogs Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group cursor-pointer bg-primary/5 backdrop-blur-md border border-primary/20 rounded-xl p-4 md:p-5 flex flex-col"
            >
              <div className="relative aspect-16/10 rounded-xl overflow-hidden mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={post.image}
                  alt={post.title}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-[0.65rem] font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                    <Tag className="size-3" />
                    {post.category}
                  </span>
                </div>
              </div>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2 inline-flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {post.date}
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-slate-900 dark:text-white">
                {post.title}
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <a
                className="text-primary text-sm font-bold inline-flex items-center gap-1.5 mt-auto group-hover:translate-x-2 transition-transform"
                href="#"
              >
                Read More
                <ChevronRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-32">
        <div className="bg-primary/5 backdrop-blur-md border border-primary/20 rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Stay Updated
            </h2>
            <p className="text-slate-400 text-lg">
              Receive the latest insights on web architecture and developer
              tools directly in your inbox.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 items-stretch">
            <input
              className="w-full sm:min-w-[300px] bg-white/5 border border-primary/20 rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-slate-200 placeholder:text-slate-500 transition-all"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-linear-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all inline-flex items-center justify-center gap-2">
              Subscribe
              <Send className="size-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
