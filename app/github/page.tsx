import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { assetPath } from "../siteConfig";

export const metadata: Metadata = {
  title: "GitHub — Deeksha Gautam",
  description: "Code and repositories from Deeksha Gautam's applied AI work.",
  openGraph: { title: "GitHub — Deeksha Gautam", description: "Public code and repository guide for Deeksha Gautam's applied AI portfolio.", images: [] },
  twitter: { title: "GitHub — Deeksha Gautam", description: "Public code and repository guide for Deeksha Gautam's applied AI portfolio.", images: [] },
};

export default function GithubPage() {
  return (
    <main>
      <SiteHeader active="github" />
      <section className="simpleHero pageWidth githubSimpleHero">
        <p className="eyebrow">Public code / build evidence</p><h1>Clean source.<br /><span>Visible engineering decisions.</span></h1>
        <div className="githubProfileLine"><div className="initials">DG</div><div><strong>@deekshagautam</strong><p>Python · Java · Applied AI</p></div><a className="primaryButton" href="https://github.com/deekshagautam" target="_blank" rel="noreferrer">Open profile <span>↗</span></a></div>
      </section>
      <section className="repositoryList pageWidth">
        <div className="sectionHeading"><h2>Public repositories</h2><span>01 pinned</span></div>
        <article className="repositoryRow">
          <div className="repoIntro"><p><span className="statusDot" /> Public · Active</p><h2>local-vs-cloud-ai-lab</h2><p>Privacy-aware Hybrid AI Gateway with local Gemma 3, cloud GPT-OSS, evaluation suites, fallback handling, Docker support, and CI.</p><a className="textLink" href="https://github.com/deekshagautam/local-vs-cloud-ai-lab" target="_blank" rel="noreferrer">View repository ↗</a></div>
          <div className="repoStats"><div><strong>106</strong><span>Automated tests</span></div><div><strong>7 / 7</strong><span>End-to-end cases</span></div><div><strong>Green</strong><span>GitHub Actions</span></div></div>
        </article>
      </section>
      <section className="sourceDownload pageWidth"><div><p className="eyebrow">This portfolio</p><h2>Keep the source, not just the link.</h2><p>The complete GitHub Pages-ready code is packaged without dependencies, build output, or hosting identifiers.</p></div><a className="secondaryButton" href={assetPath("/Deeksha-Gautam-Portfolio-Source.zip")} download>Download source ↓</a></section>
      <SiteFooter />
    </main>
  );
}
