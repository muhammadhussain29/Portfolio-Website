"use client";

import Breadcrumb from "@/components/ui/BreadCrumb";
import RevenueChart from "@/components/dashboard/RevenueCart";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  LayoutGrid,
  MessageSquareQuote,
  Plus,
  Settings,
  Wrench,
} from "lucide-react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

const revenueData = [
  { monthName: "Jan", revenue: 12000 },
  { monthName: "Feb", revenue: 18000 },
  { monthName: "Mar", revenue: 15000 },
  { monthName: "Apr", revenue: 22000 },
  { monthName: "May", revenue: 26000 },
  { monthName: "Jun", revenue: 30000 },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen space-y-8">
      {/* Header */}
      <div className="">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="md:text-3xl text-2xl font-bold text-primary">
              Dashboard Overview
            </h1>
            <p className="md:text-base text-sm text-gray-500">
              Manage portfolio content, monitor activity, and keep your profile
              up to date.
            </p>
            <Breadcrumb className="pt-1" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <StatCard
          icon={<FolderKanban size={20} />}
          title="Total Projects"
          value="15+"
          trend="+2 this month"
        />
        <StatCard
          icon={<BriefcaseBusiness size={20} />}
          title="Experience Entries"
          value="2"
          trend="Updated recently"
        />
        <StatCard
          icon={<Wrench size={20} />}
          title="Services Listed"
          value="6"
          trend="All active"
        />
        <StatCard
          icon={<FileText size={20} />}
          title="Blogs Published"
          value="8"
          trend="+1 this month"
        />
        <StatCard
          icon={<MessageSquareQuote size={20} />}
          title="Testimonials"
          value="4"
          trend="3 published"
        />
        <StatCard
          icon={<LayoutGrid size={20} />}
          title="Tech Stack Items"
          value="13"
          trend="Synced with website"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl md:px-8 md:py-6 px-4 py-4 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-primary">Quick Actions</h2>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          <ActionCard
            icon={<Plus size={18} />}
            title="Add New Project"
            onClick={() => router.push("/dashboard/projects")}
          />
          <ActionCard
            icon={<FileText size={18} />}
            title="Manage Blogs"
            onClick={() => router.push("/dashboard/blogs")}
          />
          <ActionCard
            icon={<Wrench size={18} />}
            title="Manage Services"
            onClick={() => router.push("/dashboard/services")}
          />
          <ActionCard
            icon={<BriefcaseBusiness size={18} />}
            title="Manage Experience"
            onClick={() => router.push("/dashboard/experience")}
          />
          <ActionCard
            icon={<LayoutGrid size={18} />}
            title="Update Tech Stack"
            onClick={() => router.push("/dashboard/tech-stack")}
          />
          <ActionCard
            icon={<Settings size={18} />}
            title="Dashboard Settings"
            onClick={() => router.push("/dashboard/settings")}
          />
        </div>
      </div>

      {/* Revenue / Growth Chart */}
      <div>
        <div className="mb-3">
          <h2 className="text-xl font-semibold text-primary">Growth Snapshot</h2>
          <p className="text-sm text-gray-500">
            Revenue-style activity trend for your admin dashboard.
          </p>
        </div>
        <RevenueChart data={revenueData} />
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({
  icon,
  title,
  value,
  iconColor = "bg-primary-200",
  trend = "",
}: {
  icon: ReactNode;
  title: string;
  value: string;
  iconColor?: string;
  trend?: string;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl p-6 
                    bg-linear-to-br from-white to-slate-50
                    border border-slate-200
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                    hover:-translate-y-1"
    >
      {/* Decorative Glow */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 bg-primary-100 
                      rounded-full blur-3xl opacity-30 
                      group-hover:opacity-50 transition"
      />

      <div className="relative flex items-center justify-between">
        {/* Left Section */}
        <div className="flex flex-col">
          {/* Icon Badge */}
          <div
            className={`w-12 h-12 flex items-center justify-center 
                          rounded-xl ${iconColor} text-primary 
                          mb-4 group-hover:bg-primary group-hover:text-white 
                          transition`}
          >
            {icon}
          </div>

          <p className="text-sm text-gray-500 font-medium">{title}</p>
        </div>

        {/* Value */}
        <div className="text-right">
          <span
            className="text-4xl font-bold text-slate-800 
                           group-hover:text-primary transition"
          >
            {value}
          </span>

          {/* Optional Trend (remove if not needed) */}
          <p className="text-xs mt-2 text-slate-500">{trend}</p>
        </div>
      </div>
    </div>
  );
}

function ActionCard({
  icon,
  title,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl p-6 
                 bg-linear-to-br from-white to-slate-50
                 border border-slate-200
                 shadow-sm hover:shadow-xl
                 transition-all duration-300
                 hover:-translate-y-1 cursor-pointer"
    >
      {/* Decorative Glow */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 bg-primary-100 
                      rounded-full blur-2xl opacity-20 
                      group-hover:opacity-40 transition"
      />

      <div className="relative flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Icon Badge */}
          <div
            className="w-12 h-12 flex items-center justify-center 
                          rounded-xl bg-primary-50 text-primary
                          group-hover:bg-primary group-hover:text-white
                          transition"
          >
            {icon}
          </div>

          <span
            className="font-semibold text-gray-700 
                           group-hover:text-primary transition"
          >
            {title}
          </span>
        </div>

        {/* Arrow Indicator */}
          <span className="text-gray-400 group-hover:text-primary transition">
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300"
          />
        </span>
      </div>
    </button>
  );
}
