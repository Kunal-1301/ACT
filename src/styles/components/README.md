# ACT Website - Card & Button Component Guide

## Overview

This guide documents the standardized card and button systems used across the ACT website. All components are defined in the global CSS and component stylesheets for consistency.

---

## Button System

### Base Class

All buttons start with the `.btn` base class:

```html
<button class="btn">Base Button</button>
```

### Button Variants

#### Primary Button
**Usage:** Main call-to-action, high-priority actions
**Class:** `btn btn-primary`

```html
<button class="btn btn-primary">Explore Research</button>
<Link to="/funding" class="btn btn-primary">View Funding</Link>
```

**Styling:**
- Background: Primary color (`var(--color-primary)`)
- White text
- Elevated shadow
- Hover: Lifts up with stronger shadow

---

#### Secondary Button
**Usage:** Secondary actions, alternative options
**Class:** `btn btn-secondary`

```html
<button class="btn btn-secondary">Learn More</button>
<Link to="/about" class="btn btn-secondary">About Us</Link>
```

**Styling:**
- Background: Light surface color
- Soft text color
- Subtle border and shadow
- Hover: Lifts up with increased shadow

---

#### Tertiary Button
**Usage:** Inline links, subtle CTAs within cards
**Class:** `btn btn-tertiary`

```html
<button class="btn btn-tertiary">View Details →</button>
<Link to="/research" class="btn btn-tertiary">View Related Projects →</Link>
```

**Styling:**
- Transparent background
- Soft text color with border
- No shadow
- Hover: Light background tint, primary color

---

### Button Sizes

#### Small Button
**Class:** `btn-sm`

```html
<button class="btn btn-secondary btn-sm">Small CTA</button>
```

**Sizing:**
- Padding: `0.5rem 1.1rem`
- Font size: `0.88rem`

---

#### Regular Button
Default size - no additional class needed

**Sizing:**
- Padding: `0.6rem 1.4rem`
- Font size: `0.95rem`

---

#### Large Button
**Class:** `btn-lg`

```html
<button class="btn btn-primary btn-lg">Get Started</button>
```

**Sizing:**
- Padding: `0.75rem 1.8rem`
- Font size: `1.05rem`

---

### Disabled State

```html
<button class="btn btn-primary" disabled>Unavailable</button>
```

Browsers handle disabled state automatically.

---

## Card System

### Base Card

```html
<article class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</article>
```

**Features:**
- Rounded corners (`border-radius: 16px`)
- Subtle border and shadow
- Hover: Lifts up with enhanced shadow
- Automatic flex layout

---

### Card Anatomy

#### Complete Card Structure

```html
<article class="card">
  <!-- Header (optional) -->
  <div class="card-header">
    <span class="chip">Status</span>
    <h3>Card Title</h3>
  </div>
  
  <!-- Body (main content) -->
  <div class="card-body">
    <p>Main card content with description.</p>
  </div>
  
  <!-- Footer (optional, auto-aligns to bottom) -->
  <div class="card-footer">
    <button class="btn btn-secondary btn-sm">Action</button>
  </div>
</article>
```

**Sections:**
- `.card-header` - Top section, flex-shrink: 0
- `.card-body` - Main content, flex: 1 (grows to fill)
- `.card-footer` - Bottom section, margin-top: auto

---

### Card Modifiers

#### Centered Card
**Class:** `card card-centered`

```html
<article class="card card-centered">
  <h3>Centered Title</h3>
  <p>Centered text content.</p>
  <button class="btn btn-secondary">Centered Button</button>
</article>
```

**Effect:**
- All text center-aligned
- Buttons horizontally centered

---

#### Card with Image

```html
<article class="card">
  <img src="/path/to/image.jpg" alt="" class="card-image">
  <div class="card-body">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</article>
```

**Image Classes:**
- `.card-image` - 16:9 aspect ratio
- `.card-image-square` - 1:1 aspect ratio
- `.card-image-portrait` - 3:4 aspect ratio

**Alternative:** Use `.card-thumb` for smaller thumbnails

---

### Card Grid Layouts

#### Auto-responsive 3-column Grid

```html
<div class="card-grid card-grid-3col">
  <article class="card">...</article>
  <article class="card">...</article>
  <article class="card">...</article>
</div>
```

