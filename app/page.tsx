import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { projects } from "./projectData";
import { assetPath } from "./siteConfig";

const focusAreas = [
  { title: "AI agents", copy: "Designing useful multi-step systems that connect language models, tools, rules, and people." },
  { title: "Reliability", copy: "Building evaluation, guardrails, fallbacks, and testing into the product—not adding them later." },
  { title: "Integration", copy: "Bringing AI into real enterprise workflows with practical engineering and measurable outcomes." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader active="home" />
      <section className="homeHero pageWidth">
        <div className="portraitWrap"><img src={assetPath("/deeksha-portrait.png")} alt="Deeksha Gautam" /></div>
        <div className="heroContent">
          <p className="statusLine"><span /> Status — Available <b>•</b> Focus — Applied AI <b>•</b> Based — <em>Pune, India</em></p>
          <h1>I create AI agents<br />that solve <span>real-world problems.</span></h1>
          <p className="heroCopy">I&apos;m Deeksha Gautam, a software engineer specializing in applied AI.<br />I build reliable AI agents with privacy safeguards, policy enforcement,<br className="desktopBreak" /> structured outputs, fallback handling, automated evaluation, and CI/CD.</p>
          <div className="heroActions">
            <Link className="primaryButton" href="/projects">View projects <span>→</span></Link>
            <a className="secondaryButton" href={assetPath("/Deeksha_Gautam_AI_Resume.pdf")} download>Download résumé</a>
          </div>
        </div>
      </section>
      <section className="homeBlock pageWidth">
        <h2>Current focus</h2>
        <div className="focusGrid">
          {focusAreas.map((area) => <article key={area.title}><h3><span />{area.title}</h3><p>{area.copy}</p></article>)}
        </div>
      </section>
      <section className="homeBlock featuredBlock pageWidth">
        <div className="sectionHeading"><h2>Featured work</h2><Link href="/projects">All projects <span>→</span></Link></div>
        <div className="projectRows">
          {projects.slice(0, 2).map((project) => (
            <Link className="projectRow" href={`/projects#${project.id}`} key={project.id}>
              <span className="projectNumber">{project.number}</span><strong>{project.title}</strong>
              <p>{project.id === "hybrid-ai-gateway" ? "Privacy-aware model routing with 106 automated tests." : project.summary}</p><span className="rowArrow">→</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="contactBand pageWidth"><p>Interested in building dependable AI systems?</p><a href="mailto:gautamdeeksha7098@gmail.com">Let&apos;s talk <span>↗</span></a></section>
      <SiteFooter />
    </main>
  );
}
