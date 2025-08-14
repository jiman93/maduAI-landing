# MaduAI Landing Page

**GenAI Solutions for Real Impact**

A modern, animated landing page for MaduAI - custom AI workflows to automate tasks, boost productivity, and cut costs.

## Features

- 🍯 Honey-themed design with warm colors and smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading (< 1s on 4G)
- 📧 Email capture with Netlify Forms
- ♿ Accessibility compliant
- 🔍 SEO optimized
- ✨ Smooth animations and micro-interactions

## Tech Stack

- Pure HTML/CSS/JavaScript
- Netlify Forms for email capture
- Inter font family
- CSS animations and transitions
- No frameworks or build tools

## Local Development

```bash
# Start local server
npm run dev

# Or use Python
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

## Deployment

### Netlify (Recommended)

1. **Drag & Drop**: Simply drag the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. **Git Integration**: Connect your GitHub repo to Netlify for automatic deployments

### DNS Setup

1. Add your domain in Netlify dashboard
2. Set up DNS records:
   - `CNAME` root → `apex-loadbalancer.netlify.com`
   - `CNAME` www → `your-site.netlify.app`
3. Wait for SSL certificate (usually 24-48 hours)

## File Structure

```
/
├── index.html          # Main landing page
├── privacy.html        # Privacy policy
├── styles.css          # All styles and animations
├── app.js             # JavaScript functionality
├── robots.txt         # SEO
├── sitemap.xml        # SEO
└── public/
    ├── images/
    │   └── og.png     # Open Graph image (1200x630)
    └── icons/
        └── favicon.ico # Favicon
```

## Design System

### Colors

- **Honey (Primary)**: `#FFB703`
- **Honey Deep**: `#F59F00`
- **Amber Glow**: `#FCBF49`
- **Ink (Text)**: `#1F2937`
- **Cream (Background)**: `#FFF8F0`
- **White**: `#FFFFFF`

### Typography

- **Font**: Inter (system fallbacks)
- **H1**: 48-64px / 800 weight
- **H2**: 22-28px / 500 weight
- **Body**: 16-18px / 400 weight
- **Button**: 16px / 700 weight

## Animations & Interactions

### Entrance Animations

- Staggered element entrance with delays
- Slide-in effects for headings
- Fade-in animations for content
- Bounce-in success message

### Interactive Elements

- Logo glow effect with pulsing animation
- Button hover effects with scale and shimmer
- Ripple effect on button clicks
- Form input focus with scale and glow
- Trust badge hover with lift and shimmer

### Background Effects

- Animated gradient shift
- Floating particle pattern
- Smooth color transitions

### Micro-interactions

- Typing effect for main heading
- Floating trust badges
- Animated footer links
- Smooth transitions throughout

## Performance

- Target: < 60KB total
- Lighthouse score: 95+
- Loads in < 1s on 4G
- No external dependencies except Google Fonts
- Optimized animations with CSS transforms

## Accessibility

- Color contrast ≥ 4.5:1 for text
- Button contrast ≥ 3:1
- Visible focus states
- Skip-to-content link
- Respects `prefers-reduced-motion`
- Screen reader friendly

## Business Focus

The landing page is designed for business decision-makers with:

- **Clear value propositions**:

  - Automate repetitive processes
  - Generate insights from your data
  - Deploy fast with measurable ROI

- **Professional messaging** emphasizing:
  - Real business impact
  - Measurable outcomes
  - Fast deployment
  - Cost reduction

## Next Steps (v1.1)

- [ ] Add contact page with Netlify form
- [ ] Design and add OG image
- [ ] Add analytics (Plausible/Umami)
- [ ] Add "Founding Member" referral codes
- [ ] Create favicon and brand assets
- [ ] Add more interactive animations
- [ ] Implement A/B testing for CTAs

## License

MIT License - feel free to use this as a starting point for your own projects.
