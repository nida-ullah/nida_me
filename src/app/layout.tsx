import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NIDA ULLAH - Full Stack Developer & UI/UX Designer",
    template: "%s | NIDA ULLAH"
  },
  description: "Passionate Full-Stack Developer with 1+ year of experience creating exceptional digital experiences. Specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Freelance Developer",
    "NIDA ULLAH",
    "Portfolio",
    "Web Development Services"
  ],
  authors: [{ name: "NIDA ULLAH", url: "https://nida-ullah.dev" }],
  creator: "NIDA ULLAH",
  publisher: "NIDA ULLAH",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nida-ullah.dev",
    siteName: "NIDA ULLAH - Portfolio",
    title: "NIDA ULLAH - Full Stack Developer & UI/UX Designer",
    description: "Passionate Full-Stack Developer creating exceptional digital experiences with React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NIDA ULLAH - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIDA ULLAH - Full Stack Developer & UI/UX Designer",
    description: "Passionate Full-Stack Developer creating exceptional digital experiences with React, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@nida_ullah",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://nida-ullah.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#667eea" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "NIDA ULLAH",
              url: "https://nida-ullah.dev",
              image: "https://nida-ullah.dev/profile-image.jpg",
              sameAs: [
                "https://github.com/nida-ullah",
                "https://linkedin.com/in/nida-ullah",
                "https://twitter.com/nida_ullah",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "React",
                "Next.js", 
                "Node.js",
                "TypeScript",
                "JavaScript",
                "UI/UX Design",
                "Web Development",
                "Frontend Development",
                "Backend Development"
              ],
              description: "Passionate Full-Stack Developer with 1+ year of experience creating exceptional digital experiences. Specializing in React, Next.js, Node.js, and modern web technologies.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark"]}
        >
          {/* Floating background orbs */}
          <div className="bg-orb bg-orb-1"></div>
          <div className="bg-orb bg-orb-2"></div>
          <div className="bg-orb bg-orb-3"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
