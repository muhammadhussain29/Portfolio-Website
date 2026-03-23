"use client";

import RevenueChart from "@/components/dashboard/RevenueCart";
import {
  Car,
  ShoppingCart,
  Search,
  TrendingUp,
  Clock,
  XCircle,
  Plus,
  Eye,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

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
    <div className="min-h-screen space-y-10">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="md:text-3xl text-2xl font-bold text-primary">Dashboard Overview</h1>
        <p className="md:text-base text-sm text-gray-500 mt-1">
          Monitor your vehicle inventory and customer activity.
        </p>
      </div>

      {/* ================= STATS CARDS ================= */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-6">
        <StatCard
          icon={<Car />}
          title="Total Vehicles"
          value="128"
          trend="+32%"
        />
        <StatCard
          icon={<ShoppingCart />}
          title="Purchase Requests"
          value="54"
          trend="+12%"
        />
        <StatCard
          icon={<Search />}
          title="Find My Car"
          value="31"
          trend="-10%"
        />
        <StatCard
          icon={<TrendingUp />}
          title="Sold This Month"
          value="22"
          trend="+19%"
        />
        <StatCard
          icon={<Clock />}
          title="Pending Requests"
          value="9"
          trend="+12%"
        />
        <StatCard
          icon={<XCircle />}
          title="Rejected Requests"
          value="5"
          trend="-5%"
        />
      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div className="bg-white rounded-2xl md:px-8 md:py-4 px-4 py-2 shadow-sm">
        <h2 className="text-xl font-semibold text-primary mb-6">Quick Actions</h2>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          <ActionCard
            icon={<Plus />}
            title="Add New Vehicle"
            onClick={() => router.push("/dashboard/vehicles-listing")}
          />

          <ActionCard
            icon={<ShoppingCart />}
            title="View Purchase Requests"
            onClick={() => router.push("/dashboard/purchase-requests")}
          />

          <ActionCard
            icon={<Eye />}
            title="View Find My Car"
            onClick={() => router.push("/dashboard/find-car")}
          />
        </div>
      </div>

      {/* ================= REVENUE CHART ================= */}
      <RevenueChart data={revenueData} />
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
  icon: React.ReactNode;
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
          <p
            className={`text-xs mt-2 ${trend.includes("+") ? "text-green-500" : trend.includes("-") ? "text-red-500" : ""}`}
          >
            {trend ? `${trend} this month` : ""}
          </p>
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
  icon: React.ReactNode;
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
