import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getSession } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FrodenCode - Premium Code Marketplace",
  description: "Premium templates, UI systems, backend modules, and fullstack products for developers.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession();
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="fixed inset-0 -z-10 subtle-grid opacity-70" />
        <Navbar user={session} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
