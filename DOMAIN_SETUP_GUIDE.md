# 🌐 Domain Setup Guide - apps.avaantage.digital

**Date:** January 4, 2026
**Status:** 🔶 DNS Configuration Pending
**Cloud Run Service:** apps-portfolio
**Service URL:** https://apps-portfolio-1022196473572.us-central1.run.app

---

## ✅ What's Done

1. ✅ **Next.js app created** with GitHub Pages proxy routing
2. ✅ **Docker image built** and pushed to GCR
3. ✅ **Cloud Run service deployed** (apps-portfolio)
4. ✅ **Domain mapping created** in Cloud Run
5. ✅ **Routing verified** - `/creatorsuite` proxies to GitHub Pages successfully

---

## 🔧 Next Step: Configure DNS

You need to add a CNAME record to make apps.avaantage.digital point to Cloud Run.

### Option 1: Using Cloudflare (Recommended)

1. **Log in to Cloudflare dashboard**
   - Go to: https://dash.cloudflare.com/
   - Select the `avaantage.digital` domain

2. **Add DNS Record**
   - Click "DNS" in the left sidebar
   - Click "Add record"
   - Configure:
     - **Type:** CNAME
     - **Name:** apps
     - **Target:** ghs.googlehosted.com
     - **Proxy status:** ⚠️ DNS only (disable orange cloud)
     - **TTL:** Auto

3. **Save and wait**
   - Click "Save"
   - DNS propagation: 5-15 minutes

### Option 2: Using Google Cloud DNS

```bash
# If using Cloud DNS for avaantage.digital
gcloud dns record-sets create apps.avaantage.digital. \
  --rrdatas=ghs.googlehosted.com. \
  --type=CNAME \
  --zone=avaantage-digital-zone \
  --ttl=300
```

---

## 🧪 Verification Steps

After DNS is configured, wait 5-15 minutes then test:

### 1. Check DNS Resolution
```bash
# Verify CNAME record
dig apps.avaantage.digital CNAME +short

# Should return: ghs.googlehosted.com
```

### 2. Test Custom Domain
```bash
# Test homepage
curl -I https://apps.avaantage.digital/

# Test routing to CreatorSuite
curl -s https://apps.avaantage.digital/creatorsuite | grep -o '<title>[^<]*</title>'

# Should return: <title>CreatorSuite - AI Content Creation Studio</title>
```

### 3. Verify SSL Certificate
```bash
# Check SSL certificate status
gcloud beta run domain-mappings describe apps.avaantage.digital \
  --platform=managed \
  --region=us-central1 \
  --project=microsaas-projects-2024

# Look for: "Certificate provisioning: SUCCESS"
```

---

## 🎯 Expected URLs After Setup

| URL | Content |
|-----|---------|
| https://apps.avaantage.digital/ | Apps portfolio index page |
| https://apps.avaantage.digital/creatorsuite | CreatorSuite landing page (from GitHub Pages) |
| (Future) https://apps.avaantage.digital/glowai | GlowAI landing page |
| (Future) https://apps.avaantage.digital/expenseai | ExpenseAI landing page |

---

## 📊 Current Status

| Step | Status | Details |
|------|--------|---------|
| Next.js app | ✅ Complete | Built with App Router, smart routing |
| Docker build | ✅ Complete | Multi-stage optimized build |
| Cloud Run deployment | ✅ Complete | Service running at us-central1 |
| Domain mapping | ✅ Complete | apps.avaantage.digital → apps-portfolio |
| DNS configuration | 🔶 **PENDING** | **Add CNAME: apps → ghs.googlehosted.com** |
| SSL certificate | ⏳ Waiting | Auto-provisions after DNS is set |
| Testing | ⏳ Waiting | After DNS + SSL complete |

---

## 🚀 What Happens After DNS Is Set

1. **Immediate (0-5 min):** DNS propagates globally
2. **Within 15 min:** Google provisions SSL certificate
3. **Within 20 min:** https://apps.avaantage.digital/ becomes live
4. **Ready to scale:** Add more apps to next.config.js rewrites

---

## 💡 Troubleshooting

### DNS Not Resolving
```bash
# Force flush DNS cache (macOS)
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Check from Google DNS
dig @8.8.8.8 apps.avaantage.digital CNAME +short
```

### SSL Certificate Not Provisioning
- Verify CNAME is set correctly
- Check Cloudflare proxy is **disabled** (gray cloud, not orange)
- Wait up to 30 minutes for Google to provision

### 404 Errors
- Cloud Run service must be deployed
- Domain mapping must be created
- DNS must point to ghs.googlehosted.com

---

## 📝 Next Steps After Going Live

1. **Add more apps to routing**
   - Edit `next.config.js`
   - Add rewrites for each app
   - Rebuild and redeploy

2. **Create app index page**
   - Beautiful landing page at apps.avaantage.digital/
   - Search and filter functionality
   - Platform categories

3. **Set up analytics**
   - Google Analytics
   - Track app visits
   - Monitor performance

4. **Scale to all 120 apps**
   - Automate rewrite generation
   - Create dynamic routing
   - Build app catalog database

---

## 🎉 Summary

**Current Working URLs:**
- ✅ https://apps-portfolio-1022196473572.us-central1.run.app/
- ✅ https://apps-portfolio-1022196473572.us-central1.run.app/creatorsuite

**After DNS Setup:**
- 🔜 https://apps.avaantage.digital/
- 🔜 https://apps.avaantage.digital/creatorsuite
- 🔜 https://apps.avaantage.digital/{any-app}

**Total Cost:** $0/month (within Cloud Run free tier for low traffic)
