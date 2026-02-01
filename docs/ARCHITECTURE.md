# ACT Project Architecture

## Overview
This project is a Single Page Application (SPA) built with **React 19** and **Vite**, using **React Router v7** for client-side routing.

## Directory Structure

```
d:/ACT/
├── public/              # Static assets served directly (favicon, etc.)
├── src/
│   ├── assets/          # Imported assets (images, fonts)
│   ├── components/      # Reusable UI components
│   │   ├── Navbar/      # Top navigation component
│   │   └── Footer/      # Page footer component
│   ├── data/            # Static data files (JSON/JS objects)
│   ├── hooks/           # Custom React hooks
│   │   └── useRevealOnScroll.jsx # Animation hook
│   ├── pages/           # Page components mapped to routes
│   │   ├── Home/
│   │   ├── About/
│   │   ├── News/
│   │   └── ...
│   ├── styles/          # Shared or global stylesheets
│   ├── utils/           # Utility functions and helpers
│   │   └── ScrollToTop.jsx # Router helper for scroll management
│   ├── App.jsx          # Main application component & Routing setup
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Key Technologies

- **React 19**: UI Library.
- **Vite**: Build tool and development server.
- **React Router 7**: handling navigation.
- **ESLint & Stylelint**: Code quality and formatting.

## Routing
Routing is handled in `src/App.jsx`. The application uses a central `<Routes>` definition wrapped in `<BrowserRouter>` (likely in `main.jsx` or just implied by usage).
- **Core Pages**: Home, About, Research, Funding, News, Contact.
- **Document Pages**: Specific routes under `/documents/` for PDF-like content or procedural guides.

## Styling
The project uses standard CSS imports.
- Global styles in `src/index.css` or `src/App.css`.
- Component-specific styles often located with the component (e.g., `src/pages/Home/styles/`).
- Shared styles in `src/styles/`.

## State Management
State is primarily managed locally within components. There is no evidence of a global state management library (Redux, Zustand) in the main dependencies, suggesting props and Context API are sufficient for current needs.
