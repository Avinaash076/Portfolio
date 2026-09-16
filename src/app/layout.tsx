import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/portfolio/theme-provider";

const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
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
        className={`${interSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased text-foreground bg-transparent`}
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
