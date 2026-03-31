import React from "react";
import { experiences } from "@/constant/experience";

const Experience = () => {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto" id="experience">
      <div className="mb-12 space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Professional Experience
        </h2>
        <p className="text-slate-400">
          A timeline of my professional journey in software engineering.
        </p>
      </div>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-primary/20"
          >
            <div className="absolute -left-2.5 top-0 size-5 rounded-full bg-primary border-4 border-background-light dark:border-background-dark"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {experience.role}
                </h3>
                <p className="text-primary font-semibold">
                  {experience.company}
                </p>
              </div>
              <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-primary/10 dark:text-primary px-3 py-1 rounded-full w-fit">
                {experience.duration}
              </span>
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 list-disc ml-4">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
