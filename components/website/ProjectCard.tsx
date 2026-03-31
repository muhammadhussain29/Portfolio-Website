import React from "react";
import { Project } from "@/constant/projects";
import Link from "next/link";
import { ExternalLink, Info } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(13,13,242,0.15)] transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden shrink-0">
        <Image
          src={project.images[0] ? project.images[0] : "/images/not-found.webp"}
          alt={project.name}
          width={1000}
          height={1000}
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-primary backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full truncate inline-block">
            {project.badge}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 min-h-0">
        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-slate-900 dark:text-white">
          {project.name}
        </h4>
        <p className="text-sm text-slate-400 mb-6 flex-1">
          {project.description}
        </p>
        <div className="flex gap-3 mt-auto">
          {project.previewLink ? (
            <Link
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary/5 backdrop-blur-md border border-primary/20 text-xs font-bold py-2.5 rounded-lg hover:bg-primary transition-all"
            >
              DEMO
              <ExternalLink className="size-3.5" aria-hidden />
            </Link>
          ) : (
            <span className="flex-1 inline-flex items-center justify-center bg-primary/5 backdrop-blur-md border border-primary/20 text-xs font-bold py-2.5 rounded-lg text-slate-500 cursor-not-allowed">
              DEMO
            </span>
          )}
          {/* <Link
                      href={
                        project.githubLink || "https://github.com/muhammadhussain29"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary/5 backdrop-blur-md border border-primary/20 text-xs font-bold py-2.5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Github className="size-3.5" aria-hidden />
                      GITHUB
                    </Link> */}
          <Link
            href={`/projects/${project.slug}`}
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary/5 backdrop-blur-md border border-primary/20 text-xs font-bold py-2.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Info className="size-3.5" aria-hidden />
            DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
