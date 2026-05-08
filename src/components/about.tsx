export function About() {
  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="section">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            About <span className="text-accent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
          <div className="glass-2 rounded-[1.5rem] p-8 md:p-10 shadow-soft font-mono text-sm leading-relaxed">
            <p className="opacity-80">
              <span className="text-accent">Hello!</span>
              <br />
              <br />
              My name is <span className="text-accent">Karthikeyan</span> — a
              Senior App Developer based in Tiruchirappalli. I&apos;ve spent
              five years shipping mobile and web products, primarily in{" "}
              <span className="text-accent">Flutter</span>, with{" "}
              <span className="text-accent">React Native</span>,{" "}
              <span className="text-accent">Next.js</span>,{" "}
              <span className="text-accent">Nest.js</span>, and{" "}
              <span className="text-accent">Node.js</span> across the stack.
              <br />
              <br />
              My work runs in production — from Dubai malls and restaurants to
              ticket booths: valet parking, NFC restaurant rewards, real-time
              chat with HD calls, food ordering, and offline-first event
              check-in. I care about clean, concise code that survives the
              real world — solid sync, predictable state, and details that
              respect the user&apos;s time.
              <br />
              <br />
              When I&apos;m not coding, I&apos;m reading, sketching ideas, or
              picking up a hands-on project like photography.
              <br />
              <br />
              Striving to never stop learning and improving.
            </p>
          </div>

          <div className="glass-2 rounded-[1.5rem] p-8 md:p-10 shadow-soft">
            <div className="eyebrow mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent-teal)]" />
              Now playing
            </div>
            <div className="space-y-5">
              {[
                {
                  title:
                    "Building products at Gnapi Technologies, Tiruchirappalli",
                  meta: "Senior App Developer · now",
                },
                {
                  title:
                    "Started my career at Dreamworld Technologies, Manapparai",
                  meta: "Junior App Developer · earlier",
                },
                {
                  title: "Writing about systems, interaction, and taste",
                  meta: "Essays · kv.dev/notes",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-t border-[color:var(--border)] first:border-0 first:pt-0 pt-5"
                >
                  <div className="font-medium">{item.title}</div>
                  <div className="mt-1 text-xs font-mono opacity-50 uppercase tracking-widest">
                    {item.meta}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[color:var(--border)]">
              <div className="text-xs font-mono opacity-50 uppercase tracking-widest text-center mb-4">
                5 years overall · stack breakdown
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  ["Flutter", "5 yrs"],
                  ["Web", "1 yr"],
                  ["Backend", "1 yr"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="text-xs font-mono opacity-50 uppercase tracking-widest">
                      {k}
                    </div>
                    <div className="mt-1 font-medium text-accent">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
