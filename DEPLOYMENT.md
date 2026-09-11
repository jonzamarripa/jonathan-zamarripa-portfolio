# Deployment Guide

## Overview

This is a static HTML + React (via Babel) portfolio website. No build step required.

## File Structure

```
jonathan-zamarripa-portfolio/
├── index.html                    # Main entry point
├── Homepage.jsx                  # Hero + featured work + contact
├── About_v2.jsx                  # About page narrative
├── CaseStudyShell.jsx           # Case study template
├── CaseStudy-Legacy.jsx         # Operation: Legacy Unlocked
├── CaseStudy-HotelKey.jsx       # HotelKey New Hire Onboarding
├── CaseStudy-GuestCRM.jsx       # Guest CRM Pilot
├── CaseStudy-Workday.jsx        # Workday Learn Launch
├── image-slot.js                # Image upload component
├── assets/
│   ├── logo/
│   │   └── jiz-logo-white.svg
│   ├── imagery/                 # Case study images
│   ├── icons/                   # UI icons
│   └── video/                   # Background video
├── styles.css                   # Design system tokens & global CSS
├── _ds_bundle.js               # Design system components
└── README.md                    # This file
```

## Dependencies

### External (loaded via CDN)
- React 18.3.1 (production build)
- ReactDOM 18.3.1 (production build)
- Babel 7.29.0 (standalone)

### Local
- Design system CSS tokens (`styles.css`)
- Design system component bundle (`_ds_bundle.js`)

## Deployment Steps

1. Clone the repository
2. Copy all files to your hosting provider
3. Ensure relative paths are preserved:
   - `index.html` references `../../styles.css` and `../../_ds_bundle.js`
   - Adjust paths if deploying to a subdirectory
4. No build step needed—serve as static HTML

## Asset Paths

All asset references use relative paths from `ui_kits/portfolio-website/`:
- Images: `assets/imagery/`
- Icons: `assets/icons/`
- Video: `assets/video/`
- Logo: `../../assets/logo/jiz-logo-white.svg`

## Environment Variables

None required.

## Performance Notes

- React and Babel loaded from unpkg CDN (production builds)
- Inline Babel transpilation happens in-browser
- No server-side rendering
- All state managed client-side via React hooks

## Browser Support

Modern browsers with ES6+ support. Tested on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Production Checklist

- [ ] All relative asset paths resolve
- [ ] Social meta tags are correct
- [ ] Favicon loads
- [ ] No console errors
- [ ] Contact form submits (if backend configured)
- [ ] All case study links navigate correctly
- [ ] Email contact actions work (mailto, copy, form scroll)
- [ ] Video plays in About section
- [ ] Images load in all case studies
- [ ] Mobile responsive behavior verified
- [ ] Keyboard navigation works
