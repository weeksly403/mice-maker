interface ChatBotEvent {
  event: string;
  language: string;
  step?: string;
  timestamp: string;
  sessionId: string;
  pageUrl: string;
}

class ChatBotAnalytics {
  private sessionId: string;
  private events: ChatBotEvent[] = [];

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return `cb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  track(event: string, data: Partial<ChatBotEvent> = {}) {
    const eventData: ChatBotEvent = {
      event,
      language: data.language || 'en',
      step: data.step,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      pageUrl: window.location.href,
      ...data
    };

    this.events.push(eventData);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('ChatBot Analytics:', eventData);
    }

    // Send to analytics service (implement based on your analytics provider)
    this.sendToAnalytics(eventData);
  }

  private sendToAnalytics(eventData: ChatBotEvent) {
    // Example: Send to Google Analytics 4
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', eventData.event, {
        custom_parameter_1: eventData.language,
        custom_parameter_2: eventData.step,
        custom_parameter_3: eventData.sessionId
      });
    }

    // Example: Send to custom analytics endpoint
    if (process.env.REACT_APP_ANALYTICS_ENDPOINT) {
      fetch(process.env.REACT_APP_ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData)
      }).catch(error => {
        console.error('Analytics error:', error);
      });
    }
  }

  // Common tracking methods
  trackOpen(language: string) {
    this.track('chatbot_opened', { language });
  }

  trackLanguageChange(fromLanguage: string, toLanguage: string) {
    this.track('language_changed', { 
      language: toLanguage,
      step: `from_${fromLanguage}_to_${toLanguage}`
    });
  }

  trackStepStart(step: string, language: string) {
    this.track('step_started', { step, language });
  }

  trackStepComplete(step: string, language: string) {
    this.track('step_completed', { step, language });
  }

  trackDropOff(step: string, language: string) {
    this.track('user_dropped_off', { step, language });
  }

  trackLeadSubmitted(language: string, eventType: string[], cities: string[]) {
    this.track('lead_submitted', { 
      language,
      step: `events_${eventType.join('_')}_cities_${cities.join('_')}`
    });
  }

  trackFAQView(question: string, language: string) {
    this.track('faq_viewed', { 
      language,
      step: `question_${question.substring(0, 50)}`
    });
  }

  trackWhatsAppHandoff(language: string) {
    this.track('whatsapp_handoff', { language });
  }

  trackClose(currentStep: string, language: string) {
    this.track('chatbot_closed', { step: currentStep, language });
  }

  // Get session summary
  getSessionSummary() {
    return {
      sessionId: this.sessionId,
      totalEvents: this.events.length,
      duration: this.events.length > 0 
        ? new Date(this.events[this.events.length - 1].timestamp).getTime() - 
          new Date(this.events[0].timestamp).getTime()
        : 0,
      events: this.events
    };
  }
}

// Export singleton instance
export const chatbotAnalytics = new ChatBotAnalytics();

// Export types for TypeScript
export type { ChatBotEvent };