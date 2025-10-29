import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ScrollProgress from "@/components/scroll-progress";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Nohemi font for hero section
const nohemi = localFont({
  src: [
    {
      path: "../../public/fonts/Nohemi-Regular-BF6438cc579d934.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nohemi-Medium-BF6438cc57ddecd.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nohemi-SemiBold-BF6438cc57db2ff.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nohemi-Bold-BF6438cc577b524.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nohemi-ExtraBold-BF6438cc5761ae2.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nohemi-Black-BF6438cc565e67b.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-hero",
  display: "swap",
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
    <html lang="en" className={`dark ${inter.variable} ${nohemi.variable}`}>
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
