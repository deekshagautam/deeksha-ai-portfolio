# Deeksha Gautam — AI Portfolio

The source code for [deekshagautam.com](https://deekshagautam.com), built as a static Next.js portfolio and deployed with GitHub Pages.

## Included

- Home page with a concise applied-AI profile
- Four separate projects:
  - Hybrid AI Gateway
  - Local vs Cloud AI Lab
  - Pet Thought Generator
  - Georgia Tech Youth Mental Health Analysis
- GitHub page with links to three public repositories
- Writings section with Deeksha's published Medium articles
- Embedded and downloadable résumé PDF
- Responsive cream, charcoal, and muted-teal design
- GitHub Actions deployment and custom-domain configuration

## Run locally

Install Node.js 22.13 or newer, then run:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Build the static website

```bash
npm run build:pages
```

Next.js writes the static website to `out/`.

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` automatically builds and deploys every push to `main`.

In the GitHub repository:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Set the custom domain to `deekshagautam.com`.

The `public/CNAME` file and deployment environment are already configured for that domain.

## Update portfolio content

- Projects: edit `app/projectData.ts`.
- Homepage and Medium writings: edit `app/page.tsx`.
- GitHub repositories: edit `app/github/page.tsx`.
- Résumé: replace `public/Deeksha_Gautam_AI_Resume.pdf` with the new PDF, keeping the same filename, then commit and push.

GitHub Pages is static, so a browser-based résumé upload form cannot save files. Replacing the PDF in the repository is the reliable update method.

## Publish changes

```bash
git add -A
git commit -m "Update portfolio"
git push origin main
```

The GitHub Actions workflow will publish the update automatically.
