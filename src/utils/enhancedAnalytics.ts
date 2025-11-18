import { analytics } from './analytics';

// Scroll depth tracking
export const initScrollDepthTracking = () => {
  const thresholds = [25, 50, 75, 90, 100];
  const reached = new Set<number>();

  const checkScrollDepth = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = ((scrollTop + windowHeight) / documentHeight) * 100;

    thresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !reached.has(threshold)) {
        reached.add(threshold);
        analytics.trackButtonClick('scroll_depth', `${threshold}%`);
      }
    });
  };

  let timeoutId: NodeJS.Timeout;
  const debouncedCheck = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(checkScrollDepth, 100);
  };

  window.addEventListener('scroll', debouncedCheck, { passive: true });
  return () => {
    window.removeEventListener('scroll', debouncedCheck);
    clearTimeout(timeoutId);
  };
};

// Time on page tracking
export const initTimeOnPageTracking = () => {
  const startTime = Date.now();
  const intervals = [30, 60, 120, 300]; // 30s, 1min, 2min, 5min
  const tracked = new Set<number>();

  const checkInterval = setInterval(() => {
    const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
    
    intervals.forEach(interval => {
      if (timeOnPage >= interval && !tracked.has(interval)) {
        tracked.add(interval);
        analytics.trackButtonClick('time_on_page', `${interval}s`);
      }
    });
  }, 5000);

  return () => clearInterval(checkInterval);
};

// Form field tracking
export const trackFormFieldInteraction = (fieldName: string, action: 'focus' | 'blur' | 'fill') => {
  analytics.trackButtonClick('form_field_interaction', `${fieldName}_${action}`);
};

// Internal link click tracking
export const trackInternalLinkClick = (linkText: string, destination: string, source: string) => {
  analytics.trackNavigation(destination, source);
  analytics.trackButtonClick('internal_link_click', `${linkText} -> ${destination}`);
};

// Lead magnet download tracking (already in LeadMagnetDownload component)
export const trackLeadMagnetDownload = (magnetId: string, magnetTitle: string, emailDomain: string) => {
  analytics.trackButtonClick('lead_magnet_download', magnetId);
  analytics.trackFormSubmit('quote');
};

// Video engagement tracking
export const trackVideoEngagement = (videoId: string, action: 'play' | 'pause' | 'complete' | '25%' | '50%' | '75%') => {
  analytics.trackButtonClick('video_engagement', `${videoId}_${action}`);
};

// Exit intent tracking
export const trackExitIntent = (action: 'shown' | 'dismissed' | 'converted') => {
  analytics.trackButtonClick('exit_intent', action);
};

// CTA click tracking
export const trackCTAClick = (ctaType: 'quote' | 'whatsapp' | 'call' | 'download', location: string) => {
  analytics.trackCTA(ctaType, location);
};
