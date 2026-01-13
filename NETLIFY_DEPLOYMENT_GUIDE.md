# Netlify Deployment Guide for Bender Exports Website

## 🚀 Quick Deployment Steps

### Method 1: Drag & Drop (Easiest - Recommended for First Time)

1. **Prepare Your Files**
   - Make sure all your files are in the `bender-exports.com` folder
   - The `index.html` should be in the root of this folder

2. **Go to Netlify**
   - Visit: https://app.netlify.com
   - Sign up or log in (you can use GitHub, Google, or Email)

3. **Deploy**
   - On the Netlify dashboard, find the "Sites" section
   - Look for "Want to deploy a new site without connecting to Git?"
   - Drag and drop your entire `bender-exports.com` folder onto the deploy area
   - Wait for deployment to complete (usually 1-2 minutes)

4. **Get Your URL**
   - Netlify will automatically generate a URL like: `https://random-name-123.netlify.app`
   - You can change this in Site settings → Change site name

### Method 2: Git Integration (Recommended for Updates)

1. **Initialize Git Repository**
   ```bash
   cd "C:\Users\Lievin\Downloads\bender-exports.com\bender-exports.com\bender-exports.com"
   git init
   git add .
   git commit -m "Initial commit - Bender Exports website"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com and create a new repository
   - Name it: `bender-exports-website`
   - Don't initialize with README

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bender-exports-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your `bender-exports-website` repository
   - Netlify will auto-detect settings (publish directory: root)
   - Click "Deploy site"

### Method 3: Netlify CLI (For Developers)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   cd "C:\Users\Lievin\Downloads\bender-exports.com\bender-exports.com\bender-exports.com"
   netlify deploy
   ```

4. **For Production**
   ```bash
   netlify deploy --prod
   ```

## ⚙️ Configuration

The `netlify.toml` file is already configured with:
- ✅ Proper redirects for SPA routing
- ✅ Cache headers for better performance
- ✅ Security headers
- ✅ No build command needed (static site)

## 🔧 Custom Domain Setup

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `bender-exports.com`)
4. Follow Netlify's DNS instructions

## 📝 Important Notes

- **Root Directory**: Make sure `index.html` is in the root of the deployed folder
- **File Paths**: All relative paths should work correctly
- **HTTPS**: Netlify provides free SSL certificates automatically
- **Updates**: After deploying, any changes you make will need to be redeployed

## 🎯 Post-Deployment Checklist

- [ ] Test all pages (Home, Coffee, Construction, Machine, About, Contact)
- [ ] Verify all images load correctly
- [ ] Test navigation links
- [ ] Check forms functionality
- [ ] Test on mobile devices
- [ ] Verify animations work
- [ ] Check console for any errors (F12 → Console)

## 🆘 Troubleshooting

**Issue: 404 errors on pages**
- Solution: The `netlify.toml` redirects should handle this. Make sure it's in the root folder.

**Issue: Images not loading**
- Solution: Check that image paths use relative paths (e.g., `img/logo.png` not `/img/logo.png`)

**Issue: CSS/JS not loading**
- Solution: Verify file paths in HTML are correct and relative

## 📞 Need Help?

- Netlify Docs: https://docs.netlify.com
- Netlify Community: https://community.netlify.com
