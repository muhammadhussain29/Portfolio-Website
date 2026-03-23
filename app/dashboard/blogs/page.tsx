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

type BlogItem = {
  id: string;
  title: string;
  category: string;
  status: string;
  readTime: string;
  date: string;
};

type RowContext = {
  row: { original: BlogItem };
};

const blogs: BlogItem[] = [
  {
    id: "BLG-001",
    title: "How I Built a MERN Authentication System",
    category: "MERN",
    status: "Published",
    readTime: "5 min",
    date: "March 2026",
  },
  {
    id: "BLG-002",
    title: "React Performance Optimization Tips",
    category: "Frontend",
    status: "Draft",
    readTime: "7 min",
    date: "Feb 2026",
  },
];

const columns = [
  {
    accessorKey: "title",
    header: "Blog",
    cell: ({ row }: RowContext) => (
      <div>
        <p className="font-semibold text-slate-800">
          {row.original.title}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">
          {row.original.category}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "readTime",
    header: "Read Time",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: RowContext) => (
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
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex items-center gap-2">
        
        {/* View */}
        <button className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-primary hover:border-primary hover:bg-primary/10 transition">
          <Eye size={16} />
        </button>

        {/* Edit */}
        <button className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition">
          <Pencil size={16} />
        </button>

        {/* Delete */}
        <button className="p-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition">
          <Trash2 size={16} />
        </button>

      </div>
    ),
  },
];

export default function BlogsPage() {
  return (
    <div>
      {/* Header */}
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">
              Blogs
            </h1>
            <Breadcrumb className="pt-1" />
          </div>

          <Link
            href={"/dashboard/blogs/create"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-primary/90"
          >
            Add Blog <ArrowRight size={16} />
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
              placeholder="Search blogs..."
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
                name="category"
                options={[
                  { value: "", label: "All Categories" },
                  { value: "mern", label: "MERN" },
                  { value: "frontend", label: "Frontend" },
                  { value: "api", label: "API" },
                  { value: "ai", label: "AI" },
                ]}
              />
            </div>

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

      {/* Table */}
      <DataTable<BlogItem>
        data={blogs}
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