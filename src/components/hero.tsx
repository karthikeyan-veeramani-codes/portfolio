import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const stats = [
  ["4", "Programming Languages"],
  ["6", "Development Tools"],
  ["5", "Years of Experience"],
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 pb-12 md:pt-44 md:pb-16 overflow-hidden bg-topo"
    >
      <div className="section relative">
        <h1 className="text-center text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95]">
          <span className="text-gradient">Developer</span>
        </h1>

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.3fr_0.85fr] gap-6 items-stretch">
          <ProfileCard />
          <IntroCard />
          <StatsCard />
        </div>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <div className="glass-2 rounded-[1.75rem] p-6 shadow-soft flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        <Image
          src="/logo_thumb.png"
          alt={siteConfig.authorName}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />
        <div>
          <div className="font-medium">{siteConfig.firstName}</div>
          <div className="text-xs font-mono opacity-60">{siteConfig.role}</div>
        </div>
      </div>

      <ul className="space-y-2 text-xs font-mono opacity-70 flex-1">
        <li className="flex items-center gap-2">
          <span className="code-tag">@</span>
          {siteConfig.contactEmail}
        </li>
        <li className="flex items-center gap-2">
          <span className="code-tag">#</span>
          {siteConfig.location}
        </li>
        <li className="flex items-center gap-2">
          <span className="code-tag">~</span>
          {siteConfig.brand}
        </li>
        <li className="flex items-center gap-2">
          <span className="code-tag">$</span>
          Available · {siteConfig.availabilityYear}
        </li>
      </ul>

      <a
        href={siteConfig.resumeUrl}
        className="mt-6 btn-ghost justify-center w-full"
        download
      >
        Download CV
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
        </svg>
      </a>
    </div>
  );
}

function IntroCard() {
  return (
    <div className="glass-2 rounded-[1.75rem] p-8 md:p-10 shadow-soft flex flex-col justify-center text-center">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
        Hey
        <br />
        I&apos;m <span className="text-accent">{siteConfig.firstName}</span>,
        <br />
        {siteConfig.roleShort}
      </h2>

      <p className="mt-6 max-w-md mx-auto opacity-70 leading-relaxed">
        {siteConfig.tagline}
      </p>

      <a
        href="#contact"
        className="mt-8 inline-flex items-center justify-center gap-2 self-center text-accent font-mono text-sm hover:opacity-80 transition"
      >
        Let&apos;s Talk
        <span aria-hidden>👋</span>
      </a>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="glass-2 rounded-[1.75rem] p-6 shadow-soft flex flex-col justify-center gap-4">
      {stats.map(([n, label]) => (
        <div key={label} className="flex items-center gap-4">
          <div className="text-3xl font-semibold text-accent w-10 text-center">
            {n}
          </div>
          <div className="text-xs font-mono uppercase tracking-widest opacity-70 leading-snug">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
