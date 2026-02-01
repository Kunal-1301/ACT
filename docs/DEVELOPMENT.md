# Development Guide

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have a recent version of Node.js installed.
- **npm**: Package manager (usually comes with Node.js).

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
```
The application will typically run at `http://localhost:5173`.

## Scripts
- `npm run dev`: Start Vite development server.
- `npm run build`: Build the application for production.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run preview`: Preview the production build locally.

## Project Standards

### Component Structure
New components should be created in `src/components/` for shared UI elements or `src/pages/` for route-specific views.
- Use Functional Components with Hooks.
- Keep components modular.
- Co-locate styles if they are specific to a single component.

### Adding a New Page
1. Create a new directory in `src/pages/` (e.g., `src/pages/NewPage/`).
2. Create `NewPage.jsx`.
3. Add a route in `src/App.jsx`:
   ```jsx
   import NewPage from "./pages/NewPage/NewPage";
   // ...
   <Route path="/new-page" element={<NewPage />} />
   ```

### Styling
- Use standard CSS.
- meaningful class names (BEM naming convention is a good practice if not strictly enforced).
- Check `src/styles/` for shared variables or utility classes before writing new custom CSS.

### Linting
Run `npm run lint` before committing to ensure your code matches the project's style guidelines.
