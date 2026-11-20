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
  title: "Vroom — The inside line",
  description: "The people, pressure, and split-second calls that make every race unforgettable.",
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
