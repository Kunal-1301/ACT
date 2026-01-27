# Footer Institutional Logos - Update Summary

## Changes Made

Added TIET and TSLAS institutional logos to the footer component.

### Files Modified

1. **`src/components/Footer/Footer.jsx`**
   - Added container for institutional logos
   - Added two logo images (TIET and TSLAS)
   - Positioned above copyright text on the right side

2. **`src/components/Footer/Footer.css`**
   - Added `.footer-institutional-logos` container styles
   - Added `.footer-institutional-logo` image styles
   - Added hover effect for logos
   - Updated responsive styles for mobile

## Logo Specifications

**Desktop**:
- Height: 60px
- Spacing between logos: 1.5rem
- Opacity: 0.85 (1.0 on hover)

**Mobile** (< 768px):
- Height: 50px
- Spacing: 1rem
- Left-aligned layout

## Footer Layout

```
┌─────────────────────────────────────────────┐
│ ACT Logo + Title        [TIET] [TSLAS]     │
│ Subtitle                © 2026 Copyright    │
└─────────────────────────────────────────────┘
```

## Logo Files Required

Place these files in the `public/media/` directory:
- `tiet-logo.png` - Thapar Institute logo
- `tslas-logo.png` - Thapar School of Liberal Arts & Sciences logo

## Features

✅ Responsive design (adapts to mobile)  
✅ Hover effect for better interactivity  
✅ Proper spacing and alignment  
✅ Accessible alt text  
✅ Auto-sizing with object-fit
