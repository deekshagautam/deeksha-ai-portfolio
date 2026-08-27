import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { projects } from "../projectData";
import { assetPath } from "../siteConfig";

export const metadata: Metadata = {
  title: "Projects — Deeksha Gautam",
  description: "Applied AI, enterprise automation, and analytics projects by Deeksha Gautam.",
  openGraph: { title: "Projects — Deeksha Gautam", description: "Applied AI systems, enterprise automation, and statistical learning projects.", images: [] },
  twitter: { title: "Projects — Deeksha Gautam", description: "Applied AI systems, enterprise automation, and statistical learning projects.", images: [] },
};

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader active="projects" />
      <section className="simpleHero pageWidth">
        <p className="eyebrow">Selected work / 2026</p>
        <h1>Projects built around<br /><span>real engineering constraints.</span></h1>
        <p>AI systems, enterprise automation, and applied analytics—presented with the problem, the decisions, and the evidence.</p>
      </section>
      <section className="projectArchive pageWidth">
        {projects.map((project) => (
          <article className="projectCase" id={project.id} key={project.id}>
            <div className="caseTopline"><span>{project.number}</span><span>{project.type}</span><span>{project.year}</span></div>
            <div className="caseLead">
              <div><h2>{project.title}</h2><p>{project.summary}</p></div>
              {project.repo && <a className="textLink" href={project.repo} target="_blank" rel="noreferrer">View repository ↗</a>}
            </div>
            <div className="caseDetails"><div><span>Problem</span><p>{project.problem}</p></div><div><span>What I built</span><p>{project.build}</p></div><div><span>Outcome</span><p>{project.result}</p></div></div>
            <div className="tagList">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </section>
      <section className="contactBand pageWidth"><p>Want to inspect the implementation?</p><div><a href="https://github.com/deekshagautam" target="_blank" rel="noreferrer">Open GitHub ↗</a><a href={assetPath("/Deeksha-Gautam-Portfolio-Source.zip")} download>Download site source ↓</a></div></section>
      <SiteFooter />
    </main>
  );
}
