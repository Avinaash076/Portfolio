import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/portfolio/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avinaash Munavalli — Full-Stack Web Developer",
  description:
    "Portfolio of Avinaash Munavalli, a full-stack web developer building reliable, real-world web services — industrial monitoring platforms, workflow-automation tools, and clean enterprise software.",
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
    title: "Avinaash Munavalli — Full-Stack Web Developer",
    description:
      "Building reliable, real-world web services — industrial monitoring, workflow automation, and clean enterprise software.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinaash Munavalli — Full-Stack Web Developer",
    description:
      "Building reliable, real-world web services — industrial monitoring, workflow automation, and clean enterprise software.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
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
