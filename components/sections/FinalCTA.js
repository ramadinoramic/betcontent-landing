"use client";
import ScrollSection from "@/components/ScrollSection";

export default function FinalCTA() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <ScrollSection id="final-cta" className="relative z-[1] max-w-[1100px] mx-auto px-7 pt-8 pb-[88px]">
      <div className="relative overflow-hidden p-[56px_44px] rounded-3xl bg-gradient-to-br from-brand-400/[0.05] to-brand-600/[0.015] border border-brand-400/[0.08] text-center">
        <div className="absolute -top-[60px] -right-[60px] w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.06),transparent_70%)]" />
        <h2 className="relative font-display text-[32px] font-extrabold text-gray-50 leading-[1.15] tracking-[-0.02em] mb-2.5">
          Your competitors will wonder how
          <br />
          you&apos;re publishing 100 articles a week.
        </h2>
        <p className="relative text-[14px] text-gray-600 mb-7">
          Join 247+ iGaming affiliates already on the waitlist.
        </p>
        <button
          onClick={() => scrollTo("waitlist")}
          className="relative cta-glow inline-flex items-center gap-2 px-9 py-4 rounded-[14px] text-[15px] font-bold font-display bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-[0_8px_32px_rgba(16,185,129,0.25)] cursor-pointer"
        >
          Join the Waitlist
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
      </div>
    </ScrollSection>
  );
}
