import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Full Stack Developer passionate about creating beautiful and functional web experiences",
  keywords: ["developer", "portfolio", "web development", "react", "next.js"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    title: "Your Name - Portfolio",
    description: "Full Stack Developer passionate about creating beautiful and functional web experiences",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Portfolio",
    description: "Full Stack Developer passionate about creating beautiful and functional web experiences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
