"use client";
import ScrollSection from "@/components/ScrollSection";

const tiers = [
  { name: "Starter", price: "0", per: "forever", desc: "See what it can do", features: ["5 generations / month", "Match previews", "1 language", "Community support"], cta: "Start Free", pop: false },
  { name: "Pro", price: "29", per: "/ month", desc: "For working affiliates", features: ["100 generations / month", "All content types", "Brand Voice profiles", "6 languages", "SEO optimization", "Bulk generation", "Affiliate link injection", "WordPress export"], cta: "Join Waitlist", pop: true },
  { name: "Agency", price: "99", per: "/ month", desc: "For teams & networks", features: ["Unlimited generations", "Everything in Pro", "5 team seats", "API access", "White-label export", "Auto-publish scheduling", "Priority support"], cta: "Contact Us", pop: false },
];

export default function Pricing() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <ScrollSection id="pricing" className="relative z-[1] max-w-[1100px] mx-auto px-4 sm:px-7 py-14 sm:py-[72px]">
      <div className="text-center mb-10 sm:mb-14">
        <p className="font-display text-[11px] font-bold text-brand-400 uppercase tracking-[0.14em] mb-2.5">Pricing</p>
        <h2 className="font-display text-[clamp(22px,4vw,36px)] font-extrabold text-gray-50 tracking-[-0.025em] mb-2">
          One article costs €30 from a writer.
        </h2>
        <p className="text-[14px] text-gray-600">With BetContent, you get 100 for €29.</p>
      </div>

      {/* 1 stupac mobile → 3 desktop, Pro kartica ide prva na mobitelu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-[880px] mx-auto">
        {tiers.map((t) => (
          <div
            key={t.name}
            className="rounded-[20px]"
            style={{
              padding: t.pop ? 2 : 0,
              background: t.pop
                ? "linear-gradient(160deg, rgba(52,211,153,0.35), rgba(5,150,105,0.06))"
                : "transparent",
              // Pro kartica ide na vrh na mobitelu
              order: t.pop ? -1 : 0,
            }}
          >
            <div
              className="h-full flex flex-col"
              style={{
                borderRadius: t.pop ? 18 : 20,
                padding: "28px 22px",
                background: t.pop ? "#070b09" : "rgba(255,255,255,0.012)",
                border: t.pop ? "none" : "1px solid rgba(255,255,255,0.04)",
              }}
            >
              {t.pop && (
                <div className="inline-flex items-center gap-[5px] px-2.5 py-[3px] rounded-full mb-3.5 w-fit bg-brand-400/[0.06] border border-brand-400/[0.12]">
                  <div className="w-[5px] h-[5px] rounded-full bg-brand-400" />
                  <span className="text-[10px] font-bold text-brand-400">MOST POPULAR</span>
                </div>
              )}
              <h3 className="font-display text-[19px] font-bold text-gray-50 mb-[3px]">{t.name}</h3>
              <p className="text-[12px] text-gray-600 mb-[16px]">{t.desc}</p>
              <div className="mb-[18px]">
                <span className="font-display text-[40px] sm:text-[44px] font-extrabold text-gray-50">€{t.price}</span>
                <span className="text-[13px] text-gray-700 ml-[3px]">{t.per}</span>
              </div>
              <button
                onClick={() => scrollTo("waitlist")}
                className="w-full py-3 sm:py-3.5 rounded-xl text-[13px] font-bold font-display mb-5 cursor-pointer transition-all"
                style={{
                  background: t.pop ? "linear-gradient(135deg, #059669, #10b981)" : "rgba(255,255,255,0.04)",
                  color: t.pop ? "#fff" : "#9ca3af",
                  boxShadow: t.pop ? "0 4px 20px rgba(16,185,129,0.18)" : "none",
                }}
              >
                {t.cta}
              </button>
              <div className="flex flex-col gap-[9px] flex-1">
                {t.features.map((f) => (
                  <div key={f} className="flex items-center gap-[9px]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round">
                      <path d="M3 7l3 3 5-5" />
                    </svg>
                    <span className="text-[12px] text-gray-500">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollSection>
  );
}
