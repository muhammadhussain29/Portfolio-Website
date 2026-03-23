"use client";

import {
  BriefcaseBusiness,
  Home,
  FileText,
  FolderKanban,
  Code,
  Wrench,
  Star,
  Settings,
  LogOut,
  X,
  Info,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "General Info", href: "/dashboard/general-info", icon: Info },
  { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { name: "Experience", href: "/dashboard/experience", icon: BriefcaseBusiness },
  { name: "Blogs", href: "/dashboard/blogs", icon: FileText },
  { name: "Tech Stack", href: "/dashboard/tech-stack", icon: Code },
  { name: "Services", href: "/dashboard/services", icon: Wrench },
  { name: "Testimonials", href: "/dashboard/testimonials", icon: Star },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

const Sidebar = ({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: (openSidebar: boolean) => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/auth/login");
    console.log("Logout");
  };

  return (
    <>
      {/* ===== Mobile Overlay ===== */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      <aside
        className={`
          fixed md:sticky top-0 left-0 z-40
          h-screen w-64
          bg-white border-r border-slate-300
          flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* ===== Logo ===== */}
        <div>
          <div className="px-6 py-6 flex items-center justify-center">
            <h1 className="text-2xl font-bold flex flex-col items-center gap-2">
              <span className="bg-primary text-white px-2 py-1 rounded-md">
                MHM
              </span>
              {/* <span className="text-slate-800">Hussain</span> */}
            </h1>

            {/* Close Button (Mobile Only) */}
            <button
              type="button"
              className="absolute top-6 right-6 md:hidden text-slate-600 hover:text-primary transition cursor-pointer"
              onClick={() => setOpenSidebar(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* ===== Navigation ===== */}
          <nav className="px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpenSidebar(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                    ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100 hover:text-primary"
                    }`}
                >
                  <Icon size={18} className="shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ===== Logout ===== */}
        <div className="px-6 py-6">
          <button onClick={handleLogout} className="flex items-center cursor-pointer gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
