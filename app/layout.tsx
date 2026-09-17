import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunentrix — UGC for AI Companies",
  description:
    "Sunentrix creates scroll-stopping UGC for AI companies — product demos, founder videos, testimonials, and launch content that makes AI products feel real, build trust, and get people to try them.",
  openGraph: {
    title: "Sunentrix — UGC for AI Companies",
    description:
      "Authentic, creator-style UGC for AI startups — product demos, founder stories, testimonials, and launch videos that drive understanding, trust, and sign-ups.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900;1,14..32,400;1,14..32,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas text-text-primary antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
