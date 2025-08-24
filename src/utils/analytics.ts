// Google Analytics tracking utility
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'user_engagement',
      event_label: parameters?.label || '',
      value: parameters?.value || 0,
      ...parameters,
    });
  }
};

export const trackConversion = (conversionId: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      ...parameters,
    });
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-17503206777', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Event tracking functions for common actions
export const analytics = {
  // Form submissions
  trackFormSubmit: (formType: 'quote' | 'contact' | 'schedule_call') => {
    trackEvent('form_submit', {
      event_category: 'engagement',
      event_label: formType,
    });
  },

  // Button clicks
  trackButtonClick: (buttonType: string, location?: string) => {
    trackEvent('button_click', {
      event_category: 'engagement',
      event_label: buttonType,
      custom_parameter: location,
    });
  },

  // Navigation
  trackNavigation: (destination: string, source?: string) => {
    trackEvent('navigation', {
      event_category: 'navigation',
      event_label: destination,
      custom_parameter: source,
    });
  },

  // CTA interactions
  trackCTA: (ctaType: string, location: string) => {
    trackEvent('cta_click', {
      event_category: 'conversion',
      event_label: ctaType,
      custom_parameter: location,
    });
  },

  // Conversions
  trackQuoteRequest: () => {
    trackConversion('AW-17503206777/conversion_1');
    trackEvent('quote_request', {
      event_category: 'conversion',
      event_label: 'quote_form',
      value: 1,
    });
  },

  trackContactSubmit: () => {
    trackConversion('AW-17503206777/conversion_2');
    trackEvent('contact_submit', {
      event_category: 'conversion',
      event_label: 'contact_form',
      value: 1,
    });
  },

  trackCallScheduled: () => {
    trackConversion('AW-17503206777/conversion_3');
    trackEvent('call_scheduled', {
      event_category: 'conversion',
      event_label: 'schedule_call',
      value: 1,
    });
  },
};