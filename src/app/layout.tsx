import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import { AgentationDevtools } from "./agentation-devtools";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vroom.racing"),
  title: "Vroom — The inside line",
  description: "The people, pressure, and split-second calls that make every race unforgettable.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Vroom — The inside line",
    description: "The people, pressure, and split-second calls that make every race unforgettable.",
    url: "https://vroom.racing",
    siteName: "Vroom",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vroom — The inside line",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vroom — The inside line",
    description: "The people, pressure, and split-second calls that make every race unforgettable.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${syne.variable} antialiased w-full`}>
      <body className="min-h-screen bg-white text-neutral-950 w-full overflow-x-hidden">
        {children}
        <AgentationDevtools />
      </body>
    </html>
  );
}
