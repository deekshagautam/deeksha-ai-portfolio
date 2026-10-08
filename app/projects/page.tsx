import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { projects } from "../projectData";
import { assetPath } from "../siteConfig";

export const metadata: Metadata = {
  title: "Projects — Deeksha Gautam",
  description: "LLM orchestration, model evaluation, generative applications, and statistical learning projects by Deeksha Gautam.",
  openGraph: { title: "Projects — Deeksha Gautam", description: "Production-minded AI systems documented through architecture, testing, benchmarks, and measured results.", images: [] },
  twitter: { title: "Projects — Deeksha Gautam", description: "Production-minded AI systems documented through architecture, testing, benchmarks, and measured results.", images: [] },
};

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader active="projects" />
      <section className="simpleHero pageWidth">
        <p className="eyebrow">Five technical case studies</p>
        <h1>AI systems.<br /><span>Measured, not imagined.</span></h1>
        <p>LLM orchestration, model evaluation, generative applications, and statistical learning—documented through architecture, automated tests, benchmarks, and measured results.</p>
      </section>
      <section className="projectArchive pageWidth">
        {projects.map((project) => (
          <article className="projectCase" id={project.id} key={project.id}>
            <div className="caseTopline"><span>{project.number}</span><span>{project.type}</span><span>{project.year}</span></div>
            <div className="caseLead">
              <div><h2>{project.title}</h2><p>{project.summary}</p></div>
              {project.repo && <a className="textLink" href={project.repo} target="_blank" rel="noreferrer">View repository ↗</a>}
            </div>
            <div className="systemPipeline" aria-label={`${project.title} technical pipeline`}>
              {project.pipeline.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}
            </div>
            <div className="evidenceStrip">
              {project.evidence.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
            </div>
            <div className="caseDetails"><div><span>Problem</span><p>{project.problem}</p></div><div><span>Technical build</span><p>{project.build}</p></div><div><span>Evidence</span><p>{project.result}</p></div></div>
            <div className="tagList">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </section>
      <section className="contactBand pageWidth"><p>Want to inspect the implementation?</p><div><a href="https://github.com/deekshagautam" target="_blank" rel="noreferrer">Open GitHub ↗</a><a href={assetPath("/Deeksha-Gautam-Portfolio-Source.zip")} download>Download site source ↓</a></div></section>
      <SiteFooter />
    </main>
  );
}
