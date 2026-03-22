import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CTA = ({
  heading,
  description,
  button,
}: {
  heading: string;
  description: string;
  button: { href: string; label: string };
}) => {
  return (
    <section
      className="py-20 md:py-24 px-6 md:px-20 max-w-7xl mx-auto text-center"
      id="contact"
    >
      <div className="rounded-3xl bg-primary px-8 py-16 md:p-20 relative overflow-hidden shadow-2xl shadow-primary/30">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            {heading}
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
            {description}
          </p>
          <Link
            href={button.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary px-8 py-4 font-bold hover:scale-105 transition duration-300 group"
          >
            {button.label}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
