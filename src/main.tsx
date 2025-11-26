import { createRoot, hydrateRoot } from 'react-dom/client'
import { initTrustedTypesPolicy } from './lib/trustedTypes'
import App from './App.tsx'
import './index.css'
import { deployLog, deployErrorLog, isPrerenderingEnv } from './utils/deployLogging'

// Detect prerendering (react-snap / HeadlessChrome)
const isPrerendering = isPrerenderingEnv();

deployLog('bootstrap_start', 'Application bootstrap starting', {
  isPrerendering,
});

try {
  if (!isPrerendering) {
    // Initialize Trusted Types policy for DOM XSS protection (Phase 5 Security Enhancement)
    deployLog('bootstrap_trusted_types_init', 'Initializing Trusted Types policy');
    initTrustedTypesPolicy();
  } else {
    deployLog('bootstrap_trusted_types_skip', 'Skipping Trusted Types during prerender');
  }
} catch (error) {
  deployErrorLog('bootstrap_trusted_types_error', 'Trusted Types initialization threw', {
    error: error instanceof Error ? error.message : String(error),
  });
}

const container = document.getElementById("root")!;

// Check if we have pre-rendered content from react-snap
const hasPrerenderedContent = container.hasChildNodes();

if (hasPrerenderedContent) {
  deployLog('bootstrap_render_mode', 'Hydrating pre-rendered HTML with React 18', {
    mode: 'hydrateRoot',
  });
  hydrateRoot(container, <App />);
} else {
  deployLog('bootstrap_render_mode', 'Performing fresh client render', {
    mode: 'createRoot',
  });
  createRoot(container).render(<App />);
}

