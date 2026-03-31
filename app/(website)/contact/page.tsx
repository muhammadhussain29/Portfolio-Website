"use client";

import CTA from "@/components/website/CTA";
import HeroSection from "@/components/website/HeroSection";
import { toast } from "react-toastify";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";

type QuickContactCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  breakAll?: boolean;
};

const quickContactCards: QuickContactCard[] = [
  {
    id: "email",
    icon: Mail,
    title: "Email Me",
    description: "hussainmuhammad29@gmail.com",
    href: "mailto:hussainmuhammad29@gmail.com",
    breakAll: true,
  },
  {
    id: "phone",
    icon: Phone,
    title: "Call Me",
    description: "+92-315-7332765",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-hussain-mughal-213069248/",
    external: true,
  },
];

export default function ContactPage() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.info("Form Not Working Currently, Please Contact Me Through Email");
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        heading="Let’s Work Together"
        description="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas."
        badge="Available for New Projects"
      />

      {/* Quick Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {quickContactCards.map(
            ({
              id,
              icon: Icon,
              title,
              description,
              href,
              external,
              breakAll,
            }) => {
              const body = (
                <>
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {title}
                  </h3>
                  <p
                    className={`text-slate-400 text-sm ${breakAll ? "break-all" : ""}`}
                  >
                    {description}
                  </p>
                </>
              );

              if (href) {
                return (
                  <a
                    key={id}
                    href={href}
                    className="bg-primary/5 backdrop-blur-2xl border border-primary/20 p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-start text-left"
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {body}
                  </a>
                );
              }

              return (
                <div
                  key={id}
                  className="bg-primary/5 backdrop-blur-2xl border border-primary/20 p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-start text-left"
                >
                  {body}
                </div>
              );
            },
          )}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mb-32">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Feel free to reach out through the form or any of my social
                channels. I usually respond within 24 hours.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
                  <MapPin className="text-primary size-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-slate-200 mt-1">
                    Hyderabad, Pakistan (Remote Worldwide)
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-widest">
                Connect with me
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="size-12 rounded-full bg-primary/5 backdrop-blur-2xl border border-primary/20 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                  href="https://github.com/muhammadhussain29"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  className="size-12 rounded-full bg-primary/5 backdrop-blur-2xl border border-primary/20 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                  href="https://www.linkedin.com/in/muhammad-hussain-mughal-213069248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  className="size-12 rounded-full bg-primary/5 backdrop-blur-2xl border border-primary/20 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                  href="mailto:hussainmuhammad29@gmail.com"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64 border border-white/10">
              <div
                className="absolute inset-0"
                role="img"
                aria-label="Map showing Hyderabad, Pakistan"
              >
                <iframe
                  title="Hyderabad Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Hyderabad,Sindh,Pakistan&output=embed"
                ></iframe>
              </div>
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3 w-full min-w-0">
            <div className="bg-primary/5 backdrop-blur-2xl border border-primary/20 p-8 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] -mr-16 -mt-16 pointer-events-none" />
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-slate-300"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      type="text"
                      name="name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-slate-300"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      type="email"
                      name="email"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Project Inquiry"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-slate-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                    rows={6}
                    name="message"
                  />
                </div>
                <button
                  className="w-full cursor-pointer inline-flex items-center gap-3 justify-center rounded-lg bg-linear-to-r from-primary to-blue-600 px-10 py-4 text-white font-bold shadow-lg shadow-primary/25 transition-all  hover:shadow-lg hover:shadow-primary/40"
                  type="submit"
                >
                  Send Message
                  <Send className="size-5" aria-hidden />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTA
        heading="Let’s build something amazing together"
        description="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas."
        button={{ href: "/", label: "Back to Home" }}
      />
    </>
  );
}
