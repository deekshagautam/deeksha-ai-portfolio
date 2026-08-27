# Deeksha Gautam — Applied AI Portfolio

A clean, multi-page portfolio for applied AI and software engineering roles. The warm cream, charcoal, and muted-teal visual system is based on Deeksha's approved UI mockup, with dedicated routes for the professional overview, detailed project case studies, public code, and résumé.

## Pages

- `/` — concise profile overview and selected project previews
- `/projects` — complete project case studies
- `/github` — public repository guide and portfolio source download
- `/resume` — web résumé and downloadable PDF

## Stack

- Next.js and React
- TypeScript
- Tailwind CSS import with a custom CSS design system
- Static export for GitHub Pages
- Automatic deployment with GitHub Actions

## Run locally

Requirements:

- Node.js 22.13 or newer
- npm

```bash
npm install
npm run dev
```

Then open the local URL printed by the development server.

## GitHub Pages static build

```bash
npm run build:pages
```

The deployable static site is written to `out/`. The normal `npm run build`
command remains available for the existing Vinext/Cloudflare build.

## Project structure

```text
.github/workflows/
  deploy-pages.yml  Automatic GitHub Pages deployment
app/
  components/       Shared navigation and footer
  github/           GitHub and source-code page
  projects/         Project case-study archive
  resume/           Web résumé and PDF download page
  globals.css       Complete responsive visual system
  layout.tsx        Site-wide metadata
  page.tsx          Homepage
  projectData.ts    Central project content
  siteConfig.ts     GitHub Pages asset-path handling
public/
  .nojekyll
  deeksha-portrait.png
  Deeksha_Gautam_AI_Resume.pdf
  favicon.svg
  og.png
scripts/
  generate_resume.py
  export-source.sh
```

## Update content

- Edit project facts once in `app/projectData.ts`.
- Edit homepage positioning in `app/page.tsx`.
- Edit résumé-page content in `app/resume/page.tsx`.
- Edit the PDF source in `scripts/generate_resume.py`, then run:

```bash
python3 -m pip install reportlab
python3 scripts/generate_resume.py
```

## Export a clean GitHub-ready copy

```bash
bash scripts/export-source.sh
```

This creates `Deeksha-Gautam-Portfolio-Source.zip` without dependencies, build
output, Git history, or hosting-specific identifiers.

## Deploy to GitHub Pages

### 1. Create the repository

Create a public GitHub repository named `deeksha-ai-portfolio` under the
`deekshagautam` account. Do not add a README, license, or `.gitignore` while
creating it because this project already contains those files.

### 2. Push this project

```bash
git init
git add .
git commit -m "Create applied AI portfolio"
git branch -M main
git remote add origin https://github.com/deekshagautam/deeksha-ai-portfolio.git
git push -u origin main
```

### 3. Enable GitHub Pages

In the GitHub repository:

1. Open **Settings**.
2. Select **Pages** under **Code and automation**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.

The included workflow builds and deploys the site whenever you push to `main`.
The default address will be:

```text
https://deekshagautam.github.io/deeksha-ai-portfolio/
```

The configuration automatically adds `/deeksha-ai-portfolio` to navigation,
JavaScript, CSS, images, the résumé download, and the source-code download.

## Test the exact GitHub Pages build locally

macOS or Linux:

```bash
GITHUB_ACTIONS=true \
GITHUB_REPOSITORY=deekshagautam/deeksha-ai-portfolio \
NEXT_PUBLIC_SITE_URL=https://deekshagautam.github.io \
npm run build:pages
```

Inspect the generated `out/` directory or serve it with any static HTTP server.

## Personal data

The public site and résumé contain Deeksha's professional email and phone
number. Review these fields before publishing a fork under another person's
account.
