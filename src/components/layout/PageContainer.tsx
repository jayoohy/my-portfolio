import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  const year = new Date().getFullYear();
  return (
    <div
      className={`min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border p-6 sm:p-8 lg:p-12">
          {children}
          <p className="mt-8 text-center text-xs text-muted-foreground">
            © {year} Joy Ogukah. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
