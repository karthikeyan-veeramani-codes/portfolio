type PhoneMockProps = {
  tone?: "violet" | "cyan" | "slate";
  title: string;
  metric: string;
  metricLabel: string;
  screenshot?: string;
  screenshotAlt?: string;
  screenshots?: { src: string; alt?: string }[];
  size?: "sm" | "md";
};

const tones = {
  violet: {
    bg: "from-[#04221d] via-[#0a3a32] to-[#020e0c]",
    chip: "from-[#2dd4bf] to-[#0d9488]",
    bar: "from-[#2dd4bf] to-[#0d9488]",
  },
  cyan: {
    bg: "from-[#062033] via-[#0b3a5c] to-[#030a17]",
    chip: "from-[#22d3ee] to-[#38bdf8]",
    bar: "from-[#22d3ee] to-[#38bdf8]",
  },
  slate: {
    bg: "from-[#11131c] via-[#1b1f2e] to-[#070810]",
    chip: "from-[#e4e6f5] to-[#a1a5c2]",
    bar: "from-[#e4e6f5] to-[#a1a5c2]",
  },
} as const;

export function PhoneMock({
  tone = "violet",
  title,
  metric,
  metricLabel,
  screenshot,
  screenshotAlt,
  screenshots,
  size = "md",
}: PhoneMockProps) {
  const t = tones[tone];
  const frameWidth =
    size === "sm" ? "w-[140px] md:w-[160px]" : "w-[220px] md:w-[240px]";

  if (screenshots && screenshots.length > 0) {
    const stack = screenshots.slice(0, 3);
    const positions = [
      "rotate-[-9deg] -translate-x-10 translate-y-4 scale-[0.92] z-0",
      "rotate-0 translate-x-0 translate-y-0 z-20",
      "rotate-[9deg] translate-x-10 translate-y-4 scale-[0.92] z-10",
    ];
    return (
      <div className="relative mx-auto w-[260px] md:w-[300px] h-[420px] md:h-[480px]">
        {stack.map((shot, i) => {
          const pos =
            stack.length === 1
              ? positions[1]
              : stack.length === 2
                ? [positions[0], positions[2]][i]
                : positions[i];
          return (
            <div
              key={shot.src}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform ${pos} transition-transform`}
            >
              <ScreenshotPhone src={shot.src} alt={shot.alt ?? title} />
            </div>
          );
        })}
      </div>
    );
  }

  if (screenshot) {
    return (
      <div className="relative mx-auto">
        <ScreenshotPhone src={screenshot} alt={screenshotAlt ?? title} />
      </div>
    );
  }

  const isSm = size === "sm";

  return (
    <div className={`relative mx-auto ${frameWidth}`}>
      <div className="relative rounded-[2.25rem] p-[2px] bg-gradient-to-b from-white/30 to-white/5">
        <div
          className={`relative rounded-[2.15rem] aspect-[9/19] overflow-hidden bg-gradient-to-br ${t.bg} shadow-glass-lg`}
        >
          {/* Notch */}
          <div
            className={`absolute top-1.5 left-1/2 -translate-x-1/2 rounded-full bg-black/80 ${
              isSm ? "w-12 h-3.5" : "w-20 h-5"
            }`}
          />

          {/* Content */}
          <div className={`text-white ${isSm ? "pt-8 px-3.5" : "pt-12 px-5"}`}>
            <div
              className={`font-mono uppercase tracking-[0.2em] text-white/50 ${
                isSm ? "text-[8px]" : "text-[10px]"
              }`}
            >
              {title}
            </div>
            <div
              className={`mt-1 font-semibold tracking-tight ${
                isSm ? "text-xl" : "text-3xl"
              }`}
            >
              {metric}
            </div>
            <div className={`text-white/60 ${isSm ? "text-[9px]" : "text-[11px]"}`}>
              {metricLabel}
            </div>

            {/* Chart bars */}
            <div
              className={`flex items-end gap-1 ${
                isSm ? "mt-4 h-12" : "mt-6 h-20 gap-1.5"
              }`}
            >
              {[40, 62, 48, 78, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm bg-gradient-to-t ${t.bar} opacity-90`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            {/* Cards */}
            <div className={`space-y-1.5 ${isSm ? "mt-3" : "mt-5 space-y-2"}`}>
              {(isSm ? [1, 2] : [1, 2, 3]).map((i) => (
                <div
                  key={i}
                  className={`rounded-lg bg-white/5 border border-white/10 backdrop-blur flex items-center ${
                    isSm ? "p-1.5 gap-1.5" : "p-2.5 gap-2.5 rounded-xl"
                  }`}
                >
                  <div
                    className={`rounded-md bg-gradient-to-br ${t.chip} ${
                      isSm ? "w-5 h-5" : "w-7 h-7 rounded-lg"
                    }`}
                  />
                  <div className="flex-1">
                    <div
                      className={`rounded bg-white/25 ${
                        isSm ? "h-1 w-3/4" : "h-1.5 w-3/4"
                      }`}
                    />
                    <div
                      className={`rounded bg-white/10 ${
                        isSm ? "mt-1 h-1 w-1/2" : "mt-1.5 h-1.5 w-1/2"
                      }`}
                    />
                  </div>
                  <div
                    className={`font-mono text-white/50 ${
                      isSm ? "text-[8px]" : "text-[10px]"
                    }`}
                  >
                    0{i}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Home indicator */}
          <div
            className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-full bg-white/30 ${
              isSm ? "w-12 h-0.5" : "w-20 h-1"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

function ScreenshotPhone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[200px] md:w-[220px]">
      <div className="relative rounded-[2.25rem] p-[2px] bg-gradient-to-b from-white/30 to-white/5">
        <div className="relative rounded-[2.15rem] aspect-[9/19] overflow-hidden bg-black shadow-glass-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}
