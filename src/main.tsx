import { createRoot } from 'react-dom/client'
import { initTrustedTypesPolicy } from './lib/trustedTypes'
import App from './App.tsx'
import './index.css'

// Initialize Trusted Types policy for DOM XSS protection (Phase 5 Security Enhancement)
initTrustedTypesPolicy()

createRoot(document.getElementById("root")!).render(<App />);
