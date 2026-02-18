import ScrollSection from "@/components/ScrollSection";

const faqs = [
  { q: "How is this different from ChatGPT?", a: "ChatGPT has no access to live data. It can't check today's odds, current injuries, or recent form. BetContent pulls real-time stats from professional football APIs and compares odds from 15+ bookmakers — then generates content based on actual data, not hallucinated stats." },
  { q: "Is this a gambling service?", a: "No. BetContent.ai is a content generation tool for sports media publishers and affiliate websites. We don't offer betting, take wagers, or provide financial advice." },
  { q: "What leagues are supported?", a: "At launch: Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and Champions League. More leagues and sports (tennis, basketball, esports) are on the roadmap." },
  { q: "Can I use my own writing style?", a: "Yes. Upload 3-5 of your existing articles and our Brand Voice feature will learn your tone, vocabulary, and sentence structure. Every generated article will match your voice." },
  { q: "How does affiliate link injection work?", a: "Add your bookmaker affiliate URLs in the dashboard. When AI mentions a bookmaker in an article, it automatically inserts your tracked affiliate link. You earn commissions without lifting a finger." },
];

export default function FAQ() {
  return (
    <ScrollSection id="faq" className="relative z-[1] max-w-[680px] mx-auto px-7 py-[72px]">
      <div className="text-center mb-10">
        <h2 className="font-display text-[28px] font-extrabold text-gray-50 tracking-[-0.02em]">
          Questions & Answers
        </h2>
      </div>
      {faqs.map((item, i) => (
        <div
          key={i}
          className="p-[18px_22px] rounded-[14px] bg-white/[0.012] border border-white/[0.04] mb-2.5"
        >
          <p className="font-display text-[14px] font-bold text-gray-50 mb-2">{item.q}</p>
          <p className="text-[13px] text-gray-600 leading-[1.65]">{item.a}</p>
        </div>
      ))}
    </ScrollSection>
  );
}
