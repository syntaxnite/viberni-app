# 🚀 Viberni Website - GitHub Deployment Guide

## Repository Setup Instructions

### Option 1: Create Repository on GitHub (Recommended)

1. **Go to GitHub**: https://github.com/syntaxnite
2. **Click "New repository"** (green button)
3. **Repository name**: `viberni-app`
4. **Description**: `Viberni - A social media platform that adapts to how you feel`
5. **Visibility**: Choose Public or Private
6. **⚠️ Important**: Do NOT check any of these boxes:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
7. **Click "Create repository"**

### Option 2: Push to GitHub (After creating repository)

Once the repository is created on GitHub, run these commands:

```bash
# We've already done these steps:
# git init
# git add .
# git commit -m "Initial commit: Complete Viberni website with emotional questionnaire, dark/light mode, and custom logo design"
# git branch -M main
# git remote add origin https://github.com/syntaxnite/viberni-app.git

# Now push to GitHub:
git push -u origin main
```

## 📁 Project Structure Being Deployed

```
viberni-app/
├── 📄 README.md                    # Complete documentation
├── 📄 package.json                 # Dependencies and scripts
├── 📄 app.js                       # Main Express server
├── 📁 routes/                      # Express routes
│   ├── index.js                    # Main pages
│   └── questionnaire.js            # Questionnaire handling
├── 📁 views/                       # EJS templates
│   ├── partials/                   # Reusable components
│   │   ├── header.ejs              # Header with logo & nav
│   │   └── footer.ejs              # Footer with links
│   └── pages/                      # All pages
│       ├── index.ejs               # Landing page
│       ├── about.ejs               # About page
│       ├── support.ejs             # Support & FAQ
│       ├── questionnaire.ejs       # Emotional survey
│       ├── questionnaire-success.ejs # Thank you page
│       ├── 404.ejs                 # Not found page
│       └── error.ejs               # Error page
└── 📁 public/                      # Static assets
    ├── css/main.css                # Complete styles
    ├── js/main.js                  # Interactive features
    └── images/                     # Logo assets
        ├── viberni-logo.svg        # Full logo
        ├── viberni-icon.svg        # Icon version
        └── favicon.svg             # Browser favicon
```

## 🎯 Features Being Deployed

### ✅ Complete Website
- **Landing Page** with hero section and features
- **Emotional Questionnaire** with validation
- **About & Support Pages** with comprehensive information
- **Dark/Light Mode Toggle** with persistence
- **Responsive Design** for all devices

### ✅ Custom Branding
- **Custom Viberni Logo** (crescent design)
- **Brand Colors** (cyan to orange gradient)
- **Professional Typography** (Inter font)
- **Consistent Visual Identity** throughout

### ✅ Technical Features
- **Express.js + EJS** modular architecture
- **Form Handling** with validation
- **Error Pages** (404, 500)
- **SEO-Friendly** structure
- **Performance Optimized** assets

## 🔧 Development Setup (For Contributors)

```bash
# Clone the repository
git clone https://github.com/syntaxnite/viberni-app.git
cd viberni-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:3001
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Auto-deploys on every push to main
3. Free tier available

### Option 2: Netlify
1. Connect GitHub repository
2. Build command: `npm install`
3. Publish directory: `/`

### Option 3: Railway
1. Connect GitHub repository
2. Automatically detects Node.js
3. Free tier available

### Option 4: Self-Hosted
```bash
# Production setup
npm install --production
npm start
```

## 📝 Environment Variables

For production deployment, create these environment variables:

```env
NODE_ENV=production
PORT=3001
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📧 Contact

- **Email**: hello@viberni.com
- **Repository**: https://github.com/syntaxnite/viberni-app
- **Website**: Coming soon!

---

**Ready to deploy!** 🚀 Follow the steps above to get Viberni live on GitHub and the web.
