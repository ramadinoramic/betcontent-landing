import "./globals.css";

export const metadata = {
  title: "BetContent.ai — AI Match Previews & Betting Tips in 30 Seconds",
  description:
    "AI pulls live stats, injuries & odds from 15+ bookmakers — then writes SEO-optimized match previews, betting tips, and social posts. Built for iGaming affiliates.",
  keywords: [
    "betting content generator",
    "AI match preview",
    "betting tips AI",
    "iGaming affiliate tools",
    "sports content automation",
    "match preview writer",
  ],
  openGraph: {
    title: "BetContent.ai — Match Previews That Write Themselves",
    description:
      "AI-powered content generator for iGaming affiliates. Live stats + real-time odds → SEO article in 30 seconds.",
    url: "https://betcontent.ai",
    siteName: "BetContent.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BetContent.ai — Match Previews That Write Themselves",
    description:
      "AI pulls live stats & odds from 15+ bookmakers → generates match previews, tips & social posts in 30s.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
