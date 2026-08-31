import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { resumePdfPath } from "../siteConfig";

export const metadata: Metadata = {
  title: "Résumé — Deeksha Gautam",
  description: "Résumé of Deeksha Gautam, a software engineer working across LLM systems, backend engineering, and enterprise delivery.",
  openGraph: { title: "Résumé — Deeksha Gautam", description: "Four years across enterprise applications, applied AI, CI/CD, and production delivery.", images: [] },
  twitter: { title: "Résumé — Deeksha Gautam", description: "Four years across enterprise applications, applied AI, CI/CD, and production delivery.", images: [] },
};

export default function ResumePage() {
  return (
    <main>
      <SiteHeader active="resume" />
      <section className="simpleHero resumePdfHero pageWidth">
        <div>
          <p className="eyebrow">Résumé / PDF</p>
          <h1>Experience,<br /><span>in one page.</span></h1>
          <p>Four years across enterprise applications, LLM integration, backend engineering, CI/CD, and production delivery.</p>
        </div>
        <a className="primaryButton" href={`${resumePdfPath}?download=1`} download>Download PDF <span>↓</span></a>
      </section>
      <section className="resumeViewerSection pageWidth" aria-labelledby="resume-viewer-title">
        <div className="resumeViewerTopline">
          <div><span className="statusDot" /><p id="resume-viewer-title">Current résumé</p></div>
          <a href={resumePdfPath} target="_blank" rel="noreferrer">Open in new tab ↗</a>
        </div>
        <iframe className="resumePdfFrame" src={resumePdfPath} title="Deeksha Gautam résumé PDF" />
        <div className="resumeViewerFallback">
          <p>If the PDF does not display in your browser, open it directly.</p>
          <a href={resumePdfPath} target="_blank" rel="noreferrer">Open PDF ↗</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
