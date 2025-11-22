// Enhanced SEO Analytics Tracking
// Implements Phase 5 analytics requirements: scroll depth, time on page, form field tracking, lead magnet downloads

export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  metadata?: Record<string, any>;
}

// Track scroll depth milestones
export const trackScrollDepth = () => {
  const milestones = [25, 50, 75, 90, 100];
  const tracked = new Set<number>();
  
  const handleScroll = () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    milestones.forEach(milestone => {
      if (scrollPercentage >= milestone && !tracked.has(milestone)) {
        tracked.add(milestone);
        
        // Send to analytics
        const event: AnalyticsEvent = {
          event: 'scroll_depth',
          category: 'engagement',
          action: 'scroll',
          label: `${milestone}%`,
          value: milestone,
          metadata: {
            page: window.location.pathname,
            timestamp: new Date().toISOString()
          }
        };
        
        sendAnalyticsEvent(event);
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// Track time on page
export const trackTimeOnPage = () => {
  const startTime = Date.now();
  const intervals = [10, 30, 60, 120, 300]; // seconds
  const tracked = new Set<number>();
  
  const checkInterval = setInterval(() => {
    const secondsOnPage = Math.floor((Date.now() - startTime) / 1000);
    
    intervals.forEach(interval => {
      if (secondsOnPage >= interval && !tracked.has(interval)) {
        tracked.add(interval);
        
        const event: AnalyticsEvent = {
          event: 'time_on_page',
          category: 'engagement',
          action: 'time_milestone',
          label: `${interval}s`,
          value: interval,
          metadata: {
            page: window.location.pathname,
            timestamp: new Date().toISOString()
          }
        };
        
        sendAnalyticsEvent(event);
      }
    });
  }, 1000);
  
  // Send final time on page when leaving
  const handleBeforeUnload = () => {
    const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
    
    const event: AnalyticsEvent = {
      event: 'page_exit',
      category: 'engagement',
      action: 'total_time',
      label: window.location.pathname,
      value: totalSeconds,
      metadata: {
        page: window.location.pathname,
        timestamp: new Date().toISOString()
      }
    };
    
    sendAnalyticsEvent(event);
  };
  
  window.addEventListener('beforeunload', handleBeforeUnload);
  
  return () => {
    clearInterval(checkInterval);
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
};

// Track form field interactions
export const trackFormFieldInteraction = (
  formName: string,
  fieldName: string,
  action: 'focus' | 'blur' | 'change' | 'error'
) => {
  const event: AnalyticsEvent = {
    event: 'form_interaction',
    category: 'forms',
    action: `field_${action}`,
    label: `${formName}_${fieldName}`,
    metadata: {
      formName,
      fieldName,
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    }
  };
  
  sendAnalyticsEvent(event);
};

// Track lead magnet downloads
export const trackLeadMagnetDownload = (
  magnetType: string,
  magnetName: string,
  userEmail?: string
) => {
  const event: AnalyticsEvent = {
    event: 'lead_magnet_download',
    category: 'conversion',
    action: 'download',
    label: magnetName,
    metadata: {
      magnetType,
      magnetName,
      userEmail,
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    }
  };
  
  sendAnalyticsEvent(event);
};

// Track internal link clicks
export const trackInternalLinkClick = (
  linkText: string,
  linkHref: string,
  linkLocation: string
) => {
  const event: AnalyticsEvent = {
    event: 'internal_link_click',
    category: 'navigation',
    action: 'click',
    label: linkHref,
    metadata: {
      linkText,
      linkHref,
      linkLocation,
      sourcePage: window.location.pathname,
      timestamp: new Date().toISOString()
    }
  };
  
  sendAnalyticsEvent(event);
};

// Track outbound link clicks
export const trackOutboundLinkClick = (
  linkText: string,
  linkHref: string
) => {
  const event: AnalyticsEvent = {
    event: 'outbound_link_click',
    category: 'navigation',
    action: 'external_click',
    label: linkHref,
    metadata: {
      linkText,
      linkHref,
      sourcePage: window.location.pathname,
      timestamp: new Date().toISOString()
    }
  };
  
  sendAnalyticsEvent(event);
};

// Track CTA clicks
export const trackCTAClick = (
  ctaType: 'quote' | 'call' | 'whatsapp' | 'download' | 'contact',
  ctaLabel: string,
  ctaLocation: string
) => {
  const event: AnalyticsEvent = {
    event: 'cta_click',
    category: 'conversion',
    action: `cta_${ctaType}`,
    label: ctaLabel,
    metadata: {
      ctaType,
      ctaLabel,
      ctaLocation,
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    }
  };
  
  sendAnalyticsEvent(event);
};

// Track video interactions
export const trackVideoInteraction = (
  videoTitle: string,
  action: 'play' | 'pause' | 'complete' | '25%' | '50%' | '75%'
) => {
  const event: AnalyticsEvent = {
    event: 'video_interaction',
    category: 'engagement',
    action: `video_${action}`,
    label: videoTitle,
    metadata: {
      videoTitle,
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    }
  };
  
  sendAnalyticsEvent(event);
};

// Track search queries
export const trackSearch = (
  searchQuery: string,
  searchResults: number
) => {
  const event: AnalyticsEvent = {
    event: 'site_search',
    category: 'engagement',
    action: 'search',
    label: searchQuery,
    value: searchResults,
    metadata: {
      searchQuery,
      resultCount: searchResults,
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    }
  };
  
  sendAnalyticsEvent(event);
};

// Core function to send events to analytics platforms
const sendAnalyticsEvent = (event: AnalyticsEvent) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.metadata
    });
  }
  
  // Custom analytics endpoint (optional)
  if (process.env.NODE_ENV === 'production') {
    // Send to custom analytics server
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    }).catch(err => console.error('Analytics error:', err));
  }
  
  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Analytics Event:', event);
  }
};

// Initialize all tracking on page load
export const initializeSEOAnalytics = () => {
  const cleanupFunctions: (() => void)[] = [];
  
  // Scroll depth tracking
  cleanupFunctions.push(trackScrollDepth());
  
  // Time on page tracking
  cleanupFunctions.push(trackTimeOnPage());
  
  // Return cleanup function
  return () => {
    cleanupFunctions.forEach(cleanup => cleanup());
  };
};
