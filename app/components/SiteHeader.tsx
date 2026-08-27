import Link from "next/link";

type NavKey = "home" | "projects" | "github" | "resume";

const navItems: Array<{ key: NavKey; label: string; href: string }> = [
  { key: "home", label: "Home", href: "/" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "github", label: "GitHub", href: "/github" },
  { key: "resume", label: "Résumé", href: "/resume" },
];

export default function SiteHeader({ active }: { active: NavKey }) {
  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link className="brand" href="/" aria-label="Deeksha Gautam home">Deeksha Gautam</Link>
        <nav className="primaryNav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link className={active === item.key ? "active" : ""} href={item.href} key={item.key}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
