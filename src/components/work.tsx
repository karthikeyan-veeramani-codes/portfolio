"use client";

import { useState } from "react";

type Project = {
  name: string;
  category: string;
  brief: string;
  details: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: "Click N Go",
    category: "Mobile · Valet & Self-Parking · Dubai · Dreamworld Technologies",
    brief: "Two-app valet & self-parking platform for Dubai malls and hotels.",
    details:
      'Staff register cars into slots, log condition and damage notes, and update slot status. Customers manage their vehicles, watch the parking journey live, and self-park by scanning a QR code. Tagline: "Faster · Greener · Cheaper."',
    tags: ["Flutter", "QR Code", "Realtime Sync", "Firebase push notification"],
  },
  {
    name: "Chat-Q-Max",
    category: "Mobile · Messaging & Calls · Dreamworld Technologies",
    brief: "WhatsApp-style real-time messenger with voice and video calling.",
    details:
      "Firebase powers one-to-one and group chat with delivery state and presence. ZEGOCLOUD handles HD voice and video calls between users.",
    tags: ["Flutter", "Firebase", "ZEGOCLOUD", "Realtime Sync"],
  },
  {
    name: "Delivery Guys",
    category: "Mobile · Last-Mile Delivery · Dreamworld Technologies",
    brief: "Rider app for food and parcel delivery jobs.",
    details:
      "Riders onboard, pick up jobs from a dispatch queue, navigate to the customer, and confirm hand-off — all from one live screen.",
    tags: ["Flutter", "Maps", "Realtime", "Firebase push notification"],
  },
  {
    name: "Maidah",
    category: "Mobile · Restaurant Loyalty · Dubai · Dreamworld Technologies",
    brief: "NFC-tap restaurant loyalty app for Dubai diners.",
    details:
      "Tap your phone against the venue's NFC card to redeem promo codes and unlock discounts — no scanning, no typing, instant discount.",
    tags: ["Flutter", "NFC", "Firebase", "Firebase push notification"],
  },
  {
    name: "Six1Two",
    category: "Mobile · Food Ordering · Dreamworld Technologies",
    brief: "Multi-restaurant food ordering app in the spirit of Swiggy.",
    details:
      "Discover restaurants nearby, browse menus, place an order, and track the delivery from kitchen to door.",
    tags: ["Flutter", "Maps", "Payments", "Firebase push notification"],
  },
  {
    name: "SunsetChaser",
    category: "Mobile · Travel · Dreamworld Technologies",
    brief: "Travel companion that pins visited places and captures moments.",
    details:
      "Turns trips into a living map. Pin every place you visit, capture the moment at each stop, and watch the world fill in as you explore.",
    tags: ["Flutter", "Maps", "Camera", "Firebase push notification"],
  },
  {
    name: "iDairy",
    category: "Mobile · Productivity · Dreamworld Technologies",
    brief: "Voice-first notes app for reminders and events.",
    details:
      "Speak a thought; iDairy transcribes it, files it, and reminds you when it matters.",
    tags: ["Flutter", "Voice", "Reminders", "Firebase push notification"],
  },
  {
    name: "Recommon",
    category: "Mobile · Referral & Commission · Dreamworld Technologies",
    brief: "Job referral app where users post jobs and earn commission.",
    details:
      "Users initiate job postings, route them to their network, and earn a commission once the job is taken or completed. Tracks referrals, status, and payouts end-to-end.",
    tags: ["Flutter", "Firebase", "Payments", "Firebase push notification"],
  },
  {
    name: "Witeon",
    category: "Mobile · E-commerce",
    brief: "E-commerce app with product catalogue, sales, and cart checkout.",
    details:
      "Customers browse products, view sales and offers, add items to a cart, and check out — built with a clean storefront and order flow.",
    tags: ["React Native", "E-commerce", "Cart"],
  },
  {
    name: "Barracoda",
    category: "Mobile + Web · E-commerce · Dreamworld Technologies",
    brief:
      "Full e-commerce ecosystem — customer mobile app, admin web panel, Node.js backend.",
    details:
      "Customer-facing React Native app with product catalogue, sales, and cart checkout. React admin web panel for product management and overall analytics, powered by a Node.js backend.",
    tags: ["React Native", "React", "Node.js", "E-commerce"],
  },
  {
    name: "Tickets-pi",
    category: "Web + Mobile · Movie & Event Booking · Gnapi Technologies",
    brief:
      "Movie and event ticket booking platform with an offline-capable theatre check-in app.",
    details:
      "Customer-facing web platform built with Next.js + Nest.js — browse movies and events, pick seats and showtimes, and book tickets end-to-end. A Flutter theatre-side app handles bookings and venue check-in with an offline-first design: check-ins continue to work without internet and sync back to the server automatically once the device reconnects.",
    tags: ["Next.js", "Nest.js", "Flutter", "Offline Sync"],
  },
  {
    name: "Oaktree",
    category: "Web · Healthcare · Gnapi Technologies",
    brief:
      "Doctor appointment booking platform — bug fixes and feature enhancements.",
    details:
      "An existing doctor appointment booking website at Gnapi. Joined the support team to triage and fix bugs, harden production flows, and ship new feature enhancements on top of the live codebase.",
    tags: ["React", "Healthcare", "Maintenance"],
  },
];

type Filter = "all" | "mobile" | "web";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
];

function matches(filter: Filter, category: string) {
  if (filter === "all") return true;
  const cat = category.toLowerCase();
  return cat.includes(filter);
}

export function Work() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => matches(filter, p.category));

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="section">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            Worked <span className="text-accent">Projects</span>
          </h2>
          <p className="mt-3 text-sm opacity-60 font-mono">
            2022 — 2026 · products shipped, not just designed
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 rounded-full p-1 border border-[color:var(--border)] bg-white/5">
            {filters.map((f) => {
              const active = f.id === filter;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-mono transition ${
                    active
                      ? "bg-[color:var(--accent-teal)] text-[#02221d]"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  aria-pressed={active}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="-mx-6 px-6 md:-mx-10 md:px-10">
          <div className="flex items-start gap-5 overflow-x-auto pb-6 snap-x snap-mandatory work-scroll">
            {visible.length === 0 ? (
              <p className="opacity-50 text-sm font-mono py-12 mx-auto">
                No projects in this category.
              </p>
            ) : (
              visible.map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project: p,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [primary, ...rest] = p.category.split(" · ");

  return (
    <article className="glass rounded-3xl p-5 shrink-0 w-[320px] md:w-[380px] min-h-[300px] snap-start flex flex-col hover:border-[color:var(--accent-teal)] transition-colors">
      <div className="flex items-start justify-between gap-2 mb-4">
        <span className="font-mono text-xs opacity-50 shrink-0">
          0{index + 1}
        </span>
        <span className="font-mono text-[10px] opacity-60 uppercase tracking-widest text-right break-words">
          {primary}
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight break-words">
        {p.name}
      </h3>
      {rest.length > 0 && (
        <div className="mt-1 text-[10px] font-mono opacity-50 uppercase tracking-widest break-words">
          {rest.join(" · ")}
        </div>
      )}

      <p className="mt-3 text-sm opacity-80 leading-relaxed">{p.brief}</p>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm opacity-70 leading-relaxed">{p.details}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 self-start text-xs font-mono text-accent hover:opacity-80 transition inline-flex items-center gap-1"
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Show more"}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[color:var(--border)] bg-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-5 flex items-center gap-3 text-xs whitespace-nowrap">
        <a
          href="#"
          className="inline-flex items-center gap-1 opacity-80 hover:opacity-100"
        >
          Read more
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}
