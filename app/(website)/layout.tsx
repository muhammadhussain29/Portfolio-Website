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
        <main className="min-h-[80vh]">
            {children}
        </main>
        <Footer />
    </div>
  );
}