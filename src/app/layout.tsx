import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise - Next-Gen Corporate Training",
  description: "Cultivate high-performance teams through expert custom learning paths, domain leadership training, and talent elevation with Accredian.",
  keywords: "Accredian, corporate upskilling, corporate training, leadership, data science, agile, project management",
  authors: [{ name: "Accredian Enterprise" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  onEnquireClick, // unused in base layout but matches typescript compatibility if required
}: Readonly<{
  children: React.ReactNode;
  onEnquireClick?: () => void;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white">
        {children}
      </body>
    </html>
  );
}
