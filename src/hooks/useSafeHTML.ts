import { useMemo } from 'react';
import { createSafeHTML } from '@/lib/trustedTypes';

/**
 * Hook for safely rendering HTML content with Trusted Types protection
 * 
 * @param html - The HTML string to sanitize and render
 * @returns An object with __html property for use with dangerouslySetInnerHTML
 * 
 * @example
 * const safeHTML = useSafeHTML('<p>User content</p>');
 * return <div dangerouslySetInnerHTML={safeHTML} />;
 */
export const useSafeHTML = (html: string): { __html: TrustedHTML | string } => {
  const safeHTML = useMemo(() => {
    return createSafeHTML(html);
  }, [html]);

  return { __html: safeHTML };
};
