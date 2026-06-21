# SEO Guide — marielsgtzz.com

## Target Keywords

Found in index.html `<meta name="keywords">` tag

---

## What's Already Done (On-Page SEO)

- `<title>` tag with full name + job title
- `<meta name="description">` with name, employer, university, and stack
- `<meta name="keywords">` with all target terms (accented + unaccented variants)
- `<meta name="robots" content="index, follow">`
- `<link rel="canonical">` pointing to `https://marielsofiaguza.com/`
- Open Graph tags (LinkedIn, WhatsApp previews)
- Twitter Card tags
- JSON-LD structured data (Schema.org `Person`) with job title, employer, alumni of ITAM, LinkedIn, GitHub
- Bilingual site (ES/EN) via i18n
- `hreflang` in sitemap for ES/EN alternates
- `sitemap.xml` at `https://marielsofiaguza.com/sitemap.xml`
- `robots.txt` allowing all crawlers and pointing to sitemap

---

## Step-by-Step: Getting Indexed

### 1. Submit to Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://marielsgtzz.com`
3. Verify ownership via HTML file (upload to `public/`) or DNS TXT record in Hostinger
4. Once verified: **URL Inspection → Request Indexing** for `https://marielsgtzz.com/`
5. Go to **Sitemaps** → submit `https://marielsgtzz.com/sitemap.xml`

### 2. Submit to Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site → import from Google Search Console (easiest) or add manually
3. Submit sitemap: `https://marielsgtzz.com/sitemap.xml`

### 3. Register on Google's "About Me" Page
- Go to [aboutme.google.com](https://aboutme.google.com) and link your site
- This feeds Google's Knowledge Panel for your name

---

## Off-Page SEO — Build Authority & Backlinks

These are the highest-impact actions after on-page is done. Google ranks pages by **authority** (who links to you) and **relevance** (keyword match). The goal is to get your name + target keywords mentioned on trusted sites pointing back to `marielsgtzz.com`.

### LinkedIn (highest priority)
- Your LinkedIn URL: `linkedin.com/in/marielsgtzz`
- Make sure your LinkedIn headline says: **Software Engineer at J.P. Morgan | ITAM**
- Add your website to your profile: `https://marielsgtzz.com`
- Write a post announcing the portfolio — LinkedIn posts get indexed by Google

### GitHub
- Your GitHub: `github.com/marielsgtzz`
- Add `https://marielsgtzz.com` to your GitHub profile bio
- Add a short bio mentioning J.P. Morgan, Microsoft, ITAM, and augmented reality

### ITAM Alumni Networks
- If ITAM has an alumni directory or LinkedIn group, make sure your profile links back
- ITAM is an authoritative domain — a backlink from `.itam.mx` is very valuable

### Microsoft & J.P. Morgan
- If either company has public directories, employee spotlights, or intern blogs, ask to be listed with a link to your portfolio

### Other Directories
- Add your site to [devfolio.co](https://devfolio.co), [polywork.com](https://polywork.com), or similar developer directories
- List yourself on [about.me](https://about.me/marielsgtzz) with a link to your site

---

## Updating sitemap.xml

Every time the site content changes significantly, update the `<lastmod>` date in [`public/sitemap.xml`](public/sitemap.xml):

```xml
<lastmod>YYYY-MM-DD</lastmod>
```

Then go back to Google Search Console → Sitemaps → re-submit.

---

## Timeline Expectations

| Timeframe | What to expect |
|---|---|
| 1–3 days | Google crawls your sitemap after submission |
| 1–2 weeks | Site appears in search for your exact name |
| 2–6 weeks | Appears for "Software Engineer ITAM", "Mariel ITAM", etc. |
| 1–3 months | Appears for competitive terms like "augmented reality" or "software engineer JP Morgan" with enough backlinks |

**Name searches always index fastest.** Competitive keyword searches ("software engineer") take longer and depend on backlinks.

---

## Quick Checklist Before Each Deploy

- [ ] `sitemap.xml` `<lastmod>` date is current
- [ ] JSON-LD in `index.html` reflects current job/title
- [ ] `og:image` URL is still valid
- [ ] After deploy: Google Search Console → Request Indexing
