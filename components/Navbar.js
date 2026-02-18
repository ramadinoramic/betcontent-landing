"use client";
import Logo from "./Logo";

const navLinks = [
  { label: "Features", target: "features" },
  { label: "How it works", target: "how-it-works" },
  { label: "Pricing", target: "pricing" },
];

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(6,8,9,0.82)] backdrop-blur-xl border-b border-border-subtle">
      <div className="max-w-[1100px] mx-auto px-7 h-[60px] grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Logo size={28} />
          <span className="font-display font-extrabold text-[17px] text-gray-50">
            BetContent<span className="text-brand-400">.ai</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-9">
          {navLinks.map((n) => (
            <button
              key={n.target}
              onClick={() => scrollTo(n.target)}
              className="text-[13px] font-medium text-gray-500 hover:text-gray-200 transition-colors bg-transparent border-none cursor-pointer"
            >
              {n.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <button
            onClick={() => scrollTo("waitlist")}
            className="px-5 py-2 rounded-[10px] text-[13px] font-semibold bg-brand-400/10 text-brand-400 border border-brand-400/20 hover:bg-brand-400/15 transition-all cursor-pointer"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
