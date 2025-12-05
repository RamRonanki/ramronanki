# Vercel Deployment Guide for ramronanki.com

## Step 1: Push Code to GitHub

First, you need to push your code to GitHub. Run these commands:

```bash
git remote -v
```

If you don't have a GitHub remote set up, do this:

```bash
# Add your GitHub repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/RamRonanki/ramronanki.git
git branch -M main
git push -u origin main
```

If you already have a remote:
```bash
git push
```

## Step 2: Set Up Vercel Account & Deploy

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up** (you can use GitHub login for easier integration)
3. **Click "Add New..." → "Project"**
4. **Select "Import Git Repository"**
5. **Search for "ramronanki"** repository and click Import
6. **Configure Project:**
   - Framework Preset: Choose "Create React App"
   - Root Directory: `./`
   - Build Command: `npm run build` (should be auto-filled)
   - Output Directory: `build` (should be auto-filled)
   - Environment Variables: Leave empty for now

7. **Click "Deploy"** - Your app will be deployed! 🎉

## Step 3: Connect Your Domain (ramronanki.com)

### Option A: Using Vercel Domains (Recommended if not using Hostinger)

1. In Vercel Dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add domain: `ramronanki.com`
4. Follow the instructions to update DNS

### Option B: Connect Hostinger Domain (Your Case)

Since you already have ramronanki.com at Hostinger:

1. **In Vercel Dashboard:**
   - Go to your project → **Settings** → **Domains**
   - Add `ramronanki.com`
   - Vercel will show you DNS records to add

2. **In Hostinger cPanel/Dashboard:**
   - Go to **DNS Settings** or **Manage DNS**
   - Add these Vercel DNS records:
     - **Type:** A (or CNAME if Vercel specifies)
     - **Name:** @ (root domain)
     - **Value:** Vercel's IP (usually provided)
   
   Also add for www:
     - **Type:** CNAME
     - **Name:** www
     - **Value:** cname.vercel-dns.com

3. **Wait 24-48 hours** for DNS propagation

## Step 4: Verify Deployment

After setup:
- Visit `https://ramronanki.com`
- You should see your Coming Soon portfolio page!
- Check that it loads securely (SSL certificate auto-installed by Vercel)

## Automatic Deployments

Now whenever you:
1. Push to GitHub (`git push`)
2. Vercel automatically detects changes
3. Your site rebuilds and updates automatically ✨

## Troubleshooting

**Domain not showing?**
- DNS changes take 24-48 hours
- Check Vercel's DNS settings in project dashboard
- Verify Hostinger's DNS records are correct

**Build failing?**
- Check Vercel's build logs
- Ensure `package.json` has correct dependencies

**Need to update code?**
- Edit files locally
- Run `git add . && git commit -m "message"` 
- Run `git push`
- Vercel redeploys automatically!

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Connecting Custom Domains](https://vercel.com/docs/concepts/projects/domains/add-a-domain)
- [GitHub Integration](https://vercel.com/docs/git/github)

---

**Next Steps:**
1. Create GitHub account if you don't have one
2. Push code to GitHub
3. Sign up for Vercel
4. Connect your domain at Hostinger
5. Your portfolio will be live! 🚀
