# Avaantage Apps Portfolio

Portfolio subdomain for apps.avaantage.digital - showcasing 120+ apps across iOS, Android, macOS, and visionOS platforms.

## Features

- **Smart Routing:** Routes like `/creatorsuite` proxy to GitHub Pages
- **Custom Domain:** apps.avaantage.digital
- **Next.js 16:** Modern framework with App Router
- **Zero Config:** Automatic rewrites to GitHub Pages URLs

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Routing

The app uses Next.js rewrites to proxy content from GitHub Pages:

- `apps.avaantage.digital/creatorsuite` → `https://akaash-nigam.github.io/mac_CreatorSuite/`
- More apps can be added in `next.config.js`

## Deployment

Deployed on Vercel with custom domain configuration.

### Deploy to Vercel

```bash
vercel
```

### Configure Custom Domain

1. Add `apps.avaantage.digital` in Vercel project settings
2. Add DNS record: `CNAME apps → cname.vercel-dns.com`
3. Wait for SSL provisioning (~5 minutes)

## Tech Stack

- **Framework:** Next.js 16
- **Runtime:** Node.js
- **Deployment:** Vercel
- **DNS:** Cloudflare (recommended)

## Project Structure

```
apps-portfolio/
├── app/
│   ├── layout.js       # Root layout
│   └── page.js         # Homepage with app listing
├── next.config.js      # Rewrite configuration
├── package.json
└── README.md
```

## Adding New Apps

Edit `next.config.js` and add a rewrite rule:

```javascript
{
  source: '/newapp',
  destination: 'https://akaash-nigam.github.io/newapp/',
},
```

Then add the app to the homepage in `app/page.js`.

## Status

✅ Local development working
✅ Routing configured
⏳ Ready for deployment
⏳ Custom domain pending

---

**Built with ❤️ by Avaantage Digital**
