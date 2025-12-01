import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './index.css'
import { initTrustedTypesPolicy } from './lib/trustedTypes'
import { deployLog, deployErrorLog, isPrerenderingEnv } from './utils/deployLogging'

export const createRoot = ViteReactSSG(
  { routes },
  ({ router, routes, isClient, initialState }) => {
    // Detect if we're in prerendering mode
    const isPrerendering = isPrerenderingEnv();

    if (isClient) {
      // Client-side only initialization
      deployLog('bootstrap_start', 'Application bootstrap starting (client)', {
        isPrerendering: false,
      });

      try {
        // Initialize Trusted Types policy for DOM XSS protection (Phase 5 Security Enhancement)
        deployLog('bootstrap_trusted_types_init', 'Initializing Trusted Types policy');
        initTrustedTypesPolicy();
      } catch (error) {
        deployErrorLog('bootstrap_trusted_types_error', 'Trusted Types initialization threw', {
          error: error instanceof Error ? error.message : String(error),
        });
      }

      deployLog('bootstrap_render_mode', 'Client hydration with vite-react-ssg', {
        mode: 'ViteReactSSG',
      });
    } else {
      // Server-side rendering
      deployLog('bootstrap_start', 'SSG generation starting', {
        isPrerendering: true,
      });
    }
  }
)

