# Viberni Website

> A social media platform that adapts to how you feel

Viberni is an upcoming social media platform centered around emotional connection and mood-based experiences. This repository contains the landing page designed to present Viberni's vision in a simple, modern, and professional way while collecting early support from interested users.

## 🌟 Features

- **Professional Landing Page** - Clean, minimal design introducing Viberni's concept
- **Dark/Light Mode Toggle** - Complete theme switching with user preference persistence
- **Emotional Questionnaire** - Comprehensive form to gather user insights about social media experiences
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modular Architecture** - Well-organized EJS components and Express.js structure
- **Interactive Elements** - Smooth animations and engaging user experience

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ViberniWeb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Production

```bash
npm start
```

## 📁 Project Structure

```
ViberniWeb/
├── app.js                 # Main Express server
├── package.json           # Dependencies and scripts
├── routes/                # Express route handlers
│   ├── index.js          # Main pages (home, about, support)
│   └── questionnaire.js  # Questionnaire handling
├── views/                 # EJS templates
│   ├── partials/         # Reusable components
│   │   ├── header.ejs    # Header with navigation & theme toggle
│   │   └── footer.ejs    # Footer with links
│   └── pages/            # Page templates
│       ├── index.ejs     # Landing page
│       ├── about.ejs     # About page
│       ├── support.ejs   # Support & FAQ
│       ├── questionnaire.ejs        # Emotional questionnaire
│       ├── questionnaire-success.ejs # Thank you page
│       ├── 404.ejs       # Not found page
│       └── error.ejs     # Error page
└── public/               # Static assets
    ├── css/
    │   └── main.css      # Complete styles with dark/light mode
    ├── js/
    │   └── main.js       # Interactive functionality
    └── images/           # Images and assets
```

## 🎨 Design System

### Color Palette

**Light Mode:**
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#06b6d4` (Cyan)
- Background: `#ffffff` / `#f8fafc` / `#f1f5f9`
- Text: `#0f172a` / `#475569` / `#64748b`

**Dark Mode:**
- Background: `#0f172a` / `#1e293b` / `#334155`
- Text: `#f8fafc` / `#cbd5e1` / `#94a3b8`

### Typography
- Font Family: Inter (Google Fonts)
- Responsive font sizes with clean hierarchy

## 🛠️ Technology Stack

- **Backend:** Node.js with Express.js
- **View Engine:** EJS (Embedded JavaScript)
- **Styling:** CSS3 with CSS Custom Properties
- **JavaScript:** Vanilla ES6+
- **Features:** Dark/Light mode, Form validation, Responsive design

## 📝 Key Pages

### Landing Page (`/`)
- Hero section with Viberni introduction
- Features showcase
- Statistics and social proof
- Call-to-action for questionnaire

### Questionnaire (`/questionnaire`)
- Comprehensive emotional survey
- Multiple question types (radio, checkbox, textarea)
- Form validation and user feedback
- Success page with next steps

### About (`/about`)
- Vision and mission
- Problem we're solving
- How Viberni is different
- Team and values

### Support (`/support`)
- FAQ section
- Contact information
- Community guidelines
- Help resources

## 🎯 Features in Detail

### Dark/Light Mode Toggle
- Persistent theme preference in localStorage
- Smooth transitions between themes
- Complete visual consistency across all pages
- System preference detection

### Emotional Questionnaire
- Multi-step form with various input types
- Real-time validation feedback
- Responsive design for mobile completion
- Data collection for platform development

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactive elements
- Optimized for all screen sizes

## 🚀 Deployment

### Environment Variables
Create a `.env` file for production:
```env
NODE_ENV=production
PORT=3000
```

### Production Build
```bash
npm install --production
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

- **General:** hello@viberni.com
- **Feedback:** feedback@viberni.com
- **Support:** support@viberni.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Acknowledgments

- Built with love for emotional connections
- Inspired by the need for more empathetic social media
- Thanks to all early supporters and questionnaire participants

---

**Viberni** - *A social media platform that adapts to how you feel* 💙
