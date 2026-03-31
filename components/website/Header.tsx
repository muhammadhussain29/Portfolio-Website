import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between border-b border-slate-200 dark:border-primary/20 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
      
      <div className="font-bold text-xl text-white bg-primary rounded-xl px-4 py-2">
        MH
      </div>

      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <a
        href="/resume.pdf"
        target="_blank"
        className="rounded-lg bg-primary text-white px-4 py-2 text-sm font-bold hover:bg-primary/90 transition"
      >
        My Resume
      </a>

    </header>
  );
}