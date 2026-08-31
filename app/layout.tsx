import type { Metadata } from "next";
import "./globals.css";
import { assetPath, siteUrl } from "./siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Deeksha Gautam — AI Engineer Portfolio",
  description: "Deeksha Gautam is a software engineer building production-minded LLM systems with guardrails, evaluation, backend integration, and enterprise delivery.",
  openGraph: {
    title: "Deeksha Gautam — AI Engineer Portfolio",
    description: "I create AI agents that solve real-world problems.",
    type: "website",
    images: [{ url: assetPath("/og.png"), width: 1200, height: 630, alt: "Deeksha Gautam — I create AI agents that solve real-world problems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deeksha Gautam — AI Engineer Portfolio",
    description: "I create AI agents that solve real-world problems.",
    images: [assetPath("/og.png")],
  },
  icons: { icon: assetPath("/favicon.svg"), shortcut: assetPath("/favicon.svg") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
