# 🚀 Deployment Guide - apps.avaantage.digital

This guide will help you deploy the apps portfolio to Vercel and configure the custom domain.

---

## ✅ What's Done

1. ✅ **Next.js app created** with smart routing
2. ✅ **Local testing successful** - `/creatorsuite` routes to GitHub Pages
3. ✅ **Code pushed to GitHub** - https://github.com/akaash-nigam/apps-portfolio
4. ✅ **Routing configured** for CreatorSuite app

---

## 🎯 Next Steps

### Step 1: Deploy to Vercel (5 minutes)

#### Option A: Via Vercel Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select "Import Git Repository"
4. Search for `apps-portfolio` or paste: `https://github.com/akaash-nigam/apps-portfolio`
5. Click "Import"
6. **Framework Preset:** Next.js (auto-detected)
7. **Root Directory:** `./` (default)
8. **Build Settings:** Leave as default
9. Click **"Deploy"**

Vercel will:
- Auto-detect Next.js
- Install dependencies
- Build the project
- Deploy to a `.vercel.app` URL

**Deployment time:** ~2 minutes

You'll get a URL like: `https://apps-portfolio-xxxx.vercel.app`

#### Option B: Via Vercel CLI

```bash
cd /Users/aakashnigam/Axion/AxionApps/apps-portfolio
npm install -g vercel
vercel login
vercel
```

Follow prompts:
- Link to existing project? **No**
- Project name: `apps-portfolio`
- Deploy to production? **Yes**

---

### Step 2: Test Deployment

After deployment, test the routes:

```bash
# Test homepage
curl -I https://apps-portfolio-xxxx.vercel.app/

# Test CreatorSuite proxy
curl -I https://apps-portfolio-xxxx.vercel.app/creatorsuite
```

Both should return `HTTP/2 200`.

---

### Step 3: Configure Custom Domain (10 minutes)

#### A. In Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your `apps-portfolio` project
3. Go to **Settings** → **Domains**
4. Click **"Add Domain"**
5. Enter: `apps.avaantage.digital`
6. Click **"Add"**

Vercel will show you DNS configuration needed.

#### B. In Cloudflare (Recommended DNS Provider)

**If using Cloudflare:**

1. Go to https://dash.cloudflare.com
2. Select your `avaantage.digital` domain
3. Go to **DNS** → **Records**
4. Click **"Add record"**
5. Configure:
   - **Type:** CNAME
   - **Name:** apps
   - **Target:** cname.vercel-dns.com
   - **TTL:** Auto
   - **Proxy status:** 🟠 DNS only (turn off proxy - important!)
6. Click **"Save"**

**If using Google Cloud DNS:**

1. Go to https://console.cloud.google.com/net-services/dns
2. Select your DNS zone for `avaantage.digital`
3. Click **"Add record set"**
4. Configure:
   - **DNS Name:** apps.avaantage.digital
   - **Resource Record Type:** CNAME
   - **TTL:** 300
   - **Canonical name:** cname.vercel-dns.com.
5. Click **"Create"**

**If using another DNS provider:**

Add a CNAME record:
```
Host:   apps
Value:  cname.vercel-dns.com
TTL:    300 (or Auto)
```

---

### Step 4: Verify DNS & SSL (5-15 minutes)

#### Wait for DNS propagation

DNS changes can take 5-15 minutes to propagate globally.

Check DNS propagation:
```bash
# Check if DNS is propagated
dig apps.avaantage.digital

# Or use online tool
# https://www.whatsmydns.net/#CNAME/apps.avaantage.digital
```

You should see:
```
apps.avaantage.digital.  300  IN  CNAME  cname.vercel-dns.com.
```

#### Verify SSL Certificate

Vercel automatically provisions SSL certificates. This takes 2-5 minutes after DNS is configured.

In Vercel dashboard:
- Go to **Settings** → **Domains**
- Check status of `apps.avaantage.digital`
- Should show: ✅ **Valid Configuration**

---

### Step 5: Test Live Deployment

Once SSL is ready, test your live site:

```bash
# Test homepage
curl -I https://apps.avaantage.digital/

# Test CreatorSuite routing
curl -I https://apps.avaantage.digital/creatorsuite

# Verify it's proxying from GitHub
curl -s https://apps.avaantage.digital/creatorsuite | grep -o '<title>[^<]*</title>'
```

Expected results:
- Homepage: `HTTP/2 200`
- /creatorsuite: `HTTP/2 200` with GitHub Pages content
- Title: `<title>CreatorSuite - AI Content Creation Studio</title>`

---

## 🎉 Success Criteria

When everything is working, you should see:

✅ **Homepage:** https://apps.avaantage.digital/
- Shows app portfolio index
- Lists CreatorSuite app

