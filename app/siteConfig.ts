export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

export const resumePdfPath = assetPath("/Deeksha_Gautam_AI_Resume.pdf");

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://deekshagautam.com";
