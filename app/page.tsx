import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { projects } from "./projectData";
import { assetPath } from "./siteConfig";

const focusAreas = [
  { title: "LLM systems", copy: "Turning language models into task-focused agents, automation, and usable applications." },
  { title: "Evaluation & safety", copy: "Building guardrails, structured outputs, fallbacks, and automated evaluation into each workflow." },
  { title: "Production engineering", copy: "Connecting AI to APIs, backend services, and CI/CD with enterprise delivery discipline." },
];

const writings = [
  {
    title: "Amazon’s AI Evolution: The Future of Alexa and Beyond",
    date: "Sep 13, 2024",
    href: "https://medium.com/@gautamdeeksha7098/amazons-ai-evolution-the-future-of-alexa-and-beyond-4238d9ccc0ec",
  },
  {
    title: "Apple’s AI Secret: What’s Behind the Google Partnership?",
    date: "Jul 31, 2024",
    href: "https://medium.com/@gautamdeeksha7098/apples-ai-secret-what-s-behind-the-google-partnership-273743f4a667",
  },
  {
    title: "Web 3.0 : Revolution or a Rip-off?",
    date: "Jul 17, 2024",
    href: "https://medium.com/@gautamdeeksha7098/web-3-0-revolution-or-a-rip-off-c13284bc6c23",
  },
  {
    title: "Neuralink: Is It Truly the Pioneer?",
    date: "Jun 24, 2024",
    href: "https://medium.com/@gautamdeeksha7098/neuralink-is-it-truly-the-pioneer-4d3ab6de154c",
  },
  {
    title: "Ambani’s Twist on Quick Commerce",
    date: "May 31, 2024",
    href: "https://medium.com/@gautamdeeksha7098/ambanis-twist-on-quick-commerce-acc0eb0b7ac4",
  },
  {
    title: "While Google I/O 2024 unveiled groundbreaking tech, Many of these advancements remain out of reach of many Indian users",
    date: "May 18, 2024",
    href: "https://medium.com/@gautamdeeksha7098/while-google-i-o-2024-unveiled-groundbreaking-tech-many-of-these-advancements-remain-out-of-reach-7d98a26224b2",
  },
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
          <p className="heroCopy">I&apos;m Deeksha Gautam, a software engineer with four years of experience<br />building enterprise applications and AI-integrated systems. I design dependable<br className="desktopBreak" /> LLM workflows with guardrails, structured outputs, evaluation, and fail-safe handling—then connect them to backend services and production delivery.</p>
          <div className="heroActions">
            <Link className="primaryButton" href="/projects">View projects <span>→</span></Link>
            <a className="secondaryButton" href={assetPath("/Deeksha_Gautam_AI_Resume.pdf")} download>Download résumé</a>
          </div>
        </div>
      </section>
      <section className="currentRoleBand pageWidth" aria-labelledby="current-role-heading">
        <div>
          <p>Current role</p>
          <span>Sep 2026 — Present</span>
        </div>
        <div>
          <h2 id="current-role-heading">Technical AI Advisor <span>· CareAmy</span></h2>
          <p>Architecting CareAmy&apos;s migration from externally hosted LLM APIs to a fully in-house, privacy-first patient-support chatbot. Building a production-grade RAG pipeline for grounded patient queries across document ingestion, embeddings, hybrid retrieval, context orchestration, response guardrails, and evaluation. Work in progress.</p>
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
          {projects.slice(0, 3).map((project) => (
            <Link className="projectRow" href={`/projects#${project.id}`} key={project.id}>
              <span className="projectNumber">{project.number}</span><strong>{project.title}</strong>
              <p>{project.id === "hybrid-ai-gateway" ? "Privacy-aware model routing with 106 automated tests." : project.summary}</p><span className="rowArrow">→</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="writingsBlock pageWidth" id="writings" aria-labelledby="writings-heading">
        <div className="writingsIntro">
          <p>Side quest</p>
          <h2 id="writings-heading">Writings</h2>
          <a className="mediumProfileLink" href="https://medium.com/@gautamdeeksha7098" target="_blank" rel="noreferrer">Medium profile <span>↗</span></a>
        </div>
        <div className="writingList">
          {writings.map((writing) => (
            <a className="writingRow" href={writing.href} target="_blank" rel="noreferrer" key={writing.href}>
              <span>{writing.date}</span>
              <h3>{writing.title}</h3>
              <span className="writingArrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <section className="contactBand pageWidth"><p>Interested in dependable LLM systems or enterprise AI automation?</p><a href="mailto:gautamdeeksha7098@gmail.com">Let&apos;s talk <span>↗</span></a></section>
      <SiteFooter />
    </main>
  );
}
