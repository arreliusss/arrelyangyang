import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Darren Cornelius — NLP Researcher & CS Student",
  description:
    "Darren Cornelius Citra Wijaya — NLP Researcher & CS Student at BINUS University. Research in transformer models, ensemble regression, and Indonesian NLP.",
  keywords:
    "NLP, Machine Learning, BERT, Transformer Models, Indonesian NLP, Sarcasm Detection, Portfolio",
  authors: [{ name: "Darren Cornelius Citra Wijaya" }],
  icons: {
    icon: "/tab_icon.png",
  },
  openGraph: {
    title: "Darren Cornelius — NLP Researcher & CS Student",
    description:
      "Junior Researcher at BINUS University specializing in NLP, transformer-based models, and ensemble regression.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-pt-20", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
