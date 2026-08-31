import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div><strong>Deeksha Gautam</strong><p>Software engineer specializing in applied AI.</p></div>
        <div className="footerLinks">
          <Link href="/projects">Projects</Link>
          <a href="https://github.com/deekshagautam" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://medium.com/@gautamdeeksha7098" target="_blank" rel="noreferrer">Writings ↗</a>
          <a href="mailto:gautamdeeksha7098@gmail.com">Email ↗</a>
        </div>
      </div>
    </footer>
  );
}