**Grid Options:**
- `.card-grid-2col` - 2 columns (min 400px)
- `.card-grid-3col` - 3 columns (min 300px)
- `.card-grid-4col` - 4 columns (min 250px)

**Features:**
- Equal height rows (`grid-auto-rows: 1fr`)
- Responsive gap
- Collapses to 1 column on mobile

---

## Complete Examples

### Example 1: Feature Card with CTA

```html
<article class="card card-centered">
  <div class="card-header">
    <h3>Health & Well-Being</h3>
  </div>
  <div class="card-body">
    <p>Understanding health behaviours and designing technology-enabled interventions.</p>
  </div>
  <div class="card-footer">
    <Link to="/research" class="btn btn-tertiary">
      View related projects →
    </Link>
  </div>
</article>
```

---

### Example 2: Project Card with Image

```html
<article class="card">
  <img src="/media/project.jpg" alt="Project" class="card-image">
  <div class="card-body">
    <span class="chip chip-status-open">Ongoing</span>
    <h4>Personalized Learning Experience</h4>
    <p class="card-meta">
      <strong>Faculty:</strong> Dr. Smith, Dr. Jones
    </p>
    <p>AI-driven framework using advanced knowledge tracing techniques.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-secondary btn-sm">View details</button>
  </div>
</article>
```

---

### Example 3: Grid of Cards

```html
<div class="card-grid card-grid-3col">
  <article class="card card-centered">
    <h3>Mission</h3>
    <p>Enable rigorous, collaborative research.</p>
  </article>
  
  <article class="card card-centered">
    <h3>Vision</h3>
    <p>Establish ACT as a recognised hub.</p>
  </article>
  
  <article class="card card-centered">
    <h3>Values</h3>
    <ul>
      <li>Collaboration across disciplines</li>
      <li>Academic rigor</li>
    </ul>
  </article>
</div>
```

---

## Chips & Badges

### Status Chips

```html
<span class="chip chip-status-open">
  <span class="chip-dot"></span> Open
</span>

<span class="chip chip-status-upcoming">Upcoming</span>
<span class="chip chip-status-closed">Closed</span>
```

**Variants:**
- `.chip-status-open` - Green (active/open)
- `.chip-status-upcoming` - Orange (upcoming)
- `.chip-status-closed` - Gray (closed/completed)

---

### Filter Pills

```html
<button class="pill-filter">All Themes</button>
<button class="pill-filter pill-filter--active">Health</button>
```

---

## Best Practices

### DO ✅

- Always use base `.card` class first
- Use `.card-body` for flexible content areas
- Use `.card-footer` for bottom-aligned CTAs
- Use semantic HTML (`<article>` for cards)
- Maintain button hierarchy (primary > secondary > tertiary)
- Use `btn-sm` for cards, `btn-lg` for heroes

### DON'T ❌

- Don't create custom card styles
- Don't hardcode padding/margins in components
- Don't skip `.card-body` when you need flex growth
- Don't use multiple primary buttons in one section
- Don't nest cards inside cards

---

## Accessibility

### Focus States
All buttons and interactive cards have visible focus rings for keyboard navigation.

### Keyboard Support
- Cards: Tabbable if interactive
- Buttons: Native keyboard support
- Modal triggers: Clear focus management

### ARIA
- Use semantic HTML
- Add `aria-label` for icon-only buttons
- Use `role="button"` only when necessary

---

## File Locations

**Global Styles:**
- [global.css](file:///d:/ACT/src/styles/global.css) - Base buttons & cards
- [cards.css](file:///d:/ACT/src/styles/components/cards.css) - Extended card system

**Page-Specific:**
- Only use page-specific CSS for unique layouts
- Don't redefine global components

---

## Migration Checklist

When updating existing pages:

- [ ] Replace custom card classes with `.card`
- [ ] Add `.card-body` for content structure
- [ ] Use `.card-footer` for buttons
- [ ] Update button classes (`btn btn-{variant} btn-{size}`)
- [ ] Remove duplicate styles from page CSS
- [ ] Test responsive behavior
- [ ] Verify accessibility (keyboard nav, focus states)

---

## Questions?

For design decisions or new components, refer to the implementation plan or consult the global style system.
