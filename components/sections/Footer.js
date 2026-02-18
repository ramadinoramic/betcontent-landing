import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border-subtle py-8 px-7">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[7px]">
          <Logo size={18} />
          <span className="font-display text-[13px] font-bold text-gray-700">BetContent.ai</span>
        </div>
        <p className="text-[11px] text-gray-800">
          © 2026 BetContent.ai · AI content tool for sports media · Not a gambling service · 18+
        </p>
        <div className="flex gap-4">
          {["Privacy", "Terms"].map((l) => (
            <a key={l} href="#" className="text-[11px] text-gray-800 hover:text-gray-500 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
