"use client";
import WaitlistForm from "@/components/WaitlistForm";

const WAITLIST_COUNT = 247;

export default function Hero() {
  return (
    <section id="waitlist" className="relative z-[1] max-w-[1100px] mx-auto px-4 sm:px-7 pt-[110px] sm:pt-[152px] pb-10 sm:pb-16 text-center">
      {/* Badge */}
      <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-400/[0.05] border border-brand-400/10 mb-7">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
        <span className="text-[11px] sm:text-[12px] font-semibold text-brand-400 tracking-wide">
          AI-Powered · Early Access Spring 2026
        </span>
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up animation-delay-100 font-display text-[clamp(34px,8vw,68px)] font-extrabold leading-[1.06] text-gray-50 tracking-[-0.035em] max-w-[780px] mx-auto mb-6">
        Match previews that
        <br />
        <span className="bg-gradient-to-br from-brand-400 to-brand-600 bg-clip-text text-transparent">
          write themselves
        </span>
      </h1>

      {/* Subheadline */}
      <p className="animate-fade-up animation-delay-200 text-[clamp(14px,1.7vw,18px)] text-gray-500 leading-[1.7] max-w-[520px] mx-auto mb-9 px-2">
        Pick any fixture. AI pulls live stats, injuries, and odds from 15+
        bookmakers — then writes an SEO-optimized preview, betting tips, and
        social posts in 30 seconds.
      </p>

      {/* Email CTA */}
      <div className="animate-fade-up animation-delay-300 mb-5 px-2">
        <WaitlistForm />
      </div>

      {/* Social proof */}
      <div className="animate-fade-up animation-delay-400 flex items-center justify-center gap-3.5">
        <div className="flex">
          {["#059669", "#10b981", "#34d399", "#6ee7b7"].map((c, i) => (
            <div
              key={i}
              className="w-[26px] h-[26px] rounded-full border-2 border-surface flex items-center justify-center text-[10px] font-bold text-white"
              style={{ background: c, marginLeft: i > 0 ? -7 : 0 }}
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <p className="text-[13px] text-gray-600">
          <span className="font-semibold text-gray-400">{WAITLIST_COUNT}+ affiliates</span> on
          the waitlist
        </p>
      </div>

      {/* App preview mock */}
      <div className="animate-fade-up animation-delay-500 mt-12 sm:mt-16 relative">
        <div className="rounded-[18px] overflow-hidden p-[3px] bg-white/[0.02] border border-white/[0.05] shadow-[0_32px_100px_rgba(0,0,0,0.4),0_0_50px_rgba(52,211,153,0.04)]">
          <div className="rounded-[16px] bg-surface-raised p-[14px_16px] sm:p-[18px_22px]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 mb-[14px] sm:mb-[18px]">
              <div className="flex gap-[5px]">
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                  <div key={c} className="w-[9px] h-[9px] rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="flex-1 h-[24px] rounded-[7px] bg-white/[0.035] flex items-center pl-3">
                <span className="text-[10px] text-gray-800 font-mono">app.betcontent.ai/generate</span>
              </div>
            </div>

            {/* Mock UI — 1 stupac na mobitelu, 2 na desktopu */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-3.5">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-400/[0.08] flex items-center justify-center text-sm">⚽</div>
                  <div>
                    <p className="font-display text-[13px] font-bold text-gray-50">Man City vs Arsenal</p>
                    <p className="text-[10px] text-gray-800">Premier League · Sat 15:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-[5px] mb-2.5">
                  <div className="w-[5px] h-[5px] rounded-full bg-brand-400 animate-pulse-slow" />
                  <span className="text-[10px] text-brand-400">Live stats + odds from 15 bookmakers</span>
                </div>
                {["Match Preview", "Betting Tips", "Social Posts", "H2H Analysis"].map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-[7px] px-2.5 py-[7px] rounded-[7px] mb-1"
                    style={{
                      background: i < 2 ? "rgba(52,211,153,0.05)" : "rgba(255,255,255,0.015)",
                      border: `1px solid ${i < 2 ? "rgba(52,211,153,0.12)" : "rgba(255,255,255,0.03)"}`,
                    }}
                  >
                    <div
                      className="w-[5px] h-[5px] rounded-full"
                      style={{ background: i < 2 ? "#34d399" : "#1f2937" }}
                    />
                    <span className="text-[11px]" style={{ color: i < 2 ? "#34d399" : "#374151" }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* AI Output panel — sakriven na mobitelu */}
              <div className="hidden sm:block bg-white/[0.015] border border-white/[0.04] rounded-xl p-3.5">
                <p className="font-display text-[12px] font-bold text-gray-50 mb-1.5">AI Output</p>
                <p className="text-[10px] text-gray-600 leading-[1.65] mb-1.5">
                  The Etihad hosts the biggest Premier League clash of the season. City are in
                  devastating form — Haaland with 7 in 5 — while Arsenal arrive unbeaten in 8 away...
                </p>
                <p className="text-[10px] text-gray-600 leading-[1.65] mb-2.5">
                  Historical data shows the last 3 H2H meetings produced under 2.5 goals. Both
                  managers will prioritize defensive structure...
                </p>
                <div className="flex gap-[5px] flex-wrap">
                  {["U2.5 @ 2.10", "Draw @ 3.40", "BTTS No @ 2.25"].map((tip) => (
                    <div
                      key={tip}
                      className="px-2 py-[3px] rounded-[5px] bg-brand-400/[0.06] border border-brand-400/[0.12] text-[9px] text-brand-400 font-mono"
                    >
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-1px] left-0 right-0 h-[70px] bg-gradient-to-b from-transparent to-surface" />
      </div>
    </section>
  );
}
