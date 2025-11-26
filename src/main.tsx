import { createRoot, hydrateRoot } from 'react-dom/client'
import { initTrustedTypesPolicy } from './lib/trustedTypes'
import App from './App.tsx'
import './index.css'

// Skip Trusted Types during pre-rendering (react-snap uses HeadlessChrome)
const isPrerendering = typeof navigator !== 'undefined' && 
  navigator.userAgent.includes('HeadlessChrome');

if (!isPrerendering) {
  // Initialize Trusted Types policy for DOM XSS protection (Phase 5 Security Enhancement)
  initTrustedTypesPolicy();
}

const container = document.getElementById("root")!;

// Check if we have pre-rendered content from react-snap
const hasPrerenderedContent = container.hasChildNodes();

if (hasPrerenderedContent) {
  // Hydrate the pre-rendered HTML (React 18)
  hydrateRoot(container, <App />);
} else {
  // Fresh render (development or first visit before pre-rendering)
  createRoot(container).render(<App />);
}
