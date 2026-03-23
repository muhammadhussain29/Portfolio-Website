"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbProps = {
  className?: string;
  homeLabel?: string;
  homeHref?: string;
};

function formatSegment(segment: string) {
  return decodeURIComponent(segment)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Breadcrumb({
  className = "",
  homeLabel = "Home",
  homeHref = "/",
}: BreadcrumbProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full overflow-x-auto no-scrollbar ${className}`}
    >
      <ol className="inline-flex min-w-max items-center gap-1 py-1.5 text-sm text-slate-500 shadow-sm">
        <li>
          <Link
            href={homeHref}
            className="rounded-md px-2 py-1 font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {homeLabel}
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;
          const formatted = formatSegment(segment);

          return (
            <li key={href} className="inline-flex items-center gap-1">
              <ChevronRight size={14} className="text-slate-400 shrink-0" />
              {isLast ? (
                <span
                  aria-current="page"
                  className="rounded-md bg-primary/10 px-2 py-1 font-semibold text-primary"
                >
                  {formatted}
                </span>
              ) : (
                <Link
                  href={href}
                  className="rounded-md px-2 py-1 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  {formatted}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}