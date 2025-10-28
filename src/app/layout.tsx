import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ScrollProgress from "@/components/scroll-progress";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Samien Shaheed",
    template: "%s | Portfolio",
  },
  description: "A modern portfolio and blog built with Next.js, TypeScript, and Tailwind CSS.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Portfolio",
    description: "A modern portfolio and blog built with Next.js, TypeScript, and Tailwind CSS.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "A modern portfolio and blog built with Next.js, TypeScript, and Tailwind CSS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <script
          defer
          data-domain="example.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <div className="relative flex min-h-screen flex-col">
          <ScrollProgress />
          <SiteHeader />
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
