import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { assetPath } from "../siteConfig";

const repositories = [
  {
    name: "Hybrid-AI-Gateway",
    description: "A policy-driven inference gateway that routes requests between local and cloud LLMs using privacy classification, task type, complexity, provider availability, response validity, and configurable rules.",
    href: "https://github.com/deekshagautam/Hybrid-AI-Gateway",
    stats: [["106", "Automated tests"], ["7 / 7", "End-to-end evaluation"], ["Passing", "GitHub Actions CI"]],
  },
  {
    name: "Local-vs-cloud-AI-lab",
    description: "A practical benchmark comparing local Gemma 3 4B and cloud GPT-OSS 120B across instruction following, grounded QA, reasoning, performance, and estimated API cost.",
    href: "https://github.com/deekshagautam/Local-vs-cloud-AI-lab",
    stats: [["34", "Model requests"], ["3", "Experiment groups"], ["Complete", "V1 benchmark"]],
  },
  {
    name: "Pet-thought-generator",
    description: "A Streamlit GenAI application that converts structured pet context and a configurable chaos score into a dynamically constructed Gemini prompt and generated response.",
    href: "https://github.com/deekshagautam/Pet-thought-generator",
    stats: [["Gemini", "Model API"], ["Streamlit", "Application UI"], [".env", "Secret isolation"]],
  },
];

export const metadata: Metadata = {
  title: "GitHub — Deeksha Gautam",
  description: "Public code for Deeksha Gautam's LLM integration, evaluation, and applied AI projects.",
  openGraph: { title: "GitHub — Deeksha Gautam", description: "Repositories showing LLM workflows, model evaluation, backend integration, and engineering evidence.", images: [] },
  twitter: { title: "GitHub — Deeksha Gautam", description: "Repositories showing LLM workflows, model evaluation, backend integration, and engineering evidence.", images: [] },
};

export default function GithubPage() {
  return (
    <main>
      <SiteHeader active="github" />
      <section className="simpleHero pageWidth githubSimpleHero">
        <p className="eyebrow">Public code / build evidence</p><h1>Clean source.<br /><span>Visible engineering decisions.</span></h1>
        <div className="githubProfileLine"><div className="initials">DG</div><div><strong>@deekshagautam</strong><p>LLM systems · Backend engineering · Applied AI</p></div><a className="primaryButton" href="https://github.com/deekshagautam" target="_blank" rel="noreferrer">Open profile <span>↗</span></a></div>
      </section>
      <section className="repositoryList pageWidth">
        <div className="sectionHeading"><h2>Public repositories</h2><span>03 projects</span></div>
        {repositories.map((repository) => (
          <article className="repositoryRow" key={repository.href}>
            <div className="repoIntro"><p><span className="statusDot" /> Public repository</p><h2>{repository.name}</h2><p>{repository.description}</p><a className="textLink" href={repository.href} target="_blank" rel="noreferrer">View repository ↗</a></div>
            <div className="repoStats">{repository.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          </article>
        ))}
      </section>
      <section className="sourceDownload pageWidth"><div><p className="eyebrow">This portfolio</p><h2>Keep the source, not just the link.</h2><p>The complete GitHub Pages-ready code is packaged without dependencies, build output, or hosting identifiers.</p></div><a className="secondaryButton" href={assetPath("/Deeksha-Gautam-Portfolio-Source.zip")} download>Download source ↓</a></section>
      <SiteFooter />
    </main>
  );
}
