import ScrollSection from "@/components/ScrollSection";

const problems = [
  { t: "30+ minutes per article", d: "Manually checking stats across 5+ different sites before you even start writing." },
  { t: "€20-50 per outsourced article", d: "Freelancers are expensive, slow, and often miss key stats or get facts wrong." },
  { t: "Stale data from ChatGPT", d: "Generic AI has no access to live odds, current form, or today's injury news." },
  { t: "10 articles per week, max", d: "You're capped by hours in the day. Your competitors aren't." },
];

const solutions = [
  { t: "30 seconds per article", d: "AI pulls form, H2H, injuries, and live odds automatically. You just pick the match." },
  { t: "€0.15 per article", d: "API costs only. That's 200x cheaper than a freelancer with better accuracy." },
  { t: "Real-time data, every time", d: "Connected to live feeds. Current odds from 15+ bookmakers. Today's lineups." },
  { t: "100+ articles per week", d: "Bulk generate entire matchdays. Auto-publish to WordPress before kickoff." },
];

function ItemList({ items, type }) {
  const isGood = type === "solution";
  const color = isGood ? "brand-400" : "red-400";
  const bg = isGood ? "bg-brand-400/[0.02]" : "bg-red-400/[0.02]";
  const border = isGood ? "border-brand-400/[0.06]" : "border-red-400/[0.06]";
  const iconBg = isGood ? "bg-brand-400/[0.08]" : "bg-red-400/[0.06]";
  const icon = isGood ? "✓" : "✕";

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <div className={`w-7 h-7 rounded-lg ${iconBg} flex items-center justify-center`}>
          <span className={`text-${color} text-[13px] font-bold`}>{icon}</span>
        </div>
        <p className={`font-display text-[14px] font-bold text-${color} uppercase tracking-wider`}>
          {isGood ? "With BetContent" : "Without BetContent"}
        </p>
      </div>
      {items.map((item, i) => (
        <div key={i} className={`flex gap-3 p-[13px_16px] rounded-xl ${bg} border ${border} mb-2`}>
          <div className={`w-5 h-5 rounded-md ${iconBg} text-${color} flex items-center justify-center flex-shrink-0 text-[10px] font-extrabold mt-[1px]`}>
            {icon}
          </div>
          <div>
            <p className="text-[13px] font-semibold text-gray-200 mb-[2px]">{item.t}</p>
            <p className="text-[12px] text-gray-600 leading-[1.55]">{item.d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProblemSolution() {
  return (
    <ScrollSection id="how-it-works" className="relative z-[1] max-w-[1100px] mx-auto px-7 py-[72px]">
      <div className="text-center mb-14">
        <p className="font-display text-[11px] font-bold text-brand-400 uppercase tracking-[0.14em] mb-2.5">Why BetContent.ai</p>
        <h2 className="font-display text-[36px] font-extrabold text-gray-50 tracking-[-0.025em]">
          Your current workflow is broken
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-14">
        <ItemList items={problems} type="problem" />
        <ItemList items={solutions} type="solution" />
      </div>
    </ScrollSection>
  );
}
