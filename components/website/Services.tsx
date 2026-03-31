import React from "react";
import { services } from "@/constant/services";

const Services = () => {
  return (
    <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
      {/* background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
  w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"
      ></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center relative z-10">
        {/* LEFT SERVICES */}
        <div className="flex flex-col gap-12">
          {services.slice(0, 3).map((service, index) => {
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
          {services.slice(3, 6).map((service, index) => {
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
  );
};

export default Services;
