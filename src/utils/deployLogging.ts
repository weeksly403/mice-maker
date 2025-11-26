// Centralized logging helpers for build-time/prerender diagnostics (Netlify + react-snap)

export type DeployLogPhase =
  | 'bootstrap_start'
  | 'bootstrap_render_mode'
  | 'bootstrap_trusted_types_init'
  | 'bootstrap_trusted_types_skip'
  | 'bootstrap_trusted_types_error'
  | 'trusted_types_init_success'
  | 'trusted_types_init_skip_prerender'
  | 'trusted_types_init_unsupported'
  | 'seo_analytics_init'
  | 'seo_analytics_skip_prerender'
  | 'seo_analytics_error';

// Detect react-snap / prerendering environment
export const isPrerenderingEnv = (): boolean => {
  if (typeof navigator === 'undefined') return false;

  try {
    // react-snap uses HeadlessChrome; some setups may also set __REACT_SNAP__
    const ua = navigator.userAgent || '';
    const hasHeadlessChrome = ua.includes('HeadlessChrome');
    const hasReactSnapFlag = typeof window !== 'undefined' &&
      (window as any).__REACT_SNAP__;

    return Boolean(hasHeadlessChrome || hasReactSnapFlag);
  } catch {
    return false;
  }
};

const formatPayload = (phase: DeployLogPhase, message: string, data?: Record<string, unknown>) => ({
  phase,
  message,
  ...(
    data
      ? {
          data,
        }
      : {}
  ),
});

export const deployLog = (
  phase: DeployLogPhase,
  message: string,
  data?: Record<string, unknown>,
): void => {
  // Only emit during prerender/build so we don't spam runtime logs
  if (!isPrerenderingEnv()) return;

  try {
    const payload = formatPayload(phase, message, data);
    // Netlify + react-snap will surface console output in build logs
    // Use a consistent, searchable prefix
    // eslint-disable-next-line no-console
    console.log('[DEPLOY][REACT_SNAP]', JSON.stringify(payload));
  } catch {
    // Swallow any logging errors to avoid impacting build
  }
};

export const deployErrorLog = (
  phase: DeployLogPhase,
  message: string,
  data?: Record<string, unknown>,
): void => {
  if (!isPrerenderingEnv()) return;

  try {
    const payload = formatPayload(phase, message, data);
    // eslint-disable-next-line no-console
    console.error('[DEPLOY][REACT_SNAP][ERROR]', JSON.stringify(payload));
  } catch {
    // Ignore logging failures
  }
};
