import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AgentationDevtools } from "./agentation-devtools";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} antialiased w-full`}>
      <body className="min-h-screen bg-[#080403] text-[#f7f1e9] w-full overflow-x-hidden">
        {children}
        <AgentationDevtools />
      </body>
    </html>
  );
}
