import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Image from "next/image";
import bgLight from "@/img/bg.jpg";
import bgDark from "@/img/bg-dark.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joy Ogukah - Software Developer Portfolio",
  description:
    "Portfolio of Joy Ogukah - Frontend Designer, AI Workflow Automation, Chatbots, and Technical Blogging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Background Images */}
        <div className="fixed inset-0 -z-10">
          <Image
            src={bgLight}
            alt="Background"
            fill
            className="object-cover dark:hidden"
            priority
            quality={90}
          />
          <Image
            src={bgDark}
            alt="Background Dark"
            fill
            className="object-cover hidden dark:block"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
        </div>

        <ThemeProvider>
          <Navbar />
          <main className="pt-16 min-h-screen relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
