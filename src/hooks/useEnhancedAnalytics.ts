import { useEffect } from 'react';
import { initScrollDepthTracking, initTimeOnPageTracking } from '@/utils/enhancedAnalytics';

export const useEnhancedAnalytics = () => {
  useEffect(() => {
    // Initialize scroll depth tracking
    const cleanupScroll = initScrollDepthTracking();

    // Initialize time on page tracking
    const cleanupTime = initTimeOnPageTracking();

    return () => {
      cleanupScroll();
      cleanupTime();
    };
  }, []);
};
