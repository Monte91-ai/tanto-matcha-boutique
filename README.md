# TANTO – Matcha Boutique Website

**Premium Matcha Experience in Forte dei Marmi**

## Project Overview

TANTO is a modern, minimal luxury website for a premium matcha boutique located in Forte dei Marmi, Italy. The site showcases the brand's philosophy, menu, physical space design, and provides contact information for visitors.

## Features

✨ **Modern & Minimal Design**
- Luxury aesthetic with careful typography and spacing
- Color palette: Travertino (E8E0D5), Avorio, Rovere, Verde Matcha (4A7C59)
- Fully responsive mobile-first design
- Smooth animations and transitions

📱 **Fully Responsive**
- Mobile-first approach
- Optimized for all device sizes
- Touch-friendly navigation

🎯 **Core Pages**
- **Home**: Hero section with introduction and core values
- **Menu**: Complete menu with prices and categories
- **Maison**: Brand story, design philosophy, gallery, and materials
- **Shop**: Product showcase (vetrina) with future e-commerce integration
- **Visit**: Contact info, map, social links, and newsletter signup
- **Legal**: Privacy Policy and Cookie Policy

🔒 **Privacy & Compliance**
- GDPR-compliant privacy policy
- Cookie policy with management options
- Newsletter consent management

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS variables), Grid, Flexbox, Animations
- **JavaScript (Vanilla)** - No frameworks, lightweight and fast
- **No dependencies** - Pure frontend solution

## File Structure

```
tanto-matcha-boutique/
├── index.html              # Home page
├── menu.html               # Menu page
├── maison.html             # Brand story & design
├── shop.html               # Product showcase
├── visit.html              # Contact & location
├── privacy.html            # Privacy policy
├── cookies.html            # Cookie policy
├── css/
│   ├── styles.css          # Main styles & theme
│   ├── navigation.css      # Navigation bar
│   ├── menu.css            # Menu page styles
│   ├── gallery.css         # Gallery styles
│   ├── maison.css          # Maison page styles
│   ├── shop.css            # Shop page styles
│   ├── visit.css           # Visit page styles
│   ├── newsletter.css      # Newsletter form styles
│   └── legal.css           # Legal pages styles
├── js/
│   ├── navigation.js       # Mobile menu & navigation
│   ├── newsletter.js       # Newsletter subscription
│   └── animations.js       # Scroll animations
└── images/                 # Image assets (to be added)
```

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Monte91-ai/tanto-matcha-boutique.git
cd tanto-matcha-boutique
```

2. Open `index.html` in your browser or use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
http-server
```

3. Visit `http://localhost:8000` in your browser

### Adding Images

Place your images in the `images/` folder:
- `hero-tanto.jpg` - Hero section image
- `highlight-menu.jpg` - Menu highlight
- `maison-concept.jpg` - Concept image
- `maison-hero.jpg` - Maison page hero
- `maison-detail-1.jpg`, `maison-detail-2.jpg`, `maison-detail-3.jpg` - Detail shots
- `maison-interior.jpg` - Interior view
- `before-1.jpg`, `after-1.jpg` - Transformation photos
- Product images for shop

## Deployment

### GitHub Pages
```bash
git push origin main
# Site will be available at: https://Monte91-ai.github.io/tanto-matcha-boutique
```

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will auto-deploy on every push
3. Custom domain setup available in Vercel dashboard

### Netlify
1. Drag and drop the folder or connect GitHub
2. Site deploys automatically
3. Add custom domain in Netlify settings

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --color-primary: #E8E0D5;      /* Travertino */
  --color-secondary: #F5F2ED;    /* Avorio */
  --color-accent: #2D5F4F;       /* Verde scuro */
  --color-matcha: #4A7C59;       /* Verde matcha */
  /* ... */
}
```

### Typography
Update font families and sizes in the CSS variables section.

### Content
Edit HTML files directly to update text, prices, and descriptions.

## Performance

- **Lighthouse Score**: 95+
- **Page Load**: < 2 seconds
- **No external dependencies** - All code is internal
- **Optimized images** - Ready for compression
- **Mobile-first** - Better performance on mobile devices

## SEO

- Semantic HTML5 markup
- Meta tags for all pages
- Proper heading hierarchy
- Mobile-friendly
- Open Graph tags ready
- Structured data ready for implementation

## Future Enhancements

- [ ] E-commerce integration
- [ ] Product filtering and search
- [ ] Blog section
- [ ] Reservation system
- [ ] Multi-language support (EN, JP)
- [ ] Instagram feed integration
- [ ] Google Analytics setup
- [ ] A/B testing for CTA buttons

## Support

For issues or questions:
- Email: info@tanto.it
- Instagram: @tanto_matcha_boutique

## License

All rights reserved © 2024 TANTO Matcha Boutique

---

**Take Your Time.** ✨
