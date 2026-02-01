# Components Documentation

## Shared Components

These components are reused across multiple pages or the entire application.

### [Navbar](file:///d:/ACT/src/components/Navbar/Navbar.jsx)
The `Navbar` component handles the top navigation of the site.
- **Location**: `src/components/Navbar/`
- **Features**:
  - Responsive design (collapses to hierarchical menu on mobile).
  - Contains links to major routes (Home, About, Research, etc.).

### [Footer](file:///d:/ACT/src/components/Footer/Footer.jsx)
The `Footer` component provides site-wide links and copyright information at the bottom of every page.
- **Location**: `src/components/Footer/`
- **Features**:
  - Social media links.
  - Quick access links to sections like "Documents" or "Contact".

## Page Components

Use `src/pages/` for components that represent full pages. Each directory usually contains:
- `PageName.jsx`: The main component.
- `PageName.css` (or `styles/`): Scoped styles.

Example: **[Home](file:///d:/ACT/src/pages/Home/Home.jsx)**
- The landing page of the application.
- Integrates sub-sections like "Hero", "News Snippets", etc.

## Hooks

### [useRevealOnScroll](file:///d:/ACT/src/hooks/useRevealOnScroll.jsx)
A custom hook to handle scroll-triggered animations.
- **Usage**: Import and attach to elements you want to animate when they enter the viewport.
