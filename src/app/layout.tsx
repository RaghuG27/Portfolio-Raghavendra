import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Raghavendra Gabbur | Full Stack Developer",
    template: "%s | Raghavendra Gabbur",
  },

  description:
    "Full Stack Software Developer with 2+ years of experience building scalable web and mobile applications using Next.js, React, React Native, Django, PostgreSQL, Docker, Firebase and Cloud technologies.",

  keywords: [
    "Raghavendra Gabbur",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "React Native Developer",
    "Django Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Raghavendra Gabbur",
    },
  ],

  creator: "Raghavendra Gabbur",

  openGraph: {
    title: "Raghavendra Gabbur | Full Stack Developer",
    description:
      "Building modern web and mobile applications using React, Next.js, React Native and Django.",

    type: "website",

    locale: "en_US",

    siteName: "Raghavendra Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title: "Raghavendra Gabbur",

    description:
      "Full Stack Developer specializing in React, Next.js, Django and React Native.",
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
      <body
        className={`
          ${geist.className}
          min-h-screen
          flex
          flex-col
          bg-[#020617]
          text-white
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}