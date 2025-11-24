import { useEffect } from 'react';
import { initScrollDepthTracking, initTimeOnPageTracking } from '@/utils/enhancedAnalytics';

export const useEnhancedAnalytics = () => {
  useEffect(() => {
    // Defer analytics initialization to idle time to reduce FID
    const scheduleInit = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          const cleanupScroll = initScrollDepthTracking();
          const cleanupTime = initTimeOnPageTracking();
          
          return () => {
            cleanupScroll();
            cleanupTime();
          };
        }, { timeout: 3000 });
      } else {
        setTimeout(() => {
          const cleanupScroll = initScrollDepthTracking();
          const cleanupTime = initTimeOnPageTracking();
          
          return () => {
            cleanupScroll();
            cleanupTime();
          };
        }, 1000);
      }
    };

    scheduleInit();
  }, []);
};
