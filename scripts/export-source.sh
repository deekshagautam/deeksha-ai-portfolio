#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
output_path="${1:-$repo_root/Deeksha-Gautam-Portfolio-Source.zip}"

cd "$repo_root"
source_files=(
  app/page.tsx
  app/layout.tsx
  app/globals.css
  app/projectData.ts
  app/siteConfig.ts
  app/components
  app/projects
  app/github
  app/resume
  public/favicon.svg
  public/deeksha-portrait.png
  public/og.png
  public/og-source.svg
  public/Deeksha_Gautam_AI_Resume.pdf
  public/.nojekyll
  .github/workflows/deploy-pages.yml
  scripts/build-verified.sh
  scripts/install-ci.sh
  scripts/sites-env.sh
  scripts/generate_resume.py
  scripts/export-source.sh
  build/sites-vite-plugin.ts
  README.md
  package.json
  package-lock.json
  next.config.ts
  vite.config.ts
  postcss.config.mjs
  tsconfig.json
  eslint.config.mjs
  .gitignore
  .npmrc
)

zip -qrFS "$output_path" "${source_files[@]}"

printf 'Created %s\n' "$output_path"
