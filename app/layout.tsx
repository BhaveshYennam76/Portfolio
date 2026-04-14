import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Bhavesh Yennam | Flutter & Full-Stack Developer",
  description: "Proactive and results-driven Flutter Developer with 2+ years of experience building high-performance cross-platform applications. Explore my portfolio for innovative mobile and web solutions.",
  keywords: ["Flutter Developer", "Mobile App Development", "Bhavesh Yennam", "Dart", "Next.js", "React Portfolio", "Surat Developer"],
  authors: [{ name: "Bhavesh Yennam" }],
  creator: "Bhavesh Yennam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhaveshyennam.dev",
    title: "Bhavesh Yennam | Flutter & Full-Stack Developer",
    description: "Proactive and results-driven Flutter Developer building high-performance cross-platform applications.",
    siteName: "Bhavesh Yennam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavesh Yennam | Flutter Developer",
    description: "Building high-performance cross-platform applications with Flutter and modern web tech.",
    creator: "@BhaveshYennam",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-white dark:bg-black transition-colors duration-300`}>
        <Providers>
          <CustomCursor />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

