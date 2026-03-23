"use client";

import Breadcrumb from "@/components/ui/BreadCrumb";
import { stackItems } from "@/constant/data";
import { Icon } from "@iconify/react";
import { ArrowRight, Trash2 } from "lucide-react";
import { useState } from "react";

type TechItem = {
  id: string;
  label: string;
  icon: string;
  iconClass?: string;
};

const initialTechItems: TechItem[] = stackItems.map((item, index) => ({
  id: `TECH-${index + 1}`,
  label: item.label,
  icon: item.icon,
  iconClass: item.iconClass,
}));

export default function TechStackPage() {
  const [techItems, setTechItems] = useState<TechItem[]>(initialTechItems);

  const handleDelete = (id: string) => {
    setTechItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen space-y-6">
      {/* Header */}
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">Tech Stack</h1>
            <Breadcrumb className="pt-1" />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-primary/90"
          >
            Add Technology
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Cards */}
      {techItems.length === 0 ? (
        <div className="rounded-2xl border border-slate-300 bg-white p-10 text-center text-slate-500">
          No technologies found.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {techItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                  <Icon
                    icon={item.icon}
                    className={`text-2xl ${item.iconClass ?? ""}`}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 text-red-600 transition hover:bg-red-50"
                  aria-label={`Delete ${item.label}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-800">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
