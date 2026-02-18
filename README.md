# BetContent.ai — Landing Page

Production-ready Next.js landing page with Supabase waitlist integration.

## Quick Deploy (5 minutes)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "initial commit"
gh repo create betcontent-landing --public --push
```

### 2. Deploy on Vercel
- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repo
- Click **Deploy** (no config needed — it auto-detects Next.js)
- Your site is live at `betcontent-landing.vercel.app`

### 3. Connect custom domain
- In Vercel dashboard → Settings → Domains
- Add `betcontent.ai` (or whatever you bought)
- Update DNS: add Vercel's CNAME record

### 4. Setup Supabase (for email capture)
```sql
-- Run this in Supabase SQL editor:
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Anyone can join waitlist" 
  ON waitlist FOR INSERT 
  WITH CHECK (true);
```

Then add env vars in Vercel:
- `NEXT_PUBLIC_SUPABASE_URL` → from Supabase dashboard
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` → from Supabase dashboard

> **Note:** The landing page works WITHOUT Supabase too — it just won't persist emails. You can set up Supabase later.

## Project Structure
```
├── app/
│   ├── globals.css          # Tailwind + custom styles
│   ├── layout.js            # Root layout + SEO metadata
│   └── page.js              # Main page (assembles sections)
├── components/
│   ├── Background.js        # Atmospheric background
│   ├── Logo.js              # SVG logo
│   ├── Navbar.js            # Sticky nav with smooth scroll
│   ├── ScrollSection.js     # Intersection observer wrapper
│   ├── WaitlistForm.js      # Email capture + Supabase
│   └── sections/
│       ├── Hero.js           # Hero + app preview mock
│       ├── StatsBar.js       # Key metrics strip
│       ├── ProblemSolution.js # Without vs With comparison
│       ├── HowItWorks.js     # 3-step process
│       ├── Features.js       # 9 feature cards (lucide icons)
│       ├── Pricing.js        # 3-tier pricing
│       ├── FAQ.js            # Q&A section
│       ├── FinalCTA.js       # Bottom CTA banner
│       └── Footer.js         # Legal + links
├── lib/
│   ├── supabase.js          # Supabase client
│   └── useScrollAnimate.js  # Scroll animation hook
└── .env.local.example       # Environment variables template
```

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (custom theme)
- **Supabase** (waitlist email storage)
- **Lucide React** (icons)
- **Vercel** (hosting)

## After Deploy: Drive Traffic
1. Post on Reddit: r/sportsbetting, r/iGaming, r/affiliatemarketing
2. Twitter/X with #BuildInPublic
3. Affiliate forums: AffPapa, iGB Affiliate, SBC
4. Goal: **50-100 signups in 7 days** = validated demand
