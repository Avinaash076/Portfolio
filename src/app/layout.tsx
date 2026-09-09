import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/portfolio/theme-provider";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Avinaash Munavalli — Full-Stack Developer",
  description:
    "Full-stack developer in Bengaluru. I ship industrial monitoring platforms, workflow-automation tools, and the backend plumbing that keeps them honest.",
  keywords: [
    "Avinaash Munavalli",
    "Full-Stack Developer",
    "Web Developer",
    "Node.js",
    "React",
    "Bengaluru",
    "Portfolio",
    "Backend Engineer",
  ],
  authors: [{ name: "Avinaash Munavalli" }],
  openGraph: {
    title: "Avinaash Munavalli — Full-Stack Developer",
    description:
      "Full-stack developer in Bengaluru shipping reliable, real-world web services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinaash Munavalli — Full-Stack Developer",
    description:
      "Full-stack developer in Bengaluru shipping reliable, real-world web services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
