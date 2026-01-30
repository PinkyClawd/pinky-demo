import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pinky — AI That Actually Does The Work | StepTen.io",
  description:
    "Meet Pinky — an AI agent that manages tasks, writes emails, does research, and tries to take over your business world. Custom AI agent + command center setup by StepTen.",
  keywords: ["AI agent", "business automation", "AI consulting", "StepTen", "Claude AI"],
  openGraph: {
    title: "Pinky — AI That Actually Does The Work",
    description: "The same thing we do every night... automate your entire business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
