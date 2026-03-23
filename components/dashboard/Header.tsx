import { Bell, Menu, User } from "lucide-react";
import React from "react";

const Header = ({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: (openSidebar: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm flex items-center justify-between md:px-6 px-4 md:py-4 py-2">
      <div className="flex items-center md:gap-4 gap-2">
        <button
          type="button"
          className="text-slate-600 hover:text-primary transition cursor-pointer md:hidden"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <Menu size={18} />
        </button>

        <h1 className="md:text-2xl text-xl font-bold px-2 py-1 text-primary">
          Admin Dashboard
        </h1>
      </div>
      <div className="flex items-center md:gap-4 gap-2">
        {/* notification */}
        <button className="text-primary md:px-4 px-2 md:py-2 py-1 rounded-full hover:opacity-90 transition cursor-pointer">
          <Bell size={16} />
        </button>
        {/* profile */}
        <button className="text-primary border border-primary md:px-2 px-1 md:py-2 py-1 rounded-full hover:opacity-90 transition cursor-pointer">
          <User size={16} />
        </button>
      </div>
    </header>
  );
};

export default Header;
