import type { Metadata } from "next";

import "./globals.css";




export const metadata: Metadata = {
  title: "Raghavendra Gabbur | Full Stack Developer",

  description:
    "Full Stack Software Developer skilled in Next.js, React.js, React Native, Django, REST APIs, PostgreSQL, Docker, Firebase, and GCP.",

  keywords: [
    "Raghavendra Gabbur",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Django Developer",
    "React Native Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
