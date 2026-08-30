import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const customDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN?.trim();

const basePath =
  isGitHubPages && repositoryName && !customDomain
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_RESUME_UPLOAD_ENABLED: isGitHubPages ? "false" : "true",
  },
};

export default nextConfig;
