# 🚀 Deployment Guide - Lohith Ashwa S Portfolio

## Prerequisites
1. Install Git: https://git-scm.com/download/win
2. Create a GitHub account: https://github.com (if you don't have one)
3. Create a Vercel account: https://vercel.com (sign up with GitHub)

## Step 1: Push to GitHub

### 1.1 Install Git (if not already installed)
- Download Git from: https://git-scm.com/download/win
- Run the installer with default settings
- Restart your terminal/PowerShell

### 1.2 Initialize Git Repository
Open PowerShell in your project folder (L:\LOHITH_PORTFOLIO) and run:

```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### 1.3 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `lohithashwa-portfolio`
3. Description: "Professional portfolio showcasing projects, hackathons, and certifications"
4. Keep it Public
5. DO NOT initialize with README (we already have code)
6. Click "Create repository"

### 1.4 Push to GitHub
After creating the repository, run these commands (replace YOUR_USERNAME with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/lohithashwa-portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel (Free Hosting)

### 2.1 Sign Up for Vercel
1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account

### 2.2 Import Your Project
1. Click "Add New..." → "Project"
2. Select your `lohithashwa-portfolio` repository
3. Click "Import"

### 2.3 Configure Deployment
- **Framework Preset**: Next.js (should auto-detect)
- **Root Directory**: ./
- **Build Command**: `npm run build` (auto-filled)
- **Output Directory**: `.next` (auto-filled)
- Click "Deploy"

### 2.4 Wait for Deployment
- Vercel will build and deploy your site (takes 2-3 minutes)
- You'll get a URL like: `lohithashwa-portfolio.vercel.app`

## Step 3: Custom Domain (Free)

### Option A: Vercel Free Domain
Your site will be available at:
- `lohithashwa-portfolio.vercel.app`
- You can customize it to: `lohithashwa.vercel.app`

To customize:
1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add domain: `lohithashwa.vercel.app`
4. Click "Add"

### Option B: Free Custom Domain with GitHub Pages
Alternatively, you can use GitHub Pages:
1. Repository name MUST be: `YOUR_USERNAME.github.io`
2. Your site will be at: `YOUR_USERNAME.github.io`

### Option C: Free Domain from Freenom (Optional)
1. Go to https://www.freenom.com
2. Search for: `lohithashwa.tk` or `lohithashwa.ml`
3. Register for free
4. Point DNS to Vercel (instructions in Vercel dashboard)

## Step 4: Verify Deployment

1. Visit your deployed URL
2. Test on mobile and desktop
3. Check all sections load correctly
4. Test certificate modals
5. Verify all images load

## Automatic Updates

Every time you push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Vercel will automatically rebuild and deploy your site! 🎉

## Your Live URLs

After deployment, your portfolio will be available at:
- **Vercel**: `https://lohithashwa.vercel.app`
- **GitHub**: `https://YOUR_USERNAME.github.io` (if using GitHub Pages)

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Make sure there are no TypeScript errors

### Images Not Loading
- Verify all images are in the `public` folder
- Check image paths start with `/` (e.g., `/images/logo.png`)

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

---

## Quick Commands Reference

```bash
# Initialize Git
git init

# Stage all files
git add .

# Commit changes
git commit -m "Your message here"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/lohithashwa-portfolio.git

# Push to GitHub
git push -u origin main

# Future updates
git add .
git commit -m "Update content"
git push
```

---

**🎉 Congratulations! Your portfolio will be live and accessible worldwide!**
