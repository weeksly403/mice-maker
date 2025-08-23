import { useEffect, useRef } from 'react';

export interface UseStaggerAnimationOptions {
  threshold?: number;
  staggerDelay?: number;
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'slide-up';
  duration?: number;
}

export const useStaggerAnimation = (options: UseStaggerAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    staggerDelay = 0.1,
    animationType = 'fade-up',
    duration = 0.6
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(entry.target.children) as HTMLElement[];
            
            children.forEach((child, index) => {
              // Add stagger animation class
              child.classList.add(`stagger-${animationType}`);
              child.style.setProperty('--stagger-delay', `${index * staggerDelay}s`);
              child.style.setProperty('--stagger-duration', `${duration}s`);
              
              // Trigger animation
              setTimeout(() => {
                child.classList.add('stagger-revealed');
              }, index * staggerDelay * 1000);
            });
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [threshold, staggerDelay, animationType, duration]);

  return containerRef;
};