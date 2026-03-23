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

type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  rating: number;
  status: string;
  review: string;
};

type RowContext = {
  row: { original: TestimonialItem };
};

const testimonials: TestimonialItem[] = [
  {
    id: "TST-001",
    name: "John Doe",
    role: "CEO, Startup",
    rating: 5,
    status: "Published",
    review: "Amazing developer, delivered high-quality work on time.",
  },
  {
    id: "TST-002",
    name: "Sarah Khan",
    role: "Product Manager",
    rating: 4,
    status: "Draft",
    review: "Great experience working together, very professional.",
  },
];

const columns = [
  {
    accessorKey: "name",
    header: "Client",
    cell: ({ row }: RowContext) => (
      <div>
        <p className="font-semibold text-slate-800">
          {row.original.name}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">
          {row.original.role}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "review",
    header: "Review",
    cell: ({ row }: RowContext) => (
      <p className="text-sm text-slate-600 line-clamp-2 max-w-xs">
        {row.original.review}
      </p>
    ),
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }: RowContext) => (
      <div className="text-primary text-sm font-semibold">
        {"★".repeat(row.original.rating)}
      </div>
    ),
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

export default function TestimonialsPage() {
  return (
    <div>
      {/* Header */}
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">
              Testimonials
            </h1>
            <Breadcrumb className="pt-1" />
          </div>

          <Link
            href={"/dashboard/testimonials/create"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-primary/90"
          >
            Add Testimonial <ArrowRight size={16} />
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
              placeholder="Search by client name..."
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
            
            <div className="w-full md:w-40">
              <SelectInput
                name="rating"
                options={[
                  { value: "", label: "All Ratings" },
                  { value: "5", label: "5 Stars" },
                  { value: "4", label: "4 Stars" },
                  { value: "3", label: "3 Stars" },
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
      <DataTable<TestimonialItem>
        data={testimonials}
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