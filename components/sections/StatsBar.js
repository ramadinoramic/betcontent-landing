const stats = [
  { n: "30s", d: "generation time" },
  { n: "15+", d: "bookmakers compared" },
  { n: "6", d: "languages supported" },
  { n: "67%", d: "avg. tip win rate" },
  { n: "100+", d: "articles per week" },
];

export default function StatsBar() {
  return (
    <section className="relative z-[1] border-y border-border-subtle py-6 sm:py-7">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-7 flex flex-wrap items-center justify-center gap-6 sm:gap-12">
        {stats.map((s, i) => (
          <div key={i} className="text-center min-w-[80px]">
            <p className="font-display text-[22px] font-extrabold text-brand-400 leading-none">{s.n}</p>
            <p className="text-[11px] text-gray-700 mt-[3px]">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
