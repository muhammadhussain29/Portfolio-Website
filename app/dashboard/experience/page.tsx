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

type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  type: string;
  status: string;
  duration: string;
};

type RowContext = {
  row: { original: ExperienceItem };
};

const experiences: ExperienceItem[] = [
  {
    id: "EXP-001",
    role: "MERN Stack Developer Intern",
    company: "The Byte Pulse",
    type: "Internship",
    status: "Current",
    duration: "Feb 2026 - Present",
  },
  {
    id: "EXP-002",
    role: "Frontend Developer Intern",
    company: "Digital Elliptical",
    type: "Internship",
    status: "Completed",
    duration: "Aug 2025 - Sept 2025",
  },
];

const columns = [
  {
    accessorKey: "role",
    header: "Experience",
    cell: ({ row }: RowContext) => (
      <div>
        <p className="font-semibold text-slate-800">
          {row.original.role}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">
          {row.original.company}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: RowContext) => (
      <span
        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
          row.original.status === "Current"
            ? "bg-green-100 text-green-700"
            : "bg-slate-200 text-slate-600"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-primary hover:border-primary hover:bg-primary/10 transition">
          <Eye size={16} />
        </button>

        <button className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition">
          <Pencil size={16} />
        </button>

        <button className="p-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition">
          <Trash2 size={16} />
        </button>
      </div>
    ),
  },
];

export default function ExperiencePage() {
  return (
    <div>
      {/* Header */}
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">
              Experience
            </h1>
            <Breadcrumb className="pt-1" />
          </div>

          <Link
            href={"/dashboard/experience/create"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-primary/90"
          >
            Add Experience <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="my-6">
        <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
          
          {/* Search */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search by role or company..."
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
            />

            <div className="flex items-center gap-2">
              <button className="px-4 py-2.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition">
                Search
              </button>

              <button className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 transition">
                Clear
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            
            <div className="w-full md:w-48">
              <SelectInput
                name="type"
                options={[
                  { value: "", label: "All Types" },
                  { value: "internship", label: "Internship" },
                  { value: "job", label: "Job" },
                  { value: "freelance", label: "Freelance" },
                ]}
              />
            </div>

            <div className="w-full md:w-48">
              <SelectInput
                name="status"
                options={[
                  { value: "", label: "All Status" },
                  { value: "current", label: "Current" },
                  { value: "completed", label: "Completed" },
                ]}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Table */}
      <DataTable<ExperienceItem>
        data={experiences}
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