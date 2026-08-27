import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { assetPath } from "../siteConfig";

export const metadata: Metadata = {
  title: "Résumé — Deeksha Gautam",
  description: "Résumé of Deeksha Gautam, software engineer focused on applied AI and LLM integrations.",
  openGraph: { title: "Résumé — Deeksha Gautam", description: "Software engineering, applied AI, and enterprise delivery experience.", images: [] },
  twitter: { title: "Résumé — Deeksha Gautam", description: "Software engineering, applied AI, and enterprise delivery experience.", images: [] },
};

const skills = ["Python", "Java", "SQL", "Spring Boot", "REST APIs", "Kafka", "PySpark", "MongoDB", "Ollama", "Gemma", "GroqCloud", "Gemini API", "LLM evaluation", "Docker", "GitHub Actions", "OpenShift"];

export default function ResumePage() {
  return (
    <main>
      <SiteHeader active="resume" />
      <section className="simpleHero resumeSimpleHero pageWidth"><div><p className="eyebrow">Résumé / Updated August 2026</p><h1>Software engineering,<br /><span>applied to AI systems.</span></h1><p>Technology Analyst II at Citi · MS Analytics candidate at Georgia Tech · Building reliable AI agents and integrations.</p></div><a className="primaryButton" href={assetPath("/Deeksha_Gautam_AI_Resume.pdf")} download>Download PDF <span>↓</span></a></section>
      <section className="resumeLayout pageWidth">
        <aside className="resumeAside"><div><span>Location</span><p>Pune, India</p></div><div><span>Email</span><p><a href="mailto:gautamdeeksha7098@gmail.com">gautamdeeksha7098<br />@gmail.com</a></p></div><div><span>GitHub</span><p><a href="https://github.com/deekshagautam" target="_blank" rel="noreferrer">@deekshagautam ↗</a></p></div><div><span>Focus</span><p>AI agents<br />LLM systems<br />Enterprise integration</p></div></aside>
        <div className="resumeContent">
          <section><div className="resumeSectionTitle"><span>01</span><h2>Experience</h2></div><article className="resumeEntry"><div><h3>Technology Analyst II</h3><p>Citi · 2023—Present</p></div><ul><li>Built and modernized investment-platform services used across North America.</li><li>Contributed to a Kafka-powered direct-placement platform that increased client growth by 47%, activation by 30%, and achieved 92% customer satisfaction.</li><li>Automated a three-level approval workflow, reducing processing time by 78%.</li><li>Raised automated test coverage from 32% to 95% and migrated CI/CD workflows to GitHub and Harness.</li></ul></article><article className="resumeEntry"><div><h3>Technology Analyst</h3><p>Citi · 2022—2023</p></div><ul><li>Delivered a reporting suite used by 50+ users and reduced manual effort by 65%, earning a Silver Award.</li></ul></article></section>
          <section><div className="resumeSectionTitle"><span>02</span><h2>Applied AI work</h2></div><article className="resumeEntry"><div><h3>Hybrid AI Gateway</h3><p>Personal project · 2026</p></div><p>Built a privacy-aware LLM router with automated classification, fallbacks, evaluation suites, Docker, CI, and 106 passing tests.</p></article><article className="resumeEntry"><div><h3>Pet Thought Generator</h3><p>Personal project · 2026</p></div><p>Created an end-to-end Streamlit GenAI application using Python, structured prompting, and the Gemini API.</p></article></section>
          <section><div className="resumeSectionTitle"><span>03</span><h2>Education</h2></div><article className="resumeEntry"><div><h3>MS Analytics</h3><p>Georgia Institute of Technology · 2025—2027 expected</p></div></article><article className="resumeEntry"><div><h3>B.Tech, Computer Science</h3><p>Indira Gandhi Delhi Technical University for Women · 2018—2022</p></div></article></section>
          <section><div className="resumeSectionTitle"><span>04</span><h2>Technical toolkit</h2></div><div className="tagList resumeTags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
