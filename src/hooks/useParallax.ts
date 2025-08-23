import { useEffect, useRef } from 'react';

export interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  enableOnMobile?: boolean;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up', enableOnMobile = false } = options;
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if mobile and parallax is disabled on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile && !enableOnMobile) {
      return;
    }

    let animationFrameId: number;

    const updateParallax = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      let transform = '';
      switch (direction) {
        case 'up':
          transform = `translateY(${rate}px)`;
          break;
        case 'down':
          transform = `translateY(${-rate}px)`;
          break;
        case 'left':
          transform = `translateX(${rate}px)`;
          break;
        case 'right':
          transform = `translateX(${-rate}px)`;
          break;
      }

      element.style.transform = transform;
      element.style.willChange = 'transform';
    };

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed, direction, enableOnMobile]);

  return elementRef;
};