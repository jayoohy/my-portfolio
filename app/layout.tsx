import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
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
    "Portfolio of Joy Ogukah - Frontend Developer, AI Workflow Automation, Chatbots, and Technical Blogging",
  icons: {
    icon: [
      {
        url: "/favicon2.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    title: "Joy Ogukah | Frontend Developer",
    description: "Portfolio of Joy Ogukah – frontend developer.",
    url: "https://my-portfolio-ten-pi-ntxr4q5nit.vercel.app/",
    siteName: "Joy Ogukah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joy Ogukah Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joy Ogukah | Frontend Developer",
    description: "Portfolio of Joy Ogukah – frontend developer.",
    images: ["/og-image.png"],
  },
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
          <div className="absolute inset-0 bg-background/40 dark:bg-background/60" />
        </div>

        <ThemeProvider>
          <Navbar />
          <main className="pt-16 lg:pt-0 min-h-screen relative z-10">
            {children}
          </main>
        </ThemeProvider>

        <script async src="https://tally.so/widgets/embed.js"></script>
      </body>
    </html>
  );
}
