"use client";

import Breadcrumb from "@/components/ui/BreadCrumb";
import {
  ArrowRight,
  Trash2,
  Eye,
  Pencil,
} from "lucide-react";
import Link from "next/link";
import DataTable from "@/components/dashboard/DataTable";
import SelectInput from "@/components/ui/SelectInput";

type ProjectItem = {
  id: string;
  title: string;
  category: string;
  status: string;
  techStack: string;
  liveUrl: string;
  githubUrl: string;
  summary: string;
};

const projects: ProjectItem[] = [
  {
    id: "PRJ-001",
    title: "Solana Landing Page Clone",
    category: "Frontend",
    status: "Published",
    techStack: "React, Tailwind, GSAP",
    liveUrl: "https://example.com/solana",
    githubUrl: "https://github.com/muhammadhussain29",
    summary: "Animated landing page clone with reusable UI sections.",
  },
  {
    id: "PRJ-002",
    title: "FashionVista E-commerce",
    category: "Full Stack",
    status: "Published",
    techStack: "React, Node, MongoDB",
    liveUrl: "https://example.com/fashionvista",
    githubUrl: "https://github.com/muhammadhussain29",
    summary: "Modern fashion store with product showcase and responsive UI.",
  },
  {
    id: "PRJ-003",
    title: "WeatherWise",
    category: "API",
    status: "Draft",
    techStack: "React, OpenWeather API",
    liveUrl: "",
    githubUrl: "https://github.com/muhammadhussain29",
    summary: "Weather dashboard with location search and dynamic cards.",
  },
];

const columns = [
  {
    accessorKey: "title",
    header: "Project",
    cell: ({ row }: { row: { original: ProjectItem } }) => (
      <div>
        <p className="font-semibold text-slate-800">{row.original.title}</p>
        <p className="text-xs text-slate-500 mt-0.5">
          {row.original.summary}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: { original: ProjectItem } }) => (
      <span
        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
          row.original.status === "Published"
            ? "bg-green-100 text-green-700"
            : row.original.status === "Archived"
              ? "bg-slate-200 text-slate-600"
              : "bg-amber-100 text-amber-700"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "liveUrl",
    header: "Live URL",
    cell: ({ row }: { row: { original: ProjectItem } }) =>
      row.original.liveUrl ? (
        <a
          href={row.original.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Visit
        </a>
      ) : (
        <span className="text-slate-400">-</span>
      ),
  },
  {
    accessorKey: "githubUrl",
    header: "GitHub",
    cell: ({ row }: { row: { original: ProjectItem } }) =>
      row.original.githubUrl ? (
        <a
          href={row.original.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Repo
        </a>
      ) : (
        <span className="text-slate-400">-</span>
      ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }: { row: { original: ProjectItem } }) => (
      <div className="flex items-center gap-2">
        {/* View */}
        <button
          type="button"
          className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-primary hover:border-primary hover:bg-primary/10 transition"
        >
          <Eye size={16} />
        </button>

        {/* Edit */}
        <button
          type="button"
          className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition"
        >
          <Pencil size={16} />
        </button>

        {/* Delete */}
        <button
          type="button"
          className="p-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition"
        >
          <Trash2 size={16} />
        </button>
      </div>
    ),
  },
];

export default function ProjectsPage() {

  return (
    <div className="">
      {/* Header */}
      <div className="">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">Projects</h1>
            <Breadcrumb className="pt-1" />
          </div>
          <Link
            href={"/dashboard/general-info/edit"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-primary/90 cursor-pointer"
          >
            Add Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* filters */}
      <div className="my-6 ">
        <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
          {/* Search */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search by project title..."
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="px-4 py-2.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition"
              >
                Search
              </button>

              <button
                type="button"
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 transition"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Category */}
            <div className="w-full md:w-48">
              <SelectInput
                name="category"
                options={[
                  { value: "", label: "All Categories" },
                  { value: "frontend", label: "Frontend" },
                  { value: "fullstack", label: "Full Stack" },
                  { value: "api", label: "API" },
                ]}
              />
            </div>

            {/* Status */}
            <div className="w-full md:w-48">
              <SelectInput
                name="status"
                options={[
                  { value: "", label: "All Status" },
                  { value: "published", label: "Published" },
                  { value: "draft", label: "Draft" },
                  { value: "archived", label: "Archived" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* projects table */}
      <DataTable<ProjectItem>
        data={projects}
        columns={columns}
        pagination={{
          page: 1,
          limit: 5,
          total: 0,
          totalPages: 0,
          hasPrev: false,
          hasNext: false,
        }}
        handleLimitChange={() => {}}
        handlePageChange={() => {}}
        loading={false}
      />
    </div>
  );
}
