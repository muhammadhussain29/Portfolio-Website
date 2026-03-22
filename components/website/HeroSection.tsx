import Link from "next/link";
import React from "react";

const HeroSection = ({
  heading,
  description,
  badge,
  buttons,
}: {
  heading: string;
  description: string;
  badge: string;
  buttons?: { href: string; label: string }[];
}) => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      id="hero"
    >
      {/* <!-- Background Accents --> */}
      <div className="absolute blur-3xl -z-10 opacity-40 top-0 -right-20 w-[500px] h-[500px] bg-primary rounded-full"></div>
      <div className="absolute blur-3xl -z-10 opacity-40 bottom-0 -left-20 w-[400px] h-[400px] bg-blue-900 rounded-full"></div>
      {/* <!-- Floating Shapes --> */}
      <div className="absolute top-1/4 left-10 w-12 h-12 border border-blue-500/30 rounded-lg animate-float rotate-12 hidden md:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-primary/20 rounded-full animate-float delay-700 hidden md:block"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase text-blue-400 border border-blue-400/30 rounded-full bg-blue-400/10">
          {badge}
        </span>
        <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-tight tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white from-0% to-primary to-100%">
          {heading}
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>

        {buttons && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              className="w-full sm:w-auto flex items-center justify-center rounded-lg bg-linear-to-r from-primary to-blue-600 px-10 py-4 text-white font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
              href={buttons[0].href}
            >
              {buttons[0].label}
            </Link>
            {buttons[1] && (
              <Link
                className="w-full sm:w-auto flex items-center justify-center rounded-lg border-2 border-primary/40 dark:border-primary/40 px-10 py-4 font-bold text-slate-900 dark:text-white hover:bg-primary/10 transition-colors hover:border-primary"
                href={buttons[1].href}
              >
                {buttons[1].label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
