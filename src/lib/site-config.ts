export const siteConfig = {
  title:
    process.env.NEXT_PUBLIC_SITE_TITLE ??
    "Karthikeyan V — Full Stack Developer",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Portfolio of a senior application developer crafting elegant, high-performance products. Mobile, web, and systems.",
  brand: process.env.NEXT_PUBLIC_SITE_BRAND ?? "kv.dev",
  authorName: process.env.NEXT_PUBLIC_AUTHOR_NAME ?? "Karthikeyan V",
  firstName: process.env.NEXT_PUBLIC_FIRST_NAME ?? "Karthikeyan",
  role: process.env.NEXT_PUBLIC_ROLE ?? "Full Stack Developer",
  roleShort: process.env.NEXT_PUBLIC_ROLE_SHORT ?? "Full-Stack Developer",
  tagline:
    process.env.NEXT_PUBLIC_TAGLINE ??
    "I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done.",
  location: process.env.NEXT_PUBLIC_LOCATION ?? "Chennai",
  availabilityYear: process.env.NEXT_PUBLIC_AVAILABILITY_YEAR ?? "2026",
  appVersion: process.env.NEXT_PUBLIC_APP_VERSION ?? "v2.4.1",
  lastUpdated: process.env.NEXT_PUBLIC_LAST_UPDATED ?? "April 2026",
  copyrightYear: process.env.NEXT_PUBLIC_COPYRIGHT_YEAR ?? "2026",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@kv.dev",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL ?? "#",
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? process.env.NEXT_PUBLIC_GITHUB_HANDLE ?? "karthikeyan-veeramani-codes",
    githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL ?? "#",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_HANDLE ?? "kvdev",
    linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#",
    readcv: process.env.NEXT_PUBLIC_READCV_HANDLE ?? "kvdev",
    readcvUrl: process.env.NEXT_PUBLIC_READCV_URL ?? "#",
  },
};
