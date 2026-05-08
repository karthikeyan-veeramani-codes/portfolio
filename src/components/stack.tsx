const groups = [
  {
    label: "Mobile",
    items: ["Flutter", "React Native"],
  },
  {
    label: "Web",
    items: ["Next.js · React", "Node.js", "Nest.js"],
  },
  {
    label: "Data",
    items: ["Couchbase", "Firebase", "Postgres"],
  },
  {
    label: "Platform",
    items: ["Docker", "Kafka", "OAuth"],
  },
  {
    label: "Craft & Certs",
    items: [
      "UX Research — Coursera",
      "React Native — Coursera",
      "Google Dart Skills",
    ],
  },
];

export function Stack() {
  return (
    <section id="stack" className="py-12 md:py-16 relative">
      <div className="absolute inset-0 -z-10 bg-grid-light dark:bg-grid-dark [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-60" />

      <div className="section">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            <span className="text-accent">Skills</span>
          </h2>
          <p className="mt-3 text-sm opacity-60 font-mono">
            I am striving to never stop learning and improving
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {groups.map((g) => (
            <div
              key={g.label}
              className="glass rounded-2xl p-6 shadow-soft hover:ring-accent-soft transition"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs uppercase tracking-widest opacity-60">
                  {g.label}
                </span>
                <span className="w-6 h-6 rounded-md bg-gradient-to-br from-[color:var(--accent-teal)] to-[color:var(--accent-cyan)] opacity-90" />
              </div>
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <span className="w-1 h-1 rounded-full bg-[color:var(--accent-teal)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