✅ **CreatorSuite:** https://apps.avaantage.digital/creatorsuite
- URL stays as `apps.avaantage.digital/creatorsuite`
- Content is proxied from GitHub Pages
- Shows CreatorSuite landing page

✅ **SSL:** Green padlock in browser

---

## 📋 Troubleshooting

### Issue: DNS not resolving

**Solution:**
- Wait 15 minutes for propagation
- Clear DNS cache: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
- Check DNS with: `dig apps.avaantage.digital`

### Issue: SSL certificate pending

**Solution:**
- Wait 5 minutes
- Ensure DNS CNAME is pointing to `cname.vercel-dns.com`
- In Cloudflare, ensure proxy is **OFF** (DNS only)
- Click "Refresh" in Vercel dashboard

### Issue: 404 on /creatorsuite

**Solution:**
- Check `next.config.js` has correct rewrite rules
- Verify GitHub Pages URL is accessible: `curl https://akaash-nigam.github.io/mac_CreatorSuite/`
- Redeploy: `vercel --prod` or trigger redeploy in Vercel dashboard

### Issue: CORS errors

**Solution:**
- This is normal for GitHub Pages proxying
- The rewrite handles it automatically
- If issues persist, check browser console

---

## 📊 Deployment Summary

| Step | Time | Status |
|------|------|--------|
| 1. Deploy to Vercel | 2-3 min | ⏳ Pending |
| 2. Test deployment | 1 min | ⏳ Pending |
| 3. Configure DNS | 2 min | ⏳ Pending |
| 4. Wait for DNS/SSL | 5-15 min | ⏳ Pending |
| 5. Test live site | 1 min | ⏳ Pending |
| **Total** | **10-25 min** | **⏳ Pending** |

---

## 🔄 Scaling to All 120 Apps

Once this is working for CreatorSuite, scaling to all apps is easy:

### 1. Update `next.config.js`

Add all 120 app routes:

```javascript
async rewrites() {
  return [
    // macOS apps
    { source: '/creatorsuite', destination: 'https://akaash-nigam.github.io/mac_CreatorSuite/' },
    { source: '/healthcompanion', destination: 'https://akaash-nigam.github.io/mac_HealthCompanion/' },
    // ... 4 more macOS apps

    // iOS apps
    { source: '/calmspaceai', destination: 'https://akaash-nigam.github.io/iOS_CalmSpaceAI/' },
    { source: '/expenseai', destination: 'https://akaash-nigam.github.io/iOS_ExpenseAI/' },
    // ... 11 more iOS apps

    // Android apps
    { source: '/glowai', destination: 'https://akaash-nigam.github.io/android_GlowAI/' },
    { source: '/betibachao', destination: 'https://akaash-nigam.github.io/android_beti-bachao/' },
    // ... 31 more Android apps

    // visionOS apps
    { source: '/ai-agent-coordinator', destination: 'https://akaash-nigam.github.io/visionOS_ai-agent-coordinator/' },
    // ... 67 more visionOS apps
  ];
}
```

### 2. Update `app/page.js`

Add all 120 apps to the apps array.

### 3. Deploy

```bash
git add .
git commit -m "Add all 120 apps routing"
git push
```

Vercel will auto-deploy the changes.

---

## 💰 Cost

**Total Cost:** $0/month ✅

- **Vercel Free Tier:**
  - Includes: Custom domains, SSL, 100 GB bandwidth
  - Sufficient for: Portfolio traffic
  - Upgrade needed: Only if you exceed 100 GB/month

- **DNS (Cloudflare):**
  - Free forever
  - Includes: Unlimited DNS queries, DDOS protection

---

## 📝 Next Session Tasks

Once deployed and tested:

1. ✅ Add all 120 app routes to `next.config.js`
2. ✅ Update homepage with all apps
3. ✅ Add search/filter functionality
4. ✅ Add analytics (optional)
5. ✅ Create automated script to generate routes from GitHub repos

---

## 🎯 Current Status

✅ **Completed:**
- Next.js app created
- Routing configured for CreatorSuite
- Local testing successful
- Code pushed to GitHub

⏳ **Pending (Your Action Required):**
- Deploy to Vercel (5 minutes)
- Configure DNS (2 minutes)
- Wait for SSL (5-15 minutes)
- Test live deployment (1 minute)

**Estimated Time to Live:** 15-25 minutes

---

## 📞 Support

If you encounter issues:

1. Check Vercel deployment logs: https://vercel.com/dashboard
2. Check DNS with: `dig apps.avaantage.digital`
3. Verify GitHub Pages are accessible
4. Check browser console for errors

---

**Ready to deploy?** Start with **Step 1** above! 🚀
