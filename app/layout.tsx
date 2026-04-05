import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

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
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Cinematic Grain Overlay */}
        <div className="fixed inset-0 z-[99999] pointer-events-none opacity-[0.03] animate-grain" 
             style={{ backgroundImage: 'url("https://res.cloudinary.com/dzv9rqshl/image/upload/v1624445915/grain_bg.png")' }} />
        
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
