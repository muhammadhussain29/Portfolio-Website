import Header from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import { ReactNode } from "react";

export default function WebsiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
        <Header />
        <main className="min-h-[80vh] bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
            {children}
        </main>
        <Footer />
    </div>
  );
}