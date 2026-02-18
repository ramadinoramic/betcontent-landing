"use client";
import { Database, TrendingUp, FileSearch, Mic, Trophy, Link2, Zap, Send, Globe } from "lucide-react";
import ScrollSection from "@/components/ScrollSection";

const features = [
  { icon: Database, title: "Live Data Engine", desc: "Real-time form, H2H, lineups, and injuries pulled from professional football APIs. No manual research.", accent: "#34d399" },
  { icon: TrendingUp, title: "Odds Comparison", desc: "Compares odds from 15+ bookmakers instantly. Identifies value bets and tracks line movements.", accent: "#10b981" },
  { icon: FileSearch, title: "SEO Match Previews", desc: "1000-word articles with meta tags, keyword optimization, and iGaming-specific SEO scoring.", accent: "#60a5fa" },
  { icon: Mic, title: "Brand Voice AI", desc: "Upload your existing articles. AI learns your tone and vocabulary. Every output sounds like you wrote it.", accent: "#a78bfa" },
  { icon: Trophy, title: "Track Record", desc: "Every tip verified against real results. Embed your win rate on your site. Build audience trust.", accent: "#fbbf24" },
  { icon: Link2, title: "Affiliate Auto-Inject", desc: "Your bookmaker links inserted into every article automatically. Click tracking and revenue dashboard.", accent: "#f472b6" },
  { icon: Zap, title: "Bulk Generation", desc: "Generate content for 10+ matches in one click. Entire Premier League matchday in under 5 minutes.", accent: "#fb923c" },
  { icon: Send, title: "Social-Ready Posts", desc: "Twitter, Telegram, Instagram — formatted for each platform. Copy and post in seconds.", accent: "#38bdf8" },
  { icon: Globe, title: "Multi-Language", desc: "English, German, Spanish, Portuguese, Croatian, Italian. Reach betting audiences worldwide.", accent: "#34d399" },
];

export default function Features() {
  return (
    <ScrollSection id="features" className="relative z-[1] max-w-[1100px] mx-auto px-4 sm:px-7 py-14 sm:py-[72px]">
      <div className="text-center mb-10 sm:mb-14">
        <p className="font-display text-[11px] font-bold text-brand-400 uppercase tracking-[0.14em] mb-2.5">Features</p>
        <h2 className="font-display text-[clamp(24px,5vw,36px)] font-extrabold text-gray-50 tracking-[-0.025em] mb-2">
          Everything ChatGPT can&apos;t do
        </h2>
        <p className="text-[14px] text-gray-600 max-w-[440px] mx-auto px-2">
          Built for iGaming affiliates. Every feature uses live data, saves time, or makes you money.
        </p>
      </div>

      {/* 1 stupac mobile → 2 tablet → 3 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="feature-card p-[20px_18px] sm:p-[26px_22px] rounded-2xl bg-white/[0.012] border border-white/[0.04] relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${f.accent}88, transparent)` }}
              />
              <div
                className="mb-4 w-11 h-11 sm:w-12 sm:h-12 rounded-[12px] sm:rounded-[14px] flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${f.accent}14, ${f.accent}08)`,
                  border: `1px solid ${f.accent}22`,
                }}
              >
                <Icon size={20} color={f.accent} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-[14px] sm:text-[15px] font-bold text-gray-50 mb-[6px]">{f.title}</h3>
              <p className="text-[12px] text-gray-600 leading-[1.6]">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </ScrollSection>
  );
}
