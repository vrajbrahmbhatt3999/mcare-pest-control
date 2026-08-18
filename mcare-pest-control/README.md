# M Care Pest Control Services — Website

A professional, modern, fully responsive static website for **M Care Pest Control Services**, Vadodara.

---

## Quick Start

No build step required. Simply open `index.html` in any web browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server (recommended for development)
npx serve .
# or
python3 -m http.server 8080
# Then open http://localhost:8080
```

---

## Folder Structure

```
mcare-pest-control/
├── index.html          # Main HTML file (all sections)
├── css/
│   └── style.css       # All styles (CSS variables, layout, responsive)
├── js/
│   └── script.js       # All interactivity (navbar, FAQ, animations, form)
├── assets/
│   └── images/
│       ├── hero.png    # Hero section image
│       └── about.png   # About section image
└── README.md
```

---

## Customization Guide

### Update Phone Number
Search and replace `XXXXXXXXXX` in `index.html` with the actual phone number (digits only, no spaces, for `tel:` and `wa.me/` links).

```
Find:    XXXXXXXXXX
Replace: 9099999999
```

### Update WhatsApp Number
WhatsApp links use the format `https://wa.me/PHONENUMBER` (include country code, no `+`).
Search for `wa.me/XXXXXXXXXX` and replace with e.g. `wa.me/919099999999`.

### Update Email
Search and replace `ABC@test.com` in `index.html` with the actual email address.

### Update Address
Search for `Vadodara, Gujarat, India` in `index.html` to update the address in the contact section and footer.

### Replace Hero Image
Replace `assets/images/hero.png` with your own image. Recommended size: **1200×800px**.

### Replace About Image
Replace `assets/images/about.png` with your own image. Recommended size: **800×600px**.

### Replace Logo / Brand Name
The brand name "M Care" appears in:
- `index.html` → `.nav-brand` section (navbar)
- `index.html` → `.footer-brand` section (footer)
- Page `<title>` and meta description tags

### Customize Colors
All colors are defined as CSS variables at the top of `css/style.css`:

```css
:root {
    --primary: #1a4d2e;       /* Dark forest green */
    --primary-light: #2d7a47; /* Medium green */
    --secondary: #4caf50;     /* Fresh green */
    --accent: #f5a623;        /* Orange/yellow for CTAs */
    --dark: #1c1c1c;          /* Dark text */
    --light: #f8f9fa;         /* Light background */
    --white: #ffffff;
}
```

---

## Deployment

### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com) → Sites → "Add new site"
2. Drag and drop the `mcare-pest-control/` folder into the drop zone
3. Your site is live instantly with a free `.netlify.app` URL

### GitHub Pages
1. Push the project to a GitHub repository
2. Go to Settings → Pages → Source: `main` branch, `/ (root)`
3. Site will be live at `https://yourusername.github.io/repo-name/`

### Any Static Hosting
Upload all files maintaining the folder structure to any web host that supports static files (Hostinger, cPanel File Manager, Vercel, Cloudflare Pages, etc.).

---

## Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — No frameworks or dependencies
- **Font Awesome 6** — Icons (CDN)
- **Google Fonts** — Outfit typeface (CDN)

---

## Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge.  
Responsive from 320px mobile to 1440px+ desktop.

---

*Website built for M Care Pest Control Services, Vadodara.*
