import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunentrix — AI Product Storytelling Studio",
  description:
    "Sunentrix is a boutique AI Product Storytelling Studio. We help AI startups turn complex products into story-driven content that drives understanding, trust, and adoption.",
  openGraph: {
    title: "Sunentrix — AI Product Storytelling Studio",
    description:
      "A boutique studio helping AI startups communicate complex products through story-driven content that builds understanding, trust, and adoption.",
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
      </body>
    </html>
  );
}
