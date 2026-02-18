import ScrollSection from "@/components/ScrollSection";

const steps = [
  {
    step: "01",
    title: "Pick a fixture",
    desc: "Select the league and match. Our engine instantly loads current form tables, head-to-head history, injury reports, and live odds from every major bookmaker.",
    detail: "Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Champions League",
  },
  {
    step: "02",
    title: "Choose your output",
    desc: "Match preview, betting tips, social posts — or all at once. Apply your brand voice profile, select a template, and set the language.",
    detail: "4 content types · 3+ voice profiles · 6 languages",
  },
  {
    step: "03",
    title: "Generate & publish",
    desc: "AI creates everything in under 30 seconds. Copy to clipboard, export as HTML, or auto-publish directly to your WordPress site.",
    detail: "WordPress integration · Scheduled publishing · Affiliate links auto-injected",
  },
];

export default function HowItWorks() {
  return (
    <ScrollSection id="steps" className="relative z-[1] max-w-[1100px] mx-auto px-4 sm:px-7 py-14 sm:py-[72px]">
      <div className="text-center mb-10 sm:mb-14">
        <p className="font-display text-[11px] font-bold text-brand-400 uppercase tracking-[0.14em] mb-2.5">How it works</p>
        <h2 className="font-display text-[clamp(24px,5vw,36px)] font-extrabold text-gray-50 tracking-[-0.025em]">
          Three clicks. Done.
        </h2>
      </div>

      {/* 1 stupac na mobitelu, 3 na desktopu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s) => (
          <div
            key={s.step}
            className="relative p-[24px_20px] sm:p-[32px_26px] rounded-[18px] bg-white/[0.012] border border-white/[0.04]"
          >
            <span className="font-display text-[48px] sm:text-[56px] font-extrabold text-brand-400/[0.04] absolute top-[10px] right-[18px] leading-none">
              {s.step}
            </span>
            <div className="relative">
              <div className="w-9 h-9 rounded-[10px] bg-brand-400/[0.06] border border-brand-400/[0.12] flex items-center justify-center mb-4 sm:mb-[18px]">
                <span className="font-display text-[13px] font-extrabold text-brand-400">{s.step}</span>
              </div>
              <h3 className="font-display text-[17px] sm:text-[19px] font-bold text-gray-50 mb-2">{s.title}</h3>
              <p className="text-[13px] text-gray-500 leading-[1.65] mb-3">{s.desc}</p>
              <p className="text-[11px] text-gray-800 font-mono leading-[1.5]">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollSection>
  );
}
