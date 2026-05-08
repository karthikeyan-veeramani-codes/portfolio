import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-12 md:py-16 relative overflow-hidden bg-topo"
    >
      <div className="section">
        <div className="glass-2 rounded-[2rem] p-10 md:p-16 text-center shadow-glass-lg">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.05] text-balance">
            Have something
            <br />
            <span className="text-accent">worth building?</span>
          </h2>
          <p className="mt-6 max-w-lg mx-auto opacity-70">
            Tell me a bit about the product, the team, and the problem. I read
            every message personally and usually reply within a day.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="btn-primary"
            >
              {siteConfig.contactEmail}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#" className="btn-ghost">
              Book an intro call
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-[color:var(--border)] flex flex-wrap items-center justify-center gap-6 text-sm opacity-60 font-mono overflow-hidden">
            {[
              ["github", siteConfig.social.github, siteConfig.social.githubUrl],
              [
                "linkedin",
                siteConfig.social.linkedin,
                siteConfig.social.linkedinUrl,
              ],
              [
                "read.cv",
                siteConfig.social.readcv,
                siteConfig.social.readcvUrl,
              ],
            ].map(([label, handle, href]) => (
              <a
                key={label}
                href={href}
                className="hover:opacity-100 transition flex items-center min-w-0"
              >
                <span className="opacity-50 shrink-0">{label}/</span>
                <span className="truncate">{handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-10">
      <div className="section flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono opacity-50">
        <div>
          © {siteConfig.copyrightYear} {siteConfig.authorName} · Designed &
          built in {siteConfig.location}
        </div>
        <div className="flex items-center gap-4">
          <span>{siteConfig.appVersion}</span>
          <span>·</span>
          <span>Last updated {siteConfig.lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}
