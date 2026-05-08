"use client";

import Image from "next/image";
import { useTheme } from "./theme-provider";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  ["Home", "#top"],
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Stack", "#stack"],
  ["Contact", "#contact"],
] as const;

export function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(100%-2rem,72rem)]">
      <nav className="glass rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between shadow-soft">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <Image
            src="/logo_thumb.png"
            alt={siteConfig.brand}
            width={28}
            height={28}
            className="rounded-full object-cover"
          />
          <span className="tracking-tight">{siteConfig.brand}</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="px-3 py-1.5 rounded-full opacity-70 hover:opacity-100 hover:text-[color:var(--accent-teal)] transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.social.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.41.35.78 1.04.78 2.11v3.13c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
          <a
            href={siteConfig.social.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.28 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.55v-6.6c0-1.57-.03-3.59-2.19-3.59-2.2 0-2.53 1.71-2.53 3.48V22H7.5V8z" />
            </svg>
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="icon-btn"
          >
            {theme === "dark" ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
