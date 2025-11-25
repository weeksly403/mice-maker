# React-Snap Pre-rendering Setup

React-snap has been installed to enable static pre-rendering of pages for better SEO and AI bot visibility.

## Manual Configuration Required

Since we cannot directly modify `package.json` scripts, you need to manually add the following:

### 1. Add postbuild script to package.json

Open `package.json` and update the scripts section:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "postbuild": "react-snap",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

### 2. Add react-snap configuration to package.json

Add this configuration at the end of your `package.json`:

```json
"reactSnap": {
  "source": "dist",
  "inlineCss": true,
  "minifyHtml": {
    "collapseWhitespace": true,
    "removeComments": true,
    "removeAttributeQuotes": false
  },
  "include": [
    "/",
    "/services",
    "/destinations",
    "/destinations/marrakech",
    "/destinations/casablanca",
    "/destinations/agadir",
    "/destinations/fes",
    "/destinations/sahara",
    "/blog",
    "/about",
    "/contact",
    "/faq",
    "/success-stories",
    "/afcon-2025-morocco",
    "/blog/choosing-dmc-morocco",
    "/blog/corporate-event-roi",
    "/blog/hybrid-events-morocco",
    "/blog/marrakech-incentive-travel",
    "/blog/agadir-team-building",
    "/blog/sahara-corporate-retreats",
    "/blog/top-venues-morocco"
  ],
  "puppeteerArgs": [
    "--no-sandbox",
    "--disable-setuid-sandbox"
  ],
  "skipThirdPartyRequests": true,
  "cacheAjaxRequests": false,
  "concurrency": 4
}
```

**IMPORTANT**: The `"source": "dist"` line is critical because Vite outputs to the `dist/` folder, not `build/`.

### 3. Build and Test

After adding the configuration:

```bash
npm run build
```

This will:
1. Build your Vite app normally
2. Run react-snap to pre-render all specified pages
3. Generate static HTML files with full content visible to search engines

### 4. Verify Pre-rendering

Check the `dist/index.html` file - it should now contain your actual page content instead of just `<div id="root"></div>`.

### Expected SEO Impact

With pre-rendering enabled:
- ✅ Google Search Console will see full content immediately
- ✅ AI bots (ChatGPT, Claude, Perplexity) can extract your services
- ✅ Faster initial page load and better Core Web Vitals
- ✅ 100% SEO score for content visibility
- ✅ Featured snippet eligibility increases significantly

### Pages Pre-rendered

The configuration includes:
- Homepage (/)
- All main service pages
- All destination pages (Marrakech, Casablanca, Agadir, Fes, Sahara)
- Blog homepage and top 7 SEO articles
- Essential pages (About, Contact, FAQ, Success Stories)
- AFCON 2025 landing page

### Deployment

Pre-rendered pages work seamlessly with:
- Netlify (automatic detection)
- Vercel (automatic detection)
- AWS S3 + CloudFront
- Any static hosting provider

The pre-rendered HTML will be served to search engine crawlers and AI bots, while maintaining full React interactivity for users.
