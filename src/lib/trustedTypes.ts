/**
 * Trusted Types Policy for DOM XSS Mitigation
 * Phase 5 Security Enhancement
 * 
 * This policy helps prevent DOM-based XSS attacks by enforcing
 * type checking on dangerous sinks like innerHTML, script.src, etc.
 */

// Check if browser supports Trusted Types
export const isTrustedTypesSupported = (): boolean => {
  return typeof window !== 'undefined' && 'trustedTypes' in window;
};

// Create the default policy for the application
let defaultPolicy: any = null;

export const initTrustedTypesPolicy = (): void => {
  if (!isTrustedTypesSupported()) {
    console.warn('Trusted Types not supported in this browser');
    return;
  }

  try {
    // Create a default policy that sanitizes HTML
    defaultPolicy = window.trustedTypes!.createPolicy('default', {
      createHTML: (input: string) => {
        // Basic sanitization - remove script tags and event handlers
        const sanitized = input
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
          .replace(/on\w+\s*=\s*[^\s>]*/gi, '');
        
        return sanitized;
      },
      createScript: (input: string) => {
        // Only allow empty scripts or throw error for safety
        if (input.trim() === '') {
          return input;
        }
        throw new Error('Inline scripts are not allowed');
      },
      createScriptURL: (input: string) => {
        // Only allow same-origin or trusted CDN URLs
        const url = new URL(input, window.location.href);
        const trustedOrigins = [
          window.location.origin,
          'https://cdn.jsdelivr.net',
          'https://unpkg.com',
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
        ];
        
        if (trustedOrigins.some(origin => url.href.startsWith(origin))) {
          return input;
        }
        
        throw new Error(`Script URL not allowed: ${input}`);
      },
    });

    console.info('✅ Trusted Types policy initialized');
  } catch (error) {
    console.error('Failed to initialize Trusted Types policy:', error);
  }
};

// Safe HTML creation helper
export const createSafeHTML = (html: string): any => {
  if (!isTrustedTypesSupported() || !defaultPolicy) {
    return html;
  }
  
  try {
    return defaultPolicy.createHTML(html);
  } catch (error) {
    console.error('Failed to create safe HTML:', error);
    return '';
  }
};

// Safe script URL creation helper
export const createSafeScriptURL = (url: string): any => {
  if (!isTrustedTypesSupported() || !defaultPolicy) {
    return url;
  }
  
  try {
    return defaultPolicy.createScriptURL(url);
  } catch (error) {
    console.error('Failed to create safe script URL:', error);
    throw error;
  }
};

// Safe script creation helper
export const createSafeScript = (script: string): any => {
  if (!isTrustedTypesSupported() || !defaultPolicy) {
    return script;
  }
  
  try {
    return defaultPolicy.createScript(script);
  } catch (error) {
    console.error('Failed to create safe script:', error);
    throw error;
  }
};
