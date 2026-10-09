import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Raghavendra Gabbur | Python Full Stack Developer",
    template: "%s | Raghavendra Gabbur",
  },

  description:
    "Python Full Stack Developer with 2.7+ years of experience building scalable web, mobile and Generative AI applications using Django REST Framework, FastAPI, React.js, Next.js, React Native, and LLMs (Google Gemini, OpenAI).",

  keywords: [
    "Raghavendra Gabbur",
    "Python Full Stack Developer",
    "Generative AI Developer",
    "Django Developer",
    "FastAPI Developer",
    "Next.js Developer",
    "React Developer",
    "React Native Developer",
    "LLM Integration",
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
    title: "Raghavendra Gabbur | Python Full Stack Developer",
    description:
      "Building modern web, mobile and Generative AI applications using Django, FastAPI, React, Next.js, React Native, and LLMs.",

    type: "website",

    locale: "en_US",

    siteName: "Raghavendra Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title: "Raghavendra Gabbur",

    description:
      "Python Full Stack Developer specializing in Django, FastAPI, React, Next.js, and Generative AI.",
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